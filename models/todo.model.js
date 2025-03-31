const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    default: [true, "Description is required"],
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
