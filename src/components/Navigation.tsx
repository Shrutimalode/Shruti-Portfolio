
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onAboutClick: () => void;
  onInternshipClick: () => void;
  onExperienceClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Navigation = ({ onAboutClick, onInternshipClick,onExperienceClick, onProjectsClick, onContactClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SM</span>
            </div>
            <span className="ml-3 text-white font-semibold text-lg">Shruti Malode</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={onAboutClick}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-xl"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={onInternshipClick}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-xl"
                >
                  Internship
                </button>
              </li>
              <li>
                <button 
                  onClick={onExperienceClick}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-xl"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={onProjectsClick}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-xl"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={onContactClick}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-xl"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm shadow-lg rounded-lg mx-2 mt-2 p-4 animate-fade-in flex flex-col space-y-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onAboutClick(); }}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-lg text-left"
            >
              About
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onInternshipClick(); }}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-lg text-left"
            >
              Internship
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onExperienceClick(); }}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-lg text-left"
            >
              Experience
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onProjectsClick(); }}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-lg text-left"
            >
              Projects
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-lg text-left"
            >
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
