import React from 'react';
import { BarChart3, Brain, TrendingUp, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate about uncovering insights hidden within data and translating complex analysis into clear, actionable business strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative group">
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Rotating border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl animate-spin-slow opacity-75" />
              
              {/* Inner glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-50 blur-sm" />
              
              {/* Profile image container */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-slate-900 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/Cool_Guy_jojo.jpg"
                  alt="Syed Asif Johan"
                  className="w-full h-full object-cover object-center filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 group-hover:opacity-75 transition-opacity duration-500" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-60" />
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing Bachelor of Science in Computer Science and Engineering at Rajshahi University of Engineering and Technology. I specialize in data analysis, business intelligence, and creating compelling visualizations that drive strategic decision-making.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a co-founder of Tech Today, I've successfully grown our tech news platform to 1.3K+ followers with 28.6K+ lifetime reach. My expertise spans across SQL, Python, Power BI, and advanced Excel analytics, with a proven track record of delivering impactful data solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400">Data Visualization</h4>
                  <p className="text-gray-400 text-sm">Power BI & Tableau</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">Python Analytics</h4>
                  <p className="text-gray-400 text-sm">Pandas, NumPy, Seaborn</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400">Business Analysis</h4>
                  <p className="text-gray-400 text-sm">Strategic insights</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Database className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">SQL & Databases</h4>
                  <p className="text-gray-400 text-sm">Data processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;