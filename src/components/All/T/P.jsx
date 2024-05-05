import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function First() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todos">TODOS</Link>
            </li>
          </ul>
        </nav>

        <Route path="/todos">
          <h1>TODOS</h1>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </Route>
      </div>
    </Router>
  );
}
export default First;
