import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Timeline from './components/Timeline';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <About />
      <Timeline />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;