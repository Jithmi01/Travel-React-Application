import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-2xl font-bold mb-4">Wanderlust</h3>
            <p className="text-gray-400 mb-6">
              Discover the world with our expertly curated travel experiences.
              From exotic getaways to urban adventures, we make your travel
              dreams a reality.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{
              y: -3
            }} href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <FacebookIcon size={18} />
              </motion.a>
              <motion.a whileHover={{
              y: -3
            }} href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors">
                <TwitterIcon size={18} />
              </motion.a>
              <motion.a whileHover={{
              y: -3
            }} href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors">
                <InstagramIcon size={18} />
              </motion.a>
              <motion.a whileHover={{
              y: -3
            }} href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                <YoutubeIcon size={18} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Destinations', 'Packages', 'Blog', 'Contact Us'].map(item => <li key={item}>
                  <motion.a whileHover={{
                x: 5
              }} transition={{
                duration: 0.2
              }} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </motion.a>
                </li>)}
            </ul>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              {['Bali, Indonesia', 'Paris, France', 'Santorini, Greece', 'Tokyo, Japan', 'New York, USA', 'Machu Picchu, Peru'].map(item => <li key={item}>
                  <motion.a whileHover={{
                x: 5
              }} transition={{
                duration: 0.2
              }} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </motion.a>
                </li>)}
            </ul>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Adventure Street, Traveler's City, TC 10000
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-400">info@wanderlust.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 text-white p-2 rounded-l-md flex-1 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;