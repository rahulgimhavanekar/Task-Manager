import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../../actions/todoActions";
import classes from "./TodoEdit.module.css";

const TodoEdit = () => {
  const currentTodo = useSelector((state) => state.todo);
  const [title, setTitle] = useState(currentTodo.title);
  const [description, setDescription] = useState(currentTodo.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCancelHandler = () => {
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateTodo(currentTodo._id, {
        title: title,
        description: description,
      })
    );

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
        <div className={classes.actions}>
          <button type="submit">Save</button>
          <button onClick={onCancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TodoEdit;
