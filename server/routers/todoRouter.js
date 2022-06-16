const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/new-todo", createTodo);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.patch("/todos/:id/edit", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
