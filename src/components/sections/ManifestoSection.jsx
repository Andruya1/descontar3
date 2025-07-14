import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection = () => {
  const imageUrl = "https://i.postimg.cc/bwrRPmGV/16.avif";

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800"
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900">
              Más que un Descuento, una <span className="text-gradient-purple">Experiencia</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-gray-600">
              <p>
                Viajar es mucho más que conocer lugares nuevos. Es sentir el viento frío de la montaña en la cara, disfrutar el aroma intenso de un asado recién hecho, el calor de un café en la mañana, el murmullo del bosque y el silencio azul de un lago al atardecer.
              </p>
              <p>
                Viajar es conectar con personas que te hacen sentir como en casa. Es descubrir sabores que despiertan tu curiosidad y paisajes que dejan sin palabras. Es sonreír sin darte cuenta y guardar recuerdos que acompañan toda la vida.
              </p>
              <p className="font-semibold text-gray-700">
                Creamos esta tarjeta para que cada experiencia en Argentina sea aún más especial, más accesible, más tuya.
              </p>
              <p>
                Queremos que vivas cada día con la libertad de elegir lo que te hace feliz, y que al regresar, tu corazón susurre que valió cada peso.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-w-4 aspect-h-3"
          >
            <img 
              className="object-cover rounded-3xl shadow-2xl w-full h-full"
              src={imageUrl}
              alt="Comida compartida en un ambiente cálido y acogedor."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;