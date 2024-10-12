import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { FaInfoCircle } from 'react-icons/fa'; // Asegúrate de instalar react-icons

// Datos de productos con múltiples opciones
const productsData = [
  {
    name: 'Cuadrilongas',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '30x7x5 cm', color: 'Gris', price: 16.81 },
      { size: '30x7x5 cm', color: 'Amarilla', price: 30.43 },
      { size: '25x7x5 cm', color: 'Gris', price: 14.35 },
      { size: '25x7x5 cm', color: 'Amarilla', price: 24.34 },
      { size: '20x7x5 cm', color: 'Gris', price: 11.77 },
      { size: '20x7x5 cm', color: 'Amarilla', price: 14.78 },
    ],
  },
  {
    name: 'Doble Faz',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '22x4x5 cm', price: 15.46 },
      { size: '20x4x5 cm', price: 13.84 },
      { size: '18x4x5 cm', price: 11.34 },
      { size: '16x4x5 cm', price: 9.71 },
    ],
  },
  // Agrega más productos según sea necesario
];

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Función para agregar productos al carrito
  const addToCart = (product, selectedOption, quantity) => {
    const existingProductIndex = cartItems.findIndex(item => 
      item.name === product.name && 
      item.size === selectedOption.size && 
      item.color === selectedOption.color
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [
        ...prevItems, 
        { ...product, ...selectedOption, quantity }
      ]);
    }
    setIsCartOpen(true); // Mostrar carrito cuando se agrega un producto
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Funciones para manejar cantidades
  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  // Filtrar productos
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.options.some(option => maxPrice ? option.price <= maxPrice : true)
  );

  // Calcular el total
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="relative bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center bg-[#96765e] p-4">
        <h1 className="text-white text-2xl">Productos</h1>
        <button 
          onClick={() => setIsCartOpen(!isCartOpen)} 
          className="bg-white text-blue-600 px-4 py-2 rounded shadow-lg"
        >
          Carrito ({cartItems.length})
        </button>
      </header>

      <div className="flex">
        {/* Filtro de búsqueda y precio */}
        <div className="w-1/4 p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-2">Filtros</h2>
          <input 
            type="text" 
            placeholder="Buscar producto..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="border p-2 rounded w-full mb-4"
          />
          <input 
            type="number" 
            placeholder="Filtrar por precio máximo..." 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
            className="border p-2 rounded w-full mb-4"
          />
                {/* Información de granulometría */}
      <div className="mt-4 p-4 border border-gray-300 rounded bg-white shadow-md">
        <div className="flex items-center">
          <FaInfoCircle className="text-gray-500 mr-2" />
          <h2 className="text-lg font-semibold">Información de Granulometría</h2>
        </div>
        <p className="mt-2">
          En la mina se encuentran dos tipos de piedras:
          <br />
          <span className="font-semibold text-yellow-600">Piedra Amarilla:</span> Granulometría de 550 grid.
          <br />
          <span className="font-semibold text-gray-600">Piedra Gris:</span> Granulometría de 700 - 1000 grid.
        </p>
      </div>
        </div>

        {/* Listado de productos */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </div>
      </div>



      {/* Botón de carrito flotante */}
      <button 
        onClick={() => setIsCartOpen(!isCartOpen)} 
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        Carrito ({cartItems.length})
      </button>

      {/* Carrito */}
      {isCartOpen && (
        <Cart 
          cartItems={cartItems} 
          total={total} 
          onClose={() => setIsCartOpen(false)}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Products;
