import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const LegalPageLayout = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-gray-50 py-24 sm:py-32"
  >
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-subtle">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-gradient-purple mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none prose-a:text-purple-600 hover:prose-a:text-purple-500">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - DescontAR</title>
        <meta name="description" content="Lea nuestra Política de Privacidad para entender cómo DescontAR recolecta, usa y protege su información personal." />
      </Helmet>
      <LegalPageLayout title="Política de Privacidad">
        <p className="lead">
          Tu privacidad es importante para nosotros. Es política de DescontAR respetar tu privacidad con respecto a cualquier información que podamos recopilar de ti a través de nuestro sitio web.
        </p>

        <h2>1. Información que Recopilamos</h2>
        <p>
          Solicitamos información personal solo cuando realmente la necesitamos para brindarte un servicio. La recopilamos por medios justos y legales, con tu conocimiento y consentimiento. También te informamos por qué la estamos recopilando y cómo se utilizará.
        </p>
        <p>
          La información personal que se te pide que proporciones, y las razones por las que se te pide que la proporciones, se te aclararán en el momento en que te pidamos que proporciones tu información personal.
        </p>

        <h2>2. Cómo Usamos tu Información</h2>
        <p>
          Usamos la información que recopilamos de varias maneras, que incluyen:
        </p>
        <ul>
            <li>Proveer, operar y mantener nuestro sitio web</li>
            <li>Mejorar, personalizar y expandir nuestro sitio web</li>
            <li>Entender y analizar cómo usas nuestro sitio web</li>
            <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
            <li>Comunicarnos contigo para brindarte actualizaciones y otra información</li>
        </ul>

        <h2>3. Archivos de Registro</h2>
        <p>
          DescontAR sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), marca de fecha y hora, páginas de referencia/salida y posiblemente el número de clics.
        </p>

        <h2>4. Seguridad de tus Datos</h2>
        <p>
          La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger tus Datos Personales, no podemos garantizar su seguridad absoluta.
        </p>

        <h2>5. Enlaces a Otros Sitios</h2>
        <p>
          Nuestro servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si haces clic en un enlace de un tercero, serás dirigido al sitio de ese tercero. Te recomendamos encarecidamente que revises la Política de Privacidad de cada sitio que visites.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Última actualización: 11 de Julio de 2025
        </p>
      </LegalPageLayout>
    </>
  );
};

export default PrivacyPolicyPage;