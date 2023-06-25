import React, { useContext, useState } from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logoutStart } from '../../authContext/AuthActions';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix logo'
          />
          <Link to='/' className='link'>
            <span>Homepage</span>
          </Link>
          <Link to='/series' className='link'>
            <span className='navbarmainLinks'>Series</span>
          </Link>
          <Link to='/movies' className='link'>
            <span className='navbarmainLinks'>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className='right'>
          <SearchIcon className='icon' />
          <span>KID</span>
          <NotificationsIcon className='icon' />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
            alt='Profile picture'
          />
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span onClick={() => dispatch(logoutStart())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
