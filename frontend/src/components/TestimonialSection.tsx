import React, { useState, useRef, memo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Sarah Johnson',
  location: 'New York, USA',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  quote: "The trip to Bali exceeded all my expectations! The personalized itinerary perfectly matched my interests, and the local guides provided insights I wouldn't have discovered on my own.",
  rating: 5
}, {
  id: 2,
  name: 'Michael Chen',
  location: 'Toronto, Canada',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  quote: 'Booking our family vacation through Wanderlust was the best decision. Everything was seamless from start to finish, allowing us to focus on creating memories rather than logistics.',
  rating: 5
}, {
  id: 3,
  name: 'Emma Rodriguez',
  location: 'Madrid, Spain',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  quote: "I've traveled with many agencies before, but none compare to the attention to detail and customer service I received. The Japan tour was perfectly organized with just the right balance of activities and free time.",
  rating: 4
}];
const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const nextTestimonial = () => {
    setCurrent(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  const prevTestimonial = () => {
    setCurrent(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }).map((_, index) => <svg key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>);
  };
  return <section ref={ref} className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto">
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
        duration: 0.5
      }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Hear from our satisfied customers about their unforgettable
            experiences
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{
            opacity: 0,
            x: 100
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -100
          }} transition={{
            duration: 0.5
          }} className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow" />
                    <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-2">
                      <QuoteIcon size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {renderStars(testimonials[current].rating)}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">
                    "{testimonials[current].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-4">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={prevTestimonial} className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none -translate-x-1/2 md:-translate-x-5">
              <ChevronLeftIcon size={20} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={nextTestimonial} className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none translate-x-1/2 md:translate-x-5">
              <ChevronRightIcon size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;