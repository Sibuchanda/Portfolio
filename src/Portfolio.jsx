import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Sun,
  Moon,
  Globe,
  ExternalLink,
  Calendar,
  GraduationCap,
  Award,
  Menu,
  X,
  Download,
  Code,
  Database,
  Terminal,
  Layers,
  Settings,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "techstack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const techStacks = {
    Languages: [
      { name: "C++", icon: <Code className="w-6 h-6 text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <Code className="w-6 h-6 text-yellow-500" />,
      },
    ],
    "Web Technologies": [
      { name: "HTML", icon: <Globe className="w-6 h-6 text-orange-500" /> },
      { name: "CSS", icon: <Layers className="w-6 h-6 text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <Layers className="w-6 h-6 text-cyan-500" />,
      },
    ],
    "Frameworks/Libraries": [
      { name: "React.js", icon: <Code className="w-6 h-6 text-blue-400" /> },
      {
        name: "Express.js",
        icon: (
          <Terminal
            className={`w-6 h-6 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          />
        ),
      },
    ],
    "Tools/Platforms": [
      {
        name: "Node.js",
        icon: <Terminal className="w-6 h-6 text-green-500" />,
      },
      { name: "Git", icon: <Code className="w-6 h-6 text-orange-600" /> },
      { name: "VS Code", icon: <Code className="w-6 h-6 text-blue-500" /> },
      {
        name: "Postman",
        icon: <Settings className="w-6 h-6 text-orange-500" />,
      },
      { name: "REST API", icon: <Globe className="w-6 h-6 text-blue-500" /> },
      { name: "GraphQL", icon: <Database className="w-6 h-6 text-pink-500" /> },
    ],
    Databases: [
      { name: "MySQL", icon: <Database className="w-6 h-6 text-blue-600" /> },
      {
        name: "MongoDB",
        icon: <Database className="w-6 h-6 text-green-500" />,
      },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "KidzoSchool",
      description:
        "An interactive learning app specially designed for Kindergarten (KG) to Class 1 students. Where students can learn Maths, English & Science through fun games & animation. Also their parents can track their children through learning points and history navigation",
      image: "/KidzoSchool.png",
      liveLink: "https://kidzoschool-kuiu.onrender.com",
      githubLink: "https://github.com/Sibuchanda/KidzoLearn?tab=readme-ov-file",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "MERN stack application for project management with real-time updates using Socket.io, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      liveLink: "https://demo-taskmanager.com",
      githubLink: "https://github.com/yourusername/taskmanager",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "React-based analytics dashboard with GraphQL API, Redis caching, and AWS deployment. Includes data visualization and real-time metrics.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      liveLink: "https://demo-dashboard.com",
      githubLink: "https://github.com/yourusername/dashboard",
    },
    {
      id: 4,
      title: "Chat Application",
      description:
        "Real-time chat application built with MERN stack, Socket.io, and RabbitMQ for message queuing. Features include group chats and file sharing.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
      liveLink: "https://demo-chat.com",
      githubLink: "https://github.com/yourusername/chatapp",
    },
  ];

  const education = [
    {
      institution: "Maulana Abul Kalam Azad University of Technology",
      duration: "2024 - 2026",
      course: "Master of Computer Application(MCA)",
      percentage: "Studying",
    },
    {
      institution: "Panskura Banamali College(Autonomous)",
      duration: "2021 - 2024",
      course: "Bachelor of Computer Application(BCA)",
      percentage: "CGPA : 8.52",
    },
    {
      institution: "Turka High School(H.S)",
      duration: "2012 - 2020",
      course: "Secondary + Higher Secondary Education",
      percentage: "81.57% | 91.4%",
    },
  ];

  //  ----- Curtom Dark mode -----
  const getTheme = () => ({
    background: darkMode ? "#000000" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    navBackground: darkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
    navBorder: darkMode ? "#374151" : "#e5e7eb",
    sectionBackground: darkMode ? "#111827" : "#f9fafb",
    cardBackground: darkMode ? "#1f2937" : "#ffffff",
    cardBorder: darkMode ? "#374151" : "#e5e7eb",
    textSecondary: darkMode ? "#d1d5db" : "#6b7280",
    buttonBackground: darkMode ? "#374151" : "#f3f4f6",
    buttonHover: darkMode ? "#4b5563" : "#e5e7eb",
  });

  const theme = getTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 300px;
          }
        }
        
        .floating-image {
          animation: float 4s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse 2s infinite;
        }
        
        .slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: theme.navBackground,
          borderColor: theme.navBorder,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-400">SIBU CHANDA</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{ color: theme.textSecondary }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: theme.buttonBackground }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = theme.buttonHover)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = theme.buttonBackground)
                }
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ backgroundColor: theme.buttonBackground }}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ backgroundColor: theme.buttonBackground }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden border-t slide-down"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.navBorder,
            }}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-200"
                  style={{ color: theme.textSecondary }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = theme.buttonBackground;
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateX(0px)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* About Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-6xl font-black mb-6"
              style={{
                color: darkMode ? "#ffffff" : "#111827",
                textShadow: darkMode
                  ? "2px 2px 4px rgba(0,0,0,0.5)"
                  : "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              ABOUT ME
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative flex justify-center">
              {/* Blue Flame Glow */}
              <div className="absolute flex items-center justify-center">
                <div className="w-80 h-80 rounded-full blur-2xl opacity-80 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 pulse-glow" />
              </div>

              {/* Profile Image */}
              <img
                src="./sibu3.jpg"
                alt="Sibu Chanda"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 relative z-10 transition-all duration-300 hover:scale-110 floating-image"
                style={{ borderColor: darkMode ? "#374151" : "#ffffff" }}
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Full Stack Developer</h2>
              <p
                className="text-xl leading-relaxed"
                style={{ color: theme.textSecondary }}
              >
                Passionate about MERN Stack Development with strong command over
                JavaScript, React, Node.js, and MongoDB. Proficient in Data
                Structures and Algorithms with a focus on building scalable,
                efficient solutions. Strong problem-solving ability,
                collaborative mindset, and a commitment to continuous learning.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Sibuchanda"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: darkMode ? "#ffffff" : "#000000",
                    color: darkMode ? "#000000" : "#ffffff",
                  }}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/sibu-chanda"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>

                <a
                  href="mailto:sibuchanda457@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>

                <a
                  href="tel:+918967668857"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </a>

                <a
                  href="https://drive.google.com/uc?export=download&id=1MwJVrUghnBI4d0OZzCUPN3fN2GAsdUtb"
                  download="Sibu-Chanda-Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                    color: darkMode ? "#ffffff" : "#000000",
                  }}
                  aria-label="Download Resume"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="techstack"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: theme.sectionBackground }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-6xl font-black mb-6"
              style={{
                color: darkMode ? "#ffffff" : "#111827",
                textShadow: darkMode
                  ? "2px 2px 4px rgba(0,0,0,0.5)"
                  : "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              TECH STACK
            </h2>
          </div>

          <div
            className="p-8 rounded-xl shadow-lg border max-w-4xl mx-auto"
            style={{
              backgroundColor: theme.cardBackground,
              borderColor: theme.cardBorder,
            }}
          >
            <div className="space-y-8">
              {Object.entries(techStacks).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h3
                    className="text-xl font-bold border-b pb-2"
                    style={{
                      color: theme.color,
                      borderColor: theme.cardBorder,
                    }}
                  >
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: theme.sectionBackground }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = theme.buttonHover)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor =
                            theme.sectionBackground)
                        }
                      >
                        <div className="text-lg">{skill.icon}</div>
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-6xl md:text-8xl font-black mb-6"
              style={{
                color: darkMode ? "#ffffff" : "#111827",
                textShadow: darkMode
                  ? "2px 2px 4px rgba(0,0,0,0.5)"
                  : "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              PROJECTS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300"
                style={{
                  backgroundColor: theme.cardBackground,
                  borderColor: theme.cardBorder,
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0px)")
                }
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p
                    className="mb-4 leading-relaxed"
                    style={{ color: theme.textSecondary }}
                  >
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#1f2937",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = darkMode
                          ? "#4b5563"
                          : "#111827")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = darkMode
                          ? "#374151"
                          : "#1f2937")
                      }
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: theme.sectionBackground }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-6xl md:text-8xl font-black mb-6"
              style={{
                color: darkMode ? "#ffffff" : "#111827",
                textShadow: darkMode
                  ? "2px 2px 4px rgba(0,0,0,0.5)"
                  : "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              EDUCATION
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
                style={{
                  backgroundColor: theme.cardBackground,
                  borderColor: theme.cardBorder,
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
                      }}
                    >
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p style={{ color: theme.textSecondary }}>{edu.course}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="flex items-center gap-2"
                      style={{ color: theme.textSecondary }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-green-500">
                        {edu.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-4 sm:px-6 lg:px-8 border-t-2"
        style={{
          backgroundColor: theme.background,
          color: theme.color,
          borderColor: theme.navBorder,
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <p className="text-lg mb-4">
              Let's build something amazing together!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Sibuchanda"
                className="transition-all duration-200 hover:scale-125"
                style={{ color: theme.textSecondary }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sibu-chanda"
                className="transition-all duration-200 hover:scale-125"
                style={{ color: theme.textSecondary }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sibuchanda457@gmail.com"
                className="transition-all duration-200 hover:scale-125"
                style={{ color: theme.textSecondary }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-6" style={{ color: theme.textSecondary }}>
              © {new Date().getFullYear()} Sibu Chanda. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
