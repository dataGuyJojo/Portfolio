import React from 'react';
import { Calendar, MapPin, ChevronRight, Users, Mic } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder",
      company: "Tech Today",
      location: "Online",
      period: "September 2024 - Present",
      description: "Leading a tech news platform and podcast, curating daily content and building community engagement.",
      achievements: [
        "Grew Facebook page to 1.3K+ followers with 28.6K+ lifetime reach",
        "Launched and co-hosted 'Tech Today' podcast for tech awareness",
        "Curated, edited, and published daily tech news content",
        "Collaborated with co-founders for strategic research and planning"
      ],
      color: "border-purple-500",
      icon: Users
    },
    {
      title: "Event Host",
      company: "Programming Hero Campus Event",
      location: "On Campus",
      period: "May 2024",
      description: "Hosted programming and technology awareness events on campus, engaging students in tech education.",
      achievements: [
        "Successfully hosted campus-wide programming events",
        "Engaged students in technology and programming awareness",
        "Facilitated knowledge sharing sessions",
        "Built connections within the tech community"
      ],
      color: "border-blue-500",
      icon: Mic
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building communities and sharing knowledge in the tech space
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border ${exp.color}/30 rounded-2xl p-6 ml-0 md:ml-20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-slate-900 hidden md:block" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <exp.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-purple-400 mb-2">{exp.company}</h4>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h5 className="font-semibold text-blue-400 text-sm mb-3">Key Achievements:</h5>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-2">
                      <ChevronRight className="text-purple-400 mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Recent Achievement</h3>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FE</span>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-purple-400">ITEE Japan Certification</h4>
                <p className="text-gray-400">Fundamental Information Technology Engineer</p>
                <p className="text-gray-500 text-sm">Full Pass - October 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;