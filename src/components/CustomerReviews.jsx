import React from 'react';

const reviews = [
  {
    text: "“Excelente producto, fui atendido por su dueño, persona muy atenta al momento de la visita.”",
    author: "Ricardo Guzman",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXJh_pfKnJpe9vpk0wpI1rIp_neKa0pt75mTbXcrVOn_c-XSk3R=w60-h60-p-rp-mo-ba3-br100",
  },
  {
    text: "“Las mejores piedras para afilar naturales provenientes de una de las pocas canteras del mundo.”",
    author: "José Manuel Seoane",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXshJfLyNDAqpIfSTjV1SzHIN0IN7VLRkSmVb7MuIs1_X1VpLBgOQ=w60-h60-p-rp-mo-ba6-br100",
  },
  {
    text: "“Muy buenas piedras para afilar. Debieran tener un distribuidor en Chile.”",
    author: "Francisco Edwards",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW15_SmceW47O15QcRcuR5IM_c3GeuDQFWzyEv6OMbeHRXc0co=w60-h60-p-rp-mo-ba4-br100",
  },
  {
    text: "“Las mejores piedras de afilar sin dudas.”",
    author: "Javier Gonzalez",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJjKdTOrkSXDG5bjkgU9MtzL0tLdpEJTGjiKq-egJt-oG5__w=w60-h60-p-rp-mo-ba3-br100",
  },
  {
    text: "“Excelentes piedras, excelente la atención, Elvio un maestro 🙏.”",
    author: "Arturo Gerosa",
    image: "https://lh3.googleusercontent.com/a/ACg8ocK2sfi9ckj9SOHG_yXKjo1hg89bjefO6ytQ7o-ot8BiPhsS5w=w60-h60-p-rp-mo-br100",
  },
  {
    text: "“Excelente atención.”",
    author: "Alfredo Luis Lodi",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXsArz3J-5pLzzlhFj_F2URU4W4j2VQiZHSbVhqH4F6bflXqVg5Aw=w60-h60-p-rp-mo-ba5-br100",
  },
];

// Componente para mostrar estrellas
const StarRating = () => {
  return (
    <div className="flex justify-center mt-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.75l-6.518 3.427a1 1 0 01-1.449-1.055l1.247-7.271L.812 8.75a1 1 0 01.554-1.707l7.291-1.06L11.244.713a1 1 0 011.768 0l3.271 5.27 7.291 1.06a1 1 0 01.554 1.707l-5.268 5.052 1.247 7.271a1 1 0 01-1.449 1.055L12 17.75z"
          />
        </svg>
      ))}
    </div>
  );
};

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
            <StarRating /> {/* Componente de estrellas */}
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
