
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Home, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>¡Gracias por tu compra! - DescontAR</title>
        <meta name="description" content="Confirmación de tu compra en DescontAR. Recibirás tu QR por WhatsApp." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50/30 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md bg-white rounded-2xl shadow-luxury text-center p-8 md:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900">¡Gracias!</h1>
          <p className="text-gray-600 mt-4 mb-8 text-lg leading-relaxed">
            En cuanto se acredite el pago te enviaremos el QR a tu Whatsapp. ¡Esperamos que disfrutes de tus descuentos!
          </p>

          <div className="space-y-3">
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </Button>
             <p className="text-xs text-gray-500 pt-2">
                Si tienes alguna duda, no dudes en <Link to="/nosotros#contacto" className="underline font-semibold hover:text-amber-600">contactarnos</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYouPage;
