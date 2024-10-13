import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShoppingCart, faCreditCard, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const PurchaseAndContact = () => {
  const navigate = useNavigate(); // Inicializar el hook useNavigate
  const { t } = useTranslation(); // Inicializar useTranslation

  const steps = [
    { icon: faCheckCircle, text: t('Explora nuestros productos y selecciona lo que necesites.') },
    { icon: faShoppingCart, text: t('Añade al carrito los productos seleccionados.') },
    { icon: faCreditCard, text: t('Alcanza los $500 USD para compras mayoristas y presiona "Comprar".') },
    { icon: faEnvelope, text: t('Un asesor comercial te contactará para finalizar el pago.') },
  ];

  // Función para manejar la navegación al hacer clic en el botón de contacto
  const handleContactClick = () => {
    navigate('/contacto'); // Navegar a la página de contacto
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sección de pasos para comprar */}
      <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md mr-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">{t('Pasos para Comprar')}</h2>
        <ol className="mt-4 space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow transition-transform duration-300 transform hover:scale-105">
              <FontAwesomeIcon icon={step.icon} className="text-black mr-3" />
              <span className="text-lg text-gray-700">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Sección de contacto */}
      <div className="flex-1 flex justify-center items-center">
        <div className="p-6 bg-[#96765e] text-white text-center rounded-lg shadow-md w-full max-w-md h-full flex flex-col justify-center">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-5xl mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold">{t('¿Tienes dudas o necesitas ayuda?')}</h2>
          <p className="mt-4 text-lg">{t('¡Contáctanos y te ayudaremos a completar tu compra!')}</p>
          <p className="mt-2">{t('Nuestros asesores están listos para responder cualquier consulta que tengas.')}</p>
          <button
            className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-lg transform hover:scale-105"
            onClick={handleContactClick} // Manejar el clic en el botón
          >
            {t('Contactar Asesor')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseAndContact;
