import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CREATE_TODO } from "../../actions/actionTypes";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random().toString(),
      title: title,
      description: description,
      date: new Date(),
    };

    dispatch({ type: CREATE_TODO, payload: newTodo });

    setTitle();
    setDescription();

    navigate("/");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="8"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button className={classes.submit}>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
