import React from 'react';
import './Images.css';
import phoneImg from './GuiseppeLand1080x1920.jpg'
import DownloadButton from './DownloadButtons';

const Phone: React.FC = () => {
  return (
    <div className='container'>
      <img className='phone' src={phoneImg} alt="Image"></img>
      <DownloadButton image={phoneImg} filename="Phone.jpg" />
    </div>
  )
};

export default Phone;

export {};