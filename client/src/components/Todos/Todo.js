import React from "react";
import classes from "./Todo.module.css";

const Todo = ({ title, date, description }) => {
  return (
    <div className={classes.tile}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <input type="checkbox" />
    </div>
  );
};

export default Todo;
