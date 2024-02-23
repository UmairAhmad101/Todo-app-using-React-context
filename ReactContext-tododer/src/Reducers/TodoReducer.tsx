import { useDeferredValue } from "react";

export interface Todo {
  id: number;
  title: string;
}

export interface AddTodoAction {
  type: "ADD_TODO";
  todo: Todo;
}

const useTodosReducer = (todos: Todo[], action: AddTodoAction): Todo[] => {
  if (action.type === "ADD_TODO") return [action.todo, ...todos];

  return [];
};

export default useTodosReducer;
