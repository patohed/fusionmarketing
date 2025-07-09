import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '🚀',
    title: 'Escalabilidad Garantizada',
    description: 'Sistemas diseñados para crecer contigo. Desde 10 hasta 10,000 leads mensuales sin perder calidad.',
    stat: '500%',
    statLabel: 'Crecimiento Promedio'
  },
  {
    icon: '💰',
    title: 'ROI Optimizado',
    description: 'Cada peso invertido genera retornos medibles. Optimización continua para maximizar tu inversión.',
    stat: '4.2x',
    statLabel: 'ROI Promedio'
  },
  {
    icon: '⚡',
    title: 'Resultados Inmediatos',
    description: 'Primeros leads calificados en las primeras 48 horas. Sin esperas largas ni procesos complejos.',
    stat: '48h',
    statLabel: 'Primeros Resultados'
  },
  {
    icon: '🎯',
    title: 'Precisión Total',
    description: 'Targeting avanzado que llega exactamente a tu audiencia ideal. Menos desperdicio, más conversiones.',
    stat: '92%',
    statLabel: 'Precisión de Targeting'
  }
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-gradient-to-br from-dark-50 to-primary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 leading-tight">
              ¿Por qué elegir <span className="text-gradient">FusionMarketing</span>?
            </h2>
            <p className="text-xl text-dark-600 leading-relaxed">
              No somos una agencia más. Somos especialistas en transformar datos en crecimiento exponencial. 
              Nuestro enfoque único combina inteligencia artificial, análisis predictivo y estrategias probadas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-dark-600">Satisfacción del Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2.5M+</div>
                <div className="text-sm text-dark-600">Leads Generados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">180+</div>
                <div className="text-sm text-dark-600">Clientes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5 años</div>
                <div className="text-sm text-dark-600">Experiencia</div>
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Conoce Nuestra Metodología
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:border-primary-200 border border-transparent"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-semibold text-dark-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-primary-600">
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-dark-500">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
