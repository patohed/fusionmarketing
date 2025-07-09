import { motion } from 'framer-motion';

const services = [
  {
    icon: '📊',
    title: 'Generación de Leads Inteligente',
    description: 'Transformamos visitantes en leads calificados usando IA y análisis predictivo. Aumentamos tu base de clientes potenciales en un 400% promedio.',
    features: ['Scoring automático de leads', 'Segmentación avanzada', 'Nurturing personalizado']
  },
  {
    icon: '🎯',
    title: 'Campañas de Performance',
    description: 'Optimizamos cada peso invertido en publicidad digital. Campañas basadas en datos que entregan resultados medibles y escalables.',
    features: ['ROI optimizado', 'Targeting de precisión', 'Análisis en tiempo real']
  },
  {
    icon: '⚡',
    title: 'Automatización de Marketing',
    description: 'Automatizamos procesos repetitivos para escalar tu negocio. Desde el primer contacto hasta el cierre, todo funciona sin intervención manual.',
    features: ['Workflows inteligentes', 'Secuencias de email', 'CRM integrado']
  },
  {
    icon: '📈',
    title: 'Análisis y Optimización',
    description: 'Medimos todo lo que importa. Dashboards en tiempo real que te permiten tomar decisiones basadas en datos concretos.',
    features: ['Métricas clave', 'Reportes automáticos', 'Optimización continua']
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            Servicios que <span className="text-gradient">Multiplican Resultados</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Combinamos estrategia, tecnología y creatividad para generar leads que convierten. 
            Cada servicio está diseñado para maximizar tu ROI y acelerar el crecimiento.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-dark-900 mb-3">
                {service.title}
              </h3>
              <p className="text-dark-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-dark-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Descubre Nuestros Servicios
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
