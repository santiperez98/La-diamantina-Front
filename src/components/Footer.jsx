import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBuilding, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation(); // Obtén la función t

  return (
    <footer className="bg-[#96765e] text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Sección superior */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <img
            src={logo} // Reemplaza por la URL de tu logo
            alt="Logo de La Diamantina"
            className="h-16 mb-4 md:mb-0"
          />
          <div className="flex space-x-8">
            <a href="/mina" className="hover:text-black flex items-center">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" /> {t('La Mina')}
            </a>
            <a href="/empresa" className="hover:text-black flex items-center">
              <FontAwesomeIcon icon={faBuilding} className="mr-2" /> {t('La Empresa')}
            </a>
            <a href="/contacto" className="hover:text-black flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {t('Contacto')}
            </a>
            <a href="/about" className="hover:text-black flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> {t('Acerca de Mí')}
            </a>
          </div>
        </div>
        
        {/* Sección inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm flex items-center">
            {t('Contacto:')}
            <a href="mailto:info@ladiamantina.com" className="text-black hover:underline ml-2 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> info@ladiamantina.com
            </a>
            <a href="https://wa.me/your_whatsapp_number" className="text-black hover:underline ml-4 flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-1" /> {t('WhatsApp')}
            </a>
          </p>
          <p className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} La Diamantina. {t('Todos los derechos reservados.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
