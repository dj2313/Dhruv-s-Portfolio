import React, { useState } from 'react';
import { Smartphone, Globe, Palette, Server, Code, Database, Shield, Zap, Users, Target, Clock, Award } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Android Development",
      icon: Smartphone,
      description: "Native Android applications built with modern technologies like Kotlin, Jetpack Compose, and Material Design 3.",
      image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Kotlin & Java Development",
        "Jetpack Compose UI",
        "Material Design 3",
        "Firebase Integration",
        "Play Store Publishing",
        "Performance Optimization"
      ],
      technologies: ["Kotlin", "Java", "Jetpack Compose", "Firebase", "Room", "Retrofit"],
      category: "Mobile Development"
    },
    {
      id: 2,
      title: "Web Development",
      icon: Globe,
      description: "Modern, responsive web applications using React, Next.js, and cutting-edge frontend technologies.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "React & Next.js",
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "API Integration",
        "Progressive Web Apps"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      category: "Web Development"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: Palette,
      description: "Beautiful, intuitive user interfaces and user experiences that delight users and drive engagement.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
        "Design Handoff"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"],
      category: "Design"
    },
    {
      id: 4,
      title: "System Administration",
      icon: Server,
      description: "Robust cloud infrastructure and DevOps solutions for scalable, secure, and reliable applications.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Cloud Infrastructure",
        "CI/CD Pipelines",
        "Monitoring & Logging",
        "Security Hardening",
        "Auto-scaling",
        "Disaster Recovery"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      category: "DevOps"
    },
    {
      id: 5,
      title: "Full-Stack Development",
      icon: Code,
      description: "End-to-end development solutions from database design to frontend implementation and deployment.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Database Design",
        "API Development",
        "Frontend & Backend",
        "Authentication",
        "Payment Integration",
        "Deployment"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "Stripe", "Docker"],
      category: "Full-Stack"
    },
    {
      id: 6,
      title: "Consulting & Strategy",
      icon: Target,
      description: "Strategic technology consulting to help businesses make informed decisions about their digital transformation.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Team Training",
        "Code Reviews",
        "Performance Audits",
        "Security Reviews"
      ],
      technologies: ["Architecture", "Best Practices", "Code Review", "Performance", "Security", "Training"],
      category: "Consulting"
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Zap, value: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs. From mobile apps to cloud infrastructure, 
            I deliver high-quality results that drive growth and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Get Quote Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            I'm here to help bring your vision to life with cutting-edge technology and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Schedule a Call
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 