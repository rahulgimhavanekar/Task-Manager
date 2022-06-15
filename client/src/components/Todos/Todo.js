import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Todo.module.css";

const Todo = ({ id, title, date, description }) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.tile}
      onClick={() => {
        navigate(`/todos/${id}`);
      }}
    >
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <input type="checkbox" />
    </div>
  );
};

export default Todo;
