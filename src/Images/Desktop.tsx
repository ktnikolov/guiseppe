import React from 'react';
import './Images.css';
import desktopImg from './Guiseppe Land 1920x1080 jpg.jpg'

const Desktop: React.FC = () => {
  return <img className='desktop' src={desktopImg} alt="Image"></img>;
};

export default Desktop;

export {};