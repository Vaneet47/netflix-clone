import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img
        width='100%'
        src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
        alt='Profile picture'
      />
    </div>
  );
};

export default Home;
