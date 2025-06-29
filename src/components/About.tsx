import React from 'react';
import { Calendar, MapPin, Award, Coffee, Code, Users, Smartphone, Globe, Palette, Server, Github, Linkedin } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      description: "Leading cross-platform development projects, managing cloud infrastructure, and creating comprehensive digital solutions for enterprise clients."
    },
    {
      year: "2023",
      title: "Technical Lead & Designer",
      company: "Digital Innovation Hub",
      description: "Spearheaded mobile app development while designing user experiences and managing Linux-based server infrastructure."
    },
    {
      year: "2021",
      title: "Full-Stack Developer",
      company: "Creative Tech Studio",
      description: "Developed Android applications, responsive websites, and created brand identities while maintaining system security protocols."
    },
    {
      year: "2020",
      title: "Junior Developer & Designer",
      company: "StartupHub",
      description: "Started my journey building mobile apps, designing user interfaces, and learning system administration fundamentals."
    }
  ];

  const expertise = [
    {
      title: "Android Development",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      description: "Native Android apps with Kotlin/Java, clean architecture, and material design principles."
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      description: "Full-stack web solutions with modern frameworks, responsive design, and SEO optimization."
    },
    {
      title: "Graphic Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      description: "UI/UX design, brand identity, motion graphics, and digital marketing assets."
    },
    {
      title: "System Administration",
      icon: Server,
      color: "from-gray-600 to-slate-600",
      description: "Linux systems, network security, cloud platforms, and infrastructure management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a versatile tech professional who brings digital visions to life through clean code, stunning design, 
            and robust infrastructure. Let's collaborate to create something amazing together.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((area) => (
            <div key={area.title} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-6 flex items-center justify-center">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Tech Professional</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Available Worldwide (Remote)
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                I specialize in creating comprehensive digital solutions that span mobile applications, web platforms, 
                visual design, and system infrastructure. My approach combines technical expertise with creative vision 
                to deliver exceptional user experiences.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                From native Android apps to responsive websites, from brand identities to cloud deployments, 
                I handle every aspect of digital product development. My goal is to transform your ideas into 
                robust, scalable, and beautiful digital experiences.
              </p>

              <div className="flex items-center space-x-6 text-gray-600">
                <span className="flex items-center">
                  <Coffee className="w-5 h-5 mr-2 text-amber-500" />
                  Coffee Enthusiast
                </span>
                <span className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-500" />
                  Open Source Contributor
                </span>
              </div>

              {/* GitHub Link */}
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://github.com/dj2313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View My GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruv-trivedi-357634229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-start mb-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.year.slice(-2)}
                  </div>

                  {/* Content */}
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-gray-500 font-semibold">{item.year}</span>
                    </div>
                    <p className="text-green-600 font-semibold mb-2">{item.company}</p>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;