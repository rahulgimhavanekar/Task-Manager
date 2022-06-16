import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTodo } from "../actions/todoActions";
import { useParams } from "react-router-dom";
import HighlightedTodo from "../components/Todos/HighlightedTodo";

const TodoDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getSingleTodo(params.id));
  }, [dispatch, params]);

  return (
    <HighlightedTodo
      id={todo.id}
      title={todo.title}
      date={todo.createdAt}
      description={todo.description}
    />
  );
};

export default TodoDetailPage;
