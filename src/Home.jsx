// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link aquí

import CustomerReviews from './components/CustomerReviews';
import Carousel from './components/Carousel';
import TraditionSection from './components/TraditionSection';
import AboutCompany from './components/AboutCompany';
import PurchaseAndContact from './components/PurchaseAndContact';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
     
     <Carousel />


      <TraditionSection />
      <AboutCompany />
      <PurchaseAndContact />

      <CustomerReviews />
    </div>
  );
};

export default Home;
