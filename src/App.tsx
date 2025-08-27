import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';
import "@fontsource/playfair-display"; 
function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;