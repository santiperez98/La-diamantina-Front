import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [quantity, setQuantity] = useState(1);

  // Función para manejar el cambio de opciones
  const handleOptionChange = (e) => {
    const selectedIndex = parseInt(e.target.value, 10); // Usamos el índice como valor único
    setSelectedOption(product.options[selectedIndex]); // Seleccionamos la opción correcta usando el índice
  };

  // Función para manejar el cambio de cantidad
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(value);
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-52 object-contain mb-4 rounded-md" 
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>

      {/* Opciones de selección */}
      <div className="flex flex-col gap-2 mt-2">
        {product.options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input 
              type="radio" 
              name={product.name} 
              value={index} // Usamos el índice de la opción como valor único
              checked={product.options[index] === selectedOption} // Verificamos si la opción seleccionada es la misma
              onChange={handleOptionChange} 
            />
            {option.size} {option.color && `- ${option.color}`} - ${option.price}
          </label>
        ))}
      </div>

      {/* Seleccionar cantidad */}
      <div className="mt-4">
        <label htmlFor="quantity" className="block font-semibold mb-2">Cantidad:</label>
        <input 
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="border p-2 rounded w-16"
        />
      </div>

      {/* Precio actualizado y botón agregar */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-blue-600">${selectedOption.price * quantity}</span>
        <button
          onClick={() => addToCart(product, selectedOption, quantity)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
