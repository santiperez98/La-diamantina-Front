import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar1';
import Home from './Home';
import Products from './Products';
import Mina from './Mina';
import Empresa from './Empresa';
import Contacto from './Contacto';
import Footer1 from './Components/Footer1';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mina" element={<Mina />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />

      </Routes>
      <Footer1 />
    </Router>
  );
};

export default App;
