import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const DestinationsGrid = ({ handleFeatureClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const destinations = [
    {
      name: "San Martín de los Andes",
      description: "Una Mágica aldea de montaña",
      discount: "Hasta 40% OFF",
      image: "https://i.postimg.cc/t4Tydr9y/Destino-SMA.avif",
      enabled: true
    },
    {
      name: "Bariloche",
      description: "Lagos cristalinos y montañas nevadas",
      discount: "Hasta 35% OFF",
      image: "https://i.postimg.cc/rpfrnZrJ/Destino-Bariloche.avif",
      enabled: false
    },
    {
      name: "Mendoza",
      description: "Viñedos premium y degustaciones",
      discount: "Hasta 40% OFF",
      image: "https://i.postimg.cc/SQrXQvsf/Destino-Mendoza.avif",
      enabled: false
    },
    {
      name: "Salta",
      description: "Arquitectura colonial y paisajes únicos",
      discount: "Hasta 30% OFF",
      image: "https://i.postimg.cc/ZRTW6GKH/Destino-Salta.avif",
      enabled: false
    },
    {
      name: "Ushuaia",
      description: "Fin del mundo y aventuras extremas",
      discount: "Hasta 40% OFF",
      image: "https://i.postimg.cc/y6MfBjfj/Destino-Usuahia.avif",
      enabled: false
    },
    {
      name: "Iguazú",
      description: "Cataratas espectaculares y selva",
      discount: "Hasta 25% OFF",
      image: "https://i.postimg.cc/kG8tfJ9r/destino-cataratas.avif",
      enabled: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Destinos <span className="text-gradient-purple">Impedibles</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comienza tu aventura en San Martín de los Andes, nuestro destino de lanzamiento. ¡Próximamente habilitaremos más lugares increíbles!
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={destination.enabled ? { scale: 1.02 } : {}}
            className="relative overflow-hidden rounded-2xl shadow-luxury group"
            onClick={destination.enabled ? () => handleFeatureClick(destination.name) : () => {}}
          >
            <img 
              className={`w-full h-64 object-cover transition-all duration-500 ${destination.enabled ? 'group-hover:scale-110' : 'grayscale group-hover:brightness-50'}`} 
              alt={`Destino ${destination.name}`} 
              src={destination.image} 
            />
            
            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent ${!destination.enabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-purple-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.discount}
                </span>
              </div>
              <p className="text-purple-200">{destination.description}</p>
            </div>

            {!destination.enabled && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white pointer-events-none"
              >
                <Lock className="w-12 h-12 mb-4" />
                <span className="text-2xl font-bold">Pronta Apertura</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DestinationsGrid;