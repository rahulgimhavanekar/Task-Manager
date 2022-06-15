import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Task Manager</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/"
            >
              All Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/new-todo"
            >
              Add Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
