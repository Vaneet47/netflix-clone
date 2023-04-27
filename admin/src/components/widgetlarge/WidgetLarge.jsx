import React from 'react';
import './widgetLarge.css';

function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>Latest transactions</h3>
      <table className='widgetLargeTable'>
        <tr className='widgetLargeTr'>
          <th className='widgetLargeTh'>Customer</th>
          <th className='widgetLargeTh'>Date</th>
          <th className='widgetLargeTh'>Amount</th>
          <th className='widgetLargeTh'>Status</th>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Aaliya</span>
          </td>
          <td className='widgetLargeDate'>2 Jul 2023</td>
          <td className='widgetLargeAmount'>$2857.90</td>
          <td className='widgetLargeStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Aaliya</span>
          </td>
          <td className='widgetLargeDate'>2 Jul 2023</td>
          <td className='widgetLargeAmount'>$2857.90</td>
          <td className='widgetLargeStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Aaliya</span>
          </td>
          <td className='widgetLargeDate'>2 Jul 2023</td>
          <td className='widgetLargeAmount'>$2857.90</td>
          <td className='widgetLargeStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Aaliya</span>
          </td>
          <td className='widgetLargeDate'>2 Jul 2023</td>
          <td className='widgetLargeAmount'>$2857.90</td>
          <td className='widgetLargeStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLarge;
