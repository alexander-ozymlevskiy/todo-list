import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, clearAllTodo, selectTodoList } from '../store/TodoList';
import "./TodoList.css";

function TodoList() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  const clearAllTodoHandler = () => {
    dispatch(clearAllTodo());
  };

  const todoStatusHandler = (index) => {
    dispatch(toggleTodo(index));
  }

  return (
    <div className="todo-container">
      <button className="delete-todo-list" onClick={clearAllTodoHandler}>
        Очистити список завдань
      </button>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            key={index}
            onClick={() => todoStatusHandler(index)}
            className={`todo-item ${
              todo.completed ? "completed" : "incomplete"
            }`}
          >
            <div
              className={`custom-toggle ${todo.completed ? "completed" : ""}`}
            >
              {todo.text}
            </div>
          </li>
        ))}
      </ul>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Додати нове завдання"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodoHandler();
            }
          }}
        />
        <button onClick={addTodoHandler}>Додати</button>
      </div>
    </div>
  );
}

export default TodoList;
