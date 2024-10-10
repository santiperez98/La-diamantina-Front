// src/pages/Empresa.jsx
import React from 'react';

const Empresa = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">LA EMPRESA</h1>
      <p className="text-lg mb-4">
        LA DIAMANTINA es una empresa familiar fundada por José Pérez y continuada
        por sus herederos, Miguel A. Pérez y Elbio Ramiro Pérez (Hijo y nieto de
        don José).
      </p>
      <img
        src="path_to_your_image/empresa.jpg" // Cambia esta ruta a tu imagen
        alt="La Empresa"
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />
      <p className="text-lg mb-4">
        El yacimiento propio explotado desde hace 60 años por su fundador es hoy
        producido por la familia, quien en forma continua hasta estos días y con
        dedicación exclusiva a esta actividad minera e industrial, extraen y
        manufacturan en planta industrial propia, desarrollando el ciclo completo de
        producción y venta de una completa línea de piedras de afilar de alta
        calidad al mejor precio.
      </p>
      <h2 className="text-2xl font-bold my-4">Planta Industrial</h2>
      <p className="text-lg mb-4">
        Se encuentra en Ortiz de Rosas 1227 de San Rafael, Mendoza a 20 cuadras
        del km 0, cuenta con una superficie de 2.400 m2 en donde se procesa el
        mineral extraído de la mina LA DIAMANTINA.
      </p>
      <img
        src="path_to_your_image/planta.jpg" // Cambia esta ruta a tu imagen
        alt="Planta Industrial"
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />
      <p className="text-lg mb-4">
        El mineral es tratado, de acuerdo a su utilidad y destino, con seis tipos de
        cortadoras de discos diamantados y pulidoras de esmeril para una correcta
        terminación.
      </p>
      <p className="text-lg mb-4">
        La empresa cuenta con galpones de almacenamiento y línea de etiquetado,
        pasando en todas sus etapas de manufactura por estrictos controles de
        calidad que permiten ofrecer garantía de fabricación al usuario.
      </p>
    </div>
  );
};

export default Empresa;
