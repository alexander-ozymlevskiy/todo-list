import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="container">
      <h1>Список завдань</h1>
      <TodoList />
      <h2>Список користувачів</h2>
      <UserList />
    </div>
  );
}

export default App;
