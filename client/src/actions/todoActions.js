import axios from "axios";
import {
  FETCH_ALL,
  FETCH_TODO,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./actionTypes";

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      const data = response.data.data;
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/todos/${id}`);
      const todo = response.data.data;
      dispatch({ type: FETCH_TODO, payload: todo });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTodo = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/api/new-todo");
      const todo = response.data.data;
      dispatch({ type: CREATE_TODO, payload: todo });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/todos/${id}`
      );
      const todo = response.data.data;
      dispatch({ type: DELETE_TODO, payload: todo });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodo = (id, newTodo) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/todos/${id}/edit`,
        newTodo
      );
      const todo = response.data.data;
      dispatch({ type: UPDATE_TODO, payload: todo });
    } catch (error) {
      console.log(error);
    }
  };
};
