// Carousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
