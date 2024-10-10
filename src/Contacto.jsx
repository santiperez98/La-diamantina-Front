// src/pages/Contacto.jsx
import React from 'react';

const Contacto = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Contacto</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Ingresa tu email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            placeholder="Ingresa tu mensaje"
            required
          ></textarea>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
