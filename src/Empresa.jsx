// src/pages/Empresa.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faClock, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import imagenEmpresa from './assets/logo.png'; // Cambia esta ruta a tu imagen
import imagenPlanta from './assets/slide3.jpg'; // Cambia esta ruta a tu imagen

const Empresa = () => {
  // Creando las referencias de Intersection Observer
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: descRef, inView: descInView } = useInView({ threshold: 0.1 });
  const { ref: imgRef1, inView: imgInView1 } = useInView({ threshold: 0.1 });
  const { ref: plantRef, inView: plantInView } = useInView({ threshold: 0.1 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1 });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1
        ref={titleRef}
        className={`text-3xl font-bold text-center my-8 transition-opacity duration-700 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
      >
        LA EMPRESA
      </h1>

      <p
        ref={descRef}
        className={`text-lg mb-4 transition-opacity duration-700 delay-100 ${descInView ? 'opacity-100' : 'opacity-0'}`}
      >
        LA DIAMANTINA es una empresa familiar fundada por José Pérez y continuada
        por sus herederos, Miguel A. Pérez y Elbio Ramiro Pérez (Hijo y nieto de
        don José).
      </p>

      <img
        ref={imgRef1}
        src={imagenEmpresa}
        alt="La Empresa"
        className={`w-full h-auto rounded-lg shadow-md mb-8 transition-opacity duration-700 delay-200 ${imgInView1 ? 'opacity-100' : 'opacity-0'}`}
      />

      <p
        className={`text-lg mb-4 transition-opacity duration-700 delay-300 ${descInView ? 'opacity-100' : 'opacity-0'}`}
      >
        El yacimiento propio explotado desde hace 82 años por su fundador es hoy
        producido por la familia, quien en forma continua hasta estos días y con
        dedicación exclusiva a esta actividad minera e industrial, extraen y
        manufacturan en planta industrial propia, desarrollando el ciclo completo de
        producción y venta de una completa línea de piedras de afilar de alta
        calidad al mejor precio.
      </p>

      <h2 className="text-2xl font-bold my-4">Planta Industrial</h2>

      <p
        className={`text-lg mb-4 transition-opacity duration-700 delay-400 ${plantInView ? 'opacity-100' : 'opacity-0'}`}
      >
        Se encuentra en Ortiz de Rosas 1227 de San Rafael, Mendoza a 20 cuadras
        del km 0, cuenta con una superficie de 2.400 m2 en donde se procesa el
        mineral extraído de la mina LA DIAMANTINA.
      </p>

      <img
        ref={plantRef}
        src={imagenPlanta}
        alt="Planta Industrial"
        className={`w-full h-auto rounded-lg shadow-md mb-8 transition-opacity duration-700 delay-500 ${plantInView ? 'opacity-100' : 'opacity-0'}`}
      />

      <p
        className={`text-lg mb-4 transition-opacity duration-700 delay-600 ${plantInView ? 'opacity-100' : 'opacity-0'}`}
      >
        El mineral es tratado, de acuerdo a su utilidad y destino, con seis tipos de
        cortadoras de discos diamantados y pulidoras de esmeril para una correcta
        terminación.
      </p>

      <p className={`text-lg mb-4 transition-opacity duration-700 delay-700 ${plantInView ? 'opacity-100' : 'opacity-0'}`}>
        La empresa cuenta con galpones de almacenamiento y línea de etiquetado,
        pasando en todas sus etapas de manufactura por estrictos controles de
        calidad que permiten ofrecer garantía de fabricación al usuario.
      </p>

      <h2 className="text-2xl font-bold my-4">Línea de Tiempo</h2>
      <div ref={timelineRef} className={`transition-opacity duration-700 ${timelineInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-[#c2ac93] text-2xl mr-4" />
            <p className="text-lg">1942: Fundación de LA DIAMANTINA por José Pérez.</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faIndustry} className="text-[#c2ac93] text-2xl mr-4" />
            <p className="text-lg">1960: Inicio de la explotación del yacimiento propio.</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBuilding} className="text-[#c2ac93] text-2xl mr-4" />
            <p className="text-lg">1982: Segunda generación toma el control de la empresa.</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBuilding} className="text-[#c2ac93] text-2xl mr-4" />
            <p className="text-lg">2024: Continúa con dedicación a la actividad minera.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
