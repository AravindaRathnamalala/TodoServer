const express = require("express");
const Todo = require("../models/todo.model");
const { getTodos, getTodo } = require("../controller/todo.controller");
const router = express.Router();

router.get("/", getTodos);

router.get("/:id", getTodo);

module.exports = router
