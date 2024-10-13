// src/pages/Empresa.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faClock, faIndustry, faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import imagenEmpresa from './assets/logo.png'; // Cambia esta ruta a tu imagen
import imagenPlanta from './assets/slide2.jpg'; // Cambia esta ruta a tu imagen

const Empresa = () => {
  // Creando las referencias de Intersection Observer
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: descRef, inView: descInView } = useInView({ threshold: 0.1 });
  const { ref: imgRef1, inView: imgInView1 } = useInView({ threshold: 0.1 });
  const { ref: plantRef, inView: plantInView } = useInView({ threshold: 0.1 });
  const { ref: fundRef, inView: fundInView } = useInView({ threshold: 0.1 });

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

      {/* Sección de Fundación */}
      <h2 className="text-2xl font-bold my-4">Fundación de la Empresa</h2>
      <div
        ref={fundRef}
        className={`border border-gray-300 rounded-lg p-4 bg-gray-100 shadow-lg transition-opacity duration-700 ${fundInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faInfoCircle} className="text-[#c2ac93] text-3xl mr-3" />
          <h3 className="text-xl font-bold">Historia</h3>
        </div>
        <p className="text-lg mb-4">
          LA DIAMANTINA fue fundada en 1942 por José Pérez, quien visionó la posibilidad de extraer y manufacturar piedras de afilar de alta calidad. Desde sus inicios, la empresa se ha enfocado en la innovación y en mantener altos estándares de calidad en sus productos. Con el pasar de los años, la empresa ha sido liderada por su familia, continuando con el legado de dedicación y compromiso que estableció su fundador.
        </p>
        <p className="text-lg mb-4">
          <FontAwesomeIcon icon={faChevronRight} className="text-[#c2ac93] mr-2" />
          Visita nuestra sección de productos para ver la variedad que ofrecemos.
        </p>
      </div>
    </div>
  );
};

export default Empresa;
