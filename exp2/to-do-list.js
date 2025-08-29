const express = require("express");
const http = require("http");

const app = express();


app.use(express.json());


let todos = [];


function printTodos() {
  console.log("\n📋 Current To-Do List:");
  if (todos.length === 0) {
    console.log("   (empty)");
  } else {
    todos.forEach(todo => {
      console.log(`   [${todo.id}] ${todo.task} - ${todo.completed ? "✅ Done" : "❌ Not Done"}`);
    });
  }
  console.log("---------------------------------------------------");
}

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Item not found" });
  res.json(todo);
});


app.post("/todos", (req, res) => {
  if (!req.body.task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  printTodos(); 
  res.status(201).json(newTodo);
});


app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Item not found" });

  todo.task = req.body.task !== undefined ? req.body.task : todo.task;
  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;

  printTodos(); 
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  const deleted = todos.splice(index, 1);
  printTodos(); 
  res.json(deleted[0]);
});

const server = http.createServer(app);


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});