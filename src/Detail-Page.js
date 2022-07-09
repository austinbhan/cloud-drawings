import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPicture } from './services/fetch-utils';





export default function DetailPage() {
  const [picture, setPicture] = useState();
  const params = useParams();

  useEffect(() => {
    async function doFetch() {
      const data = await getPicture(params.id);
      setPicture(data);
    }
    doFetch();
  }, [params.id]);

  return (
    <div className="detail-page">
      <h3>Text</h3> 
      <Link to="/">Take me Back</Link>
    </div>
  );
}

// HOw do I get dynamic text per image? 