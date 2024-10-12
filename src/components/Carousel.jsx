import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation
import { useSwipeable } from 'react-swipeable'; // Importar useSwipeable

// Importar las imágenes localmente
import img1 from '../assets/slide4.jpg';
import img2 from '../assets/slide2.jpg';
import img3 from '../assets/slide1.jpg';

const images = [
  { 
    src: img1, 
    key: 'Calidad Insuperable'
  },
  { 
    src: img2, 
    key: 'Innovación en Cada Detalle'
  },
  { 
    src: img3, 
    key: 'Experiencia y Compromiso'
  },
];

const Carousel = () => {
  const { t } = useTranslation(); // Inicializar useTranslation
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Usar useSwipeable para detectar el swipe a izquierda o derecha
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true, // Evitar el desplazamiento del navegador
    trackMouse: true, // Habilitar también para dispositivos que usen mouse
  });

  return (
    <div {...handlers} className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-[500px] md:h-[600px] object-cover" />
            {currentIndex === index && (
              <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-50 text-white rounded-md">
                <h2 className="text-lg font-bold transition-transform duration-500 ease-in-out transform">
                  {t(image.key)} {/* Usar t() para traducir el texto */}
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
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;