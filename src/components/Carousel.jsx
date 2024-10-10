import React, { useState, useEffect } from 'react';

const images = [
  { 
    src: 'https://www.ladiamantina.com.ar/uploads/slides/b4e3ad1474a3ceecb2535f7bee087ab00e755163.jpg', 
    text: 'Texto independiente para la imagen 1' 
  },
  { 
    src: 'https://www.ladiamantina.com.ar/uploads/slides/8a503854f3422ecfd01313720085b956401916ec.jpg', 
    text: 'Texto independiente para la imagen 2' 
  },
  { 
    src: 'https://www.ladiamantina.com.ar/uploads/slides/6433454e0030334f466aa87132fbc632a779bdfb.jpg', 
    text: 'Texto independiente para la imagen 3' 
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-[500px] md:h-[600px] object-cover" /> {/* Aumentando el height */}
            {currentIndex === index && ( // Solo mostrar el texto y el fondo si es la imagen actual
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white text-center">
                <h2 className={`text-lg font-bold transition-transform duration-500 ease-in-out transform ${currentIndex === index ? 'translate-x-0' : '-translate-x-full'}`}>
                  {image.text}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-300`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
