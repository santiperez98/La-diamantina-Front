import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faGem, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const AboutCompany = () => {
  const { t } = useTranslation(); // Inicializar useTranslation
  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const features = [
    { icon: faIndustry, text: t('Manufactura de piedras de afilar de alta calidad.') },
    { icon: faGem, text: t('Uso de materias primas seleccionadas.') },
    { icon: faTools, text: t('Proceso de producción innovador.') },
    { icon: faUsers, text: t('Equipo profesional altamente capacitado.') },
  ];

  // Función para manejar la navegación al hacer clic en el botón "Sobre Nosotros"
  const handleAboutClick = () => {
    navigate('/empresa'); // Navegar a la página de empresa
  };

  return (
    <section className="bg-[#f7ebcc] p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        {t('Sobre Nosotros')} {/* Usar t() para traducir el texto */}
      </h2>
      <p className="text-gray-700 text-center mb-6 font-bold">
        {t('En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.')}
      </p>
      {/* Botón para "+ Sobre Nosotros" */}
      <div className="text-center mt-6">
        <button
          className="bg-[#96765e] text-white px-4 py-2 rounded hover:bg-[#8f704d] transition duration-200"
          onClick={handleAboutClick} // Manejar el clic en el botón "Sobre Nosotros"
        >
          {t('+ Sobre La Diamantina')} {/* Usar t() para traducir el texto del botón */}
        </button>
      </div>
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        {t('¿Qué Hacemos?')} {/* Usar t() para traducir el texto */}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow transition-transform duration-300 transform hover:scale-105">
            <FontAwesomeIcon icon={feature.icon} className="text-[#96765e] text-2xl mr-3" />
            <span className="text-lg text-gray-700">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCompany;
