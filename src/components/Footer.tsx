import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/navigation';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div className="text-3xl font-display font-bold">
                Fusion<span className="text-gradient bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text">Marketing</span>
              </div>
            </div>
            <p className="text-dark-300 text-lg leading-relaxed mb-6">
              Especialistas en transformar datos en crecimiento exponencial. Generamos leads calificados que convierten, 
              optimizamos campañas que escalan y entregamos resultados medibles para acelerar tu negocio.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="mailto:contacto@fusionmarketing.com.ar" 
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                title="Email"
              >
                <span className="text-white">📧</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/5491145678900" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                title="WhatsApp"
              >
                <span className="text-white">📱</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/company/fusion-marketing" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                title="LinkedIn"
              >
                <span className="text-white">💼</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="text-dark-300 hover:text-white transition-colors">Generación de Leads</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="text-dark-300 hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="text-dark-300 hover:text-white transition-colors">Automatización</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="text-dark-300 hover:text-white transition-colors">Análisis y Optimización</a></li>
              <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('#contacto'); }} className="text-dark-300 hover:text-white transition-colors">Consultoria Estratégica</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('#nosotros'); }} className="text-dark-300 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#casos" onClick={(e) => { e.preventDefault(); scrollToSection('#casos'); }} className="text-dark-300 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('#contacto'); }} className="text-dark-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-dark-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-dark-300 mb-4 md:mb-0">
              <p>© 2025 FusionMarketing. Todos los derechos reservados.</p>
              <p className="text-sm">
                CUIT: 30-12345678-9 | Registro: Buenos Aires, Argentina
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-dark-300 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
