import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../actions/todoActions";
import TodoForm from "../components/Todos/TodoForm";

const AddTodoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addTodoHandler = (newTodo) => {
    dispatch(createTodo(newTodo));

    navigate("/");
  };

  return <TodoForm onAddTodo={addTodoHandler} />;
};

export default AddTodoPage;
