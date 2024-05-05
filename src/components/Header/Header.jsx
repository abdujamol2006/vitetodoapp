import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container  header-container">
        <a className="logo" href="#">
          LOGO
        </a>
        <nav>
          <ul className="list">
            <li>
              <a value="todos" href="#">
                Todos
              </a>
            </li>
            <li>
              <a value="posts" href="#">
                Posts
              </a>
            </li>
            <li>
              <a value="comments" href="#">
                Comments
              </a>
            </li>
          </ul>
        </nav>
        <button className="headerbtn">Log in</button>
      </div>
    </header>
  );
}
export default Header;
