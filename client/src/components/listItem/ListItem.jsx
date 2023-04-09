import React, { useState } from 'react';
import './listItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://vod-progressive.akamaized.net/exp=1680599571~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3391%2F16%2F416958499%2F1796861196.mp4~hmac=d6e5d461239d784eab44570cdd5eb16fbb5383c056bdab70d6bcf1f93cc0fa39/vimeo-prod-skyfire-std-us/01/3391/16/416958499/1796861196.mp4';
  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='https://i.redd.it/j7o826q9j5x81.jpg' alt='Akira (1988)' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop></video>

          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrowIcon className='icon' />
              <AddIcon className='icon' />
              <ThumbUpOutlinedIcon className='icon' />
              <ThumbDownOutlinedIcon className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 40 minutes</span>
              <span className='limit'> +16</span>
              <span>1989</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              esse eaque magni
            </div>
            <div className='genre'>Dystopia</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
