import { ADD_TODO, TOGGLE_TODO, CLEAR_ALL_TODO } from "./actions";

const initialState = {
  todoList: [
    { text: "Погодувати кота", completed: false },
    { text: "Зробити домашку", completed: true },
    { text: "Приготувати обід", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case CLEAR_ALL_TODO:
      return {
        ...state,
        todoList: [],
      };
    default:
      return state;
  }
};

export { todoReducer };