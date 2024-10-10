import React, { useState } from 'react';

import ProductCard from './components/ProductCard';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">


      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filtros a la izquierda */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filtros</h2>

          {/* Buscador */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Filtro por precio */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Filtrar por precio</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="number"
                placeholder="Precio mínimo"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="Precio máximo"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Productos en la parte central */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* Puedes mapear aquí los productos desde un array */}
        </div>
      </div>
    </div>
  );
};

export default Products;
