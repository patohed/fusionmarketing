import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'María Fernanda López',
    position: 'CEO, TechStart Solutions',
    company: 'TechStart Solutions',
    image: '👩‍💼',
    rating: 5,
    content: 'FusionMarketing transformó completamente nuestro proceso de generación de leads. En solo 3 meses aumentamos nuestras ventas en 280% y el ROI superó todas las expectativas.',
    results: [
      { metric: 'Leads Mensuales', value: '45 → 320' },
      { metric: 'Tasa de Conversión', value: '12% → 35%' },
      { metric: 'ROI', value: '280% aumento' }
    ]
  },
  {
    name: 'Carlos Mendoza',
    position: 'Director Comercial, EcoTech',
    company: 'EcoTech',
    image: '👨‍💼',
    rating: 5,
    content: 'La metodología de FusionMarketing es excepcional. Su enfoque basado en datos nos ayudó a identificar oportunidades que nunca habríamos visto. Resultados desde la primera semana.',
    results: [
      { metric: 'Leads Calificados', value: '150% aumento' },
      { metric: 'Costo por Lead', value: '40% reducción' },
      { metric: 'Tiempo de Cierre', value: '60% menos' }
    ]
  },
  {
    name: 'Ana Rodriguez',
    position: 'Fundadora, HealthPlus',
    company: 'HealthPlus',
    image: '👩‍⚕️',
    rating: 5,
    content: 'Profesionales de primer nivel. No solo ejecutan campañas, sino que educan y empoderan a nuestro equipo interno. Una verdadera alianza estratégica para el crecimiento.',
    results: [
      { metric: 'Leads Médicos', value: '200% aumento' },
      { metric: 'Pacientes Nuevos', value: '125% más' },
      { metric: 'Ingresos', value: '340% crecimiento' }
    ]
  }
];

const caseStudies = [
  {
    industry: 'E-commerce Fashion',
    challenge: 'Baja conversión en campañas digitales',
    solution: 'Implementamos funnels inteligentes con retargeting avanzado',
    results: [
      { metric: 'Ventas Online', value: '+420%' },
      { metric: 'Tráfico Calificado', value: '+250%' },
      { metric: 'Costo por Adquisición', value: '-35%' }
    ],
    timeline: '4 meses',
    icon: '👗'
  },
  {
    industry: 'SaaS B2B',
    challenge: 'Leads de baja calidad y ciclos de venta largos',
    solution: 'Scoring predictivo de leads y automatización de nurturing',
    results: [
      { metric: 'Leads Calificados', value: '+380%' },
      { metric: 'Ciclo de Venta', value: '-45%' },
      { metric: 'ROI', value: '+600%' }
    ],
    timeline: '6 meses',
    icon: '💻'
  },
  {
    industry: 'Servicios Financieros',
    challenge: 'Regulaciones estrictas y audiencia específica',
    solution: 'Compliance automation y targeting ultra-específico',
    results: [
      { metric: 'Leads Compliance', value: '+220%' },
      { metric: 'Tasa de Aprobación', value: '+90%' },
      { metric: 'Costo por Cliente', value: '-50%' }
    ],
    timeline: '5 meses',
    icon: '🏦'
  }
];

const TestimonialsAndCases = () => {
  return (
    <section id="casos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Resultados reales de empresas que confiaron en nosotros para acelerar su crecimiento
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-display font-semibold text-dark-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-dark-600">{testimonial.position}</p>
                  <p className="text-sm text-primary-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-dark-600 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="space-y-2">
                {testimonial.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex justify-between items-center">
                    <span className="text-sm text-dark-600">{result.metric}:</span>
                    <span className="text-sm font-semibold text-primary-600">{result.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Case Studies */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            Casos de <span className="text-gradient">Éxito</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Resultados medibles que demuestran el poder de nuestras estrategias
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {caseStudy.icon}
              </div>
              
              <h3 className="text-xl font-display font-semibold text-dark-900 mb-2">
                {caseStudy.industry}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-sm font-medium text-dark-700">Desafío:</span>
                  <p className="text-sm text-dark-600">{caseStudy.challenge}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-dark-700">Solución:</span>
                  <p className="text-sm text-dark-600">{caseStudy.solution}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <span className="text-sm font-medium text-dark-700">Resultados:</span>
                {caseStudy.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex justify-between items-center">
                    <span className="text-sm text-dark-600">{result.metric}:</span>
                    <span className="text-sm font-bold text-accent-600">{result.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-sm text-primary-600 font-medium">
                Tiempo: {caseStudy.timeline}
              </div>
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
            Quiero Resultados Como Estos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsAndCases;
