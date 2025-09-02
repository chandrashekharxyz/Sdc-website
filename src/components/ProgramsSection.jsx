
import React from 'react';
import { motion } from 'framer-motion';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: 'Hash-It-Out Season 2',
      type: 'Hackathon',
      status: 'Completed',
      description: 'A 24-hour coding marathon focused on blockchain solutions.',
      date: 'October 26-27, 2024',
      image: 'https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Hackathon'
    },
    {
      id: 2,
      title: 'AI Summit 2025',
      type: 'Summit',
      status: 'Upcoming',
      description: 'Exploring the future of artificial intelligence and its impact on society.',
      date: 'January 15-16, 2025',
      image: 'https://via.placeholder.com/400x250/33FF57/FFFFFF?text=AI+Summit'
    },
    {
      id: 3,
      title: 'UX-Blosion Bootcamp',
      type: 'Bootcamp',
      status: 'Active',
      description: 'Intensive training in user experience design principles and tools.',
      date: 'November 1-30, 2024',
      image: 'https://via.placeholder.com/400x250/3357FF/FFFFFF?text=UX+Bootcamp'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      type: 'Workshop',
      status: 'Completed',
      description: 'Hands-on introduction to Python for data analysis and machine learning.',
      date: 'September 10, 2024',
      image: 'https://via.placeholder.com/400x250/FF33A8/FFFFFF?text=Python+Workshop'
    },
    {
      id: 5,
      title: 'Blockchain & Web3 Workshop',
      type: 'Workshop',
      status: 'Completed',
      description: 'Understanding the fundamentals of blockchain technology and Web3 development.',
      date: 'August 20, 2024',
      image: 'https://via.placeholder.com/400x250/33FFD4/FFFFFF?text=Blockchain+Workshop'
    },
    {
      id: 6,
      title: 'Tech Vision Bangalore',
      type: 'Conference',
      status: 'Completed',
      description: 'Annual tech conference in Bangalore, India.',
      date: 'July 12-13, 2024',
      image: 'https://via.placeholder.com/400x250/FF8C00/FFFFFF?text=Conference'
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-ultimate-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Programs & Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-orange-600 font-semibold mb-2">{program.type} - {program.status}</p>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-gray-500 text-sm">Date: {program.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;


