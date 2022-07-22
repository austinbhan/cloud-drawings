import React from 'react';
import './App.css';

export default function AboutMe() {
  function handleGoBack() {
    window.location.replace('/');
  }

  return (
    <div className="about-me">
      <img className="profile-pic" src="/images/profile-pic.jpeg"/>
      <p className="text">I&apos;m a full stack software engineer based in Portland, OR. 
          I was previously a classical musician based in Kentucky, Indiana, Michigan, and California.
          I have no formal drawing experience.
          Drawings are inspired by personal experiences, 
          the interests and personalities of my colleagues,
          or nothing at all. My style is mostly inspired by Sanrio.
      </p>
      <p className="text">
        All drawings are made with Procreate.
        Site hosting by Netlify, with database support from Supabase and Imgur.
        More site features will be added as I continue to learn.  
      </p>
      <div>
        <a href="https://github.com/austinbhan" target="_blank" rel="noreferrer"><img className="logos" src="/images/github.png" /></a>
        <a href="https://www.linkedin.com/in/austin-han-740a69157/" target="_blank" rel="noreferrer"><img className="logos" src="/images/linkedin.png"/></a>
      </div>
      <button className="button" onClick={handleGoBack}>Take me back</button>
    </div>
  );
}