import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { imgs } from './data';


const ImageCarousel = () => {
  const [data] = useState(imgs)
  return (
    <CCarousel controls interval={1000} pause="false">
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
