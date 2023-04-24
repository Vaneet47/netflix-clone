import React, { useEffect, useState } from 'react';
import './listItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer =
  //   'https://vod-progressive.akamaized.net/exp=1680599571~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3391%2F16%2F416958499%2F1796861196.mp4~hmac=d6e5d461239d784eab44570cdd5eb16fbb5383c056bdab70d6bcf1f93cc0fa39/vimeo-prod-skyfire-std-us/01/3391/16/416958499/1796861196.mp4';

  const [listItem, setListItem] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`api/movies/find/${item}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I0MGQ4NTE1Yjg1MjMzNjk0ZmVmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjM0OTkwNywiZXhwIjoxNjgyNzgxOTA3fQ.6JMgM9JG05Smm9vk6S8jV5ngE3dfrk72u6HgT9Upzn4',
          },
        });
        setListItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [item]);

  return (
    <Link
      to={{
        pathname: '/watch',
        state: listItem,
      }}
    >
      <div
        className='listItem'
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={listItem.img} alt={listItem.title} />
        {isHovered && (
          <>
            <video src={listItem.trailer} autoPlay loop></video>

            <div className='itemInfo'>
              <div className='icons'>
                <PlayArrowIcon className='icon' />
                <AddIcon className='icon' />
                <ThumbUpOutlinedIcon className='icon' />
                <ThumbDownOutlinedIcon className='icon' />
              </div>
              <div className='itemInfoTop'>
                <span>1 hour 40 minutes</span>
                <span className='limit'> +{listItem.limit}</span>
                <span>{listItem.year}</span>
              </div>
              <div className='desc'>{listItem.desc}</div>
              <div className='genre'>{listItem.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
