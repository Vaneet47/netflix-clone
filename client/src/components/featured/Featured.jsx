import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './featured.scss';

const Featured = ({ type }) => {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='Adventure'>Adventure</option>
            <option value='Comedy'>Comedy</option>
            <option value='Crime'>Crime</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Horror'>Horror</option>
            <option value='Romance'>Romance</option>
            <option value='Thriller'>Thriller</option>
            <option value='Drama'>Drama</option>
            <option value='Animation'>Animation</option>
          </select>
        </div>
      )}
      <img
        width='100%'
        src='https://blenderartists.org/uploads/default/original/4X/8/6/f/86f979f45cc378a71c69061f770318b24782bc60.jpeg'
        alt='Profile picture'
      />
      <div className='info'>
        <img
          src='https://wallpapercave.com/wp/9i1vkNf.jpg'
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
