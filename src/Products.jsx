import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { FaInfoCircle } from 'react-icons/fa'; // Asegúrate de instalar react-icons

// Datos de productos con múltiples opciones
const productsData = [

  {
    name: 'Petit Cuadrilongas',
    image: 'https://http2.mlstatic.com/D_NQ_NP_646423-MLA70307405393_072023-O.webp',
    options: [
      { size: '30x5x5 cm', color: 'Gris', price: 14 },
      { size: '25x5x5 cm', color: 'Amarilla', price: 15 },
      { size: '25x5x5 cm', color: 'Gris', price: 12 },
      { size: '20x5x5 cm', color: 'Gris', price: 10 },
    ],
  },
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
    name: 'Tijeras Poda',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '6x2,5x2,5 cm', price: 1 },
    ],
  },
  {
    name: 'Tacos Pulir',
    image: 'data:image/jpeg;base64,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',
    options: [
      { size: '5x5x3 cm', price: 1.50 },
      { size: '5x7x5 cm', price: 2 },
    ],
  },
  {
    name: 'Bloques 1 cara',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '1 kg', price: 2.63 },
    ],
  },
  {
    name: 'Bloques 2 caras',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '1 kg', price: 3.68 },
    ],
  },
  {
    name: 'Hogas',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '20x3x5 cm', price: 7.50 },
      { size: '18x3x5 cm', price: 6.50 },
      { size: '16x3x5 cm', price: 6 },
      { size: '15x5x5 cm', price: 5.50 },
      { size: '14x3x5 cm', price: 5 },
      { size: '12x3x5 cm', price: 4.50 },
    ],
  },
  {
    name: 'Petit Hogar',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '20x2,5x5 cm', price: 6 },
      { size: '18x2,5x5 cm', price: 5.50 },
      { size: '16x2,5x5 cm', price: 5 },
      { size: '14x2,5x5 cm', price: 4.50 },
    ],
  },
  {
    name: 'Hogar c/base MDF',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '18 cm largo', price: 7.50 },
      { size: '16 cm largo', price: 6.50 },
      { size: '14 cm largo', price: 6 },
      { size: '12 cm largo', price: 5 },
    ],
  },
  {
    name: 'Molejones',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '20 cm espesor 5 cm', price: 75 },
      { size: '19 cm espesor 5 cm', price: 70 },
      { size: '18 cm espesor 5 cm', price: 65 },
      { size: '16 cm espesor 5 cm', price: 55 },
    ],
  },
  {
    name: 'Guadañas',
    image: 'https://acdn.mitiendanube.com/stores/002/173/831/products/1690988763152-d532c0842508fca88616995393466117-640-0.jpg',
    options: [
      { size: '25 cm largo', price: 8 },
    ],
  },
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

  // Función para eliminar un producto del carrito
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Eliminar el producto del carrito
    setCartItems(updatedCartItems);
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

      <div className="flex flex-col md:flex-row">
        {/* Filtro de búsqueda y precio */}
        <div className="w-full md:w-1/4 p-4 bg-white shadow-md">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          removeFromCart={removeFromCart} // Pasar la función para eliminar del carrito
        />
      )}
    </div>
  );
};

export default Products;