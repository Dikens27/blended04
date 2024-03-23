import { createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodos: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addTodos } = todoSlise.actions;
export default todoSlise.reducer;
export const selectTodos = state => state.todos.items;
