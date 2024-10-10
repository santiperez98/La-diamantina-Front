// src/pages/Mina.jsx
import React from 'react';

const Mina = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">LA MINA</h1>
      <p className="text-lg mb-4">
        La mina La Diamantina es la única concesión minera de piedras de afilar
        argentina otorgada por la Dirección General de Minería de la Nación.
      </p>
      <img
        src="path_to_your_image/mina.jpg" // Cambia esta ruta a tu imagen
        alt="Mina La Diamantina"
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />
      <p className="text-lg mb-4">
        Se encuentra a 120 Km de la ciudad de San Rafael Mendoza Argentina, en el
        distrito minero Nº 11, con una superficie de 18 Has., 3 pertenencias
        inscripta al asiento 2163 Folio 4244 Tomo 14 del registro de manifestaciones
        y denuncias, al asiento 876, Folio 98 del Tomo 8 del registro de mensuras y
        posesiones Expediente 4P-81 de Dirección General de Minería de la Provincia
        de Mendoza mensurada según plano obrante a Fojas 109 y Acta de mensura a
        Fojas 110/111 vuelta con informe técnico obrante a Fojas 112 con
        Resolución firme de aprobación de la mencionada mensura, demarcación de
        pertenencias y entrega de posesión obrante a Fojas 117 y vuelta.
      </p>
      <p className="text-lg mb-4">
        Título de propiedad de Fojas 120 y 121 todo ello referido al expediente
        4P-81, certificados Nº 60936 de Dirección General de Minería de la Nación.
      </p>
    </div>
  );
};

export default Mina;
