import React, { useState } from "react";

function ToDoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo ........"
      />
      <button
        onClick={(e) => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default ToDoInput;
