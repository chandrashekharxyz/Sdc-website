
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "SDC India transformed my career! The hands-on projects and industry insights were invaluable. I landed my dream job at Google thanks to their guidance.",
      author: "Priya Sharma",
      title: "Software Engineer at Google",
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Priya+Sharma"
    },
    {
      id: 2,
      quote: "The community support and mentorship at SDC India are unparalleled. I was able to launch my own tech startup with the knowledge and network I gained here.",
      author: "Arjun Patel",
      title: "Startup Founder, TechStart India",
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Arjun+Patel"
    },
    {
      id: 3,
      quote: "SDC India provided me with the practical skills and confidence to excel in the competitive tech industry. I highly recommend their programs to aspiring developers.",
      author: "Sneha Reddy",
      title: "UX Designer at Microsoft",
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Sneha+Reddy"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 rounded-full object-cover mb-4" />
              <p className="text-gray-700 text-lg italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-xl font-bold text-gray-900">{testimonial.author}</h4>
              <p className="text-orange-600">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


