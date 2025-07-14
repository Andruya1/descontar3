import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, UtensilsCrossed, Car, Ship, Bus, Mountain, ShoppingBag, Coffee, IceCream, Camera, Map, Anchor, Building2, Beer } from 'lucide-react';

const logos = [
  { icon: <Plane size={48} />, name: 'Aerolíneas' },
  { icon: <Hotel size={48} />, name: 'Hoteles' },
  { icon: <UtensilsCrossed size={48} />, name: 'Restaurantes' },
  { icon: <Car size={48} />, name: 'Alquiler de Autos' },
  { icon: <Ship size={48} />, name: 'Cruceros' },
  { icon: <Bus size={48} />, name: 'Transporte' },
  { icon: <Mountain size={48} />, name: 'Excursiones' },
  { icon: <ShoppingBag size={48} />, name: 'Tiendas' },
  { icon: <Coffee size={48} />, name: 'Cafeterías' },
  { icon: <IceCream size={48} />, name: 'Heladerías' },
  { icon: <Camera size={48} />, name: 'Tours Fotográficos' },
  { icon: <Map size={48} />, name: 'Agencias de Viaje' },
  { icon: <Anchor size={48} />, name: 'Paseos en Barco' },
  { icon: <Building2 size={48} />, name: 'Apart Hoteles' },
  { icon: <Beer size={48} />, name: 'Cervecerías' },
];

const marqueeVariants = {
  animate: {
    x: [0, -1680],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

const PartnerLogos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nuestros <span className="text-gradient-purple">Partners</span> de Confianza
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Colaboramos con las mejores marcas para asegurarte descuentos y experiencias inolvidables en todo tu viaje.
        </p>
      </div>
      <div className="mt-12 w-full overflow-hidden">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-6 flex flex-col items-center justify-center w-24">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-500 hover:bg-gray-100 transition-colors duration-300">
                {logo.icon}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">{logo.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;