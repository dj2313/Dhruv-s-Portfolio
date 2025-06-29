import React from 'react';
import { ArrowDown, Play, Download } from 'lucide-react';
import cvPdf from '../Dhruv CV.pdf';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Dhruv_Trivedi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-6 backdrop-blur-sm">
              <span className="text-green-400 text-sm font-semibold">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Versatile Tech
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Professional
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Specializing in Android development, web development, graphic design, and system administration. 
              Creating engaging digital experiences with clean code, stunning design, and robust infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Portfolio</span>
                </span>
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="group px-8 py-4 border-2 border-gray-300 text-gray-300 rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>
          </div>

          {/* Multi-Device Showcase */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="phone-mockup transform hover:scale-105 transition-transform duration-500">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl relative overflow-hidden">
                    {/* Android App Screen */}
                    <div className="absolute inset-4 bg-white rounded-xl shadow-inner">
                      <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-6 bg-gray-800 rounded w-24"></div>
                          <div className="flex space-x-1">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                          <div className="h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                          </div>
                          <div className="h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                          </div>
                          <div className="h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                          </div>
                          <div className="h-20 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Laptop */}
              <div className="absolute -top-8 -right-16 w-32 h-20 bg-gray-800 rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-500 opacity-80">
                <div className="w-full h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-lg p-2">
                  <div className="w-full h-full bg-white rounded opacity-90 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="w-2 h-2 bg-gray-300 rounded"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded"></div>
                      <div className="w-2 h-2 bg-green-400 rounded"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Design Elements */}
              <div className="absolute -bottom-8 -left-16 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 opacity-80 flex items-center justify-center">
                <div className="text-white font-bold text-xs">UI/UX</div>
              </div>
              
              {/* Server/Cloud Icon */}
              <div className="absolute top-16 -left-12 w-16 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-xl opacity-70 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-1 bg-green-400 rounded"></div>
                  <div className="w-2 h-1 bg-blue-400 rounded"></div>
                  <div className="w-2 h-1 bg-yellow-400 rounded"></div>
                  <div className="w-2 h-1 bg-red-400 rounded"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
          <span className="text-sm">Explore My Work</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;