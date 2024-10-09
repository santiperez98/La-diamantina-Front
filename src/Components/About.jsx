import React from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import NavBar from '@/Components/NavBar';

function About() {
  return (
    <div>
      <Head>
        <title>Sobre Nosotros - La Diamantina</title>
        <meta name="description" content="Conoce la historia y los valores de La Diamantina, una empresa familiar dedicada a la fabricación de piedras de afilar." />
      </Head>
      <section className="bg-blueGray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">Nuestra Historia</h2>
          <p className="text-lg text-center text-blueGray-500 mb-8">
            La Diamantina fue fundada por la familia Pérez hace más de 60 años. Desde entonces, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con la calidad.
          </p>
          <div className="flex flex-wrap justify-center mb-10">
            <img src="/images/fundador.jpg" alt="Fundador" className="w-64 h-auto mx-4 rounded shadow-lg" />
            <img src="/images/generaciones.jpg" alt="Generaciones" className="w-64 h-auto mx-4 rounded shadow-lg" />
          </div>
          <h3 className="text-3xl font-semibold text-center mb-4">Línea de Tiempo Interactiva</h3>
          <div className="relative flex flex-col mb-10">
            <div className="border-l-2 border-gray-300">
              <div className="flex items-center justify-start mb-4">
                <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
                <div className="ml-4 text-blueGray-600">
                  <strong>1960</strong> - Fundación de La Diamantina.
                </div>
              </div>
              <div className="flex items-center justify-start mb-4">
                <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
                <div className="ml-4 text-blueGray-600">
                  <strong>1980</strong> - Expansión de la planta industrial.
                </div>
              </div>
              <div className="flex items-center justify-start mb-4">
                <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
                <div className="ml-4 text-blueGray-600">
                  <strong>2000</strong> - Obtención de la concesión minera.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">Nuestra Misión y Valores</h2>
          <p className="text-lg text-center text-blueGray-500 mb-8">
            En La Diamantina, nos comprometemos a ofrecer productos de la más alta calidad y a garantizar la satisfacción de nuestros clientes. Nuestros valores son la tradición, la calidad y la confianza.
          </p>
        </div>
      </section>


    </div>
  );
}

export default About;
