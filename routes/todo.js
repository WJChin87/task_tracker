const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
} = require("../controllers/todo.controller");

router.get("/", getTodo);

router.get("/:id", getTodoById);

router.post("/", auth, createTodo);

router.post("/:id", auth, updateTodo);

module.exports = router;
