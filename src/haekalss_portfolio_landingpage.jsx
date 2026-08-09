import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Nyumbangin',
    subtitle: 'Digital Donation & Streamer Alert Web App',
    desc: 'An interactive crowdfunding platform designed for content creators. Features real-time donation notifications for live streaming, OAuth 2.0 authentication, Midtrans Payment Gateway integration (Sandbox), and dedicated dashboards for admins and creators.',
    tech: ['Next.js', 'MongoDB', 'Socket.io', 'OAuth 2.0', 'Midtrans'],
    url: 'https://github.com/Haekalss/Nyumbangin',
    website: 'https://nyumbangin.web.id',
    highlights: [
      'Real-time donation alerts via Socket.io',
      'Secure authentication using OAuth 2.0',
      'Integrated Midtrans Payment Gateway (Sandbox)'
    ]
  },
  {
    title: 'TakoType',
    subtitle: 'Typing Speed Test & Stats Tracker Platform',
    desc: 'An interactive web application for measuring and training typing speed with real-time Words Per Minute (WPM) calculations, accuracy tracking, and performance statistics analytics.',
    tech: ['React.js', 'Express.js', 'Tailwind CSS'],
    url: 'https://github.com/Haekalss/TakoType',
    website: 'https://takotype.web.id',
    highlights: [
      'Real-time WPM & Accuracy calculations',
      'Responsive application state management',
      'Modern & efficient desktop UI design'
    ]
  },
  {
    title: 'Dishy',
    subtitle: 'Official Band Landing Page',
    desc: 'A responsive landing page website for a local band focusing on modern visual design, interactive navigation, a hero slider, and cross-component performance optimization.',
    tech: ['Next.js', 'Tailwind CSS'],
    url: 'https://github.com/Haekalss/Dishy',
    website: 'https://dishy.web.id',
    highlights: [
      'Ultra-responsive layout across all devices',
      'Hero slider & interactive gallery',
      'Optimized component performance and consistency'
    ]
  }
];

