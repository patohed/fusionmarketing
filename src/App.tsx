import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturesAndPartners from './components/FeaturesAndPartners';
import About from './components/About';
import TestimonialsAndCases from './components/TestimonialsAndCases';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <FeaturesAndPartners />
      <About />
      <TestimonialsAndCases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
