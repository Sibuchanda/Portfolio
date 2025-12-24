import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

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
];

const skills = {
  Languages: ["C++", "JavaScript"],
  "Web Technologies": ["HTML", "CSS", "Tailwind CSS"],
  "Frameworks/Libraries": ["React.js", "Express.js"],
  "Tools/Platforms": [
    "Node.js",
    "Git",
    "Docker",
    "Postman",
    "REST API",
    "Redux",
    "Redux Toolkit(RTK)",
  ],
  Databases: ["MySQL", "MongoDB"],
  "Soft Skills": ["Leadership"],
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
    name: "HTML5",
    issuer: "Infosys",
    date: "June 2025",
    description: "Skilled in writing HTML5",
    links: [
      "https://drive.google.com/file/d/1CXjrVQEUXYK-mAWSCSBUPIGAPNsqkHa7/view",
    ],
  },
  {
    id: 2,
    name: "CSS3",
    issuer: "Infosys",
    date: "June 2025",
    description: "Flexbox and Grid.",
    links: [
      "https://drive.google.com/file/d/1AU5e5Ef12v7rKNz7di2nT1FHpNcdv-0G/view",
    ],
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

const App = () => {
  const [activeSection, setActiveSection] = useState("summary");

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

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300">
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
              className="text-lg md:text-xl text-cyan-400 mb-6 font-medium tracking-wide"
            >
              {personalInfo.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed"
            >
              {personalInfo.brief}
            </motion.p>

            {/* Navigation */}
            <nav className="mt-12 hidden lg:block">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
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
            className="flex gap-6 mt-8 lg:mt-0"
          >
            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <SiLeetcode size={24} />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <LuGithub size={24} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <CiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Email"
            >
              <CiMail size={24} />
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
              className="mb-32 scroll-mt-24"
            >
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {personalInfo.summary}
              </p>
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
                  className="group mb-8 p-6 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between mb-3"
                  >
                    <h4 className="text-white text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
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
                        <span className="text-cyan-400 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
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
              className="mb-32 scroll-mt-24"
            >
              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-white font-bold mb-4 text-lg">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

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
                    className="p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h4 className="text-white font-bold text-lg">
                        {ach.contest}
                      </h4>
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 text-sm inline-flex items-center gap-1 hover:underline"
                      >
                        View Contest <FiExternalLink />
                      </a>
                    </div>

                    <div className="mt-3 text-slate-300 text-sm space-y-1">
                      <p className="font-bold">
                        Rank: <span className="text-cyan-400">{ach.rank}</span>
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
                      <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
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
                    className="group p-6 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
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
                                  className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors duration-300 inline-flex items-center"
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
                            className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors duration-300 inline-flex items-center"
                          >
                            {cert.name}
                            <FiExternalLink className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </a>
                        )}
                        <p className="text-slate-400 text-base mt-2">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
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
              className="pt-12 border-t border-slate-800"
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
                activeSection === section ? "text-cyan-400" : "text-slate-400"
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
