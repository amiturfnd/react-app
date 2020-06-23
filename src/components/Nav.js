import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/liked-photos">LikedPhotos</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default App;
