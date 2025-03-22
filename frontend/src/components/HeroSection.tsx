import React, { useEffect, useState, Children, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SearchIcon, MapPinIcon, CalendarIcon, UsersIcon, ArrowRightIcon } from 'lucide-react';
const HeroSection = () => {
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{
      y: isMounted ? y : 0,
      opacity: isMounted ? opacity : 1
    }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
        </div>
      </motion.div>
      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Discover the World's{' '}
            <span className="text-blue-400">Hidden Gems</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="bg-white rounded-lg shadow-xl p-4 md:p-6 mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPinIcon size={18} className="mr-2" />
                  <span className="text-sm font-medium">Destination</span>
                </div>
                <input type="text" placeholder="Where are you going?" className="w-full p-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center text-gray-500 mb-2">
                  <CalendarIcon size={18} className="mr-2" />
                  <span className="text-sm font-medium">Dates</span>
                </div>
                <input type="text" placeholder="Add dates" className="w-full p-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center text-gray-500 mb-2">
                  <UsersIcon size={18} className="mr-2" />
                  <span className="text-sm font-medium">Travelers</span>
                </div>
                <select className="w-full p-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
              <div className="flex items-end">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md w-full md:w-auto">
                  <div className="flex items-center justify-center">
                    <SearchIcon size={18} className="mr-2" />
                    <span>Search</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 1.5
      }}>
          <ArrowRightIcon size={24} className="rotate-90" />
        </motion.div>
      </motion.div>
    </div>;
};
export default HeroSection;