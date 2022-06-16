import {
  FETCH_ALL,
  FETCH_TODO,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  todo: {},
  totalTodos: 0,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        todos: action.payload,
        totalTodos: action.payload.length,
      };
    case FETCH_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        totalTodos: state.totalTodos + 1,
      };
    case DELETE_TODO:
      const newTodoList = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todos: newTodoList,
        totalTodos: state.totalTodos - 1,
      };
    case UPDATE_TODO:
      const udpatedTodoList = state.todos.map((todo) => {
        return todo.id !== action.payload.id ? todo : action.payload;
      });
      return {
        ...state,
        todos: udpatedTodoList,
      };
    default:
      return state;
  }
};

export default todoReducer;
