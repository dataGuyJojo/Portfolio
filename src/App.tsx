import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-inter overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;