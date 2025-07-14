import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ handleFeatureClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const logoUrl = "https://i.postimg.cc/SKXwKRhb/logo-solo.png";

  const navLinkClasses = "text-gray-700 hover:text-amber-600 transition-colors font-medium";
  const activeLinkClasses = "text-amber-600";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoUrl} alt="Logo DescontAR" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">DescontAR</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Inicio</NavLink>
            <NavLink to="/descuentos" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Descuentos</NavLink>
            <NavLink to="/destinos" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Destinos</NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Nosotros</NavLink>
            <Button 
              onClick={() => handleFeatureClick('descargar')}
              className="btn-gold"
            >
              Descargar App
            </Button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-4">
            <NavLink to="/" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium">Inicio</NavLink>
            <NavLink to="/descuentos" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium">Descuentos</NavLink>
            <NavLink to="/destinos" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium">Destinos</NavLink>
            <NavLink to="/nosotros" onClick={closeMenu} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium">Nosotros</NavLink>
            <Button 
              onClick={() => { handleFeatureClick('descargar'); closeMenu(); }}
              className="btn-gold w-full"
            >
              Descargar App
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;