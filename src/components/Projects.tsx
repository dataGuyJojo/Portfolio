import React from 'react';
import { ExternalLink, Github, BarChart3, Smartphone, CreditCard, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "T20 Cricket Performance Analysis",
      description: "Created comprehensive Power BI dashboards analyzing team and player performance from SQL-processed scorecard data. Designed custom metrics like BCR, Economy Score, and Aggressiveness Rating for strategic team selection.",
      technologies: ["Power BI", "SQL", "Data Modeling", "Sports Analytics"],
      icon: BarChart3,
      color: "from-purple-600 to-purple-800",
      date: "February 2025",
      viewUrl: "https://www.linkedin.com/pulse/data-analysis-solution-bangladeshi-cricket-disaster-syed-asif-johan-hullc/?trackingId=AvY5pt6eQQKzJKue4Btexg%3D%3D",
      sourceUrl: "https://github.com/dataGuyJojo/Cricket_Project",
      metrics: [
        { label: "Custom Metrics", value: "3+" },
        { label: "Performance KPIs", value: "15+" },
        { label: "Interactive Visuals", value: "10+" }
      ]
    },
    {
      title: "Mobile & Laptop Sales EDA",
      description: "Conducted exploratory data analysis on 50,000+ sales records using Python. Identified top-performing brands, sales trends, and processor preferences through advanced data manipulation and visualization.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      icon: Smartphone,
      color: "from-blue-600 to-blue-800",
      date: "May 2025",
      viewUrl: "https://medium.com/@connect.syedasifjohan/unveiling-sales-trends-an-eda-of-mobile-and-laptop-sales-82592f591019",
      sourceUrl: "https://www.kaggle.com/code/syedasifjohan/eda-of-mobile-and-laptop-sales-data",
      sourceLabel: "Kaggle Notebook",
      metrics: [
        { label: "Records Analyzed", value: "50K+" },
        { label: "Brand Insights", value: "25+" },
        { label: "Trend Analysis", value: "100%" }
      ]
    },
    {
      title: "Credit Card Sales Dashboard",
      description: "Built interactive Power BI dashboard analyzing customer behavior, revenue trends, and credit card usage patterns. Discovered key insights on customer segments and popular card categories through dynamic filtering.",
      technologies: ["Power BI", "Excel", "Data Cleaning", "Business Intelligence"],
      icon: CreditCard,
      color: "from-purple-600 to-blue-600",
      date: "March 2025",
      viewUrl: "https://github.com/dataGuyJojo/Sales-Dashboard",
      sourceUrl: "https://github.com/dataGuyJojo/Sales-Dashboard",
      metrics: [
        { label: "Customer Segments", value: "8+" },
        { label: "Revenue Insights", value: "12+" },
        { label: "Dynamic Filters", value: "15+" }
      ]
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing data-driven solutions that deliver actionable business insights
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex items-start space-x-4 mb-6 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-4 lg:items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <div className="lg:text-center">
                    <div className="text-sm text-gray-400 mb-1">{project.date}</div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg font-bold text-purple-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleProjectClick(project.viewUrl)}
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg transition-colors border border-purple-500/30 hover:border-purple-500/50"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View Project</span>
                    </button>
                    <button 
                      onClick={() => handleProjectClick(project.sourceUrl)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors border border-blue-500/30 hover:border-blue-500/50"
                    >
                      {project.sourceLabel === "Kaggle Notebook" ? <BookOpen size={16} /> : <Github size={16} />}
                      <span className="text-sm">{project.sourceLabel || "Source Code"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;