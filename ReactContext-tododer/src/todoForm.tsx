import { FormEvent, useRef } from "react";
import { Todo } from "./Reducers/TodoReducer";

interface Props {
  OnSubmitData: (todo: Todo) => void;
}

const TodoForm = ({ OnSubmitData }: Props) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (todoRef.current !== null) {
      let savedTodo = {
        title: todoRef.current.value,
        id: Date.now(),
      };
      OnSubmitData(savedTodo);

      todoRef.current.value = "";
    }
    console.log(todoRef.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={todoRef} type="text" placeholder="Enter a new todo.." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
