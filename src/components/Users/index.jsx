import React, { useState, useEffect } from "react";
import "./style.css";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h1>USERS</h1>
        <ul>
          {users.map((user) => (
            <li className="usercard" key={user.id}>
              <li> {user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Users;
