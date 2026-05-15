import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-200">
      {/* Subtle dot pattern overlay */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

