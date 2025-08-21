import React, { useState, useEffect, useRef } from "react";
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
  Layout,
  Zap,
} from "lucide-react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { GrGraphQl, GrMysql } from "react-icons/gr";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  const sectionRefs = {
    about: useRef(null),
    techstack: useRef(null),
    projects: useRef(null),
    education: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About", icon: <Code className="w-4 h-4" /> },
    {
      id: "techstack",
      label: "Tech Stack",
      icon: <Database className="w-4 h-4" />,
    },
    { id: "projects", label: "Projects", icon: <Layout className="w-4 h-4" /> },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ];

  const techStacks = {
    Languages: [
      { name: "", icon: <TbBrandCpp className="w-6 h-6 text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className="w-6 h-6 text-yellow-500" />,
      },
    ],
    "Web Technologies": [
      { name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="w-6 h-6 text-cyan-500" />,
      },
    ],
    "Frameworks/Libraries": [
      { name: "React.js", icon: <FaReact className="w-6 h-6 text-blue-400" /> },
      {
        name: "Express.js",
        icon: (
          <SiExpress
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
        icon: <DiNodejs className="w-6 h-6 text-green-500" />,
      },
      { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
      {
        name: "VS Code",
        icon: <VscVscode className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="w-6 h-6 text-orange-500" />,
      },
      { name: "REST API", icon: <Globe className="w-6 h-6 text-blue-500" /> },
      {
        name: "GraphQL",
        icon: <GrGraphQl className="w-6 h-6 text-pink-500" />,
      },
    ],
    Databases: [
      { name: "MySQL", icon: <GrMysql className="w-6 h-6 text-blue-600" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-6 h-6 text-green-500" />,
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
      tech: ["React", "Node.js", "MongoDB"],
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
      tech: ["MERN", "Socket.io", "JWT"],
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
      tech: ["React", "GraphQL", "AWS"],
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
      tech: ["MERN", "Socket.io", "RabbitMQ"],
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

  const getTheme = () => ({
    background: darkMode
      ? "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0c0c0c 100%)"
      : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)",
    navBackground: darkMode
      ? "rgba(12, 12, 12, 0.95)"
      : "rgba(248, 250, 252, 0.95)",
    navBorder: darkMode ? "#374151" : "#e2e8f0",
    sectionBackground: darkMode
      ? "rgba(26, 26, 26, 0.8)"
      : "rgba(241, 245, 249, 0.8)",
    cardBackground: darkMode
      ? "linear-gradient(145deg, #1f2937, #111827)"
      : "linear-gradient(145deg, #ffffff, #f8fafc)",
    cardBorder: darkMode ? "#374151" : "#e2e8f0",
    textSecondary: darkMode ? "#d1d5db" : "#64748b",
    buttonBackground: darkMode ? "#374151" : "#e2e8f0",
    buttonHover: darkMode ? "#4b5563" : "#cbd5e1",
    accent: darkMode ? "#3b82f6" : "#2563eb",
  });

  const theme = getTheme();

  return (
    <>
      {/* ---SEO Meta Tags --*/}
      <title>Sibu Chanda - Full Stack Developer | MERN Stack Expert</title>
      <meta
        name="description"
        content="Passionate Full Stack Developer specializing in MERN Stack, React.js, Node.js, and MongoDB. Expert in JavaScript, Data Structures & Algorithms. View my portfolio and projects."
      />
      <meta
        name="keywords"
        content="Full Stack Developer, MERN Stack, React Developer, Node.js, MongoDB, JavaScript, Web Development, Portfolio"
      />
      <meta name="author" content="Sibu Chanda" />
      <meta
        property="og:title"
        content="Sibu Chanda - Full Stack Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Explore my journey as a Full Stack Developer with expertise in MERN Stack and modern web technologies."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <div
        style={{
          background: theme.background,
          minHeight: "100vh",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #3b82f6, transparent)",
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
              top: "10%",
              right: "10%",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #8b5cf6, transparent)",
              transform: `translate(-${scrollY * 0.08}px, ${scrollY * 0.12}px)`,
              bottom: "20%",
              left: "5%",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Enhanced Custom Styles */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-12px) rotate(1deg); }
            66% { transform: translateY(-6px) rotate(-1deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .floating-image {
            animation: float 6s ease-in-out infinite;
          }
          
          .pulse-glow {
            animation: pulse 3s infinite;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-slide-left {
            animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-slide-right {
            animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-fade-scale {
            animation: fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .glass-morphism {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .section-title {
            position: relative;
            display: inline-block;
          }
          
          .section-title::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            border-radius: 2px;
          }
          
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, #8b5cf6, #3b82f6);
            border-radius: 1px;
          }
          
          .card-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .card-hover::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.6s ease;
            opacity: 0;
          }
          
          .card-hover:hover::before {
            opacity: 1;
            transform: rotate(45deg) translate(50%, 50%);
          }
          
          .skill-card {
            position: relative;
            overflow: hidden;
          }
          
          .skill-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s ease;
          }
          
          .skill-card:hover::after {
            left: 100%;
          }
          
          .nav-item {
            position: relative;
            overflow: hidden;
          }
          
          .nav-item::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          
          .nav-item:hover::before {
            width: 100%;
          }
          
          .project-tech-badge {
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
            backdrop-filter: blur(8px);
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          
          .shimmer-text {
            background: linear-gradient(90deg, currentColor 40%, rgba(59, 130, 246, 0.8) 50%, currentColor 60%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmer 2s infinite;
          }
          
          .section-container {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .section-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .stagger-1 { transition-delay: 0.1s; }
          .stagger-2 { transition-delay: 0.2s; }
          .stagger-3 { transition-delay: 0.3s; }
          .stagger-4 { transition-delay: 0.4s; }
        `}</style>

        {/* Enhanced Navigation */}
        <nav
          className="fixed top-0 w-full z-50 glass-morphism border-b transition-all duration-500"
          style={{
            backgroundColor: theme.navBackground,
            borderColor: theme.navBorder,
            transform: scrollY > 50 ? "translateY(0)" : "translateY(0)",
            boxShadow: scrollY > 50 ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 ">SIBU CHANDA</div>

              {/*--- Desktop Navigation --*/}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-item flex items-center gap-2 font-semibold cursor-pointer transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg stagger-${
                      index + 1
                    }`}
                    style={{ color: theme.textSecondary }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-xl transition-all duration-300 hover:scale-110 glass-morphism"
                  style={{ backgroundColor: theme.buttonBackground }}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-amber-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-indigo-600" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg transition-all duration-200 glass-morphism"
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
                  className="p-2 rounded-lg transition-all duration-200 glass-morphism"
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

          {/* --- Mobile Menu -- */}
          {isMenuOpen && (
            <div
              className="md:hidden border-t glass-morphism"
              style={{
                backgroundColor: theme.navBackground,
                borderColor: theme.navBorder,
              }}
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-2 stagger-${
                      index + 1
                    }`}
                    style={{ color: theme.textSecondary }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

   {/* Enhanced About Section */}
        <section 
          id="about" 
          ref={sectionRefs.about}
          className={`section-container ${visibleSections.about ? 'section-visible' : ''} pt-32 pb-20 px-4 sm:px-6 lg:px-8`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="section-title text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white">
                ABOUT ME
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-6 relative flex justify-center ${visibleSections.about ? 'animate-slide-left' : ''}`}>
                {/* Enhanced Blue Flame Glow */}
                <div className="absolute flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full blur-3xl opacity-60 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 pulse-glow" />
                </div>

                {/* Enhanced Profile Image */}
                <div className="relative z-10">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <img
                        src="./sibu.jpg"
                        alt="Sibu Chanda - Full Stack Developer"
                        className="w-full h-full rounded-full object-cover transition-all duration-500 hover:scale-110 floating-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-black">
                              SC
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-8 ${visibleSections.about ? 'animate-slide-right' : ''}`}>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Full Stack Developer
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <p 
                    className="text-xl leading-relaxed font-medium"
                    style={{ color: darkMode ? '#e5e7eb' : '#374151' }}
                  >
                    Passionate about <span className="text-blue-600 font-semibold">MERN Stack Development</span> with strong command over JavaScript, React, Node.js, and MongoDB. 
                  </p>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                  >
                    Proficient in <span className="text-purple-600 font-semibold">Data Structures and Algorithms</span> with a focus on building scalable, efficient solutions. Strong problem-solving ability, collaborative mindset, and a commitment to continuous learning.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="https://github.com/Sibuchanda"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg glass-morphism bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:animate-bounce">
                      <Github className="w-5 h-5" />
                    </span>
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/in/sibu-chanda"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg glass-morphism bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:animate-bounce">
                      <Linkedin className="w-5 h-5" />
                    </span>
                    LinkedIn
                  </a>

                  <a
                    href="mailto:sibuchanda457@gmail.com"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg glass-morphism bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold"
                  >
                    <span className="group-hover:animate-bounce">
                      <Mail className="w-5 h-5" />
                    </span>
                    Email
                  </a>

                  <a
                    href="tel:+918967668857"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg glass-morphism bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold"
                  >
                    <span className="group-hover:animate-bounce">
                      <Phone className="w-5 h-5" />
                    </span>
                    Call
                  </a>

                  <a
                    href="https://drive.google.com/uc?export=download&id=1MwJVrUghnBI4d0OZzCUPN3fN2GAsdUtb"
                    download="Sibu-Chanda-Resume.pdf"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg glass-morphism bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:animate-bounce">
                      <Download className="w-5 h-5" />
                    </span>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Tech Stack Section */}
        <section
          id="techstack"
          ref={sectionRefs.techstack}
          className={`section-container ${
            visibleSections.techstack ? "section-visible" : ""
          } py-20 px-4 sm:px-6 lg:px-8`}
          style={{ backgroundColor: theme.sectionBackground }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="section-title text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white">
                TECH STACK
              </h2>
            </div>

            <div
              className={`card-hover p-10 rounded-2xl shadow-2xl border glass-morphism max-w-5xl mx-auto ${
                visibleSections.techstack ? "animate-fade-scale" : ""
              }`}
              style={{
                background: theme.cardBackground,
                borderColor: theme.cardBorder,
              }}
            >
              <div className="space-y-10">
                {Object.entries(techStacks).map(
                  ([category, skills], categoryIndex) => (
                    <div
                      key={category}
                      className={`space-y-6 stagger-${categoryIndex + 1}`}
                    >
                      <div className="relative">
                        <h3 className="text-2xl font-bold border-b-2 pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {category}
                        </h3>
                        <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="skill-card group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer glass-morphism"
                            style={{ backgroundColor: theme.sectionBackground }}
                          >
                            <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <span className="font-semibold text-sm group-hover:text-blue-500 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={sectionRefs.projects}
          className={`section-container ${
            visibleSections.projects ? "section-visible" : ""
          } py-20 px-4 sm:px-6 lg:px-8`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="section-title text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-400 dark:to-white">
                PROJECTS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`card-hover group rounded-2xl shadow-2xl overflow-hidden border glass-morphism transition-all duration-500 hover:shadow-blue-500/25 stagger-${
                    index + 1
                  }`}
                  style={{
                    background: theme.cardBackground,
                    borderColor: theme.cardBorder,
                    transform: visibleSections.projects
                      ? "translateY(0)"
                      : "translateY(40px)",
                    opacity: visibleSections.projects ? 1 : 0,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Zap className="w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {project.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>

                    <p
                      className="leading-relaxed"
                      style={{ color: theme.textSecondary }}
                    >
                      {project.description}
                    </p>

                    {project.tech && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="project-tech-badge px-3 py-1 rounded-full text-sm font-medium text-blue-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveLink}
                        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-blue-500/25"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Education Section */}
        <section
          id="education"
          ref={sectionRefs.education}
          className={`section-container ${
            visibleSections.education ? "section-visible" : ""
          } py-20 px-4 sm:px-6 lg:px-8`}
          style={{ backgroundColor: theme.sectionBackground }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="section-title text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white">
                EDUCATION
              </h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`card-hover group p-8 rounded-2xl shadow-2xl border glass-morphism transition-all duration-500 hover:shadow-purple-500/25 stagger-${
                    index + 1
                  }`}
                  style={{
                    background: theme.cardBackground,
                    borderColor: theme.cardBorder,
                    transform: visibleSections.education
                      ? "translateY(0)"
                      : "translateY(40px)",
                    opacity: visibleSections.education ? 1 : 0,
                    transitionDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="relative">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>

                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {edu.institution}
                        </h3>
                        <p
                          className="text-lg font-medium"
                          style={{ color: theme.textSecondary }}
                        >
                          {edu.course}
                        </p>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-3 text-right">
                      <div
                        className="flex items-center justify-end gap-2"
                        style={{ color: theme.textSecondary }}
                      >
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold">{edu.duration}</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <Award className="w-5 h-5 text-green-500" />
                        <span className="font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
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

        {/* Enhanced Footer */}
        <footer
          className="py-12 px-4 sm:px-6 lg:px-8 border-t-2 glass-morphism relative overflow-hidden"
          style={{
            background: theme.cardBackground,
            borderColor: theme.navBorder,
          }}
        >
          {/* Footer Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{
                top: "20%",
                left: "10%",
                filter: "blur(60px)",
                animation: "float 8s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{
                bottom: "20%",
                right: "15%",
                filter: "blur(50px)",
                animation: "float 6s ease-in-out infinite reverse",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Let's Build Something Amazing Together!
                </h3>
                <p className="text-lg" style={{ color: theme.textSecondary }}>
                  Ready to turn ideas into reality? Let's connect and create
                  something extraordinary.
                </p>
              </div>

              <div className="flex justify-center gap-6">
                {[
                  {
                    href: "https://github.com/Sibuchanda",
                    icon: <Github className="w-7 h-7" />,
                    color: "hover:text-gray-600",
                  },
                  {
                    href: "https://linkedin.com/in/sibu-chanda",
                    icon: <Linkedin className="w-7 h-7" />,
                    color: "hover:text-blue-600",
                  },
                  {
                    href: "mailto:sibuchanda457@gmail.com",
                    icon: <Mail className="w-7 h-7" />,
                    color: "hover:text-green-600",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-125 hover:shadow-lg glass-morphism ${social.color}`}
                    style={{
                      color: theme.textSecondary,
                      backgroundColor: theme.buttonBackground,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div
                className="pt-6 border-t"
                style={{ borderColor: theme.cardBorder }}
              >
                <p className="text-sm" style={{ color: theme.textSecondary }}>
                  © {new Date().getFullYear()} Sibu Chanda. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
