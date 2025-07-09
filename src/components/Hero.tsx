import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const target = document.querySelector('#contacto');
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToServices = () => {
    const target = document.querySelector('#servicios');
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="inicio" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-display font-bold text-dark-900 leading-tight"
            >
              Fusionamos datos con{' '}
              <span className="text-gradient">resultados explosivos</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-dark-600 leading-relaxed"
            >
              Especialistas en marketing de performance que transforman cada click en un lead calificado. 
              Combinamos tecnología avanzada con estrategias probadas para acelerar exponencialmente el crecimiento de tu negocio.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Quiero Multiplicar mis Leads
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="btn-outline text-lg px-8 py-4"
              >
                Análisis Gratuito
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-6 pt-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dark-700 font-medium">Leads calificados desde día 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dark-700 font-medium">ROI garantizado</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-dark-500">Leads Generados</div>
                  <div className="text-2xl font-bold text-accent-600">+340%</div>
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dark-900">2,500+</div>
                    <div className="text-sm text-dark-600">Leads Mensuales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dark-900">85%</div>
                    <div className="text-sm text-dark-600">Tasa de Conversión</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary-200 rounded-full blur-lg"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary-200 rounded-full blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
