'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const sidebarRef = useRef(null); // Referencia a la sidebar

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Manejar clics fuera de la sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Barra de navegación */}
      <nav className={`fixed top-0 w-full z-50 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo a la izquierda */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={300}
                height={100}
                className="h-16 object-contain" // Logo ocupa la altura de la navbar
              />
            </Link>
          </div>

          {/* Links del menú, visibles en pantallas grandes y centrados */}
          <div className="hidden lg:flex flex-grow justify-center space-x-8">
            <Link href="/about" className="hover:text-blue-500">Sobre Nosotros</Link>
            <Link href="/lamina" className="hover:text-blue-500">La Mina</Link>
            <Link href="/contact" className="hover:text-blue-500">Contacto</Link>
          </div>

          {/* Botones de modo oscuro y perfil, alineados a la derecha */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-xl cursor-pointer">
              {darkMode ? '🌙' : '☀️'}
            </button>
            <button onClick={() => router.push('/profile')}>
              <Image
                src="https://avatars.dicebear.com/api/male/username.svg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>
          </div>

          {/* Menú hamburguesa visible solo en móviles */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Sidebar deslizante para móvil */}
        <div
          ref={sidebarRef} // Referencia a la sidebar
          className={`fixed top-0 right-0 h-full w-64 bg-${darkMode ? 'gray-800' : 'white'} transition-transform duration-300 transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Menú</h2>
            <button onClick={closeMenu} className="text-xl">
              ✖
            </button>
          </div>
          <div className="flex flex-col items-center py-10">
            <Link href="/about" className="py-2" onClick={closeMenu}>Sobre Nosotros</Link>
            <Link href="/lamina" className="py-2" onClick={closeMenu}>La Mina</Link>
            <Link href="/contact" className="py-2" onClick={closeMenu}>Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Estilo global para modo oscuro */}
      <style jsx global>{`
        body.dark-mode {
          background-color: #1a202c;
          color: #f7fafc;
        }
      `}</style>
    </>
  );
}
