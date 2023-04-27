import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgetsmall/WidgetSmall';
import WidgetLarge from '../../components/widgetlarge/WidgetLarge';

function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active Users'
      />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
