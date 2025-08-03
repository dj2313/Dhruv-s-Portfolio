import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Download, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from 'lucide-react';
import './Hero.css';

// Import CV with proper error handling
let cvPdf: string;
try {
  cvPdf = require('../Dhruv CV.pdf');
} catch (error) {
  console.warn('CV file not found, download functionality will be disabled');
  cvPdf = '';
}

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = useCallback(() => {
    if (!cvPdf) {
      alert('CV file is not available for download at the moment.');
      return;
    }
    
    try {
      const link = document.createElement('a');
      link.href = cvPdf;
      link.download = 'Dhruv_Trivedi_CV.pdf';
      link.setAttribute('aria-label', 'Download Dhruv Trivedi CV');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('There was an error downloading the CV. Please try again later.');
    }
  }, []);

  // Memoize floating particles to prevent re-rendering
  const floatingParticles = useMemo(() => {
    return [...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ));
  }, []);

  const techStack = ['React', 'Node.js', 'TypeScript', 'Android', 'AWS', 'Python'];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      aria-label="Hero section - Dhruv Trivedi Portfolio"
    >
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            top: '60%',
            right: '10%',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            bottom: '10%',
            left: '50%',
          }}
        />

        {/* Floating Particles */}
        {floatingParticles}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 group hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse" />
              <span className="text-white text-sm font-medium">✨ Available for new projects</span>
              <Sparkles className="w-4 h-4 ml-2 text-emerald-400 group-hover:animate-spin" />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                 Dhruv Trivedi
              </span>
              <span className="block text-2xl md:text-4xl text-gray-300 font-normal mt-4">
                Full Stack Developer & Tech Innovator
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft cutting-edge digital experiences with modern technologies, clean architecture, 
              and innovative solutions. Specializing in React, Node.js, Android development, and cloud infrastructure.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10" role="list" aria-label="Technology stack">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  role="listitem"
                  className={`px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  aria-label={`Technology: ${tech}`}
                >
                  {tech}
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Navigate to contact section to work together"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" aria-hidden="true" />
                  <span>Let's Work Together</span>
                </span>
              </a>
              
              <button 
                onClick={handleDownloadCV}
                disabled={!cvPdf}
                className={`group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${!cvPdf ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Download Dhruv Trivedi's CV as PDF"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" aria-hidden="true" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <nav className="flex items-center justify-center lg:justify-start space-x-6" aria-label="Social media links">
              <a
                href="https://github.com/dj2313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Visit Dhruv's GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/dhruv-trivedi-357634229"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-blue-400/50 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Visit Dhruv's LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              
              <a
                href="#contact"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-emerald-400/50 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Navigate to contact section"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* Interactive Code Terminal */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              {/* Terminal */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl max-w-md w-full">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-gray-400 text-sm ml-4 flex items-center">
                    <Code2 className="w-4 h-4 mr-2" />
                    ~/portfolio
                  </span>
                </div>
                
                <div className="font-mono text-sm space-y-3">
                  <div className="text-cyan-400">
                    <span className="text-gray-500">$</span> npm run create-magic
                  </div>
                  
                  <div className="text-emerald-400">
                    ✓ Initializing awesome portfolio...
                  </div>
                  
                  <div className="text-blue-400">
                    ✓ Loading skills and experience...
                  </div>
                  
                  <div className="text-purple-400">
                    ✓ Ready to innovate! 🚀
                  </div>
                  
                  <div className="text-gray-400 mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="text-cyan-400">const <span className="text-blue-400">developer</span> = {'{'}</div>
                    <div className="ml-4 text-slate-300">name: <span className="text-emerald-400">'Dhruv Trivedi'</span>,</div>
                    <div className="ml-4 text-slate-300">role: <span className="text-emerald-400">'Full Stack Dev'</span>,</div>
                    <div className="ml-4 text-slate-300">passion: <span className="text-emerald-400">'Innovation'</span>,</div>
                    <div className="ml-4 text-slate-300">skills: <span className="text-yellow-400">['React', 'Node.js']</span>,</div>
                    <div className="ml-4 text-slate-300">status: <span className="text-emerald-400">'Available'</span></div>
                    <div className="text-cyan-400">{'}'}</div>
                  </div>
                  
                  <div className="text-gray-500 animate-pulse">
                    <span className="text-cyan-400">$</span> _
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-2"
          aria-label="Scroll down to explore more content"
        >
          <span className="text-sm font-medium">Explore More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-cyan-400" />
          </div>
        </a>
      </div>


    </section>
  );
};

export default Hero;