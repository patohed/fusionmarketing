import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: 'Targeting de Precisión',
    description: 'Llegamos exactamente a tu audiencia ideal con precisión láser',
    stat: '94%',
    statLabel: 'Precisión'
  },
  {
    icon: '⚡',
    title: 'Velocidad de Implementación',
    description: 'Desde la estrategia hasta los primeros resultados en tiempo récord',
    stat: '48h',
    statLabel: 'Primeros Leads'
  },
  {
    icon: '📊',
    title: 'Análisis Predictivo',
    description: 'IA avanzada que predice y optimiza el comportamiento del usuario',
    stat: '340%',
    statLabel: 'Incremento Promedio'
  },
  {
    icon: '🔄',
    title: 'Optimización Continua',
    description: 'Mejora constante basada en datos en tiempo real',
    stat: '24/7',
    statLabel: 'Monitoreo'
  }
];

const partners = [
  { name: 'Google', logo: '🔍' },
  { name: 'Meta', logo: '📘' },
  { name: 'LinkedIn', logo: '💼' },
  { name: 'TikTok', logo: '🎵' },
  { name: 'YouTube', logo: '📺' },
  { name: 'HubSpot', logo: '🧠' }
];

const FeaturesAndPartners = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            La <span className="text-gradient">Tecnología</span> que Nos Diferencia
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Combinamos las últimas tendencias en marketing digital con tecnología de vanguardia para entregar resultados excepcionales
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dark-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-600 mb-4">
                {feature.description}
              </p>
              <div className="text-3xl font-bold text-primary-600">
                {feature.stat}
              </div>
              <div className="text-sm text-dark-500">
                {feature.statLabel}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-semibold text-dark-900 mb-8">
            Somos Partners Certificados de
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2 group"
              >
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-2xl">{partner.logo}</span>
                </div>
                <span className="text-sm font-medium text-dark-700">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-display font-bold mb-4">
              ¿Listo para Revolucionar tu Marketing?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Únete a más de 180 empresas que ya multiplicaron sus resultados con nosotros
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              Comenzar Ahora - Sin Riesgo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesAndPartners;
