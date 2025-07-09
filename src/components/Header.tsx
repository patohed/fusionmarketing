import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div className="text-2xl font-display font-bold text-dark-900">
              Fusion<span className="text-gradient">Marketing</span>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="text-dark-700 hover:text-primary-600 transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              onClick={(e) => handleNavClick(e, '#servicios')}
              className="text-dark-700 hover:text-primary-600 transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              onClick={(e) => handleNavClick(e, '#nosotros')}
              className="text-dark-700 hover:text-primary-600 transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#casos" 
              onClick={(e) => handleNavClick(e, '#casos')}
              className="text-dark-700 hover:text-primary-600 transition-colors"
            >
              Casos de Éxito
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="text-dark-700 hover:text-primary-600 transition-colors"
            >
              Contacto
            </a>
          </nav>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick({} as React.MouseEvent<HTMLAnchorElement>, '#contacto')}
            className="btn-primary hidden md:block"
          >
            Generar Leads Ahora
          </motion.button>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-dark-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-dark-200"
          >
            <nav className="py-4 space-y-2">
              <a 
                href="#inicio" 
                onClick={(e) => handleNavClick(e, '#inicio')}
                className="block px-4 py-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleNavClick(e, '#servicios')}
                className="block px-4 py-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Servicios
              </a>
              <a 
                href="#nosotros" 
                onClick={(e) => handleNavClick(e, '#nosotros')}
                className="block px-4 py-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Nosotros
              </a>
              <a 
                href="#casos" 
                onClick={(e) => handleNavClick(e, '#casos')}
                className="block px-4 py-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Casos de Éxito
              </a>
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="block px-4 py-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Contacto
              </a>
              <div className="px-4 py-2">
                <button 
                  onClick={() => handleNavClick({} as React.MouseEvent<HTMLAnchorElement>, '#contacto')}
                  className="btn-primary w-full"
                >
                  Generar Leads Ahora
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
