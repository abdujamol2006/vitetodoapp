import React from "react";
import { Link } from "react-router-dom";

function Todos() {
  return (
    <>
      <main>
        <div className="container section-container">
          <Link to="/about">About</Link>
        </div>
      </main>
    </>
  );
}
export default Todos;
