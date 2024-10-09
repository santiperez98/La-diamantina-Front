import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useAnimation, motion } from 'framer-motion';
import Footer from './Footer';

const carouselImages = [
  "https://www.ladiamantina.com.ar/uploads/slides/b4e3ad1474a3ceecb2535f7bee087ab00e755163.jpg",
  "https://www.ladiamantina.com.ar/uploads/slides/6433454e0030334f466aa87132fbc632a779bdfb.jpg", 
  "https://www.ladiamantina.com.ar/uploads/slides/8096459007fe3494a6518f9a040b72a404f05ad1.jpg",
  
];

function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const animationControls = useAnimation();
  const sectionsRef = useRef([]);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationControls.start({ opacity: 1, y: 0 });
        } else {
          animationControls.start({ opacity: 0, y: 50 });
        }
      });
    });

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [isMounted, animationControls]);

  return (
    <div>
      <Head>
        <title>La Diamantina - Piedras de Afilar de Máxima Calidad</title>
        <meta name="description" content="LA DIAMANTINA es una empresa familiar dedicada a la explotación minera y manufactura de piedras de afilar de máxima calidad." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <motion.div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${carouselImages[0]})` }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div className="absolute inset-0 bg-black opacity-50" />
          <div className="container relative mx-auto text-center">
            <h1 className="text-white font-semibold text-5xl animate__animated animate__fadeInDown">La Diamantina: 60 años de excelencia.</h1>
            <p className="mt-4 text-lg text-gray-200 animate__animated animate__fadeInUp">
              Piedras de afilar de la más alta calidad, con garantías de fabricación. Desde el corazón de Mendoza, a todo el país.
            </p>
            <button className="mt-8 bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg transition duration-150">
              Ver Productos
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className="h-64 w-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">¿Por qué elegirnos?</h2>
          <div className="flex flex-wrap justify-center">
            {[ // Array de información de la empresa
              {
                title: "60 Años de Tradición",
                description: "La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.",
                icon: "fas fa-gem",
              },
              {
                title: "Planta Industrial Propia",
                description: "Nuestra planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad.",
                icon: "fas fa-industry",
              },
              {
                title: "Yacimiento Propio",
                description: "La mina 'La Diamantina' es la única concesión minera de piedras de afilar en Argentina.",
                icon: "fas fa-mountain",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-full md:w-4/12 px-4 text-center"
                ref={(el) => (sectionsRef.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                animate={isMounted ? animationControls : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg p-5">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className={item.icon}></i>
                  </div>
                  <h6 className="text-xl font-semibold">{item.title}</h6>
                  <p className="mt-2 text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">Testimonios de Clientes</h2>
          <p className="text-lg text-gray-500 mb-8">
            Esto es lo que nuestros clientes dicen sobre nosotros:
          </p>
          <div className="flex flex-wrap justify-center">
            {[
              "¡Las mejores piedras de afilar que he usado! - Juan P.",
              "Excelente servicio y calidad. - María G.",
              "Recomiendo 100% La Diamantina. - Carlos S.",
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full md:w-4/12 px-4 mb-8"
                ref={(el) => (sectionsRef.current[index + 3] = el)} // Ajusta el índice
                initial={{ opacity: 0, y: 50 }}
                animate={isMounted ? animationControls : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
                  <p className="text-gray-600">{testimonial}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">¿Listo para empezar?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Contacta con nosotros para más información sobre nuestros productos.
          </p>
          <button className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg transition duration-150">
            Ir a Contacto
          </button>
        </div>
      </section>

      {/* Footer Section */}
   
    </div>
  );
}

export default Home;
