// src/pages/Products.jsx
import React from 'react';
import Navbar from './components/Navbar1';
import ProductCard from './components/ProductCard';

const Products = () => {
  return (
    <div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Aquí puedes mapear tus productos */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* ... */}
      </div>
    </div>
  );
};

export default Products;
