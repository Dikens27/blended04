import { FiSearch } from 'react-icons/fi';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import style from './Form.module.css';
import { addTodos } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.search.value;

    const newTodos = {
      id: nanoid(),
      text: value,
    };

    dispatch(addTodos(newTodos));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
