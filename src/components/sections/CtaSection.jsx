import React from 'react';
import { motion } from 'framer-motion';
import { Download, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = ({ handleFeatureClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para tu próxima aventura?
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Únete a miles de viajeros que ya descubren Argentina con descuentos exclusivos
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center my-8"
          >
            <img src="https://i.postimg.cc/pLp4LrfY/celu.avif" alt="App DescontAR en un celular" className="w-auto h-40 md:h-48" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => handleFeatureClick('descargar')}
              className="bg-white text-amber-600 hover:bg-gray-50 text-lg px-8 py-4 h-auto font-semibold rounded-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar App
            </Button>
            <button 
              onClick={() => handleFeatureClick('Mi QR')}
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 h-auto font-semibold rounded-xl transition-all duration-300 flex items-center justify-center"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Mi QR
            </button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-amber-100 max-w-3xl mx-auto pt-4"
          >
            Descargá la app para tener acceso a todos los destinos y conocer a dónde están los comercios adheridos. También podés comprar solo el QR para tu ciudad, sin necesidad de descargar nada. ¡Lo mostrás y listo!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center items-center space-x-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50k+</div>
              <div className="text-amber-100">Descargas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-amber-100">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-amber-100">Comercios</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;