import { useReducer } from "react";
import TodoList from "./TodoList";
import TodoForm from "./todoForm";
import useTodosReducer, { Todo } from "./Reducers/TodoReducer";
import TodoContext from "./context/TodoContext";
import { NavBar } from "./NavBar";

function App() {
  const [todos, dispatch] = useReducer(useTodosReducer, []);
  // const [todos, setTodos] = useState([
  //   { title: "Walkthrough a Collection", id: 1 },
  //   { title: "Vote for IK", id: 2 },
  //   { title: "Order some clothes", id: 3 },
  //   { title: "walk a dog", id: 4 },
  // ]);

  const handleAddTodo = (todo: Todo) => {
    dispatch({
      type: "ADD_TODO",
      todo: todo,
    });
    // setTodos([todo, ...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <NavBar />
      <TodoForm OnSubmitData={handleAddTodo} />
      <TodoList todos={todos} />
    </TodoContext.Provider>
  );
}

export default App;
