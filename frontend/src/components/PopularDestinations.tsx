import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const PopularDestinations = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px'
  });
  const destinations = [{
    id: 1,
    title: 'Santorini Sunset',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    rating: 4.9,
    price: '$1,299'
  }, {
    id: 2,
    title: 'Bali Retreat',
    location: 'Ubud, Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    rating: 4.8,
    price: '$899'
  }, {
    id: 3,
    title: 'Tokyo Adventure',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80',
    rating: 4.7,
    price: '$1,499'
  }, {
    id: 4,
    title: 'Machu Picchu Trek',
    location: 'Cusco, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    rating: 4.9,
    price: '$1,799'
  }];
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {
        current
      } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Destinations
            </h2>
            <p className="text-gray-600 mt-2">
              Explore our top-rated destinations around the world
            </p>
          </motion.div>
          <div className="hidden md:flex space-x-2">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronLeftIcon size={24} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronRightIcon size={24} />
            </motion.button>
          </div>
        </div>
        <div ref={scrollRef} className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
          {destinations.map((destination, index) => <div key={destination.id} className="min-w-[300px] md:min-w-[350px] snap-start">
              <DestinationCard image={destination.image} title={destination.title} location={destination.location} rating={destination.rating} price={destination.price} delay={index * 0.1} />
            </div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="flex justify-center mt-8">
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
            View all destinations
            <ChevronRightIcon size={18} className="ml-1" />
          </button>
        </motion.div>
      </div>
    </section>;
};
export default PopularDestinations;