// src/pages/Home.jsx
import React from 'react';
import Carousel from './components/Carousel';
import InfoSection from './components/InfoSection';
import PurchaseSteps from './components/PurchaseSteps';
import ContactCTA from './components/ContactCTA';
import CustomerReviews from './components/CustomerReviews';
import Navbar from './components/Navbar1';

const Home = () => {
  return (
    <div>
      
      <Carousel />
      <InfoSection />
      <PurchaseSteps />
      <ContactCTA />
      <CustomerReviews />
    </div>
  );
};

export default Home;
