import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { id: 1, number: '5,000+', label: 'Active Members', icon: Users },
    { id: 2, number: '40+', label: 'Events Organized', icon: Calendar },
    { id: 3, number: '200+', label: 'Projects Completed', icon: Trophy },
    { id: 4, number: '15+', label: 'Awards Won', icon: Trophy },
  ];

  return (
    <section id="stats" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Achievements Speak for Themselves
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


