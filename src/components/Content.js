import React, { useState, useEffect } from 'react';
import { NASA_HEADER, NASA_TOKEN } from '../secrets';

import LikeButton from './LikeButton';

const Content = () => {
  const [astronomiesState, setAstronomiesState] = useState([]);
  // const [like, setLike] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(NASA_HEADER + NASA_TOKEN + '&count=50')
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
    return (
      <body>
        Rendering Spaces, Planets, and other out-of-worldly resources...
      </body>
    );
  }

  return (
    <div class="astronomies">
      {console.log(astronomiesState)}

      {astronomiesState.map((astronomy, idx) => (
        <body id="singleAstronomy" key={idx}>
          <h3 id="image title">{astronomy.title}</h3>
          <img id="image" src={astronomy.url} alt={astronomy.title} />
          <p id="date"> Image captured on {astronomy.date} </p>
          <p id="description">{astronomy.explanation}</p>
          <LikeButton />
        </body>
      ))}
    </div>
  );
};

export default Content;