const skills = [
  {
    name: 'JavaScript',
    category: 'Language',
    node: (
      <div className="w-12 h-12 bg-[#F7DF1E] rounded-md shadow flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 128 128" className="w-9 h-9">
          <path fill="#000" d="M22.034 0h84v128H22.034zM52 96.5c1.5 3 4.4 5.5 9 5.5 4.8 0 7.7-2.4 7.7-6.2 0-4.3-3.5-5.9-9.4-8.4l-3.2-1.4c-9.3-4-15.5-9-15.5-19.6 0-9.8 7.5-17.2 19.1-17.2 8.3 0 14.3 2.9 18.6 10.5l-10.2 6.5c-2.2-4-4.7-5.6-8.4-5.6-3.8 0-6.2 2.4-6.2 5.6 0 3.9 2.4 5.5 8 8l3.2 1.4c11 4.7 17.2 9.5 17.2 20.4 0 11.8-9.3 18.3-21.7 18.3-12.1 0-19.9-5.8-23.7-13.4L52 96.5z"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'Go',
    category: 'Language',
    node: (
      <div className="w-12 h-12 bg-[#00ADD8] rounded-md flex items-center justify-center shadow overflow-hidden">
        <svg viewBox="0 0 128 128" className="w-9 h-9" fill="#fff">
          <path d="M9.7 62.5c-.2 0-.2-.1-.1-.3l1.4-1.8c.1-.2.4-.3.6-.3h35.9c.2 0 .3.2.2.4l-1.1 1.7c-.1.2-.4.4-.5.4l-36.4-.1zM.2 68.1c-.2 0-.2-.1-.1-.3l1.4-1.8c.1-.2.4-.3.6-.3h45.9c.2 0 .3.2.3.4l-.5 1.6c-.1.3-.3.4-.6.4L.2 68.1zM15.3 73.7c-.2 0-.3-.2-.1-.4l.9-1.7c.1-.2.4-.4.6-.4h28.9c.2 0 .4.2.4.4l-.1 1.6c0 .3-.3.5-.5.5H15.3zM78.6 60.4c-4.5 1.1-7.6 2-12 3.1-1.1.3-1.2.3-2.1-.7-1.1-1.2-1.9-2-3.5-2.7-4.6-2.3-9.1-1.6-13.3 1.1-5 3.2-7.6 8-7.5 13.9.1 5.8 4.1 10.6 9.8 11.4 4.9.7 9-1 12.2-4.6.6-.8 1.2-1.6 1.9-2.6h-13.8c-1.5 0-1.9-.9-1.4-2.1.9-2.1 2.6-5.6 3.6-7.3.2-.4.7-1.1 1.7-1.1h26.2c-.1 1.9-.1 3.8-.4 5.7-.8 5.2-2.7 10-5.9 14.2-5.2 6.9-12 11.1-20.6 12.3-7.1 1-13.7-.4-19.5-4.7-5.4-4-8.4-9.3-9.2-15.9-.9-7.8 1.4-14.8 6.1-21 5.1-6.7 11.9-10.9 20.2-12.4 6.8-1.2 13.3-.4 19.1 3.5 3.8 2.5 6.5 5.9 8.3 10 .4.6.1 1-.7 1.1z"/>
          <path d="M100.9 96.3c-6.6-.2-12.6-2.1-17.7-6.4-4.3-3.7-7-8.4-7.8-14-1.2-8.2 1.1-15.5 6-21.9 5.3-6.9 11.6-10.5 20.2-12 7.4-1.3 14.3-.6 20.6 3.7 5.7 3.9 9.2 9.2 10.1 16.1 1.2 9.8-1.6 17.8-8.3 24.7-4.8 4.9-10.7 8-17.5 9.4-1.8.3-3.6.4-5.6.4zm16.6-28.2c-.1-.9-.1-1.7-.2-2.5-1.5-8.1-8.9-12.7-16.6-10.9-7.5 1.7-12.4 6.5-14.2 14.1-1.5 6.3 1.6 12.7 7.4 15.3 4.5 2 9 1.7 13.3-.5 6.4-3.4 9.9-8.6 10.3-15.5z"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'React.js',
    category: 'Frontend',
    node: (
      <div className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center shadow border border-zinc-700">
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-9 h-9">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    name: 'Next.js',
    category: 'Framework',
    node: (
      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow border border-zinc-700 overflow-hidden">
        <svg viewBox="0 0 180 180" className="w-10 h-10">
          <mask id="nextMask" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="#fff" />
          </mask>
          <g mask="url(#nextMask)">
            <circle cx="90" cy="90" r="90" fill="#000" />
            <path fill="url(#nextGrad)" d="M149.5 157.5 69.5 54H54v72h12V69l73 94z" />
            <rect x="115" y="54" width="12" height="72" fill="url(#nextGrad2)" />
          </g>
          <defs>
            <linearGradient id="nextGrad" x1="109" y1="116" x2="144" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nextGrad2" x1="121" y1="54" x2="121" y2="106" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    name: 'Express.js',
    category: 'Backend',
    node: (
      <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center shadow border border-zinc-700">
        <svg viewBox="0 0 128 128" className="w-9 h-9" fill="#000">
          <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.6-2.1-2.66-3.48C89 76.7 81.94 86.19 75.15 95.9c-2.35 3.35-4.81 4.79-9.13 3.46l26.91-36.9-25.16-33.51c4.29-.85 7.24-.42 9.75 3.36 5.87 8.85 12.36 17.28 19 26.5 6.77-9.31 13.34-17.9 19.4-26.84 2.31-3.39 4.86-4.59 9.2-3.14C122.06 40.9 114.71 50.44 107.47 60c-.85 1.12-1.67 2.27-2.66 3.62 7.31 9.66 14.62 19.32 22.07 29.19zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83C9.7 29.5 32.36 20 51.72 30.31c11.51 6.14 16.61 16.5 17.94 29 .21 2-.28 2.65-2.35 2.64q-30.72-.12-61.44 0c-1.94 0-2.61.42-2.29 2.5 2 12.66 12.42 21.66 25.31 21.87 9.71.16 17.63-3.28 23.72-10.9.68-.86 1.35-1.73 2.15-2.76 2.9 1.66 5.68 3.28 8.5 4.85.06.14.09.29.15.43-8.05 12.05-19.5 17.4-33.87 15.87-19.36-2.06-31.71-16.05-32.7-33.2-.05-.87-.03-1.75-.05-2.62zm10.83-1.62h58.51c-2-11.2-9.99-19.9-20.83-22.13-11.85-2.42-24.4 4.4-31.87 15.4-2.37 3.5-3.96 7.3-5.81 6.73z"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    node: (
      <div className="w-12 h-12 rounded-full bg-white border border-zinc-600 flex items-center justify-center shadow">
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#000" d="M64 20 128 108H0z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'MongoDB',
    category: 'Database',
    node: (
      <div className="w-12 h-12 bg-zinc-900 rounded-md flex items-center justify-center shadow border border-zinc-700">
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#47A248" d="M64 3.6S38.9 25.4 38.9 66.9c0 26.4 15.9 44.6 25.1 52.9 9.2-8.3 25.1-26.5 25.1-52.9 0-41.5-25.1-63.3-25.1-63.3zm0 8.6c4.9 5.4 17.6 22.3 17.6 54.7 0 16.4-6.5 28.6-12.1 36.7-1.9-4.6-3.3-9.8-3.9-15.5-.2-1.7-.3-3.4-.3-5.2V12.2zm-3.2 76.4c-.6-4.5-.9-9.2-.9-14V12.2c-4.9 5.4-13.5 22.3-13.5 54.7 0 9.9 2.4 18.6 5.6 25.9.9 2 1.9 3.9 2.9 5.6l5.9-9.8z"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    node: (
      <div className="w-12 h-12 bg-zinc-900 rounded-md flex items-center justify-center shadow border border-zinc-700">
        <svg viewBox="0 0 128 128" className="w-9 h-9">
          <path fill="#38BDF8" d="M64 25.6c-17.1 0-27.8 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.3 8.7 6.3 6.4 13.6 13.7 29.5 13.7 17.1 0 27.8-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.3-8.7-6.3-6.4-13.6-13.7-29.5-13.7zM32 64c-17.1 0-27.8 8.5-32 25.6C6.4 81.1 13.9 77.9 22.4 80c4.9 1.2 8.4 4.7 12.3 8.7 6.3 6.4 13.6 13.7 29.5 13.7 17.1 0 27.8-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.3-8.7-6.3-6.4-13.6-13.7-29.5-13.7z"/>
        </svg>
      </div>
    ),
  },
];

const certifications = [
  {
    title: 'Learn Go Course',
    issuer: 'CodeCademy',
    year: '2025',
    fileUrl: `${process.env.PUBLIC_URL}/GO (code academy).pdf`, 
    skills: ['Go', 'Backend Basics']
  },
  {
    title: 'Java Programming',
    issuer: 'Oracle Academy',
    year: '2024',
    fileUrl: `${process.env.PUBLIC_URL}/JAVA Exam.pdf`, 
    skills: ['Java', 'OOP', 'Algorithm']
  }
];

export default function PortfolioLandingPage() {
  const [profileImageError, setProfileImageError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('haaaekall@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black scroll-smooth">
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-5 md:px-6 py-2.5 rounded-full flex gap-4 md:gap-6 text-xs md:text-sm font-medium shadow-2xl">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-zinc-400 transition-colors duration-200">About</a>
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-zinc-400 transition-colors duration-200">Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-zinc-400 transition-colors duration-200">Projects</a>
        <a href="#certifications" onClick={(e) => handleScroll(e, 'certifications')} className="hover:text-zinc-400 transition-colors duration-200">Certificates</a>
        <a href="#organization" onClick={(e) => handleScroll(e, 'organization')} className="hover:text-zinc-400 transition-colors duration-200">Experience</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-zinc-400 transition-colors duration-200">Contact</a>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="px-6 md:px-20 pt-28 pb-12 flex flex-col-reverse md:grid md:grid-cols-12 gap-8 items-center">
        <motion.div 
          className="md:col-span-7"
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 px-3 py-1 rounded-full text-xs text-zinc-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Informatics Engineering Student • ULBI
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Muhamad Haekal Syukur
          </h1>
          
          {/* About Narrative in English */}
          <div className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed max-w-xl space-y-3">
            <p>
              I am an Applied Bachelor (D4) Informatics Engineering student at <span className="text-white font-semibold">Universitas Logistik dan Bisnis Internasional (ULBI)</span> with a 3.65 GPA. Specializing in <span className="text-white font-semibold">Web Development</span>, I am experienced in building web applications from database architecture design to responsive user interfaces.
            </p>
            <p>
              My core technical stack includes the <span className="text-white font-semibold">React, Next.js, Express.js, Go (Basics),</span> and <span className="text-white font-semibold">MongoDB</span> ecosystem. Proficient in engineering RESTful APIs, real-time architectures with Socket.io, and payment gateway integrations.
            </p>
          </div>

         <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-zinc-400 mb-6 border-l-2 border-zinc-700 pl-3 py-1">
  <div>
    <span className="block text-zinc-500 text-[10px] uppercase font-semibold">
      Academic GPA
    </span>
    <strong className="text-zinc-200 text-sm">3.65 / 4.00</strong>
  </div>

  <div>
    <span className="block text-zinc-500 text-[10px] uppercase font-semibold">
      Location
    </span>
    <strong className="text-zinc-200 text-sm">Bandung, Indonesia</strong>
  </div>

  <div>
    <span className="block text-zinc-500 text-[10px] uppercase font-semibold">
      Status
    </span>
    <strong className="text-emerald-400 text-sm">
      Open for Internship / Part Time
    </strong>
  </div>
</div>

          <div className="flex gap-3 flex-wrap items-center">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="bg-white text-black hover:bg-zinc-200 px-5 py-2.5 rounded-xl font-semibold text-xs md:text-sm transition shadow-lg cursor-pointer"
            >
              View Projects
            </a>
            <a 
              href={`${process.env.PUBLIC_URL}/cv-muhamad-haekal-syukur.pdf`}
              download="CV Muhamad Haekal Syukur.pdf"
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition flex items-center gap-2"
            >
              <span>Download Resume</span>
              <span className="text-zinc-400 text-xs">PDF</span>
            </a>
            <a 
              href="https://github.com/haekalss" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-zinc-700 hover:border-zinc-500 px-4 py-2.5 rounded-xl text-xs md:text-sm transition text-zinc-300"
            >
              GitHub Profile ↗
            </a>
          </div>
        </motion.div>

       {/* Profile Image Container */}
<motion.div 
  className="md:col-span-5 flex justify-center w-full"
  initial={{ opacity: 0, x: 40 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8 }}
>
  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-zinc-800 flex items-center justify-center shadow-2xl overflow-hidden border-2 border-zinc-700 relative group">
    {profileImageError ? (
      <span className="text-4xl font-extrabold text-zinc-400">MHS</span>
    ) : (
      <img
        src={`${process.env.PUBLIC_URL}/profile.png`}
        alt="Muhamad Haekal Syukur profile"
        /* scale-125 membuat gambar ter-zoom 25% di dalam bingkai, group-hover:scale-130 memberi efek zoom halus saat di-hover */
        className="w-full h-full object-cover scale-125 transition-transform duration-500 group-hover:scale-130"
        onError={() => setProfileImageError(true)}
      />
    )}
  </div>
</motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-20 py-16 relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Skills & Tech Stack</h2>
        <p className="text-zinc-400 text-sm mb-8">Technologies and tools I regularly use for software engineering.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex items-center gap-4 hover:border-zinc-600 transition shadow-lg">
              {skill.node}
              <div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
                <span className="text-xs text-zinc-500">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="px-6 md:px-20 py-16 relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-zinc-400 text-sm mb-10">Case studies and applications I have developed as a full-stack engineer.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-xs text-zinc-400 mb-3 font-medium">{project.subtitle}</p>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{project.desc}</p>
                
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-3 mb-5">
                  <span className="text-xs font-semibold text-zinc-400 block mb-1.5">Key Features:</span>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-zinc-800 text-zinc-300 border border-zinc-700 px-2.5 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2 border-t border-zinc-800/60">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-zinc-700 py-2 rounded-xl text-xs font-medium hover:bg-zinc-800 transition">
                  Source Code
                </a>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white text-black py-2 rounded-xl text-xs font-semibold hover:bg-zinc-200 transition">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="px-6 md:px-20 py-16 relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Certifications</h2>
        <p className="text-zinc-400 text-sm mb-8">Official certifications completed to strengthen core technical skill sets.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 flex justify-between items-center hover:border-zinc-600 transition shadow-lg">
              <div>
                <span className="text-xs text-zinc-400 font-medium">{cert.issuer} • {cert.year}</span>
                <h3 className="text-base font-bold mt-0.5 mb-2">{cert.title}</h3>
                <div className="flex gap-1.5">
                  {cert.skills.map((s, idx) => (
                    <span key={idx} className="text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700/60 px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setSelectedCert(cert)}
                className="text-xs bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-3.5 py-2 rounded-xl transition flex items-center gap-1 font-medium text-zinc-200"
              >
                Preview ↗
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">{selectedCert.title}</h3>
                  <p className="text-xs text-zinc-400">{selectedCert.issuer} • {selectedCert.year}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-zinc-400 hover:text-white text-xl font-bold px-2"
                >
                  ✕
                </button>
              </div>

              <div className="w-full h-80 bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center mb-5">
                <iframe 
                  src={selectedCert.fileUrl} 
                  title={selectedCert.title}
                  className="w-full h-full"
                />
              </div>

              <div className="flex justify-end gap-3">
                <a 
                  href={selectedCert.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs bg-white text-black font-semibold px-4 py-2 rounded-xl hover:bg-zinc-200 transition"
                >
                  Open Full File ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Organizational Experience Section */}
      <section id="organization" className="px-6 md:px-20 py-16 relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Leadership & Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* LKMM 2 */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <span className="text-xs text-zinc-500">
              Informatics Engineering Student Association
            </span>

            <h3 className="text-lg font-bold mt-1">
              Project Manager — LKMM 2
            </h3>

            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              LKMM 2 (Student Management Skills Training) is a leadership and organizational management development program for Informatics Engineering students through workshops, group discussions, and case studies.
            </p>

            <ul className="list-disc list-inside text-xs text-zinc-300 mt-4 space-y-2 leading-relaxed">
              <li>
                Led the planning and execution of the program by coordinating cross-functional committees.
              </li>
              <li>
                Formulated event timelines, task assignments, and monitored event preparation progress.
              </li>
              <li>
                Liaised with key speakers and ensured the entire event program ran according to schedule.
              </li>
            </ul>
          </div>

          {/* MORRIS IF */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <span className="text-xs text-zinc-500">
              Informatics Engineering Student Association
            </span>

            <h3 className="text-lg font-bold mt-1">
              Secretary — MORRIS IF
            </h3>

            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              MORRIS IF is an orientation program for fresh Informatics Engineering students aimed at introducing student organization culture, structure, and academic community environment.
            </p>

            <ul className="list-disc list-inside text-xs text-zinc-300 mt-4 space-y-2 leading-relaxed">
              <li>
                Managed event administration, including drafting official letters, proposals, and supporting documents.
              </li>
              <li>
                Recorded meeting minutes and archived administrative records to support team coordination.
              </li>
              <li>
                Ensured smooth administrative flow and committee communication throughout preparation and execution.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-16 text-center relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <div className="w-full max-w-2xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            I am open to internship opportunities, part-time roles, freelance projects, and web application development collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a 
              href="mailto:haaaekall@gmail.com" 
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-zinc-200 transition w-full sm:w-auto"
            >
              Send Email
            </a>
            <button 
              onClick={handleCopyEmail}
              className="border border-zinc-700 bg-zinc-800/80 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-zinc-700 transition w-full sm:w-auto"
            >
              {copied ? '✓ Email Copied!' : 'Copy Email Address'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 border-t border-zinc-800 text-xs">
        <p className="mb-4">© {new Date().getFullYear()} Muhamad Haekal Syukur.</p>
        <div className="flex justify-center gap-6 text-zinc-400">
          <a href="https://github.com/haekalss" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/muhamad-haekal-syukur-4b2018328/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://www.instagram.com/haekalsss_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
}