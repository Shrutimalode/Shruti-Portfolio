import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Web Developer."];
  const currentText = texts[currentIndex % texts.length];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, currentText]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-cyan-400 text-base sm:text-lg md:text-xl font-medium">Hey! My name is</p>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Shruti Malode<span className="text-cyan-400">.</span>
              </h1>
              <div className="text-lg sm:text-2xl lg:text-3xl text-gray-300 h-10 sm:h-12">
                and I am a passionate{" "}
                <span className="text-cyan-400 font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl sm:max-w-2xl">
              I am an undergraduate at{" "}
              <span className="text-cyan-400 font-semibold">
                Bajaj Institute Of Technology, Wardha
              </span>{" "}
              pursuing B.Tech in Computer Engineering who enjoys Designing and
              Developing innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
              <a
                href="https://github.com/Shrutimalode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 justify-center"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shruti-malode/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 justify-center"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 absolute -top-2 -left-2 sm:-top-4 sm:-left-4"></div>
              <img
                src="/shruti.png"
                alt="Developer illustration"
                className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full relative z-10 border-4 border-cyan-400/30"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 sm:mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
