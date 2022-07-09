import React from 'react';
import './App.css';

export default function AboutMe() {
  function handleGoBack() {
    window.location.replace('/');
  }

  return (
    <div className="about-me">
      <div className="text">
        <p>I&apos;m a full stack software engineer based in Portland, OR. 
          I was previously a classical musician based in Kentucky, Indiana, Michigan, and California.
          I have no formal drawing experience.
          Drawings are inspired by personal experiences, 
          the interests and personalities of my colleagues,
          or nothing at all.
          I presently do not have plans to monetize my work, but will accept requests and ideas.
        </p>
        <p>
        All drawings are made with Procreate.
          Site hosting by Netlify, with database support from Supabase and Imgur.
        </p>
        <p>
          <a href="https://github.com/austinbhan" target="_blank" rel="noreferrer">My Github</a>
        </p>
      </div>
      <button onClick={handleGoBack}>Take me back</button>
    </div>
  );
}