import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { SiExpress, SiLeetcode } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { TbApi, TbFileCv } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaAward,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import HobbiesCodeEditor from "./components/CodeEditor";

const personalInfo = {
  name: "Sibu Chanda",
  title: "MERN Stack Developer",
  brief:
    "I build scalable, efficient web applications with modern technologies and clean code.",
  summary:
    "Aspiring MERN Stack developer with strong skills in JavaScript. Interested in Data Structures and Algorithms, building efficient and scalable solutions. Good problem-solving skills and a continuous learner.",
  email: "sibuchanda457@gmail.com",
  social: {
    github: "https://github.com/Sibuchanda",
    linkedin: "https://www.linkedin.com/in/sibu-chanda/",
    leetcode: "https://leetcode.com/u/Sibuchanda/",
    resume:
      "https://drive.google.com/file/d/1hRv-qu6lq0nB6P9ilWi5Flc5l6AL0f_6/view?usp=sharing",
  },
};

const projects = [
  {
    id: 1,
    title: "TRAFFIX",
    subtitle: "Custom Reverse Proxy Load Balancer with Automated Health Checks",
    description: [
      "Implemented a Layer-7 Load Balancer with reverse proxying, round-robin scheduling, and concurrent HTTP request handling.",
      "Integrated dynamic backend management using a secure admin control plane (React + Express + MongoDB + Redux toolkit) with real-time health visibility.",
      "Built automated health-check and high-availability logic to detect unhealthy servers, remove them from rotation, and auto-recover when healthy.",
    ],
    technologies: ["Node.js", "ReactJs", "Redux Toolkit(RTK)", "MongoDB"],
    link: "https://github.com/Sibuchanda/TRAFFIX",
  },
  {
    id: 2,
    title: "FastPost",
    subtitle: "Real-time chat application with microservices architecture",
    description: [
      "Designed scalable backend using Redis caching and RabbitMQ message broker for real-time chat.",
      "Implemented robust authentication with salted SHA-256 hashing, JWT sessions, and Google reCAPTCHA to prevent bots.",
      "Applied Zod validation for strict user schema validation and secure request handling.",
    ],
    technologies: [
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Redis",
      "RabbitMQ",
    ],
    link: "https://github.com/Sibuchanda/FastPost",
  },
  {
    id: 3,
    title: "ChitrakaarAI",
    subtitle: "Text-to-Image Generator Platform using GenAI",
    description: [
      "Developed MERN stack web app with Stable Diffusion for AI image generation.",
      "Integrated credit-based system with Razorpay payment gateway.",
      "Implemented secure authentication using Zod validation and JWT-based authentication.",
    ],
    technologies: [
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Razorpay payment gateway",
    ],
    link: "https://github.com/Sibuchanda/ChitrakaarAI",
  },
  {
    id: 4,
    title: "KidzoLearn",
    subtitle:
      "Platform where KG to class 1 students can learn through games, animation and quizes.",
    description: [
      "Built a MERN stack web application with interactive learning modules for math, English, science, and general knowledge.",
      "Implemented audio-assisted, visual-based activities and real-time scoring to support non-readers and early learners.",
      "Developed parent-friendly progress tracking with category-wise performance analytics and secure user authentication.",
    ],
    technologies: ["ReactJs", "Tailwind CSS", "NodeJs", "ExpressJs", "MongoDB"],
    link: "https://github.com/Sibuchanda/KidzoLearn",
  },
];

