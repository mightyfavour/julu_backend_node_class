const Todo = require("../model/todoModel.js");

// @desc Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// @desc Create new todo
exports.createTodo = async (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ message: "Task is required" });

  const newTodo = new Todo({ task });
  await newTodo.save();
  res.json(newTodo);
};

// @desc Update todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// @desc Delete todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted" });
};
