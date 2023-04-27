import React from 'react';
import './widgetSmall.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSmall() {
  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>New Join Members</span>
      <ul className='widgetSmallList'>
        <li className='widgetSmallListItem'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmallIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
