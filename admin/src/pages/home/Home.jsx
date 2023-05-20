import React, { useEffect, useMemo, useState } from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgetsmall/WidgetSmall';
import WidgetLarge from '../../components/widgetlarge/WidgetLarge';
import axios from 'axios';

function Home() {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`api/users/stats`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I0MGQ4NTE1Yjg1MjMzNjk0ZmVmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMwMzU1NiwiZXhwIjoxNjg0NzM1NTU2fQ._K-s2JPIvnamQAUPfytdBMFYU1j6ylm441Gj7QjhfKU',
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New Users': item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };

    getStats();
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title='User Analytics' grid dataKey='New Users' />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
