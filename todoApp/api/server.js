const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    label: "todo 1",
    completed: true,
  },
  {
    id: nanoid(),
    label: "todo 2",
    completed: false,
  },
  {
    id: nanoid(),
    label: "todo 3",
    completed: false,
  },
  {
    id: nanoid(),
    label: "todo 4",
    completed: false,
  },
  {
    id: nanoid(),
    label: "todo 5",
    completed: false,
  },
];

app.get("/todos", (req, res) => res.send(todos));

app.post("/todos", (req, res) => {
  const todo = { label: req.body.label, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send(todo);
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos[index].completed = !todos[index].completed;
  }
  return res.send(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (id == "completed") res.send(deleteCompletedTodos());
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

function deleteCompletedTodos() {
  const filtered = todos.filter((todo) => !todo.completed);
  todos = filtered;
  return filtered;
}

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
