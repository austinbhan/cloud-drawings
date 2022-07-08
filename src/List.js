import React from 'react';
import './App.css';
import Picture from './List-Item';

export default function List({ pictures }) {
  return (
    <div className="pictures">
      {
        pictures.map((picture, i) => {
          return <Picture 
            {...picture}
            key={picture.title + i} />;
        })
      }
    </div>
  );
}