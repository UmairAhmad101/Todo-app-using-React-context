import { Todo } from "./todoForm";

interface Props {
  todos: Todo[];
}
const TodoList = ({ todos }: Props) => {
  return todos.map((todo: Todo) => <div key={todo.id}>{todo.title}</div>);
};

export default TodoList;
