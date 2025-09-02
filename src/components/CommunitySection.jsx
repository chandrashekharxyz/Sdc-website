
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Briefcase } from 'lucide-react';

const CommunitySection = () => {
  const benefitVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-ultimate-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Where Innovation Meets Collaboration
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Our community fosters an environment of shared learning and growth, empowering students to excel through diverse opportunities.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover-lift"
            variants={benefitVariants}
          >
            <Users className="w-16 h-16 text-orange-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Collaborative Learning</h3>
            <p className="text-gray-700">Learn together through peer programming, study groups, and knowledge sharing sessions.</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover-lift"
            variants={benefitVariants}
          >
            <Trophy className="w-16 h-16 text-orange-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Competitions & Hackathons</h3>
            <p className="text-gray-700">Participate in exciting competitions and hackathons to showcase your skills.</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover-lift"
            variants={benefitVariants}
          >
            <Briefcase className="w-16 h-16 text-orange-600 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry Connections</h3>
            <p className="text-gray-700">Network with industry professionals and get direct access to job opportunities.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;


