import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPicture, addLike } from './services/fetch-utils';

export default function DetailPage() {
  const [picture, setPicture] = useState({});
  const params = useParams();

  function handleGoBack() {
    window.location.replace('/');
  }
  
  useEffect(() => {

    async function doFetch() {
      const data = await getPicture(params.id);
      setPicture(data);
    }
    doFetch();
  }, [params.id]);

  async function handleAddLike() {
    const newPicture = await addLike(picture.id);
    console.log(newPicture);
    setPicture(newPicture);
  }

  return (
    <div className="detail-page">
      <img src={picture.link} className="image-size"/>
      <h3>{picture.title}</h3>
      <p>{picture.liked}</p>
      <button onClick={handleAddLike}>Like!</button>
      <button className="button" onClick={handleGoBack}>Take me Back</button>
    </div>
  );
}
