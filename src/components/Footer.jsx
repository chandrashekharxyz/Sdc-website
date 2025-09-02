
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; 2024 SDC India. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


