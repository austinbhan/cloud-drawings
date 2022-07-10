import React from 'react';
import './App.css';

export default function Suggestions() {

  function handleGoBack() {
    window.location.replace('/');
  }
    
  return (
    <div className="suggestions">
      <h3>Form coming soon! Meanwhile, <a href="mailto:austinbhan@outlook.com?subject=Doodles%20Request">email me</a> your suggestions.</h3>
      <button className="button" onClick={handleGoBack}>Take me back</button>
    </div>
  );
}