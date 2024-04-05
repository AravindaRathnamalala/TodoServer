const Todo = require("../models/todo.model");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findById(id);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  getTodos,
  getTodo
};
