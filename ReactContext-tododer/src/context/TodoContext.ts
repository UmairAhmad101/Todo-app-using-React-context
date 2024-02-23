import { Dispatch, createContext } from "react";
import { AddTodoAction, Todo } from "../Reducers/TodoReducer";

interface TodosContextType {
  todos: Todo[];
  dispatch: Dispatch<AddTodoAction>;
}

const TodoContext = createContext<TodosContextType>({} as TodosContextType);
export default TodoContext;
