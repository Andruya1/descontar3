import React from 'react';
import { motion } from 'framer-motion';
import { Gift, MapPin, Users, Star, PiggyBank, Camera } from 'lucide-react';

const FeaturesSection = ({ handleFeatureClick }) => {
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

  const features = [
    {
      icon: Gift,
      title: "Descuentos Exclusivos",
      description: "Hasta 40% de descuento en hoteles premium, restaurantes gourmet y experiencias únicas",
      color: "text-amber-600"
    },
    {
      icon: MapPin,
      title: "Destinos Curados",
      description: "Selección experta de los mejores lugares turísticos de Argentina, desde Buenos Aires hasta Patagonia",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Comunidad Premium",
      description: "Conecta con otros viajeros y accede a recomendaciones exclusivas de nuestra comunidad",
      color: "text-pink-600"
    },
    {
      icon: Star,
      title: "Experiencias VIP",
      description: "Acceso prioritario a tours privados, cenas exclusivas y actividades premium",
      color: "text-amber-600"
    },
    {
      icon: PiggyBank,
      title: "Ahorro real",
      description: "El costo de la tarjeta se recupera en la primer compra.",
      color: "text-purple-600"
    },
    {
      icon: Camera,
      title: "Momentos Únicos",
      description: "Captura y comparte tus mejores momentos con nuestra comunidad de viajeros",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            ¿Por qué elegir <span className="text-gradient-gold">DescontAR</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que una app de descuentos, somos tu compañero de viaje para descubrir lo mejor de Argentina
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-luxury border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <div className={`w-12 h-12 ${feature.color} bg-gray-50 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;