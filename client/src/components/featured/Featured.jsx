import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './featured.scss';
import axios from 'axios';

const Featured = ({ type }) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const response = await axios.get(`api/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I0MGQ4NTE1Yjg1MjMzNjk0ZmVmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjM0OTkwNywiZXhwIjoxNjgyNzgxOTA3fQ.6JMgM9JG05Smm9vk6S8jV5ngE3dfrk72u6HgT9Upzn4',
          },
        });
        setContent(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomContent();
  }, [type]);
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
      <img width='100%' src={content.img} alt='Profile picture' />
      <div className='info'>
        <img src={content.imgTitle} alt='Matrix Poster' />
        <span className='desc'>{content.desc}</span>

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
