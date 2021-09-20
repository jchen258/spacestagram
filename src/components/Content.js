import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAstronomies } from '../store/astronomies';

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAstronomies);
  });
  return (
    <div class="astronomies">
      <body> hello world </body>
    </div>
  );
};

export default Content;
