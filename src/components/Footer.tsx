import React from 'react';
import { Code2, Heart, Mail, MapPin, Github, Linkedin, ArrowUp, Sparkles, Coffee, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Web Development', icon: '🌐' },
    { name: 'Full-Stack Solutions', icon: '⚡' },
    { name: 'System Architecture', icon: '🏗️' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/dj2313", 
      label: "GitHub",
      color: "hover:bg-gray-700 hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/dhruv-trivedi-357634229", 
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    }
  ];

  const techStack = [
    'React', 'Node.js', 'TypeScript', 'Android', 'AWS', 'Python'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Dhruv Trivedi</h3>
                  <p className="text-cyan-400 font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions that make a difference. 
                Transforming ideas into powerful applications with clean code and modern technologies.
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>



              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name} className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300">
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <span className="text-sm">{service.name}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:dhruvt128@gmail.com"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <Mail className="w-4 h-4 mr-3 group-hover:animate-bounce" />
                    <span className="text-sm">dhruvt128@gmail.com</span>
                  </a>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-3 text-emerald-400" />
                    <span className="text-sm">Available Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
                <span>© {currentYear} Dhruv Trivedi. All rights reserved.</span>
                <span className="mx-2">•</span>
                <span className="text-cyan-400">Made with passion</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Terms of Service
                  </a>
                </div>
                
                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="group w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4 text-white group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;