import React from 'react';
import './App.css';
import List from './List';
import { useState, useEffect } from 'react';
import { getPictures } from './services/fetch-utils';

export default function ListPage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function fetch() {
      const picturesList = await getPictures();
      setPictures(picturesList);
    }
    fetch();
  }, []);


  return (
    <div className="list-container">
      <List pictures={pictures}/>
    </div>
      
  );
}