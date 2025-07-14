import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, QrCode, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ handleFeatureClick }) => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-full text-sm mb-4">
              <Star className="w-4 h-4 mr-2 text-purple-500" />
              App #1 en Turismo Argentina
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Descubre Argentina con <br />
              <span className="text-amber-500">Descuentos Exclusivos</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              La app premium que conecta turistas con las mejores experiencias argentinas. Hoteles de lujo, restaurantes gourmet y actividades únicas con descuentos de hasta 50%.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-base" onClick={() => handleFeatureClick('Descargar Gratis')}>
                <Download className="mr-2 w-5 h-5" />
                Descargar Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50 hover:text-amber-600 font-bold text-base" asChild>
                <Link to="/descuentos">
                  <QrCode className="mr-2 w-5 h-5" />
                  Mi QR
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-4">
              <div className="flex -space-x-2">
                <img  class="inline-block h-10 w-10 rounded-full ring-2 ring-white" alt="Avatar de usuario satisfecho 1" src="https://images.unsplash.com/photo-1669152508492-b0b5f37d567e" />
                <img  class="inline-block h-10 w-10 rounded-full ring-2 ring-white" alt="Avatar de usuario satisfecho 2" src="https://images.unsplash.com/photo-1584995821808-6f4bc91656a4" />
                <img  class="inline-block h-10 w-10 rounded-full ring-2 ring-white" alt="Avatar de usuario satisfecho 3" src="https://images.unsplash.com/photo-1525838912574-6daf7306e2ab" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">+50k turistas satisfechos</div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm font-medium text-gray-600">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <img  class="rounded-2xl shadow-2xl w-full h-full object-cover" alt="Grupo de amigos brindando en un restaurante con domo de cristal" src="https://i.postimg.cc/nVjQczvn/domo02.avif" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;