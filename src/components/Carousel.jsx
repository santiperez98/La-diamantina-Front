// src/components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-64">
      <Slider {...settings}>
        <div className="flex justify-center items-center h-full bg-blue-500">
          <h2 className="text-2xl text-white">Texto de la Imagen 1</h2>
        </div>
        <div className="flex justify-center items-center h-full bg-green-500">
          <h2 className="text-2xl text-white">Texto de la Imagen 2</h2>
        </div>
        <div className="flex justify-center items-center h-full bg-red-500">
          <h2 className="text-2xl text-white">Texto de la Imagen 3</h2>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
