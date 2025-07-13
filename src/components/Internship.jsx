import { Briefcase, MapPin, Calendar } from "lucide-react";

const Internship = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 mt-4">
            Current <span className="text-cyan-400">Internship</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Currently gaining hands-on experience and applying my technical skills 
            in a professional environment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center text-cyan-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Currently Ongoing</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Remote/Hybrid</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 ml-10">
                  Frontend Development Intern
                </h3>
                <p className="text-cyan-400 font-semibold mb-3 text-lg ml-10">
                  RealtorXpert
                  <a
                    href="https://www.realtorxpert.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-6 inline-block px-3 py-1 bg-white text-black text-base rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    Live
                  </a>
                </p>

                <div className="space-y-4 ">
                  <h4 className="text-white font-bold text-lg">Key Responsibilities & Learning:</h4>
                  <ul className="space-y-3">
                    <li className="text-gray-300 text-base flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1 text-lg">•</span>
                      <span>Building responsive and user-friendly web interfaces using React.js and Tailwind CSS</span>
                    </li>
                    <li className="text-gray-300 text-base flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1 text-lg">•</span>
                      <span>Collaborating with designers and developers to implement UI/UX designs effectively</span>
                    </li>
                    <li className="text-gray-300 text-base flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1 text-lg">•</span>
                      <span>Maintaining component-based architecture and ensuring code reusability</span>
                    </li>
                    <li className="text-gray-300 text-base flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1 text-lg">•</span>
                      <span>Using Git for version control and participating in code reviews</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-3 mt-2">Technologies I'm Working With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Tailwind CSS",
                      "JavaScript",
                      "HTML",
                      "CSS",
                      "Git & GitHub",
                      "Responsive Design"
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
