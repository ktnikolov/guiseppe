import React from 'react';
import './Images.css';
import phoneImg from './Guiseppe Land 1080x1920 jpg.jpg'

const Phone: React.FC = () => {
  return <img className='phone' src={phoneImg} alt="Image"></img>;
};

export default Phone;

export {};