import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Second() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">POSTS</Link>
            </li>
          </ul>
        </nav>

        <Route path="/posts">
          <h1>POSTS</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </Route>
      </div>
    </Router>
  );
}
export default Second;
