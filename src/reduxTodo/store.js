import { configureStore } from '@reduxjs/toolkit';
import todoReduser from './todoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filterSlice';

const persistConfig = { key: 'todos', storage };

const persistTodoReducer = persistReducer(persistConfig, todoReduser);

const store = configureStore({
  reducer: {
    todos: persistTodoReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
