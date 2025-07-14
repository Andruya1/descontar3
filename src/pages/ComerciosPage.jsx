import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import InteractiveMap from '@/components/maps/InteractiveMap';
import { merchants } from '@/data/merchants';

const ComerciosPage = () => {
  return (
    <>
      <Helmet>
        <title>Comercios Adheridos - DescontAR</title>
        <meta name="description" content="Explora el mapa de comercios adheridos a DescontAR en toda Argentina. Encuentra tu próximo destino de ahorro." />
      </Helmet>
      <div className="bg-white min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pt-24 pb-12 text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center justify-center bg-amber-100 text-amber-700 rounded-full p-2 mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Nuestros Comercios Adheridos
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Cada punto en el mapa es una nueva historia por descubrir. Navega, encuentra y disfruta de los mejores descuentos en todo el país.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white" style={{ height: '600px', width: '100%' }}>
              <InteractiveMap merchants={merchants} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ComerciosPage;