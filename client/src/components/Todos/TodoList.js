import React from "react";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div className={classes.todo_list}>
      {props.todos.map((todo) => {
        return (
          <Todo
            key={todo._id}
            id={todo._id}
            title={todo.title}
            date={todo.createdAt}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
