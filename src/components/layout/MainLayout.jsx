// MainLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ButtonWhatsapp from '../ui/ButttonWhatsapp';


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-purple-800">
      <Navbar />
      <main className="flex-1 mt-[60px]">
        {children}
        <ButtonWhatsapp />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;