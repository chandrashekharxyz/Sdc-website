
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-ultimate-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Start Your Journey Today
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Get in touch with us and take the first step towards your tech career.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <textarea placeholder="Message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-md transition-colors duration-300 shadow-lg hover-lift">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info and Social Media */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-between"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center text-lg"><MapPin className="mr-3 text-orange-500" size={24} /> Hyderabad, India</p>
                <p className="flex items-center text-lg"><Mail className="mr-3 text-orange-500" size={24} /> Admin@sdcindia.tech</p>
                <p className="flex items-center text-lg"><Phone className="mr-3 text-orange-500" size={24} /> Sdcindia01</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-6">
                <motion.a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300" variants={socialVariants} whileHover={{ scale: 1.1 }}>
                  <Facebook className="w-9 h-9" />
                </motion.a>
                <motion.a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300" variants={socialVariants} whileHover={{ scale: 1.1 }}>
                  <Twitter className="w-9 h-9" />
                </motion.a>
                <motion.a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300" variants={socialVariants} whileHover={{ scale: 1.1 }}>
                  <Linkedin className="w-9 h-9" />
                </motion.a>
                <motion.a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300" variants={socialVariants} whileHover={{ scale: 1.1 }}>
                  <Instagram className="w-9 h-9" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


