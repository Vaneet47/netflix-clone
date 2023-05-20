import React, { useEffect, useState } from 'react';
import './widgetSmall.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`api/users?new=true`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I0MGQ4NTE1Yjg1MjMzNjk0ZmVmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMwMzU1NiwiZXhwIjoxNjg0NzM1NTU2fQ._K-s2JPIvnamQAUPfytdBMFYU1j6ylm441Gj7QjhfKU',
          },
        });
        setNewUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewUsers();
  }, []);

  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>New Join Members</span>
      <ul className='widgetSmallList'>
        {newUsers.map((user) => (
          <li className='widgetSmallListItem'>
            <img
              src={
                user.profilePic ||
                'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
              }
              alt=''
              className='widgetSmallImg'
            />
            <div className='widgetSmallUser'>
              <span className='widgetSmallUsername'>{user.username}</span>
              {/* <span className='widgetSmallUserTitle'>Software Engineer</span> */}
            </div>
            <button className='widgetSmallButton'>
              <VisibilityIcon className='widgetSmallIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSmall;
