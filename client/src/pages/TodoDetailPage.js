import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HighlightedTodo from "../components/Todos/HighlightedTodo";

const TodoDetailPage = () => {
  const params = useParams();
  const todos = useSelector((state) => state.todos);

  const todo = todos.find((item) => {
    return item.id === params.id;
  });

  return (
    <HighlightedTodo
      id={todo.id}
      title={todo.title}
      date={todo.date}
      description={todo.description}
    />
  );
};

export default TodoDetailPage;
