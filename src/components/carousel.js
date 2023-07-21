import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

export default function ImageCarousel() {
  return (
    <div className='carousel-container'>
      <Carousel dynamicHeight={true} showThumbs={false}>
        <div>
          <img src='images/Image1.png' alt='Slide 1'/>
        </div>
        <div>
          <img src='images/Image2.png' alt='Slide 2'/>
        </div>
        <div>
          <img src='images/Image3.png' alt='Slide 3'/>
        </div>
      </Carousel>
    </div>
  );
}
