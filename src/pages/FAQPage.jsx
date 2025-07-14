import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(250, 245, 255, 1)" : "rgba(255, 255, 255, 1)" }}
      className="border-b border-gray-200"
    >
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-purple-600" />
        </motion.div>
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", y: 0 },
          collapsed: { opacity: 0, height: 0, y: -10 }
        }}
        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="pb-5 px-6 text-gray-600">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "¿Qué es DescontAR y cómo funciona?",
      answer: "DescontAR es una tarjeta de descuentos digital diseñada para turistas en Argentina. Una vez que adquieres tu pase, obtienes un código QR que puedes presentar en nuestra red de comercios adheridos para recibir descuentos instantáneos en gastronomía, alojamiento, experiencias y más."
    },
    {
      question: "¿Cómo compro y activo mi pase?",
      answer: "Puedes comprar tu pase directamente desde nuestra página de 'Nuestros Pases'. Una vez completada la compra, serás dirigido a una página de activación donde ingresarás tus datos y seleccionarás la fecha de inicio. ¡Tu QR se generará al instante!"
    },
    {
      question: "¿El pase es físico o digital?",
      answer: "¡Es 100% digital! Recibirás un código QR que puedes guardar en tu teléfono. Es ecológico, práctico y siempre lo tendrás a mano."
    },
    {
      question: "¿Los descuentos son ilimitados?",
      answer: "Sí, durante el período de validez de tu pase, puedes usar los descuentos en los comercios adheridos tantas veces como quieras, a menos que se especifique lo contrario en una promoción particular."
    },
    {
      question: "¿Qué pasa si pierdo mi código QR?",
      answer: "No te preocupes. Si guardaste el QR en tu teléfono, puedes seguir usándolo. Si lo perdiste, puedes contactar a nuestro soporte con tus datos de activación y te ayudaremos a recuperarlo."
    },
    {
        question: "¿Puedo usar mi pase en cualquier ciudad de Argentina?",
        answer: "Actualmente operamos en destinos seleccionados como San Martín de los Andes, Bariloche, Mendoza y Salta. Estamos expandiendo nuestra red constantemente. Revisa la sección 'Destinos' para ver la lista actualizada de ciudades y comercios."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - DescontAR</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más comunes sobre DescontAR, tu tarjeta de descuentos para viajar por Argentina." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50/20 section-padding pt-24 sm:pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <HelpCircle className="mx-auto h-12 w-12 text-purple-600" />
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
              >
                Preguntas Frecuentes
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              >
                ¿Tienes dudas? Aquí encontrarás las respuestas a las preguntas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.
              </motion.p>
            </div>

            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-white rounded-2xl shadow-luxury overflow-hidden"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQPage;