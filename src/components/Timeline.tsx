import React, { useState } from 'react';
import { Calendar, Building, GraduationCap, Briefcase } from 'lucide-react';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      id: 1,
      title: "Android Developer",
      description: "Specialized in Android development using Kotlin and Java, with expertise in Flutter for cross-platform mobile applications. Delivered high-quality mobile apps with modern architecture patterns.",
      technologies: ["Kotlin", "Java", "Flutter", "Dart", "Firebase", "Room Database", "Retrofit", "Jetpack Compose"],
      logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      description: "Developed web applications using Laravel framework and mobile apps using Flutter. Created scalable solutions with modern technologies and best practices.",
      technologies: ["Laravel", "PHP", "Flutter", "Dart", "MySQL", "RESTful APIs", "Blade Templates", "Composer"],
      logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor in Computer Engineering",
      institution: "SPEC (Sardar Patel College)",
      period: "2021 - 2024",
      description: "Affiliated to Gujarat Technological University. Specialized in Computer Engineering with focus on software development, algorithms, and system design.",
      logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey through various roles, education, and continuous learning that shaped my expertise in Android and Flutter development.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Line */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-green-500 to-blue-500"></div>
                  )}
                  
                  <div className="flex items-start space-x-6 group">
                    {/* Timeline Dot */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                          src={item.logo}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <span className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={item.id} className="relative">
                  {index < education.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-green-500 to-blue-500"></div>
                  )}
                  
                  <div className="flex items-start space-x-6 group">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                          src={item.logo}
                          alt={item.institution}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{item.degree}</h3>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <span className="flex items-center">
                              <GraduationCap className="w-4 h-4 mr-1" />
                              {item.institution}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.period}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Affiliated to Gujarat Technological University</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 