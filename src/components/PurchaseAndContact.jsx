import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShoppingCart, faCreditCard, faHome } from '@fortawesome/free-solid-svg-icons';

const PurchaseAndContact = () => {
  const steps = [
    { icon: faCheckCircle, text: 'Elige tu piedra de afilar.' },
    { icon: faShoppingCart, text: 'Añade al carrito.' },
    { icon: faCreditCard, text: 'Completa el proceso de pago.' },
    { icon: faHome, text: 'Recibe tu pedido en casa.' },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sección de pasos para comprar */}
      <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md mr-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Pasos para Comprar</h2>
        <ol className="mt-4 space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow transition-transform duration-300 transform hover:scale-105">
              <FontAwesomeIcon icon={step.icon} className="text-blue-500 mr-3" />
              <span className="text-lg text-gray-700">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Sección de contacto */}
      <div className="flex-1">
        <div className="p-6 bg-blue-500 text-white text-center rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold">¡Contáctanos!</h2>
          <p className="mt-4">Para más información, no dudes en escribirnos.</p>
          <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded">Enviar Mensaje</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseAndContact;
