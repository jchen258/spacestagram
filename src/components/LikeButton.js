import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LikeButton = () => {
  const [like, setLike] = useState(false);

  return (
    <button onClick={() => setLike(!like)}>{like ? 'unlike' : 'like'}</button>
  );
};

export default LikeButton;
