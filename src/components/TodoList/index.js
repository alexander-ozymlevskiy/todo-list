import React, { useState, useEffect } from "react";
import "./styles.css";

function TodoList() {
  // Початковий список завдань
  const todoList = [
    { text: "Погодувати кота", completed: false },
    { text: "Зробити домашку", completed: true },
    { text: "Приготувати обід", completed: false },
  ];

  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo ? JSON.parse(savedTodo) : todoList; // Якщо є збережені дані в localStorage
  });

  const [newTodo, setNewTodo] = useState("");

  // Збереження todo в локальному сховищі при його зміні
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // Функція для додавання нового завдання
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Функція для очищення всіх завдань
  const clearAllTodo = () => {
    setTodo([]);
    localStorage.removeItem("todo");
  };

  // Функція для перемикання стану завдання
  const todoStatus = (index) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo, x) =>
        x === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <button className="delete-todo-list" onClick={clearAllTodo}>
        Очистити список завдань
      </button>
      <ul className="todo-list">
        {todo.map((todo, index) => (
          <li
            key={index}
            onClick={() => todoStatus(index)}
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
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>Додати</button>
      </div>
    </div>
  );
}

export default TodoList;
