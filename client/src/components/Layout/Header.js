import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Task Manager</h1>
      <nav className={classes.nav}>
        <ul>
          <li>All Tasks</li>
          <li>Add Task</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
