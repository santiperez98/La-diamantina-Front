import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f7ebcc] p-4 text-[#96765e]">
      <div className="flex justify-between items-center">
        {/* Imagen Logo que redirige al Home */}
        <Link to="/" className="block">
          <img
            src={logo} // Aquí va la ruta de tu imagen
            alt="La Diamantina"
            className="h-16 w-auto"
          />
        </Link>

        {/* Hamburguesa */}
        <button
          className="text-black block md:hidden"
          onClick={toggleMenu}
        >
          {/* Icono de menú hamburguesa */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <Link to="/products" className="hover:text-blue-400">Productos</Link>
          <Link to="/mina" className="hover:text-blue-400">La mina</Link>
          <Link to="/empresa" className="hover:text-blue-400">La empresa</Link>
          <Link to="/contacto" className="hover:text-blue-400">Contacto</Link>
        </div>
      </div>

      {/* Menú hamburguesa (solo visible cuando se abre en pantallas móviles) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <Link to="/products" className="block px-2 py-1 hover:bg-gray-700 rounded">Productos</Link>
        <Link to="/mina" className="block px-2 py-1 hover:bg-gray-700 rounded">La mina</Link>
        <Link to="/empresa" className="block px-2 py-1 hover:bg-gray-700 rounded">La empresa</Link>
        <Link to="/contacto" className="block px-2 py-1 hover:bg-gray-700 rounded">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
