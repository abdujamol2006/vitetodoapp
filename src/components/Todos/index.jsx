import React, { useState, useEffect } from "react";
import "./style.css";
function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h1>TODOS</h1>
        <ul>
          {todos.map((todo) => (
            <li className="card" key={todo.id}>
              <li>{todo.id}</li> <li>{todo.title}</li>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Todos;
