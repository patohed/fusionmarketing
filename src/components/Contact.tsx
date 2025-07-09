import { motion } from 'framer-motion';
import { useState } from 'react';
import { trackFormSubmit } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Track form submission
      trackFormSubmit('contact_form', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-gray-50 to-white text-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-primary-100 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary-200"
          >
            <span className="text-accent-600 mr-2">📈</span>
            <span className="text-sm font-medium text-primary-700">Acelera tu Crecimiento</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            ¿Listo para <span className="text-gradient bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text">Multiplicar</span><br />
            <span className="text-gradient bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text">tus Leads</span>?
          </h2>
          <p className="contact-main-description text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Conversemos sobre cómo podemos acelerar el crecimiento de tu negocio con leads calificados y resultados medibles.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Contact Information Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent-500 rounded-xl flex items-center justify-center mr-3 lg:mr-4">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-bold text-dark-900">
                  Información de Contacto
                </h3>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm lg:text-base font-semibold text-dark-900 mb-1">Oficina Principal</div>
                    <div className="text-sm lg:text-base text-dark-600 leading-relaxed">
                      Av. Santa Fe 1234, Piso 8°<br />
                      C1059 CABA, Buenos Aires, Argentina
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm lg:text-base font-semibold text-dark-900 mb-1">Email</div>
                    <div className="text-sm lg:text-base text-dark-600 leading-relaxed">
                      <a href="mailto:contacto@fusionmarketing.com.ar" className="hover:text-primary-600 transition-colors block">
                        contacto@fusionmarketing.com.ar
                      </a>
                      <a href="mailto:leads@fusionmarketing.com.ar" className="hover:text-primary-600 transition-colors block">
                        leads@fusionmarketing.com.ar
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-title text-dark-900 font-semibold">Teléfono</div>
                    <div className="contact-info-text text-dark-600">
                      <a href="tel:+541145678900" className="hover:text-primary-600 transition-colors">
                        +54 11 4567-8900
                      </a><br />
                      <a href="https://wa.me/5491145678900" className="hover:text-primary-600 transition-colors">
                        WhatsApp: +54 9 11 4567-8900
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Benefits Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="contact-section-title text-2xl font-display font-bold text-dark-900">
                  ¿Por qué elegirnos?
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: "🚀", text: "Resultados garantizados en 30 días" },
                  { icon: "📊", text: "Transparencia total en reportes" },
                  { icon: "🎯", text: "Soporte dedicado 24/7" },
                  { icon: "⚡", text: "Sin contratos largos, solo resultados" }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{benefit.icon}</span>
                    </div>
                    <span className="contact-benefit-text text-lg font-medium text-dark-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Form decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark-900">
                    Solicita tu Análisis Gratuito
                  </h3>
                  <p className="text-dark-600 mt-1">
                    Completa el formulario y recibe una estrategia personalizada
                  </p>
                </div>
              </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Progress indicator */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-500"
                    style={{ 
                      width: `${((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.company ? 1 : 0)) / 3 * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="text-sm text-dark-500 font-medium">
                  {Math.round(((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.company ? 1 : 0)) / 3 * 100)}%
                </span>
              </div>
              
              {/* Status messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </motion.div>
              )}
              
              {/* Form fields with better styling */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-3">
                    Tu Nombre *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-900 transition-all duration-300 ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {formData.name && (
                      <div className="absolute right-3 top-4 text-green-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-3">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-900 transition-all duration-300 ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {formData.email && !errors.email && (
                      <div className="absolute right-3 top-4 text-green-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-3">
                    Empresa *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-900 transition-all duration-300 ${
                        errors.company ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tu empresa"
                    />
                    {formData.company && (
                      <div className="absolute right-3 top-4 text-green-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.company && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.company}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-3">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-900 hover:border-gray-300 transition-all duration-300"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-3">
                  ¿Cómo podemos ayudarte?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-900 hover:border-gray-300 transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 relative overflow-hidden ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-primary text-white hover:shadow-xl hover:shadow-primary-500/25'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Solicitar Análisis Gratuito
                  </span>
                )}
              </motion.button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-dark-500 flex items-center justify-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Respuesta garantizada en menos de 24 horas
              </p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
