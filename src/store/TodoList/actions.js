export const ADD_TODO = "add-todo";
export const TOGGLE_TODO = "toggle-todo";
export const CLEAR_ALL_TODO = "clear-all-todo";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: index,
});

export const clearAllTodo = () => ({
  type: CLEAR_ALL_TODO,
});