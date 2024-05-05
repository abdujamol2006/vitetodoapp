import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Third() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">USERS</Link>
            </li>
          </ul>
        </nav>

        <Route path="/users">
          <h1>USERS</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.title}</li>
            ))}
          </ul>
        </Route>
      </div>
    </Router>
  );
}
export default Third;
