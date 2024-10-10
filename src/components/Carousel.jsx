import React, { useState, useEffect } from 'react';

const images = [
  { 
    src: 'https://www.ladiamantina.com.ar/uploads/slides/b4e3ad1474a3ceecb2535f7bee087ab00e755163.jpg', 
    text: 'Calidad Insuperable: Descubre el proceso detrás de nuestras piedras de afilar.'
  },
  { 
    src: 'https://www.ladiamantina.com.ar/uploads/slides/8a503854f3422ecfd01313720085b956401916ec.jpg', 
    text: 'Innovación en Cada Detalle: La excelencia en la manufactura que nos distingue.'
  },
  { 
    src: 'https://www.ladiamantina.com.ar/uploads/slides/6433454e0030334f466aa87132fbc632a779bdfb.jpg', 
    text: 'Experiencia y Compromiso: Conoce al equipo que hace posible nuestros productos.'
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
              <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-50 text-white rounded-md">
                <h2 className="text-lg font-bold transition-transform duration-500 ease-in-out transform">
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
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#96765e]' : 'bg-gray-300'} transition-colors duration-300`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
