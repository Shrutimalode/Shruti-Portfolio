import { Code, Palette, Zap, Users, Database, GitBranch, Layout, Server } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "JavaScript, HTML, CSS, Tailwind CSS, React",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Technologies",
      description: "Node.js, Express, MongoDB, PHP, MySQL",
      color: "from-green-500 to-teal-500"
    },
    
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "MongoDB, MySQL",
      color: "from-orange-500 to-red-500"
    },
   
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      description: "Team Leadership, Project Management",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 mt-3">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Computer Engineering student with a love for creating 
            digital experiences that make a difference. My journey in tech started 
            with curiosity and has evolved into a dedicated pursuit of excellence 
            in both frontend and backend development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <div>
            <div className="grid gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-xl mb-2">{skill.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">My Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="text-white font-semibold">Bachelor of Technology - Computer Engineering</h4>
                  <p className="text-cyan-400">Bajaj Institute of Technology, Wardha</p>
                  <p className="text-gray-400 text-sm">2022-2026 | CGPA: 7.58 (till 5th semester)</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <h4 className="text-white font-semibold">HSC</h4>
                  <p className="text-gray-300">Bajaj College of Science, Wardha</p>
                  <p className="text-gray-400 text-sm">2022 | 76%</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <h4 className="text-white font-semibold">SSC</h4>
                  <p className="text-gray-300">Sushil Himmat Singka Vidyalaya, Wardha</p>
                  <p className="text-gray-400 text-sm">2020 | 93%</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-400/20">
              <h4 className="text-xl font-bold text-white mb-1">What Drives Me</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating innovative solutions that solve real-world problems. 
                My goal is to continuously learn and grow as a developer while contributing to 
                meaningful projects that make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
