import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ handleFeatureClick }) => {
  const logoUrl = "https://i.postimg.cc/L8NsVKzy/Logo-Descont-AR.png";

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Logo DescontAR" className="w-8 h-8" />
              <span className="text-xl font-bold">DescontAR</span>
            </div>
            <p className="text-gray-400">
              Tu compañero de viaje para descubrir Argentina con descuentos exclusivos.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Destinos</span>
            <div className="space-y-2">
              <button onClick={() => handleFeatureClick('san-martin-de-los-andes')} className="block text-gray-400 hover:text-white transition-colors">San Martín de los Andes</button>
              <button onClick={() => handleFeatureClick('bariloche')} className="block text-gray-400 hover:text-white transition-colors">Bariloche</button>
              <button onClick={() => handleFeatureClick('mendoza')} className="block text-gray-400 hover:text-white transition-colors">Mendoza</button>
              <button onClick={() => handleFeatureClick('salta')} className="block text-gray-400 hover:text-white transition-colors">Salta</button>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Empresa</span>
            <div className="space-y-2">
              <Link to="/nosotros" className="block text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link>
              <Link to="/nosotros" className="block text-gray-400 hover:text-white transition-colors">Contacto</Link>
              <Link to="/privacidad" className="block text-gray-400 hover:text-white transition-colors">Privacidad</Link>
              <Link to="/terminos" className="block text-gray-400 hover:text-white transition-colors">Términos</Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Soporte</span>
            <div className="space-y-2">
              <button onClick={() => handleFeatureClick('ayuda')} className="block text-gray-400 hover:text-white transition-colors">Centro de Ayuda</button>
              <Link to="/faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 DescontAR. Todos los derechos reservados. Hecho con ❤️ para viajeros.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;