import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>netflix admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
