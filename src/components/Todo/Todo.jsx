import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todo: { id, text }, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {count}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
