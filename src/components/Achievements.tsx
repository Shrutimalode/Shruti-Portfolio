import React from "react";
import { ExternalLink } from "lucide-react";

const Achievements = () => {
  const images = ["/ml1.jpg", "/ml3.jpg", "/ml2.jpg"];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center">Achievements</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row justify-center gap-6 w-full mb-2">
            {images.map((img, i) => (
              <div key={i} className="flex-1 group">
                <img
                  src={img}
                  alt={`ML Competition Achievement ${i + 1}`}
                  className="w-full h-auto object-cover object-center rounded-lg border border-cyan-400/30 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-cyan-400"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">1st Place – CodeCraft ML Competition 2025</h3>
            <p className="text-gray-300 mb-2">
              Winner of the CodeCraft ML Competition organized by the Department of Computer Engineering, Bajaj Institute of Technology, Wardha.
            </p>
            <p className="text-gray-400 mb-4">June 2025</p>
            <a
              href="https://github.com/Shrutimalode/ML_Code_Craft.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Project on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 