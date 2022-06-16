import React, { useState } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);

  const titleInputHandler = (e) => {
    if (e.target.value.length > 51) {
      setTitleError(true);
    } else {
      setTitleError(false);
      setTitle(e.target.value);
    }
  };

  const descriptionInputHandler = (e) => {
    if (e.target.value.length > 251) {
      setDescError(true);
    } else {
      setDescError(false);
      setDescription(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAddTodo({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
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
            onChange={titleInputHandler}
            required
          />
          {titleError && (
            <p className={classes.error_text}>
              Title should not exceed more than 50 characters
            </p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="8"
            value={description}
            onChange={descriptionInputHandler}
            required
          ></textarea>
          {descError && (
            <p className={classes.error_text}>
              Description should not exceed more than 250 characters
            </p>
          )}
        </div>
        <button className={classes.submit}>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
