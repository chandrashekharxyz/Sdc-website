import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import other components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TechDomainsSection from './components/TechDomainsSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleSystem from './components/ParticleSystem';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Background Particle System */}
            <ParticleSystem />
            
            {/* Scroll Progress Indicator */}
            <ScrollProgress />
            
            {/* Navigation */}
            <Navigation scrollY={scrollY} />
            
            {/* Main Content */}
            <main className="relative z-10">
              <HeroSection />
              <StatsSection />
              <AboutSection />
              <TechDomainsSection />
              <ProgramsSection />
              <TestimonialsSection />
              <CommunitySection />
              <ContactSection />
            </main>
            
            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


