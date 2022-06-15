import React from "react";
import { useNavigate } from "react-router-dom";
import convertDate from "../../utils/convertDate";
import classes from "./Todo.module.css";

const Todo = ({ id, title, date }) => {
  const navigate = useNavigate();

  const myDate = convertDate(date);

  return (
    <div
      className={classes.tile}
      onClick={() => {
        navigate(`/todos/${id}`);
      }}
    >
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{myDate}</p>
      </div>
      <input type="checkbox" />
    </div>
  );
};

export default Todo;
