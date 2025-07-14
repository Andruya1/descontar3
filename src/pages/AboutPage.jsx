import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Briefcase, HeartHandshake as Handshake, Target, Eye, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const AboutPage = ({ handleFeatureClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const contactCards = [
    {
      icon: Users,
      title: "Atención al Cliente",
      description: "¿Tienes dudas o necesitas ayuda con tu tarjeta? Nuestro equipo está listo para asistirte.",
      buttonText: "Contactar a Soporte",
      feature: "soporte_cliente"
    },
    {
      icon: Handshake,
      title: "Nuevos Comercios",
      description: "¿Quieres que tu negocio forme parte de la red DescontAR? ¡Nos encantaría conocerte!",
      buttonText: "Unirme",
      feature: "unirse_socio"
    },
    {
      icon: Briefcase,
      title: "Trabaja con Nosotros",
      description: "Buscamos personas apasionadas por los viajes para trabajos de Vendedores y Afiliadores.",
      buttonText: "Ver Oportunidades",
      feature: "ver_oportunidades"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nosotros - DescontAR</title>
        <meta name="description" content="Conoce la misión y visión de DescontAR, la empresa que está revolucionando el turismo en Argentina con descuentos exclusivos." />
      </Helmet>
      <AnimatedPage>
        <div className="pt-24 sm:pt-32">
          <div className="bg-gradient-to-br from-purple-50 to-amber-50/80 section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                  Nuestra <span className="text-gradient-purple">Pasión</span> es tu Aventura
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Nacimos de un sueño: hacer que cada rincón de Argentina sea accesible y emocionante para los viajeros del mundo. Creemos en el poder de las experiencias y en la alegría de descubrir.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeInUp}>
                  <img 
                    src="https://i.postimg.cc/fbzfzXzy/abundancia-y-lujo.avif" 
                    alt="Nuestra filosofía de viaje" 
                    className="rounded-2xl shadow-luxury w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-subtle">
                    <div className="flex items-center text-purple-600 mb-4">
                      <Target className="w-10 h-10 mr-4" />
                      <h2 className="text-3xl font-bold text-gray-900">Misión</h2>
                    </div>
                    <p className="text-gray-700 text-lg">
                      Facilitar a cada viajero una experiencia plena en Argentina, ofreciendo descuentos exclusivos que transforman su viaje en una oportunidad para disfrutar más, con libertad y confianza.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-subtle">
                    <div className="flex items-center text-amber-600 mb-4">
                      <Eye className="w-10 h-10 mr-4" />
                      <h2 className="text-3xl font-bold text-gray-900">Visión</h2>
                    </div>
                    <p className="text-gray-700 text-lg">
                      Ser la tarjeta digital líder de descuentos en Argentina, conectando a turistas de todo el mundo con los mejores comercios, y contribuyendo al desarrollo local con un turismo sostenible y consciente.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="section-padding bg-gradient-to-br from-gray-50 to-purple-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                variants={fadeInUp} 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Hablemos
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  Tu voz es importante para nosotros. Elige la vía de contacto que mejor se adapte a ti.
                </p>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {contactCards.map((card, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-2xl shadow-luxury text-center flex flex-col items-center"
                  >
                    <div className="bg-purple-100 p-4 rounded-full mb-6">
                      <card.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 flex-grow mb-6">{card.description}</p>
                    <Button onClick={() => handleFeatureClick(card.feature)} className="btn-gold w-full mt-auto">
                      <Mail className="w-4 h-4 mr-2" />
                      {card.buttonText}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default AboutPage;