const skills = {
  Languages: [
    { name: "C++", icon: <FaReact className="w-5 h-5 text-blue-600" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-5 h-5 text-yellow-400" />,
    },
  ],

  "Web Technologies": [
    { name: "HTML", icon: <FaHtml5 className="w-5 h-5 text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-5 h-5 text-blue-400" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />,
    },
  ],

  "Frameworks/Libraries": [
    { name: "React.js", icon: <FaReact className="w-5 h-5 text-blue-400" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="w-5 h-5 text-gray-400" />,
    },
  ],

  "Tools/Platforms": [
    { name: "Node.js", icon: <DiNodejs className="w-5 h-5 text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="w-5 h-5 text-blue-500" /> },
    {
      name: "Postman",
      icon: <SiPostman className="w-5 h-5 text-orange-400" />,
    },
    {
      name: "REST API",
      icon: <TbApi className="w-5 h-5 text-blue-500" />,
    },
    {
      name: "Redux",
      icon: <SiRedux className="w-5 h-5 text-purple-500" />,
    },
    {
      name: "Redux Toolkit(RTK)",
      icon: <SiRedux className="w-5 h-5 text-purple-500" />,
    },
  ],

  Databases: [
    { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-500" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-5 h-5 text-green-500" />,
    },
  ],

  "Soft Skills": [
    {
      name: "Leadership",
      icon: <FaAward className="w-5 h-5 text-yellow-400" />,
    },
  ],
};

const achievements = [
  {
    id: 1,
    contest: "LeetCode Biweekly Contest 170",
    rank: 1447,
    participants: "26000+",
    link: "https://leetcode.com/contest/biweekly-contest-170/ranking/?region=global_v2",
  },
  {
    id: 2,
    contest: "LeetCode Weekly Contest 478",
    rank: 1947,
    participants: "25000+",
    link: "https://leetcode.com/contest/weekly-contest-478/ranking/?region=global_v2",
  },
  {
    id: 3,
    contest: "LeetCode Weekly Contest 464",
    rank: 3863,
    participants: "35000+",
    link: "https://leetcode.com/contest/weekly-contest-464/ranking/?region=global_v2",
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "Maulana Abul Kalam Azad University of Technology",
    duration: "July 2024 – June 2026",
    location: "West Bengal, India",
    gpa: "8.84",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Panskura Banamali College (Autonomous)",
    duration: "June 2021 – June 2024",
    location: "West Bengal, India",
    gpa: "8.52",
  },
];

const certificates = [
  {
    id: 1,
    name: "JavaScript",
    issuer: "GeeksforGeeks",
    date: "April 2025",
    description:
      "Proficient in JavaScript fundamentals: ES6 features (arrow functions, destructuring, spread/rest, modules), async/await, and DOM manipulation.",
    link: "https://drive.google.com/file/d/1OOrQQ1ERf0IeFXH6ges_pJfAkXV4Gf4t/view",
  },
  {
    id: 2,
    name: "Coding Ninja Slayground 2.0 Challenge Complition Certificate",
    issuer: "Coding Ninjs",
    date: "Nov 2024",
    description:
      "Solved various types of DSA patterns(ex. Two pointer, Prefix Sum, Tree problems, Sliding window etc",
    link: "https://drive.google.com/file/d/1lP6EpN37FAHcybzFhwxpWXaNbGm8BVDm/view?usp=sharing",
  },
  {
    id: 3,
    name: "Postman API Fundamentals Student Expert",
    issuer: "POSTMAN",
    date: "March 2025",
    description:
      "Making GET, POST, PATCH, and DELETE requests, Query parameters, bodies, headers, response codes, API Key Authorization, How to use APIs in your applications",
    link: "https://drive.google.com/file/d/1vJzLeQsHsE0HQNWScmfnWXEmR-fT8abP/view?usp=sharing",
  },
  {
    id: 4,
    name: "HTML5",
    issuer: "Infosys",
    date: "June 2025",
    description: "Skilled in writing HTML5",
    link: "https://drive.google.com/file/d/1CXjrVQEUXYK-mAWSCSBUPIGAPNsqkHa7/view",
  },
  {
    id: 5,
    name: "CSS3",
    issuer: "Infosys",
    date: "June 2025",
    description: "Flexbox and Grid.",
    link: "https://drive.google.com/file/d/1AU5e5Ef12v7rKNz7di2nT1FHpNcdv-0G/view",
  },
];

const sections = [
  "summary",
  "projects",
  "skills",
  "achievements",
  "education",
  "certificates",
];

const colorThemes = {
  cyan: {
    name: "Cyan",
    primary: "cyan",
    accentColor: "#0891b2",
  },
  blue: {
    name: "Blue",
    primary: "blue",
    accentColor: "#2563eb",
  },
  indigo: {
    name: "Indigo",
    primary: "indigo",
    accentColor: "#4f46e5",
  },
  slate: {
    name: "Slate",
    primary: "slate",
    accentColor: "#475569",
  },
};

const getThemeClasses = (theme) => {
  const colorMap = {
    cyan: {
      text: "text-cyan-400",
      hoverText: "hover:text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/50",
      groupHoverText: "group-hover:text-cyan-400",
    },
    blue: {
      text: "text-blue-400",
      hoverText: "hover:text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/50",
      groupHoverText: "group-hover:text-blue-400",
    },
    indigo: {
      text: "text-indigo-400",
      hoverText: "hover:text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      hoverBorder: "hover:border-indigo-500/50",
      groupHoverText: "group-hover:text-indigo-400",
    },
    slate: {
      text: "text-slate-400",
      hoverText: "hover:text-slate-300",
      bg: "bg-slate-500/10",
      border: "border-slate-500/20",
      hoverBorder: "hover:border-slate-500/50",
      groupHoverText: "group-hover:text-slate-300",
    },
  };
  return colorMap[theme];
};

// Mouse scroll animation component
const ScrollIndicator = ({ themeColors }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center mt-6"
        >
          {/* Mouse */}
          <div
            className={`w-6 h-10 border-2 ${themeColors.border} rounded-full flex justify-center`}
          >
            {/* DOT */}
            <motion.div
              className="w-1 h-1 rounded-full border-2 mt-2"
              style={{
                borderColor: themeColors.text.replace("text-", ""),
              }}
              animate={{
                y: [0, 6],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* ARROWS */}
          <div className="mt-1 flex flex-col items-center">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className={`w-3 h-3 border-r-2 border-b-2 ${themeColors.border} rotate-45`}
                style={{ marginTop: i === 0 ? "2px" : "-4px" }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("summary");
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolioTheme");
      return savedTheme && colorThemes[savedTheme] ? savedTheme : "cyan";
    } catch {
      return "cyan";
    }
  });

  const titles = [
    "MERN Stack Developer",
    "Quick Learner",
    "Backend Designer",
    "Problem Solver",
  ];

  const themeColors = getThemeClasses(currentTheme);

  const handleThemeChange = (theme) => {
    try {
      setCurrentTheme(theme);
      localStorage.setItem("portfolioTheme", theme);
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  };

  // Typing text logic
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 80 : 130;
    const pauseTime = isDeleting ? 500 : 1000;

    if (!isDeleting && displayedText === currentTitle) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentTitle.substring(0, displayedText.length - 1)
          : currentTitle.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const ColorThemeSelector = () => {
    return (
      <div className="mt-8">
        <p className="text-slate-500 text-xs uppercase tracking-widest mb-3 font-medium">
          Theme
        </p>
        <div className="flex gap-3">
          {Object.entries(colorThemes).map(([key, themeData]) => (
            <button
              key={key}
              type="button"
              onClick={() => handleThemeChange(key)}
              className={`w-8 h-8 rounded-full transition-all duration-200 border-2 cursor-pointer ${
                currentTheme === key
                  ? "border-white scale-110 shadow-lg"
                  : "border-slate-600 hover:border-slate-400 hover:scale-105"
              }`}
              style={{
                backgroundColor: themeData.accentColor,
              }}
              aria-label={`${themeData.name} theme`}
              title={themeData.name}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:fixed lg:w-[38%] xl:w-[35%] lg:h-screen p-8 lg:p-12 xl:p-16 flex flex-col justify-between lg:overflow-hidden"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 tracking-tight"
              style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-lg md:text-xl ${themeColors.text} mb-6 font-medium tracking-wide`}
            >
              {displayedText}
              <span className="animate-pulse ml-0.5">|</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed"
            >
              {personalInfo.brief}
            </motion.p>

            {/* Color Theme Selector */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <ColorThemeSelector />
            </motion.div>

            {/* Navigation */}
            <nav className="mt-6 hidden lg:block">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-3 px-0 text-xs uppercase tracking-widest font-medium transition-all duration-300 group ${
                    activeSection === section ? "text-white" : "text-slate-500"
                  }`}
                >
                  <span className="flex items-center">
                    <span
                      className={`inline-block w-8 h-px mr-4 transition-all duration-300 ${
                        activeSection === section
                          ? "w-16 bg-white"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-400"
                      }`}
                    ></span>
                    {section}
                  </span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-6 mt-8 lg:mt-6"
          >
            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 ${themeColors.hoverText} transition-colors duration-300`}
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 ${themeColors.hoverText} transition-colors duration-300`}
              aria-label="GitHub"
            >
              <LuGithub size={24} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 ${themeColors.hoverText} transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <CiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`text-slate-400 ${themeColors.hoverText} transition-colors duration-300`}
              aria-label="Email"
            >
              <CiMail size={24} />
            </a>
            <a
              href={personalInfo.social.resume}
              className={`text-slate-400 ${themeColors.hoverText} transition-colors duration-300`}
              aria-label="Resume"
            >
              <TbFileCv size={24} />
            </a>
          </motion.div>
        </motion.aside>

        {/* Scrollable Right Content */}
        <main className="lg:ml-[38%] xl:ml-[35%] w-full lg:w-[62%] xl:w-[65%] p-8 lg:p-12 xl:p-16 lg:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Summary Section */}
            <motion.section
              id="summary"
              variants={itemVariants}
              className="mb-26 scroll-mt-24"
            >
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {personalInfo.summary}
              </p>

              {/* Scroll Indicator */}
              <div className="lg:block">
                <ScrollIndicator themeColors={themeColors} />
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              id="projects"
              variants={itemVariants}
              className="mb-32 scroll-mt-24"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`group mb-8 p-6 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 ${themeColors.hoverBorder} transition-all duration-300`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between mb-3"
                  >
                    <h4
                      className={`text-white text-xl font-bold ${themeColors.groupHoverText} transition-colors duration-300`}
                    >
                      {project.title}
                      <FiExternalLink className="inline-block ml-2 w-4 h-4 -translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </h4>
                  </a>
                  <p className="text-base text-slate-400 mb-4 font-medium">
                    {project.subtitle}
                  </p>
                  <ul className="text-slate-300 text-base leading-relaxed space-y-3 mb-5">
                    {project.description.map((item, index) => (
                      <li key={index} className="flex">
                        <span className={`${themeColors.text} mr-3 mt-1`}>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 ${themeColors.bg} ${themeColors.text} rounded-full text-sm font-medium border ${themeColors.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.section>

            {/* Skills Section */}
            <motion.section
              id="skills"
              variants={itemVariants}
              className="mb-20 scroll-mt-24"
            >
              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-white font-bold mb-4 text-md">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className={`flex items-center gap-2 px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium border border-slate-700/50 ${themeColors.hoverBorder} transition-colors duration-300`}
                        >
                          {skill.icon}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Code Editor section  */}
            <motion.div
              variants={itemVariants}
              className="mb-20 flex justify-start"
            >
              <div className="w-full md:w-[70%] lg:w-[60%]">
                <HobbiesCodeEditor themeColors={themeColors} />
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.section
              id="achievements"
              variants={itemVariants}
              className="mb-32 scroll-mt-24"
            >
              <div className="space-y-6">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className={`p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 ${themeColors.hoverBorder} transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h4 className="text-white font-bold text-lg">
                        {ach.contest}
                      </h4>
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeColors.text} text-sm inline-flex items-center gap-1 hover:underline`}
                      >
                        View Contest <FiExternalLink />
                      </a>
                    </div>

                    <div className="mt-3 text-slate-300 text-sm space-y-1">
                      <p className="font-bold">
                        Rank:{" "}
                        <span className={themeColors.text}>{ach.rank}</span>
                      </p>
                      <p className="font-bold">
                        <span className="text-slate-400">
                          Total Participants:
                        </span>{" "}
                        {ach.participants}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              id="education"
              variants={itemVariants}
              className="mb-32 scroll-mt-24"
            >
              <div className="space-y-10">
                {education.map((edu) => (
                  <div key={edu.id} className="group">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-300 text-base">
                          {edu.institution}
                        </p>
                      </div>
                      <span
                        className={`${themeColors.text} text-sm font-semibold uppercase tracking-wide`}
                      >
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-slate-400 text-base">
                      {edu.gpa ? `GPA: ${edu.gpa} | ` : ""}
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Certificates Section */}
            <motion.section
              id="certificates"
              variants={itemVariants}
              className="mb-32 scroll-mt-24"
            >
              <div className="space-y-8">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`group p-6 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 ${themeColors.hoverBorder} transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div className="flex-1">
                        {Array.isArray(cert.name) ? (
                          <div className="flex items-center gap-4 flex-wrap">
                            {cert.name.map((name, index) => (
                              <React.Fragment key={index}>
                                {index > 0 && (
                                  <span className="text-slate-500 text-xl">
                                    |
                                  </span>
                                )}
                                <a
                                  href={cert.links[index]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-white font-bold text-xl ${themeColors.groupHoverText} transition-colors duration-300 inline-flex items-center`}
                                >
                                  {name}
                                  <FiExternalLink className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </a>
                              </React.Fragment>
                            ))}
                          </div>
                        ) : (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-white font-bold text-xl ${themeColors.groupHoverText} transition-colors duration-300 inline-flex items-center`}
                          >
                            {cert.name}
                            <FiExternalLink className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </a>
                        )}
                        <p className="text-slate-400 text-base mt-2">
                          {cert.issuer}
                        </p>
                      </div>
                      <span
                        className={`${themeColors.text} text-sm font-semibold uppercase tracking-wide`}
                      >
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Footer */}
            <motion.footer
              variants={itemVariants}
              className="mb-4 pt-12 border-t border-slate-800"
            >
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. All rights
                reserved.
              </p>
            </motion.footer>
          </motion.div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 z-50">
        <nav className="flex justify-around py-3 px-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                activeSection === section ? themeColors.text : "text-slate-400"
              }`}
            >
              {section.slice(0, 4)}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default App;
