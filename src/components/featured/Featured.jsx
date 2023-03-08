import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <img
        width='100%'
        src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
        alt='Profile picture'
      />
      <div className='info'>
        <img
          src='https://cdn.shopify.com/s/files/1/0969/9128/products/Cult_Movie_Poster_Fan_Art_-_The_Matrix_-_Tallenge_Hollywood_Poster_Collection_18fafbe4-90d1-4bd1-958f-684e4b26a795.jpg?v=1569314562'
          alt='Matrix Poster'
        />
        <span className='desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          sint. Ipsa mollitia nesciunt, qui placeat voluptates fugit ratione
          autem ex earum unde, ut esse voluptatem pariatur porro blanditiis
          laborum veritatis.
        </span>

        <div className='buttons'>
          <button className='play'>
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
