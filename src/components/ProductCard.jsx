import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    const option = product.options.find(opt => opt.size === selectedValue || opt.color === selectedValue);
    setSelectedOption(option);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-52 object-contain mb-4 rounded-md" // Ajusta la altura aquí
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>

      {/* Opciones de selección */}
      <div className="flex flex-col gap-2 mt-2">
        {product.options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input 
              type="radio" 
              name={product.name} 
              value={option.size} 
              checked={selectedOption.size === option.size} 
              onChange={handleOptionChange}
            />
            {option.size} - {option.color ? option.color : 'N/A'} - ${option.price}
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
