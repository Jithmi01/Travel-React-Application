import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, StarIcon } from 'lucide-react';
interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  delay?: number;
}
const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  location,
  rating,
  price,
  delay = 0
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.5,
    delay
  }} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative overflow-hidden h-60">
        <motion.img whileHover={{
        scale: 1.05
      }} transition={{
        duration: 0.3
      }} src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <motion.button initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 0.1
        }} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium">
            View Details
          </motion.button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-sm">
            <StarIcon size={16} className="fill-current mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPinIcon size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">{price}</span>
            <span className="text-gray-600 text-sm"> / person</span>
          </div>
          <motion.div whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>;
};
export default DestinationCard;