import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log(filteredTodos);
  return (
    <>
      {!filteredTodos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {filteredTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo todo={todo} count={index + 1} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
