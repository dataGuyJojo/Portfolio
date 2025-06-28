import React from 'react';
import { ChevronDown, Download, Linkedin } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://raw.githubusercontent.com/dataGuyJojo/About_Johan/main/Resume.pdf', '_blank');
  };

  const handleGetInTouch = () => {
    window.open('https://www.linkedin.com/in/syed-asif-johan-0a4888292/', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Syed Asif Johan
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Data Analyst & Business Analyst
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transforming complex data into actionable insights through advanced analytics, 
              visualization, and strategic business intelligence solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2 text-sm sm:text-base"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
              <button 
                onClick={handleGetInTouch}
                className="group border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm sm:text-base"
              >
                <Linkedin size={18} />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 animate-fade-in-up animation-delay-300">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-400 text-sm sm:text-base">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">1.3K+</div>
                <div className="text-gray-400 text-sm sm:text-base">Social Media Reach</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-2">28.6K+</div>
                <div className="text-gray-400 text-sm sm:text-base">Lifetime Reach</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-300 mt-8 lg:mt-0">
            <div className="relative group">
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Rotating border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full animate-spin-slow opacity-75" />
              
              {/* Inner glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-50 blur-sm" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-900 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/Profile.jpg"
                  alt="Syed Asif Johan"
                  className="w-full h-full object-cover object-center filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 group-hover:opacity-75 transition-opacity duration-500" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full animate-float opacity-60" />
              <div className="absolute bottom-8 left-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-purple-400" size={28} />
      </div>
    </section>
  );
};

export default Hero;