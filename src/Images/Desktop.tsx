import React from 'react';
import './Images.css';
import desktopImg from './GuiseppeLand1920x1080.jpg'
import DownloadButton from './DownloadButtons';

const Desktop: React.FC = () => {
  return (
    <div className='container'>
      <img className='desktop' src={desktopImg} alt="Image"></img>
      <DownloadButton image={desktopImg} filename="Desktop.jpg" />
    </div>
  )
};

export default Desktop;

export {};