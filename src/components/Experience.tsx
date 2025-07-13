
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    
  
    {
      title: "Miniproject 2 Lead",
      company: "ShikshaHub website",
      
      period: "Jan 2025 - June 2025",
      description: [
        "Led a team of 3 developers in creating a student portal web application",
        "Implemented agile development practices and sprint planning",
        "Successfully delivered project 2 weeks ahead of schedule"
      ],
      skills: ["Leadership", "Project Management", "React", "Node.js"]
    },
    {
      title: "Miniproject 1 Lead",
      
      company:" Eauction Website",
      period: "Sep 2024- Nov 2024",
      description: [
        "This project addresses the challenges farmers face with low market prices and the growing consumer demand for fresh, high-quality farm products. ",
    "The platform allows farmers to sell their goods at higher prices, boosting their earnings, while consumers gain direct access to fresh produce.  "
      ],
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto mt-3">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here's my journey through various roles and projects that have shaped 
            my skills and passion for technology.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center text-cyan-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                     
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{exp.company}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
