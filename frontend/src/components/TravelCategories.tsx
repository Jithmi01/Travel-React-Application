import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { MountainSnowIcon, BuildingIcon, UmbrellaIcon, TentIcon, BoxIcon } from 'lucide-react';
const categories = [{
  id: 1,
  title: 'Beach Getaways',
  description: 'Relax on pristine beaches and enjoy the ocean',
  icon: BoxIcon,
  color: 'bg-blue-500',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
}, {
  id: 2,
  title: 'Mountain Escapes',
  description: 'Discover breathtaking views from the peaks',
  icon: MountainSnowIcon,
  color: 'bg-green-500',
  image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}, {
  id: 3,
  title: 'City Breaks',
  description: 'Explore vibrant urban culture and landmarks',
  icon: BuildingIcon,
  color: 'bg-purple-500',
  image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
}, {
  id: 4,
  title: 'Luxury Resorts',
  description: 'Indulge in premium accommodations and services',
  icon: UmbrellaIcon,
  color: 'bg-yellow-500',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}, {
  id: 5,
  title: 'Adventure Tours',
  description: 'Embark on thrilling expeditions and activities',
  icon: TentIcon,
  color: 'bg-red-500',
  image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}, {
  id: 6,
  title: 'Tropical Paradise',
  description: 'Experience the beauty of exotic destinations',
  icon: BoxIcon,
  color: 'bg-teal-500',
  image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}];
const TravelCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section ref={ref} className="py-16 bg-gray-50 px-4">
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
            Explore Travel Categories
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Find your perfect trip by category and discover experiences tailored
            to your interests
          </p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => {
          const Icon = category.icon;
          return <motion.div key={category.id} variants={itemVariants} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end">
                    <div className="p-6 w-full">
                      <div className={`${category.color} p-3 rounded-full inline-flex items-center justify-center mb-3`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    120+ destinations
                  </span>
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                    Explore more
                  </motion.button>
                </div>
              </motion.div>;
        })}
        </motion.div>
      </div>
    </section>;
};
export default TravelCategories;