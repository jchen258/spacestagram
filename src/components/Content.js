import React, { useState, useEffect } from 'react';
// import { NASA_HEADER, NASA_TOKEN } from '../secrets';
import LoadingPage from './LoadingPage';

import LikeButton from './LikeButton';

const Content = () => {
  const [astronomiesState, setAstronomiesState] = useState([]);
  // const [like, setLike] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.NASA_HEADER + process.env.NASA_TOKEN + '&count=50')
      .then((res) => res.json())
      .then((data) => {
        setAstronomiesState(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div class="astronomies">
      {console.log(astronomiesState)}

      {astronomiesState.map((astronomy, idx) => (
        <body class="singleAstronomy" key={idx}>
          <h3 id="imageTitle">{astronomy.title}</h3>
          <img id="image" src={astronomy.url} alt={astronomy.title} />
          <p>
            <LikeButton id="likeButton" />
            <span id="date"> Image captured on {astronomy.date} </span>
          </p>
          <p id="description">{astronomy.explanation}</p>
        </body>
      ))}
    </div>
  );
};

export default Content;
