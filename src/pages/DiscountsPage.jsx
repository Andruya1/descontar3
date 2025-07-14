import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import VoucherCard from '@/components/vouchers/VoucherCard';
import PartnerLogos from '@/components/sections/PartnerLogos';
import ManifestoSection from '@/components/sections/ManifestoSection';

const vouchersData = [
  {
    title: "Escape Duo",
    description: "Para parejas que quieren disfrutar lo mejor de la ciudad con descuentos exclusivos.",
    price: "$9.999 ARS",
    features: [
      "Duración: 3 días consecutivos",
      "Cantidad de personas: hasta 2",
      "Descuentos en gastronomía",
      "Beneficios en 1 experiencia destacada",
      "Acceso a promociones flash"
    ],
    idealFor: "Escapadas rápidas, fines de semana.",
    color: "from-pink-500 to-rose-500",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
    isFeatured: false,
  },
  {
    title: "Full Week Love",
    description: "La experiencia premium para dos personas en un viaje soñado.",
    price: "$13.999 ARS",
    features: [
      "Duración: 7 días consecutivos",
      "Cantidad de personas: hasta 2",
      "Todos los beneficios del voucher 3D",
      "Descuentos en experiencias premium",
      "Descuento extra en tiendas regionales",
    ],
    idealFor: "Luna de miel, viajes largos.",
    color: "from-purple-500 to-indigo-500",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    isFeatured: true,
  },
  {
    title: "Team Trip",
    description: "La manera más económica y divertida de recorrer en grupos de 3 a 5 personas.",
    price: "$15.999 ARS",
    features: [
      "Duración: 4 días consecutivos",
      "Cantidad de personas: 3 a 5",
      "Descuentos en gastronomía grupal",
      "Beneficio en una actividad grupal",
      "Promo extra en transporte local",
    ],
    idealFor: "Familias o grupos de amigos.",
    color: "from-teal-500 to-cyan-500",
    buttonColor: "bg-teal-500 hover:bg-teal-600",
    isFeatured: false,
  },
  {
    title: "VIP Solo Pass",
    description: "Acceso total para viajeros solitarios que buscan vivir la experiencia sin límites.",
    price: "$39.999 ARS",
    features: [
      "Duración: 30 días consecutivos",
      "Cantidad de personas: 1",
      "Descuentos exclusivos en restaurantes premium",
      "Prioridad en reservas de experiencias",
      "Beneficio especial VIP"
    ],
    idealFor: "Viajeros con máximo confort y exclusividad.",
    color: "from-amber-500 to-yellow-500",
    buttonColor: "bg-amber-500 hover:bg-amber-600",
    isFeatured: false,
  },
];

const DiscountsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Nuestros Pases - DescontAR</title>
        <meta name="description" content="Elige tu pase de descuento ideal y comienza a ahorrar en tu viaje por Argentina. Pases para parejas, grupos y viajeros solitarios." />
      </Helmet>
      <div className="bg-white">
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <header className="text-center pt-24 pb-16 px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Ticket className="mx-auto h-12 w-12 text-amber-500" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight"
            >
              Elige Tu <span className="text-gradient-purple">Pase Ideal</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Tenemos un pase para cada tipo de viajero. Descubre cuál es el tuyo y empieza a disfrutar de beneficios exclusivos.
            </motion.p>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {vouchersData.map((voucher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="h-full"
                >
                  <VoucherCard {...voucher} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <PartnerLogos />
        <ManifestoSection />
      </div>
    </motion.div>
  );
};

export default DiscountsPage;