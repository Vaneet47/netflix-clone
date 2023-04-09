import React from 'react';
import Featured from '../../components/featured/featured.jsx';
import List from '../../components/list/List.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      {/* <List />
      <List />
      <List />
      <List /> */}
    </div>
  );
};

export default Home;
