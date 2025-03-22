import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularDestinations from './components/PopularDestinations';
import TravelCategories from './components/TravelCategories';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HeroSection />
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <PopularDestinations />
          <TravelCategories />
          <TestimonialSection />
        </motion.div>
      </main>
      <Footer />
    </div>;
}