import React from 'react';

const reviews = [
  {
    text: "“Excelente calidad, muy satisfecho.”",
    author: "Cliente A",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "“Recomiendo a La Diamantina para todas tus necesidades de afilado.”",
    author: "Cliente B",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "“Productos increíbles, siempre los compro para mis herramientas.”",
    author: "Cliente C",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    text: "“El servicio al cliente es excepcional y los productos de primera calidad.”",
    author: "Cliente D",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    text: "“Muy confiables, los recomiendo al 100%.”",
    author: "Cliente E",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    text: "“Siempre me entregan a tiempo, excelente empresa.”",
    author: "Cliente F",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
];

const CustomerReviewsCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Comentarios de Clientes
      </h2>
      <div className="flex animate-scroll space-x-8">
        {[...reviews, ...reviews].map((review, index) => (
          <div key={index} className="flex-shrink-0 w-72 p-4 bg-white rounded-lg shadow-md text-center">
            <img
              src={review.image}
              alt={review.author}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic text-gray-700">{review.text}</p>
            <p className="font-semibold text-gray-800 mt-2">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos de la animación
const style = document.createElement('style');
style.innerHTML = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    display: flex;
    width: max-content;
    animation: scroll 20s linear infinite;
  }
`;
document.head.appendChild(style);

export default CustomerReviewsCarousel;
