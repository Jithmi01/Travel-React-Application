import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, X as CloseIcon, Search as SearchIcon, Globe as GlobeIcon, UserIcon } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="flex items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Wanderlust
          </a>
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          {['Destinations', 'Experiences', 'Deals', 'About'].map((item, index) => <motion.a key={item} href="#" initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className={`font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {item}
              </motion.a>)}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <motion.button initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className={`p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
            <SearchIcon size={20} className={isScrolled ? 'text-gray-700' : 'text-white'} />
          </motion.button>
          <motion.button initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className={`p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
            <GlobeIcon size={20} className={isScrolled ? 'text-gray-700' : 'text-white'} />
          </motion.button>
          <motion.button initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
            <span className="flex items-center gap-2">
              <UserIcon size={18} />
              Sign In
            </span>
          </motion.button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {['Destinations', 'Experiences', 'Deals', 'About'].map(item => <a key={item} href="#" className="text-gray-800 font-medium py-2 border-b border-gray-100">
                  {item}
                </a>)}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors mt-2">
                Sign In
              </button>
            </div>
          </div>
        </motion.div>}
    </header>;
};
export default Navbar;