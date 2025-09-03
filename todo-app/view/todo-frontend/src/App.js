import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos")
      .then(res => setTodos(res.data));
  }, []);

  const addTodo = async () => {
    const res = await axios.post("http://localhost:5000/api/todos", { task });
    setTodos([...todos, res.data]);
    setTask("");
  };

  const toggleTodo = async (id, completed) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
    setTodos(todos.map(t => t._id === id ? res.data : t));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>To-Do List</h1>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="New task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t._id}>
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}
                  onClick={() => toggleTodo(t._id, t.completed)}>
              {t.task}
            </span>
            <button onClick={() => deleteTodo(t._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
