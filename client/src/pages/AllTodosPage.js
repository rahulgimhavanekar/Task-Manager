import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions/todoActions";
import TodoList from "../components/Todos/TodoList";

const AllTodosPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const todosList = useSelector((state) => state.todos);

  return <TodoList todos={todosList} />;
};

export default AllTodosPage;
