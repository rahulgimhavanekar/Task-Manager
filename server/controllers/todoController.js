const Todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    if (!todos.length) {
      return res.status(404).json({
        message: "No Todos found!",
      });
    }

    res.status(200).json({
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong please try again later!",
    });
  }
};

const createTodo = async (req, res) => {
  const todo = new Todo(req.body);

  try {
    await todo.save();
    res.status(201).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong please try again later!",
    });
    console.log(error);
  }
};

const getTodoById = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo doesn't exist",
      });
    }

    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong please try again later!",
    });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo doesn't exist",
      });
    }

    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong please try again later!",
    });
  }
};

const updateTodo = async (req, res) => {
  const updates = Object.keys(req.body);
  const id = req.params.id;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo doesn't exist",
      });
    }
    updates.forEach((update) => (todo[update] = req.body[update]));
    await todo.save();
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
