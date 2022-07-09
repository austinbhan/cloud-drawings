import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



export default function Picture({ title, id, link }) {
  return (
    <div className="picture">
      <Link to={`/pictures/${id}`}>
        <img className="icon" src={link} />
      </Link>
      <h3>{title}</h3>
    </div>


  );
}

// How to Link Detail-Page with List-Item