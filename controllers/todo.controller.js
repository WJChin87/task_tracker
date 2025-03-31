const Todo = require("../models/todo.model");

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "ID not found." });
  }
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = new Todo({
      title,
      description,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, {
      title,
      description,
      user: req.user._id,
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
};
