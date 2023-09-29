import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
        <h1>Список завдань</h1>
        <TodoList />
    </div>
  );
}

export default App;