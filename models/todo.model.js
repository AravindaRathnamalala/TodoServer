const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please enter the title"],
    },
    description: {
      type: String,
      require: [true, "Please enter the description"],
    },
    date: {
      type: Date,
      require: false,
    },
  },
  {
    timeStamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
