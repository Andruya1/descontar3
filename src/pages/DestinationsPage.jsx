import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HardHat, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DestinationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Destinos en Construcción - DescontAR</title>
        <meta name="description" content="Página de destinos actualmente en construcción." />
      </Helmet>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-50 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg text-center p-8 md:p-12 border border-amber-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <HardHat className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900">Página en Construcción</h1>
          <p className="text-gray-600 mt-4 mb-8 text-lg leading-relaxed">
            Estamos trabajando duro para traerte los mejores destinos. ¡Vuelve pronto!
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              Si experimentas algún problema con la plataforma o quieres reportar un error, puedes contactar al equipo de soporte de Horizons.
            </p>
            <Button size="sm" variant="link" asChild className="mt-2 text-blue-600 font-semibold">
              <a href="mailto:support@horizons.ai">
                <Mail className="mr-2 h-4 w-4" />
                Contactar a Soporte
              </a>
            </Button>
          </div>
            <Button size="lg" variant="outline" className="w-full mt-8" asChild>
              <Link to="/">
                Volver al Inicio
              </Link>
            </Button>
        </motion.div>
      </div>
    </>
  );
};

export default DestinationsPage;