import React, { useState, useEffect } from "react";
import "./style.css";
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h1>POSTS</h1>
        <ul>
          {posts.map((post) => (
            <li className="card" key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Posts;
