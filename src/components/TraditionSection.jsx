import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faIndustry, faMountain } from '@fortawesome/free-solid-svg-icons';

const TraditionSection = () => {
  return (
    <section className="mt-10 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInLeft">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faGem} className="mr-2 text-blue-500" />
            60 Años de Tradición
          </h2>
          <p className="text-gray-600">Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInLeft animate__delay-1s">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faIndustry} className="mr-2 text-blue-500" />
            Planta Industrial Propia
          </h2>
          <p className="text-gray-600">La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInLeft animate__delay-2s">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2 flex items-center">
            <FontAwesomeIcon icon={faMountain} className="mr-2 text-blue-500" />
            Yacimiento Propio
          </h2>
          <p className="text-gray-600">La mina "La Diamantina" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.</p>
        </div>

      </div>
    </section>
  );
};

export default TraditionSection;
