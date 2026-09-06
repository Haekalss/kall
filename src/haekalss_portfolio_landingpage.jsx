import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

// ==========================================
// KONTEN ASLI & UTUH
// ==========================================
const projects = [
  {
    title: 'Nyumbangin',
    type: 'FULL-STACK FEATURE',
    year: '2026',
    number: '01',
    desc: 'Digital donation platform for Indonesian creators and streamers, combining payments, real-time alerts, authentication, dashboards, and creator payouts.',
    tech: ['Next.js', 'MongoDB', 'Socket.io', 'OAuth 2.0', 'Midtrans'],
    url: 'https://github.com/Haekalss/Nyumbangin',
    website: 'https://nyumbangin.web.id',
    accent: 'DONATION / REAL-TIME',
    quote: 'A platform built around the moment a donation becomes part of a live stream.',
  },
  {
    title: 'TakoType',
    type: 'INTERACTIVE WEB APP',
    year: '2025',
    number: '02',
    desc: 'Typing practice and statistics platform with real-time WPM calculations, accuracy tracking, and performance analytics.',
    tech: ['React.js', 'Express.js', 'Tailwind CSS'],
    url: 'https://github.com/Haekalss/TakoType',
    website: 'https://takotype.web.id',
    accent: 'TYPING / ANALYTICS',
    quote: 'A small interaction can become an entire experience when the feedback is immediate.',
  },
  {
    title: 'Dishy',
    type: 'CREATIVE WEB',
    year: '2025',
    number: '03',
    desc: 'Responsive landing page for a local band with a visual-first hero, interactive gallery, navigation, and performance-focused components.',
    tech: ['Next.js', 'Tailwind CSS'],
    url: 'https://github.com/Haekalss/Dishy',
    website: 'https://dishy.web.id',
    accent: 'MUSIC / VISUAL',
    quote: 'The interface should feel like the band before the visitor reads a single word.',
  }
];

const orgs = [
  {
    role: 'Project Manager',
    event: 'LKMM 2',
    desc: [
      'Led planning and cross-functional committee coordination.',
      'Built timelines, task assignments, and preparation tracking.',
      'Liaised with speakers and monitored event execution.'
    ]
  },
  {
    role: 'Secretary',
    event: 'MORRIS IF',
    desc: [
      'Official letters, proposals, and supporting documents.',
      'Meeting minutes and administrative archives.',
      'Committee communication and administrative flow.'
    ]
  }
];

const certificates = [
  { id: '01', title: 'Full-Stack Web Development', issuer: 'Bootcamp / Tech Academy', year: '2025' },
  { id: '02', title: 'Frontend React.js', issuer: 'Course Provider', year: '2024' },
  { id: '03', title: 'UI/UX Design Fundamental', issuer: 'Course Provider', year: '2023' }
];

const skills = [
  ['JavaScript', 'LANGUAGE', 'JS'],
  ['React.js', 'FRONTEND', 'RE'],
  ['Next.js', 'FRAMEWORK', 'NX'],
  ['Node.js', 'BACKEND', 'ND'],
  ['Express.js', 'BACKEND', 'EX'],
  ['MongoDB', 'DATABASE', 'DB'],
  ['Tailwind CSS', 'STYLING', 'TW'],
  ['Vercel', 'DEPLOYMENT', '▲'],
];

const credits = [
  ['ROLE', 'Web Developer'],
  ['EDUCATION', 'D4 Informatics Engineering'],
  ['SCHOOL', 'Universitas Logistik dan Bisnis Internasional'],
  ['GPA', '3.65 / 4.00'],
  ['BASED', 'Bandung, Indonesia'],
];

