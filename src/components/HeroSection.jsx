
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-hero-gradient"
    >
      <motion.div
        className="relative z-10 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 text-ultimate-gradient animate-text-shimmer"
          variants={itemVariants}
        >
          Where Innovation Meets Community
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-8"
          variants={itemVariants}
        >
          Empowering the next generation of developers through <span className="font-bold text-orange-600">Innovation</span>, <span className="font-bold">Collaboration</span>, and <span className="font-bold text-orange-600">Excellence</span>.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover-lift transition-colors duration-300">
            Join SDC Today <span className="icon-[ic--material-symbols--arrow-right] w-6 h-6"></span>
          </button>
          <button className="bg-white text-orange-600 border border-orange-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover-lift transition-colors duration-300">
            Explore Programs
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


