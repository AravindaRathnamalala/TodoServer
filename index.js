const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo.model");

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World gyth");
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    if (!todo) {
      res.status(404).json({ message: "not found" });
    }
    res.status(201).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      res.status(404).json({ message: "not found" });
    }
    res.status(200).json({message: "Todo deleted"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:opG7k3XK3tLuw4zc@tododb.qkk3eb6.mongodb.net/TodoApi?retryWrites=true&w=majority&appName=todoDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is running on port : 3000");
    });
  })
  .catch(() => console.log("DB not conncted"));