// ==========================================
// CINEMATIC OPENER
// ==========================================
function CinematicOpener({ onComplete }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => onComplete(), 500);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.75%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-px h-full bg-white absolute" />
        <div className="w-full h-px bg-white absolute" />
        <div className="w-[60vmin] h-[60vmin] border-2 border-white rounded-full absolute" />
      </div>
      <AnimatePresence mode="wait">
        {count > 0 ? (
          <motion.h1 key={count} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.5 }} className="text-[35vmin] font-black text-white mix-blend-difference z-10">
            {count}
          </motion.h1>
        ) : (
          <motion.h1 key="action" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-4xl md:text-8xl font-black text-white uppercase tracking-widest z-10">
            Action.
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ==========================================
// CUSTOM CURSOR (DESKTOP ONLY)
// ==========================================
function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e) => { mouseX.set(e.clientX - 7); mouseY.set(e.clientY - 7); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return <motion.div style={{ x, y }} className="pointer-events-none fixed z-[100] hidden md:block w-3 h-3 rounded-full border border-white mix-blend-difference" />;
}

// ==========================================
// MAIN COMPONENT (RESPONSIVE: MOBILE VERTICAL / DESKTOP HORIZONTAL)
// ==========================================
export default function AnalogFilmPortfolio() {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [profileError, setProfileError] = useState(false);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isMobile, setIsMobile] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('haaaekall@gmail.com');
    alert('Email disalin: haaaekall@gmail.com');
  };

  // Deteksi ukuran layar untuk Switch Vertical/Horizontal
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });
  const timelineLeft = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const xTransform = useTransform(smoothProgress, (val) => -val * scrollWidth);

  useEffect(() => {
    const updateScroll = () => {
      if (trackRef.current && window.innerWidth >= 768) {
        setScrollWidth(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    updateScroll();

    const resizeObserver = new ResizeObserver(() => {
      updateScroll();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", updateScroll);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScroll);
    };
  }, [isReady, isMobile]);

  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      const ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
      const sec = Math.floor((window.scrollY / 100) % 60).toString().padStart(2, '0');
      const min = Math.floor((window.scrollY / 6000) % 60).toString().padStart(2, '0');
      setTimecode(`01:${min}:${sec}:${ms}`);
    }, 50);
    return () => clearInterval(interval);
  }, [isReady]);

  return (
    <>
      <AnimatePresence>
        {!isReady && <CinematicOpener onComplete={() => setIsReady(true)} />}
      </AnimatePresence>

      {/* Jika mobile: tinggi otomatis (natural vertical scroll), jika desktop: tinggi 700vh (horizontal scroll) */}
      <div 
        ref={containerRef} 
        className={`${isMobile ? 'h-auto overflow-y-auto' : 'h-[700vh]'} bg-[#070707] text-white font-sans selection:bg-white selection:text-black relative`}
      >
        <CursorFollower />
        
        {/* =========================================
            VIEWFINDER HUD (FIXED / DESKTOP & MOBILE COMPACT)
        ========================================= */}
        <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-4 md:p-6">
          <div className="absolute inset-0 opacity-[0.035] mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.75%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,.5))]" />

          <div className="relative flex justify-between items-start font-mono text-[9px] md:text-[10px] tracking-widest text-zinc-500">
            <div className="flex items-center gap-2 text-red-600">
              <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              <span>REC</span>
            </div>
            <div className="text-right text-[9px]"><p>ISO 400 • 24 FPS</p></div>
          </div>

          {!isMobile && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] h-[85vh] border border-white/5 flex items-center justify-center">
                <div className="w-3 h-px bg-white/20 absolute top-1/2 -left-1.5" />
                <div className="w-3 h-px bg-white/20 absolute top-1/2 -right-1.5" />
                <div className="w-px h-3 bg-white/20 absolute -top-1.5 left-1/2" />
                <div className="w-px h-3 bg-white/20 absolute -bottom-1.5 left-1/2" />
            </div>
          )}

          <div className="relative flex flex-col gap-1.5 pointer-events-auto">
            <div className="flex justify-between items-end font-mono text-[9px] md:text-[10px] text-zinc-500">
              <span className="text-sm md:text-base font-bold tracking-tight text-white">{timecode}</span>
              <span>{isMobile ? 'VERTICAL ROLL' : 'TIMELINE / ROLL'}</span>
            </div>
            <div className="w-full h-1.5 md:h-2.5 border border-zinc-800 bg-black/50 relative flex items-center overflow-hidden">
              <motion.div 
                className="absolute h-full w-[2px] bg-white shadow-[0_0_8px_white] z-10" 
                style={{ left: timelineLeft }} 
              />
            </div>
          </div>
        </div>

        {/* =========================================
            CONTENT WRAPPER: VERTICAL DI MOBILE, HORIZONTAL DI DESKTOP
        ========================================= */}
        <div className={`${isMobile ? 'relative z-10 flex flex-col gap-20 py-24 px-6' : 'fixed top-0 left-0 w-full h-screen overflow-hidden z-10 flex flex-col justify-center'}`}>
          <motion.div 
            ref={trackRef} 
            style={isMobile ? {} : { x: xTransform }} 
            className={`${isMobile ? 'flex flex-col gap-24' : 'flex w-max items-center h-full'}`}
          >
            
            {/* SCENE 01: ABOUT (HERO) */}
            <div className={`${isMobile ? 'w-full min-h-screen flex flex-col justify-center' : 'w-screen shrink-0 h-full flex flex-row items-center justify-center px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative gap-12`}>
              <div className="w-full md:flex-1 md:pr-10 z-10">
                <p className="font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase mb-3">Scene 01 / Opening Frame</p>
                <h1 className="text-[clamp(2.8rem,7vw,7rem)] font-black uppercase leading-[.85] tracking-[-.08em]">
                  Muhamad<br /><span className="text-zinc-600">Haekal</span><br />Syukur.
                </h1>
                <div className="h-px bg-zinc-700 w-full max-w-[180px] mt-6" />
                <p className="mt-3 text-[8px] md:text-[9px] tracking-[.3em] uppercase text-zinc-500 font-mono">
                  Applied Bachelor (D4) Informatics Engineering • ULBI (GPA 3.65)
                </p>
                <p className="mt-4 max-w-lg text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                  Specializing in Web Development, experienced in building web applications from database architecture design to responsive user interfaces. Proficient in engineering RESTful APIs, real-time architectures with Socket.io, and payment gateway integrations.
                </p>
              </div>
              
              <div className="w-3/5 max-w-[220px] md:max-w-[320px] flex-shrink-0 relative aspect-[4/5] bg-zinc-900 border border-zinc-700 p-1.5 transform rotate-1 z-10 mx-auto md:mx-0">
                <div className="w-full h-full relative overflow-hidden bg-black" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}>
                  {profileError ? (
                    <div className="w-full h-full flex items-center justify-center"><span className="text-xl font-black text-zinc-700">MHS</span></div>
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/profile.png`}
                      alt="Muhamad Haekal Syukur"
                      onError={() => setProfileError(true)}
                      className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-red-900/20 mix-blend-overlay" />
                </div>
                <span className="absolute -bottom-4 right-0 font-mono text-[6px] text-zinc-500 tracking-[0.3em]">HAEKAL_PORTRAIT.RAW</span>
              </div>
            </div>

            {/* SCENE 02: SKILLS (TOOLBOX) */}
            <div className={`${isMobile ? 'w-full min-h-screen flex flex-col justify-center' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10`}>
              <p className="font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase mb-4">Scene 02 / Core Stack</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-.05em] mb-6 text-white">The Toolbox.</h2>
              
              <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3">
                {skills.map(([name, category, mark], i) => (
                  <div key={name} className="bg-zinc-900/40 border border-zinc-800/80 p-4 flex flex-col justify-between hover:border-zinc-500 transition group">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[8px] text-zinc-600">0{i + 1}</span>
                      <span className="font-mono text-[8px] px-1.5 py-0.5 bg-black text-zinc-400 border border-zinc-800">{category}</span>
                    </div>
                    <div>
                      <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center font-black text-xs bg-black text-zinc-300 group-hover:border-white group-hover:text-white transition mb-3">
                        {mark}
                      </div>
                      <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-tight">{name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCENE 03: PROJECTS (SELECTED WORK) */}
            <div className={`${isMobile ? 'w-full flex flex-col gap-6' : 'flex h-full items-center gap-6 px-[5vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10`}>
              {!isMobile && <div className="absolute top-[12%] left-[5vw] font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase">Scene 03 / Box Office</div>}
              {isMobile && <p className="font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase">Scene 03 / Box Office</p>}
              
              <div className={`${isMobile ? 'flex flex-col gap-6 w-full' : 'contents'}`}>
                {projects.map((project) => (
                  <div key={project.title} className={`${isMobile ? 'w-full' : 'w-[42vw] shrink-0 h-[60vh]'} relative group flex flex-col justify-center`}>
                    <div className="w-full bg-zinc-900 border border-zinc-800 flex flex-col justify-between p-6 hover:bg-[#0a0a0a] transition-colors relative z-10">
                      <div className="flex justify-between items-start border-b border-zinc-800 pb-3">
                        <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-500">TAKE {project.number}</span>
                        <span className="font-mono text-[9px] text-zinc-600 bg-black px-2 py-1">{project.year}</span>
                      </div>

                      <div className="py-4">
                        <p className="font-mono text-[8px] tracking-[0.3em] text-zinc-500 uppercase">{project.type}</p>
                        <h3 className="mt-2 text-2xl md:text-4xl font-black uppercase leading-[.85] tracking-[-.05em] text-white">
                          {project.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span key={tech} className="font-mono text-[8px] uppercase border border-zinc-700 bg-black/50 px-2 py-0.5 text-zinc-400">{tech}</span>
                          ))}
                        </div>
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="mt-6 group/btn inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] border-b border-zinc-600 pb-1.5 hover:border-white transition cursor-pointer pointer-events-auto"
                        >
                          <span className="w-4 h-4 border border-zinc-600 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition">→</span>
                          Screen This
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCENE 04: CERTIFICATES (AWARDS) */}
            <div className={`${isMobile ? 'w-full min-h-screen flex flex-col justify-center' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10`}>
              <p className="font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase mb-4">Scene 04 / Awards</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-.05em] mb-6 text-white">Certifications.</h2>
              
              <div className="flex flex-col gap-3 w-full max-w-4xl">
                {certificates.map((cert) => (
                  <div key={cert.id} className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-3 group hover:border-zinc-500 transition-colors">
                    <div>
                      <span className="font-mono text-[8px] text-zinc-600 tracking-widest block mb-0.5">CERT / {cert.id}</span>
                      <h3 className="text-base md:text-xl font-black uppercase text-zinc-300 group-hover:text-white transition-colors">{cert.title}</h3>
                    </div>
                    <div className="mt-1 md:mt-0 text-left md:text-right">
                      <p className="font-mono text-[9px] text-zinc-400 uppercase">{cert.issuer}</p>
                      <p className="font-mono text-[8px] text-zinc-600">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCENE 05: EXPERIENCE (ORGANIZATION) */}
            <div className={`${isMobile ? 'w-full min-h-screen flex flex-col justify-center' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10`}>
              <p className="font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase mb-4">Scene 05 / Production Experience</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-.05em] mb-6 text-white">The Crew.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl">
                {orgs.map((org, index) => (
                  <div key={index} className="bg-zinc-900/40 border border-zinc-800 p-5 relative group hover:border-zinc-500 transition-colors">
                    <span className="absolute top-0 left-4 -translate-y-1/2 bg-[#070707] px-2 font-mono text-[8px] text-zinc-500 border border-zinc-800">RECORD 0{index + 1}</span>
                    <h3 className="text-base md:text-xl font-black uppercase text-white mt-1">{org.role}</h3>
                    <p className="font-mono text-[9px] uppercase text-zinc-500 mb-3">{org.event}</p>
                    <div className="flex flex-col gap-1.5">
                      {org.desc.map((item, i) => (
                        <p key={i} className="text-[10px] md:text-xs text-zinc-400 font-mono leading-relaxed border-l border-zinc-700 pl-2.5">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SCENE 06: CONTACT & SOCIAL LINKS */}
            <div className={`${isMobile ? 'w-full min-h-screen flex flex-col justify-center' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[10vw]'} relative z-10 text-left`}>
              <p className="font-mono text-[9px] tracking-[.4em] text-zinc-600 uppercase mb-4">Final Scene / Documentation</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-.05em] mb-6 text-zinc-200">End Credits.</h2>
                  
                  <div className="flex gap-4 mb-6 font-mono text-xs uppercase tracking-widest">
                    <a href="https://github.com/Haekalss" target="_blank" rel="noopener noreferrer" className="border-b border-zinc-700 hover:border-white pb-1 transition">GitHub ↗</a>
                    <a href="https://www.linkedin.com/in/muhamad-haekal-syukur-4b2018328/" target="_blank" rel="noopener noreferrer" className="border-b border-zinc-700 hover:border-white pb-1 transition">LinkedIn ↗</a>
                    <a href="https://www.instagram.com/haekalsss_/" target="_blank" rel="noopener noreferrer" className="border-b border-zinc-700 hover:border-white pb-1 transition">Instagram ↗</a>
                  </div>

                  <div className="space-y-3 w-full">
                    {credits.map(([label, value]) => (
                      <div key={label} className="flex flex-col border-b border-zinc-900 pb-1.5">
                        <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">{label}</span>
                        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end md:text-right border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-4 md:pl-0 md:pr-6">
                  <p className="font-mono text-[10px] text-zinc-400 mb-5 max-w-xs">
                    Need the full script? Download my complete curriculum vitae or start a conversation for the next scene.
                  </p>
                  <div className="flex flex-col gap-2.5 pointer-events-auto w-full md:w-auto">
                    <a href="/cv.pdf" target="_blank" className="inline-flex justify-center md:justify-end items-center gap-3 bg-white text-black px-6 py-3.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition">
                      Download CV <span className="text-sm">↓</span>
                    </a>
                    <button onClick={copyEmail} className="border border-zinc-800 bg-zinc-900/50 px-6 py-3.5 text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-300 hover:text-white hover:border-zinc-500 transition w-full md:w-auto text-center md:text-right">
                      Copy Email Address
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* =========================================
            MODAL PROJECT
        ========================================= */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[85vh] overflow-y-auto border border-zinc-800 bg-[#090909] shadow-2xl"
              >
                <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-zinc-900 px-5 py-3.5 flex justify-between items-center">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">Project / {selectedProject.number}</span>
                  <button onClick={() => setSelectedProject(null)} className="text-zinc-400 hover:text-white text-xs font-mono tracking-widest uppercase">Close ✕</button>
                </div>

                <div className="p-6 md:p-8">
                  <p className="font-mono text-[9px] uppercase tracking-[.3em] text-zinc-600">{selectedProject.type}</p>
                  <h2 className="mt-2 text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[-.05em] leading-[.9] text-white">
                    {selectedProject.title}
                  </h2>

                  <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    <div className="md:col-span-7">
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.desc}
                      </p>
                      <blockquote className="mt-5 border-l-2 border-zinc-700 pl-4 text-xs md:text-base font-bold text-zinc-300 leading-snug">
                        “{selectedProject.quote}”
                      </blockquote>
                    </div>

                    <div className="md:col-span-5 md:border-l border-zinc-900 md:pl-6">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-600 mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((tech) => (
                          <span key={tech} className="text-[8px] border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 text-zinc-300">{tech}</span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-600 mb-2">Links</p>
                        <div className="flex flex-col gap-2">
                          <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="text-xs text-white border-b border-zinc-800 pb-1.5 hover:border-zinc-400 transition flex justify-between">
                            Live Project <span>↗</span>
                          </a>
                          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white border-b border-zinc-800 pb-1.5 hover:border-zinc-400 transition flex justify-between">
                            Source Code <span>↗</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}