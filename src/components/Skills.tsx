import React from 'react';
import { Smartphone, Code, Palette, Database, Cloud, Zap, Globe, Server, Shield, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Android Development",
      icon: Smartphone,
      color: "from-green-400 to-green-600",
      skills: [
        { name: "Kotlin", level: 95 },
        { name: "Java", level: 90 },
        { name: "Jetpack Compose", level: 88 },
        { name: "Android SDK", level: 92 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-400 to-blue-600",
      skills: [
        { name: "React/Next.js", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "PHP", level: 85 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 },
        { name: "Microservices", level: 82 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-pink-400 to-pink-600",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 88 },
        { name: "Material Design", level: 93 },
        { name: "Motion Graphics", level: 85 }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-indigo-400 to-indigo-600",
      skills: [
        { name: "MySQL/PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 90 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-cyan-400 to-cyan-600",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 82 },
        { name: "Docker", level: 88 },
        { name: "CI/CD", level: 85 }
      ]
    },
    {
      title: "System Administration",
      icon: Shield,
      color: "from-gray-500 to-gray-700",
      skills: [
        { name: "Linux Administration", level: 90 },
        { name: "Network Security", level: 85 },
        { name: "Server Management", level: 88 },
        { name: "Monitoring", level: 82 }
      ]
    },
    {
      title: "Architecture & Tools",
      icon: Layers,
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Clean Architecture", level: 90 },
        { name: "Git/Version Control", level: 95 },
        { name: "Agile/Scrum", level: 88 },
        { name: "Testing", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across Android development, web development, 
            graphic design, and system administration domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-gray-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;