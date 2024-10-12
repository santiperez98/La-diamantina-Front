// src/pages/Mina.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import imagen1 from './assets/slide1.jpg';
import imagen2 from './assets/slide3.jpg';

const Mina = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1 });
  const { ref: img1Ref, inView: img1InView } = useInView({ threshold: 0.1 });
  const { ref: markerRef, inView: markerInView } = useInView({ threshold: 0.1 });
  const { ref: img2Ref, inView: img2InView } = useInView({ threshold: 0.1 });
  const { ref: infoRef, inView: infoInView } = useInView({ threshold: 0.1 });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1
        ref={titleRef}
        className={`text-4xl font-bold text-center my-8 transition-opacity duration-700 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
      >
        LA MINA
      </h1>

      <p
        ref={textRef}
        className={`text-lg mb-4 transition-opacity duration-700 delay-100 ${textInView ? 'opacity-100' : 'opacity-0'}`}
      >
        La mina La Diamantina es una de las concesiónes mineras de piedras de afilar
        argentina otorgada por la Dirección General de Minería de la Nación.
      </p>

      <img
        ref={img1Ref}
        src={imagen2}
        alt="Mina La Diamantina"
        className={`w-full h-auto rounded-lg shadow-md mb-8 transition-opacity duration-700 delay-200 ${img1InView ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#c2ac93] text-3xl mr-3" />
        <p
          ref={markerRef}
          className={`text-lg mb-4 transition-opacity duration-700 delay-300 ${markerInView ? 'opacity-100' : 'opacity-0'}`}
        >
          Se encuentra a 120 Km de la ciudad de San Rafael Mendoza Argentina, en el
          distrito minero Nº 11, con una superficie de 18 Has.
        </p>
      </div>

      <img
        ref={img2Ref}
        src={imagen1}
        alt="Interior de la Mina"
        className={`w-full h-auto rounded-lg shadow-md mb-8 transition-opacity duration-700 delay-400 ${img2InView ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faInfoCircle} className="text-[#c2ac93] text-3xl mr-3" />
        <p
          ref={infoRef}
          className={`text-lg mb-4 transition-opacity duration-700 delay-500 ${infoInView ? 'opacity-100' : 'opacity-0'}`}
        >
          Título de propiedad de Fojas 120 y 121, todo ello referido al expediente
          4P-81, certificados Nº 60936 de Dirección General de Minería de la Nación.
        </p>
      </div>

      <p
        className={`text-lg mb-4 transition-opacity duration-700 delay-600 ${infoInView ? 'opacity-100' : 'opacity-0'}`}
      >
        Certificado de mensura y posesiones, al asiento 876, Folio 98 del Tomo 8 del registro de mensuras y
        posesiones.
      </p>
    </div>
  );
};

export default Mina;
