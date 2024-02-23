import { useContext } from "react";
import TodoContext from "./context/TodoContext";

export const NavBar = () => {
  const { todos } = useContext(TodoContext);
  const totalTodos = todos.length;
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "80px",
      }}
    >
      {totalTodos}
    </div>
  );
};
