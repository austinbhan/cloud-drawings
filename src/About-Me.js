import React from 'react';
import './App.css';

export default function AboutMe() {
  function handleGoBack() {
    window.location.replace('/');
  }

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>About Me Text Goes Here</p>
      <button onClick={handleGoBack}>Take me back</button>
    </div>
  );
}