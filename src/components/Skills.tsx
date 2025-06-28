import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Skills = () => {
  const [progressValues, setProgressValues] = useState({
    dataAnalysis: 0,
    python: 0,
    powerBI: 0,
    sql: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "C++"],
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Data Analysis Tools",
      skills: ["Power BI", "Tableau", "Excel", "Pandas", "NumPy"],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Python Libraries",
      skills: ["Pandas", "NumPy", "Beautiful Soup", "Seaborn", "Matplotlib"],
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Excel & Database",
      skills: ["VLookup", "Pivot Tables", "Conditional Formatting", "SQL", "Data Modeling"],
      color: "from-blue-600 to-purple-600"
    }
  ];

  const targetValues = {
    dataAnalysis: 95,
    python: 90,
    powerBI: 92,
    sql: 88
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateProgressBars();
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateProgressBars = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function

      setProgressValues({
        dataAnalysis: Math.round(targetValues.dataAnalysis * easeOutQuart),
        python: Math.round(targetValues.python * easeOutQuart),
        powerBI: Math.round(targetValues.powerBI * easeOutQuart),
        sql: Math.round(targetValues.sql * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setProgressValues(targetValues); // Ensure final values are exact
      }
    }, stepDuration);
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} rounded-full text-white text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-default`}
                    style={{
                      animationDelay: `${skillIndex * 100}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Progress Bars */}
        <div className="mt-16" ref={progressRef}>
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Technical Proficiency</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Data Analysis</span>
                <span className="text-purple-400">{progressValues.dataAnalysis}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progressValues.dataAnalysis}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Python Programming</span>
                <span className="text-blue-400">{progressValues.python}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progressValues.python}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Power BI & Tableau</span>
                <span className="text-purple-400">{progressValues.powerBI}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progressValues.powerBI}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">SQL & Excel</span>
                <span className="text-blue-400">{progressValues.sql}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progressValues.sql}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Enhanced BSc Design */}
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm border border-slate-500/30 rounded-xl group hover:border-slate-400/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 to-slate-700/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-slate-300 mb-2 text-lg">BSc in Computer Science</h4>
                <p className="text-slate-400 text-sm font-medium">Rajshahi University of Engineering and Technology</p>
                <div className="mt-2 px-3 py-1 bg-slate-600/20 rounded-full inline-block">
                  <p className="text-slate-300 text-xs">📚 December 2022 - Present</p>
                </div>
                <p className="text-gray-500 text-xs mt-2">Undergraduate Studies</p>
              </div>
            </div>
            
            {/* Enhanced ITEE Japan FE Certificate */}
            <div className="relative text-center p-6 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border-2 border-yellow-500/40 rounded-xl group hover:border-yellow-400/60 transition-all duration-300">
              {/* Achievement Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xs">★</span>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-yellow-500/25">
                  <span className="text-white font-bold text-xl">FE</span>
                </div>
                <h4 className="font-bold text-yellow-400 mb-2 text-lg">🏆 ITEE Japan FE Certified</h4>
                <p className="text-yellow-300 text-sm font-semibold">Fundamental Information Technology Engineer</p>
                <div className="mt-2 px-3 py-1 bg-yellow-500/20 rounded-full inline-block">
                  <p className="text-yellow-200 text-xs font-bold">✅ FULL PASS - October 2024</p>
                </div>
                <p className="text-gray-400 text-xs mt-2">International IT Certification from Japan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;