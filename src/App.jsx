import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import TodoList from "./components/TodoList";
import { set } from "mongoose";

function App() {
  const [todos, setTodo] = useState([
    "Go to the gym",
    "Eat more protein",
    "earn million dollars",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleEditTodo(index) {
    const editTodo = todos[index];
    setTodoValue(editTodo);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodo(localTodos);
  }, []);

  return (
    <>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />

      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
