import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Briefcase, Smartphone, Globe, Server, Code2, MessageCircle, Calendar, Clock, Star, Sparkles, Rocket } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      projectType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhruvt128@gmail.com",
      href: "mailto:dhruvt128@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: "#",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/dj2313", 
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/dhruv-trivedi-357634229", 
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    }
  ];

  const projectTypes = [
    "Android App Development",
    "Web Development",
    "Full-Stack Solution",
    "UI/UX Design",
    "System Administration",
    "API Development",
    "Consultation",
    "Other"
  ];

  const services = [
    {
      title: "Mobile Development",
      description: "Native Android apps with modern architecture and seamless UX",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      features: ["Native Android", "Kotlin/Java", "Modern UI", "Performance Optimized"]
    },
    {
      title: "Web Development",
      description: "Responsive websites and progressive web applications",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
    },
    {
      title: "Backend Solutions",
      description: "Scalable APIs and server-side architecture",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      features: ["Node.js/Express", "Database Design", "RESTful APIs", "Cloud Deployment"]
    },
    {
      title: "Full-Stack Projects",
      description: "End-to-end solutions from concept to deployment",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      features: ["Complete Solutions", "Modern Stack", "DevOps", "Maintenance"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-white text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"> Something Amazing?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to transform your ideas 
            into powerful digital solutions that drive results.
          </p>
        </div>

        {/* Services Overview */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div key={service.title} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-gray-400">
                      <Star className="w-3 h-3 mr-2 text-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-cyan-400" />
                  Get In Touch
                </h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                        <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 group-hover:animate-pulse" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 font-semibold">Available for new projects</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Currently accepting new client projects and collaborations. 
                    Let's create something extraordinary together!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Available Now</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Quick Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Rocket className="w-6 h-6 mr-3 text-purple-400" />
                  Start Your Project
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-300 mb-3">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-slate-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project requirements, timeline, goals, and any specific features you have in mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:animate-bounce" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;