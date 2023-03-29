import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import React, { useState, useEffect } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { imgs } from './data';


const ImageCarousel = () => {
  const [data] = useState(imgs)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % 3);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CCarousel controls activeIndex={activeIndex}>
      {data.map((imgCarousel) => (
  <CCarouselItem key={imgCarousel.id}>
    <CImage 
      className="carousel__images"
      src={`${imgCarousel.img}`}
      alt={`slide ${imgCarousel.id}`}
    />
  </CCarouselItem>
))}
      
    </CCarousel>
  );
};

export default ImageCarousel;
