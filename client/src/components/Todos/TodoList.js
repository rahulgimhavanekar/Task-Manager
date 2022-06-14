import React from "react";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Get Eggs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, mollitia!",
    date: "June 10, 2022",
  },
  {
    id: 2,
    title: "Take out Trash",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio itaque inventore debitis dolor quod?",
    date: "June 12, 2022",
  },
  {
    id: 3,
    title: "Do Homework",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio itaque inventore",
    date: "May 6, 2022",
  },
];

const TodoList = () => {
  return (
    <div className={classes.todo_list}>
      {DUMMY_DATA.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            date={todo.date}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
