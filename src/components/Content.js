import React, { useState, useEffect } from 'react';
import { NASA_HEADER, NASA_TOKEN } from '../secrets';

const Content = () => {
  const [astronomiesState, setAstronomiesState] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    fetch(NASA_HEADER + NASA_TOKEN + '&count=5')
      .then((res) => res.json())
      .then((data) => {
        setAstronomiesState(data);
      });
  }, []);

  return (
    <div class="astronomies">
      {console.log(astronomiesState)}

      <ul>
        {astronomiesState.map((astronomy, idx) => (
          <li key={idx}>
            <h3>{astronomy.title}</h3>
            <img src={astronomy.url} alt={astronomy.title} />
            <div>{astronomy.explanation}</div>
            <button onClick={() => setLike(!like)}>
              {like ? 'Unlike' : 'Like'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
