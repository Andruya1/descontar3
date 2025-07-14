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

const TermsAndConditionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - DescontAR</title>
        <meta name="description" content="Lea los Términos y Condiciones de uso de los servicios de DescontAR." />
      </Helmet>
      <LegalPageLayout title="Términos y Condiciones">
        <p className="lead">
          Bienvenido a DescontAR. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web y los servicios de DescontAR.
        </p>

        <h2>1. Introducción</h2>
        <p>
          Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando DescontAR si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
        </p>

        <h2>2. Licencia</h2>
        <p>
          A menos que se indique lo contrario, DescontAR y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en DescontAR. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a esto desde DescontAR para tu propio uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
        </p>
        <p>No debes:</p>
        <ul>
          <li>Volver a publicar material de DescontAR</li>
          <li>Vender, alquilar o sublicenciar material de DescontAR</li>
          <li>Reproducir, duplicar o copiar material de DescontAR</li>
          <li>Redistribuir contenido de DescontAR</li>
        </ul>
        
        <h2>3. Uso Aceptable</h2>
        <p>
          No debes utilizar este sitio web de ninguna manera que cause, o pueda causar, daño al sitio web o deterioro de la disponibilidad o accesibilidad de DescontAR; o de cualquier manera que sea ilegal, fraudulenta o dañina, o en conexión con cualquier propósito o actividad ilegal, fraudulenta o dañina.
        </p>

        <h2>4. Limitaciones de Responsabilidad</h2>
        <p>
          En ningún caso DescontAR, ni ninguno de sus funcionarios, directores y empleados, será responsable ante ti por cualquier cosa que surja de o de alguna manera esté relacionada con tu uso de este sitio web, ya sea que dicha responsabilidad se base en un contrato, agravio o de otro modo.
        </p>

        <h2>5. Variación de Términos</h2>
        <p>
          DescontAR tiene permitido revisar estos términos en cualquier momento que lo considere oportuno, y al usar este sitio web se espera que revises estos términos de forma regular.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Última actualización: 11 de Julio de 2025
        </p>
      </LegalPageLayout>
    </>
  );
};

export default TermsAndConditionsPage;