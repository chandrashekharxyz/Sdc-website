
import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ scrollY }) => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const isScrolled = scrollY > 50; // Adjust threshold as needed

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/sdc-logo.png" alt="SDC India Logo" className="h-10 mr-3" />
          <span className="text-white text-2xl font-bold">SDC India</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-orange-400 transition-colors duration-300">Home</a>
          <a href="#about" className="text-white hover:text-orange-400 transition-colors duration-300">About</a>
          <a href="#programs" className="text-white hover:text-orange-400 transition-colors duration-300">Programs</a>
          <a href="#success-stories" className="text-white hover:text-orange-400 transition-colors duration-300">Success Stories</a>
          <a href="#contact" className="text-white hover:text-orange-400 transition-colors duration-300">Contact</a>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          Join Community
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;


