import React, { useEffect, useState } from 'react';
import Featured from '../../components/featured/featured.jsx';
import List from '../../components/list/List.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import './home.scss';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `api/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`
        );
        setLists(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [genre, type]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map((item) => (
        <item />
      ))}
    </div>
  );
};

export default Home;
