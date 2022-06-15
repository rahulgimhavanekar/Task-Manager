import React from "react";
import { PencilSimple, TrashSimple } from "phosphor-react";
import classes from "./HighlightedTodo.module.css";

const HighlightedTodo = (props) => {
  return (
    <div className={classes.todo_detail}>
      <div className={classes.heading}>
        <div className={classes.text}>
          <h1>{props.title}</h1>
          <h3>{props.date}</h3>
        </div>
        <div className={classes.actions}>
          <button>
            <PencilSimple size={24} />
          </button>
          <button>
            <TrashSimple size={24} color="#d11a2a" />
          </button>
        </div>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default HighlightedTodo;
