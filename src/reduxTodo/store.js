import { configureStore } from '@reduxjs/toolkit';
import todoReduser from './todoSlice';

const store = configureStore({
  reducer: { todos: todoReduser },
});

export default store;
