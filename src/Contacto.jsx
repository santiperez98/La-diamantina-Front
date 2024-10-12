// src/pages/Contacto.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contacto = () => {
  // Creando las referencias de Intersection Observer
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.1 });
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({ threshold: 0.1 });
  const { ref: mapRef, inView: mapInView } = useInView({ threshold: 0.1 });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1
        ref={titleRef}
        className={`text-3xl font-bold text-center my-8 transition-opacity duration-700 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
      >
        Contacto
      </h1>

      <form
        ref={formRef}
        className={`bg-white p-6 rounded-lg shadow-md transition-opacity duration-700 delay-100 ${formInView ? 'opacity-100' : 'opacity-0'}`}
      >
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
        <button className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-blue-600">
          Enviar
        </button>
      </form>

      <div
        ref={contactInfoRef}
        className={`mt-8 transition-opacity duration-700 delay-200 ${contactInfoInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-2xl font-bold my-4 text-center">Información de Contacto</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#c2ac93] text-2xl mr-4" />
            <a href="mailto:tuemail@example.com" className="text-lg">contactos@ladiamantina.com.ar / ventas@ladiamantina.com.ar</a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComments} className="text-[#c2ac93] text-2xl mr-4" />
            <a href="https://wa.me/549XXXXXXXXX" className="text-lg">WhatsApp: +54 9 2604580315</a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#c2ac93] text-2xl mr-4" />
            <span className="text-lg">Ubicación: Ortiz de Rosas 1227, San Rafael, Mendoza</span>
          </div>
        </div>
      </div>

      {/* Sección del mapa de Google */}
      <div ref={mapRef} className={`mt-8 transition-opacity duration-700 delay-300 ${mapInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl font-bold text-center mb-4">Nuestra Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13132.334986029053!2d-68.3151506!3d-34.6273239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679a8199ae0871b%3A0xa5a66c2d3c06e5ee!2sLa%20Diamantina!5e0!3m2!1ses-419!2sar!4v1728529037105!5m2!1ses-419!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
