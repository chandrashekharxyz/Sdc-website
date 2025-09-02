
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        SDC India
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;


