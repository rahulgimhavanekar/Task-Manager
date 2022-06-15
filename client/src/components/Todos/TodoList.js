import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={classes.todo_list}>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            date={todo.date}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
