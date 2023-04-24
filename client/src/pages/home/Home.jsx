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
          `api/lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I0MGQ4NTE1Yjg1MjMzNjk0ZmVmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjM0OTkwNywiZXhwIjoxNjgyNzgxOTA3fQ.6JMgM9JG05Smm9vk6S8jV5ngE3dfrk72u6HgT9Upzn4',
            },
          }
        );
        console.log(response);
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
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
    </div>
  );
};

export default Home;
