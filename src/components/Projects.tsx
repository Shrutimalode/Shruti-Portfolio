import { ExternalLink, Github, Star, Users, Calendar, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const carouselIntervals = new WeakMap();

const Projects = () => {
  const [playingStates, setPlayingStates] = useState<{ [key: string]: boolean }>({});
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({});
  const carouselRefs = useRef<{ [key: string]: any }>({});
  const timerRefs = useRef<{ [key: string]: any }>({});

  const projects = [
    {
      title: "ShikshaHub Website",
      description: "ShikshaHub is a role-based academic platform built with the MERN stack, designed to enhance collaboration among students, teachers, and administrators. It features blog creation with review workflows, AI-generated summaries, study material sharing, event announcements, and chatbot support. The platform promotes interactive learning through moderated communities and structured academic engagement.",
      images: ["/shiksha1.jpg", "shiksha2.jpg", "/shiksha3.jpg","/shiksha4.jpg","/shiksha5.jpg","/shiksha6.jpg"],
      tech: ["React", "JavaScript", "Node.js", "MongoDB", "Express.js"],
      status: "Completed",
      role: "Team Lead",
      teamSize: 3,
      duration: "6 months",
      featured: true
    },
    {
      title: "Eauction Website",
      description: "This project addresses the challenges farmers face with low market prices and the growing consumer demand for fresh, high-quality farm products. The platform allows farmers to sell their goods at higher prices, boosting their earnings, while consumers gain direct access to fresh produce.",
      images: ["/auction1.png", "/auction2.png", "/auction3.png","/auction4.png","/auction5.png","/auction6.png","/auction7.png"],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      status: "Completed",
      role: "Team Lead",
      teamSize: 3,
      duration: "3 months",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      images: ["/portfolio.png", "/shikshahub1.png", "/auction1.png"],
      tech: ["React", "Tailwind CSS", "JavaScript"],
      status: "Completed",
      role: "Solo Developer",
      teamSize: 1,
      duration: "2 weeks",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500/10 text-green-400 border-green-400/20';
      case 'in progress':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-400/20';
    }
  };

  // Manual navigation and auto-slide logic
  const handleManualNav = (carouselId: string, direction: 'prev' | 'next', imagesLength: number) => {
    const api = carouselRefs.current[carouselId];
    if (!api) return;
    let newIndex = carouselIndexes[carouselId] || 0;
    if (direction === 'prev') {
      newIndex = newIndex === 0 ? imagesLength - 1 : newIndex - 1;
      api.scrollTo(newIndex);
    } else {
      newIndex = newIndex === imagesLength - 1 ? 0 : newIndex + 1;
      api.scrollTo(newIndex);
    }
    setCarouselIndexes(prev => ({ ...prev, [carouselId]: newIndex }));
    startAutoSlide(carouselId, imagesLength);
  };

  const startAutoSlide = (carouselId: string, imagesLength: number) => {
    if (timerRefs.current[carouselId]) {
      clearInterval(timerRefs.current[carouselId]);
    }
    timerRefs.current[carouselId] = setInterval(() => {
      setCarouselIndexes(prev => {
        const current = prev[carouselId] || 0;
        const next = current === imagesLength - 1 ? 0 : current + 1;
        const api = carouselRefs.current[carouselId];
        if (api) api.scrollTo(next);
        return { ...prev, [carouselId]: next };
      });
    }, 10000);
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      Object.values(timerRefs.current).forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mt-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a 
            unique challenge and learning opportunity.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="space-y-12">
            {featuredProjects.map((project, index) => {
              const carouselId = `featured-${index}`;
              return (
                <div key={index} className="max-w-3xl mx-auto">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="relative group mb-6">
                      <Carousel setApi={api => {
                        if (api) {
                          carouselRefs.current[carouselId] = api;
                          api.on('select', () => {
                            setCarouselIndexes(prev => ({ ...prev, [carouselId]: api.selectedScrollSnap() }));
                          });
                        }
                      }}>
                        <CarouselContent>
                          {project.images.map((img, i) => (
                            <CarouselItem key={i}>
                              <img
                                src={img}
                                alt={project.title + ' image ' + (i + 1)}
                                className="w-full h-48 sm:h-72 md:h-96 object-cover object-center rounded-xl border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {/* Manual navigation buttons */}
                        <button
                          onClick={() => handleManualNav(carouselId, 'prev', project.images.length)}
                          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 hover:bg-cyan-700 text-white p-2 rounded-full z-10"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => handleManualNav(carouselId, 'next', project.images.length)}
                          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 hover:bg-cyan-700 text-white p-2 rounded-full z-10"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </Carousel>
                      <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>Team Size: {project.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>Duration: {project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-4 h-4" />
                        <span>Role: {project.role}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
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
              );
            })}
          </div>
        </div>

      { /* Other Projects}
        {<div>
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const carouselId = `other-${index}`;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative">
                    <Carousel setApi={api => {
                      if (api) {
                        carouselRefs.current[carouselId] = api;
                        api.on('select', () => {
                          setCarouselIndexes(prev => ({ ...prev, [carouselId]: api.selectedScrollSnap() }));
                        });
                      }
                    }}>
                      <CarouselContent>
                        {project.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <img
                              src={img}
                              alt={project.title + ' image ' + (i + 1)}
                              className="w-full h-32 sm:h-48 object-cover object-center rounded-lg mb-4 border border-slate-600"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <button
                        onClick={() => handleManualNav(carouselId, 'prev', project.images.length)}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 hover:bg-cyan-700 text-white p-2 rounded-full z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleManualNav(carouselId, 'next', project.images.length)}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 hover:bg-cyan-700 text-white p-2 rounded-full z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </Carousel>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize} members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
