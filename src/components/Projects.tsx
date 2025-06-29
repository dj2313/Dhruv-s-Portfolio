import React, { useState } from 'react';
import { ExternalLink, Github, Star, Users, Calendar, Smartphone, Globe, Palette, Server } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoTracker Mobile App",
      category: "android",
      description: "A comprehensive environmental tracking app that helps users monitor their carbon footprint and discover eco-friendly alternatives.",
      image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Hilt"],
      features: ["Real-time tracking", "AI recommendations", "Social sharing", "Offline support"],
      github: "#",
      playstore: "#",
      stats: { stars: 1200, downloads: "10K+", rating: 4.8 },
      type: "Android Development"
    },
    {
      id: 2,
      title: "TechCorp Website",
      category: "web",
      description: "A modern responsive website for a technology company with advanced animations, SEO optimization, and CMS integration.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      features: ["Responsive design", "SEO optimized", "CMS integration", "Performance optimized"],
      github: "#",
      website: "#",
      stats: { stars: 850, views: "50K+", rating: 4.9 },
      type: "Web Development"
    },
    {
      id: 3,
      title: "Brand Identity Suite",
      category: "design",
      description: "Complete brand identity design including logo, color palette, typography, and marketing materials for a fintech startup.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Adobe Illustrator", "Figma", "After Effects", "Photoshop"],
      features: ["Logo design", "Brand guidelines", "Marketing assets", "Motion graphics"],
      behance: "#",
      dribbble: "#",
      stats: { likes: 2100, views: "25K+", rating: 4.9 },
      type: "Graphic Design"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Setup",
      category: "sysadmin",
      description: "Scalable cloud infrastructure deployment with automated CI/CD pipelines, monitoring, and security protocols.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      features: ["Auto-scaling", "Load balancing", "Security hardening", "Monitoring"],
      github: "#",
      docs: "#",
      stats: { uptime: "99.9%", servers: "50+", rating: 5.0 },
      type: "System Administration"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      features: ["Payment processing", "Inventory management", "Admin dashboard", "Analytics"],
      github: "#",
      website: "#",
      stats: { users: "5K+", transactions: "10K+", rating: 4.8 },
      type: "Web Development"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "android",
      description: "A modern fitness tracking application with personalized workout plans, nutrition guidance, and social features.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "Firebase", "Material Design", "ML Kit", "Camera2"],
      features: ["Workout planner", "Progress tracking", "Video tutorials", "Nutrition logs"],
      github: "#",
      playstore: "#",
      stats: { stars: 850, downloads: "5K+", rating: 4.6 },
      type: "Android Development"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Star },
    { id: 'android', label: 'Android', icon: Smartphone },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'sysadmin', label: 'SysAdmin', icon: Server }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my diverse portfolio showcasing Android apps, web platforms, design work, and infrastructure projects 
            across different industries and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {project.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      View
                    </button>
                    <button className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {Object.values(project.stats)[0]}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {Object.values(project.stats)[1]}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold text-gray-900">{project.stats.rating}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(project.stats.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together? Let's discuss your next project!
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                ×
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                  {selectedProject.type}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{selectedProject.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                  <ExternalLink className="w-5 h-5 inline mr-2" />
                  View Project
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition-all duration-300">
                  <Github className="w-5 h-5 inline mr-2" />
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;