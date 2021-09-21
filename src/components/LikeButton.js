import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@material-ui/core/Button';

const LikeButton = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      {/* <button id="likeButton" onClick={() => setLike(!like)}>
        {like ? '♥ unlike' : '♡ like'}
      </button> */}

      {like ? (
        <Button
          id="likeButton"
          startIcon={<FavoriteIcon />}
          onClick={() => setLike(!like)}
        >
          Unlike
        </Button>
      ) : (
        <Button
          id="likeButton"
          startIcon={<FavoriteBorderIcon />}
          variant="contained"
          onClick={() => setLike(!like)}
        >
          Like
        </Button>
      )}
    </>
  );
};

export default LikeButton;
