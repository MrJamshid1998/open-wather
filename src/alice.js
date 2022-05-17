import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './App.css';
import image from './img.json';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={image[0].img_url} width="50%" height="50%"  onDragStart={handleDragStart} />,
  <img src={image[1].img_url} width="50%" height="50%" onDragStart={handleDragStart} />,
  <img src={image[2].img_url} width="50%" height="50%" onDragStart={handleDragStart} />,
  <img src={image[3].img_url} width="50%" height="50%" onDragStart={handleDragStart} />,
  <img src={image[4].img_url} width="50%" height="50%" onDragStart={handleDragStart} />,
  <img src={image[5].img_url} width="50%" height="50%" onDragStart={handleDragStart} />,
  
];
console.log({items});

const Gallery = () => {
  return (
    
    <AliceCarousel infinite autoPlay="true" animationDuration="1000" mouseTracking items={items} />
  );
}
export default Gallery;