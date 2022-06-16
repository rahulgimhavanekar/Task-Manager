import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../actions/todoActions";
import convertDate from "../../utils/convertDate";
import { PencilSimple, TrashSimple } from "phosphor-react";
import classes from "./HighlightedTodo.module.css";

const HighlightedTodo = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(props.id));
    navigate("/");
  };

  const editHandler = () => {
    navigate(`/todos/${props.id}/edit`);
  };

  const myDate = convertDate(props.date);

  return (
    <div className={classes.todo_detail}>
      <div className={classes.heading}>
        <div className={classes.text}>
          <h1>{props.title}</h1>
          <h3>{myDate}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={editHandler}>
            <PencilSimple size={24} />
          </button>
          <button onClick={deleteHandler}>
            <TrashSimple size={24} color="#d11a2a" />
          </button>
        </div>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default HighlightedTodo;
