
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket } from 'lucide-react';

const AboutSection = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-ultimate-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Pioneering Tech Education in India
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          We're not just another developer community. We're a launchpad for your tech career, connecting students with industry leaders and providing hands-on experience with the latest technologies.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={featureVariants}
          >
            <Lightbulb className="w-16 h-16 text-orange-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Hub</h3>
            <p className="text-gray-700">Access cutting-edge technologies and work on projects that matter</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={featureVariants}
          >
            <Users className="w-16 h-16 text-orange-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Driven</h3>
            <p className="text-gray-700">Connect with like-minded developers and build lasting relationships</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={featureVariants}
          >
            <Rocket className="w-16 h-16 text-orange-600 mb-6 mx-auto" />
            <h3 className="text-2jl font-bold text-gray-900 mb-4">Career Focused</h3>
            <p className="text-gray-700">Get mentorship and guidance to accelerate your tech career</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


