import React from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  const trailer =
    'https://vod-progressive.akamaized.net/exp=1680599571~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3391%2F16%2F416958499%2F1796861196.mp4~hmac=d6e5d461239d784eab44570cdd5eb16fbb5383c056bdab70d6bcf1f93cc0fa39/vimeo-prod-skyfire-std-us/01/3391/16/416958499/1796861196.mp4';
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className='video' autoPlay controls src={trailer}></video>
    </div>
  );
};

export default Watch;
