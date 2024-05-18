import React, { useState, useEffect } from "react";
import "./index.css";
function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h1>PHOTOS</h1>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.url} alt={photo.title} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Photos;
