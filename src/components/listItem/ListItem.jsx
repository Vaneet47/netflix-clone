import React, { useState } from 'react';
import './listItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://www.youtube.com/watch?v=nA8KmHC2Z-g&ab_channel=RetroBiografen';
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
          <iframe
            src='https://www.youtube.com/embed/nA8KmHC2Z-g'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
          {/* <iframe src={trailer} autoPlay={true} loop></iframe> */}
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
