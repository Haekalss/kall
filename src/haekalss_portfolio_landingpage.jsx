import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

// ==========================================
// DATA KONTEN PORTOFOLIO
// ==========================================
const projects = [
  {
    title: 'Nyumbangin',
    type: 'FULL-STACK FEATURE',
    year: '2025',
    number: '01',
    desc: 'Digital donation platform for Indonesian creators and streamers, combining payment gateway, real-time donation alerts, OAuth authentication, analytical dashboards, and creator payouts.',
    tech: ['Next.js', 'MongoDB', 'Socket.io', 'OAuth 2.0', 'Midtrans'],
    url: 'https://github.com/Haekalss/Nyumbangin',
    website: 'https://nyumbangin.web.id',
    accent: 'DONATION / REAL-TIME',
    quote: 'A platform built around the moment a donation becomes part of a live stream experience.',
  },
  {
    title: 'TakoType',
    type: 'INTERACTIVE WEB APP',
    year: '2025',
    number: '02',
    desc: 'Typing practice and statistics platform featuring real-time WPM calculations, accuracy tracking, dynamic keyboard heatmaps, and performance analytics.',
    tech: ['React.js', 'Express.js', 'Tailwind CSS', 'Chart.js'],
    url: 'https://github.com/Haekalss/TakoType',
    website: 'https://takotype.web.id',
    accent: 'TYPING / ANALYTICS',
    quote: 'A small interaction can become an entire experience when the feedback is instant and rewarding.',
  },
  {
    title: 'Dishy',
    type: 'CREATIVE WEB',
    year: '2025',
    number: '03',
    desc: 'Responsive landing page for a music collective with a visual-first hero, interactive media gallery, streamlined navigation, and performance-focused architecture.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://github.com/Haekalss/Dishy',
    website: 'https://dishy.web.id',
    accent: 'MUSIC / VISUAL',
    quote: 'The interface should evoke the mood of the band before the visitor reads a single word.',
  }
];

const orgs = [
  {
    role: 'Project Manager',
    event: 'LKMM 2',
    overview: 'LKMM 2 (Student Management Skills Training) is a leadership and organizational management development program for Informatics Engineering students through workshops, group discussions, and case studies.',
    desc: [
      'Led overall planning, master timelines, and cross-functional committee coordination.',
      'Facilitated leadership workshops, collaborative discussions, and practical case studies.',
      'Liaised with keynote speakers and monitored on-site operations to guarantee event success.'
    ]
  },
  {
    role: 'Secretary',
    event: 'MORRIS IF',
    overview: 'MORRIS IF is an orientation program for fresh Informatics Engineering students aimed at introducing student organization culture, structure, and academic community environment.',
    desc: [
      'Prepared official letters, event proposals, permits, and administrative documentation.',
      'Maintained precise meeting minutes and organized structured committee archives.',
      'Handled committee correspondence and supported smooth administrative workflows.'
    ]
  }
];

const certificates = [
  {
    id: '01',
    title: 'Learn Go (Golang) Course',
    issuer: 'Codecademy',
    year: '2024',
    file: '/GO (code academy).pdf',
    type: 'PROGRAMMING / BACKEND',
    desc: 'Comprehensive fundamentals of the Go programming language, covering concurrency, goroutines, structs, interfaces, slices, maps, and backend development concepts.',
  },
  {
    id: '02',
    title: 'Java Certification',
    issuer: 'Oracle Academy',
    year: '2024',
    file: '/JAVA Exam.pdf',
    type: 'OBJECT-ORIENTED PROGRAMMING',
    desc: 'Core Java proficiency covering object-oriented architecture, algorithms, data structures, exception handling, and robust software development.',
  }
];

const skillsManifest = [
  { name: 'JavaScript', category: 'LANGUAGE', code: 'JS', spec: 'Core scripting language, ES6+ features & asynchronous logic.', level: '85%' },
  { name: 'Go', category: 'LANGUAGE', code: 'GO', spec: 'Concurrent, statically typed systems programming language ideal for backend.', level: '50%'},
  { name: 'React.js', category: 'FRONTEND', code: 'RE', spec: 'Component architecture, state management & reactive UI.', level: '75%' },
  { name: 'Next.js', category: 'FRAMEWORK', code: 'NX', spec: 'Full-stack React, SSR/SSG rendering & optimized routing.', level: '85%' },
  { name: 'Node.js', category: 'BACKEND', code: 'ND', spec: 'Event-driven asynchronous server-side execution runtime.', level: '80%' },
  { name: 'Express.js', category: 'BACKEND', code: 'EX', spec: 'Fast, unopinionated RESTful API framework & middleware.', level: '75%' },
  { name: 'MongoDB', category: 'DATABASE', code: 'DB', spec: 'NoSQL flexible document schema & aggregation pipelines.', level: '75%' },
  { name: 'Tailwind CSS', category: 'STYLING', code: 'TW', spec: 'Utility-first styling, design systems & responsive layouts.', level: '80%' },
  { name: 'Vercel', category: 'DEPLOYMENT', code: '▲', spec: 'Edge computing, CI/CD pipelines & rapid cloud deployments.', level: '80%' },
];

const credits = [
  ['ROLE', 'Web Developer'],
  ['EDUCATION', 'D4 Informatics Engineering'],
  ['INSTITUTION', 'Universitas Logistik & Bisnis Internasional'],
  ['GPA', '3.65 / 4.00'],
  ['LOCATION', 'Bandung, Indonesia'],
];




// ==========================================
// CINEMATIC OPENER (VINTAGE FILM PROJECTOR BOOT)
// ==========================================
function CinematicOpener({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 350);
          return 100;
        }
        return prev + 4;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }} 
      exit={{ opacity: 0, filter: 'blur(8px)' }} 
      transition={{ duration: 0.5, ease: "easeInOut" }} 
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden font-mono"
    >
      {/* Film grain texture */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.75%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />

      {/* Cinematic Viewfinder Focus Lines */}
      <div className="absolute inset-4 sm:inset-8 border border-white/10 flex flex-col justify-between p-3 sm:p-6 pointer-events-none">
        <div className="flex justify-between items-start text-[8px] sm:text-[9px] text-zinc-500 tracking-widest">
          <span>PROJECTOR // SYSTEM BOOT</span>
          <span className="hidden xs:inline sm:inline">ANAMORPHIC SCOPE</span>
        </div>
        <div className="flex justify-between items-end text-[8px] sm:text-[9px] text-zinc-500 tracking-widest">
          <span>LAT: -6.9175 // LON: 107.6191</span>
          <span>ULTRA 35MM</span>
        </div>
      </div>

      <div className="z-10 w-full max-w-md flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <motion.div 
            animate={{ scale: [1, 1.3, 1] }} 
            transition={{ repeat: Infinity, duration: 3.0 }} 
            className="w-2.5 h-2.5 bg-red-600 shadow-[0_0_12px_red]" 
          />
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-red-500 font-bold uppercase">INITIALIZING REELS</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">
          HAEKAL SYUKUR
        </h1>
        <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-zinc-400 uppercase mb-6 sm:mb-8">
          PORTFOLIO PRODUCTION // 2026
        </p>

        {/* Loading Progress Bar */}
        <div className="w-full bg-zinc-900 border border-zinc-800 h-2 p-0.5 relative overflow-hidden mb-3">
          <motion.div 
            className="h-full bg-red-600 shadow-[0_0_10px_red]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex justify-between text-[8px] sm:text-[9px] text-zinc-500 tracking-widest">
          <span>LOADING ASSETS...</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// CUSTOM CURSOR
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

  return <motion.div style={{ x, y }} className="pointer-events-none fixed z-[100] hidden md:block w-3.5 h-3.5 rounded-full border border-red-500 mix-blend-difference shadow-[0_0_8px_rgba(239,68,68,0.5)]" />;
}

const TOTAL_SCENES = 6;

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function AnalogFilmPortfolio() {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [profileError, setProfileError] = useState(false);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  const [toastMessage, setToastMessage] = useState(null);
  const [currentScene, setCurrentScene] = useState(0);

  const [activeBlueprintIndex, setActiveBlueprintIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const [clapperFlicker, setClapperFlicker] = useState(false);

  const triggerClapper = () => {
    setClapperFlicker(true);
    setTimeout(() => setClapperFlicker(false), 250);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('haaaekall@gmail.com');
    showToast("EMAIL COPIED: haaaekall@gmail.com");
  };

  const scrollToScene = useCallback((index) => {
    const safeIndex = Math.max(0, Math.min(TOTAL_SCENES - 1, index));
    if (isMobile) {
      const sceneElements = document.querySelectorAll('[data-scene]');
      if (sceneElements[safeIndex]) {
        sceneElements[safeIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      const targetY = safeIndex * window.innerHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }, [isMobile]);

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
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
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

  // Track active scene from scroll position
  useEffect(() => {
    const handleSceneUpdate = () => {
      if (isMobile) {
        const sceneElements = document.querySelectorAll('[data-scene]');
        let activeIdx = 0;
        sceneElements.forEach((el, idx) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            activeIdx = idx;
          }
        });
        setCurrentScene(activeIdx);
      } else {
        const maxScroll = (TOTAL_SCENES - 1) * window.innerHeight;
        if (maxScroll <= 0) return;
        const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        const activeIdx = Math.min(TOTAL_SCENES - 1, Math.max(0, Math.round(ratio * (TOTAL_SCENES - 1))));
        setCurrentScene(activeIdx);
      }
    };

    window.addEventListener('scroll', handleSceneUpdate, { passive: true });
    handleSceneUpdate();
    return () => window.removeEventListener('scroll', handleSceneUpdate);
  }, [isMobile]);

  // Automatic snap to nearest scene when scroll ends on desktop
  useEffect(() => {
    if (isMobile || !isReady || selectedProject || selectedCert) return;

    let snapTimeout = null;
    const onScroll = () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        if (selectedProject || selectedCert) return;
        const currentY = window.scrollY;
        const targetIndex = Math.round(currentY / window.innerHeight);
        const targetY = Math.min((TOTAL_SCENES - 1) * window.innerHeight, Math.max(0, targetIndex * window.innerHeight));
        
        if (Math.abs(currentY - targetY) > 8) {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 160);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(snapTimeout);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile, isReady, selectedProject, selectedCert]);

  // Keyboard navigation between scenes
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject || selectedCert) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToScene(currentScene + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToScene(currentScene - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToScene(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToScene(TOTAL_SCENES - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene, selectedProject, selectedCert, scrollToScene]);

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

  const activeSkill = skillsManifest[activeBlueprintIndex];

  return (
    <>
      <AnimatePresence>
        {!isReady && <CinematicOpener onComplete={() => setIsReady(true)} />}
      </AnimatePresence>

      <div 
        ref={containerRef} 
        className={`${isMobile ? 'h-auto min-h-screen overflow-x-hidden overflow-y-auto' : 'h-[600vh]'} bg-[#070707] text-white font-sans selection:bg-red-600 selection:text-white relative`}
      >
        <CursorFollower />

        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-5 sm:top-6 left-1/2 -translate-x-1/2 z-[350] bg-zinc-950/95 border border-red-500/80 px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_0_20px_rgba(239,68,68,0.3)] backdrop-blur-md flex items-center gap-2.5 sm:gap-3 max-w-[90vw]"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-zinc-200 uppercase font-semibold truncate">
                {toastMessage}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {clapperFlicker && (
            <motion.div 
              initial={{ opacity: 0.8 }} 
              animate={{ opacity: 0 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[250] bg-white pointer-events-none mix-blend-difference"
            />
          )}
        </AnimatePresence>
        
        {/* =========================================
            VIEWFINDER HUD
        ========================================= */}
        <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-3 sm:p-4 md:p-6">
          <div className="absolute inset-0 opacity-[0.035] mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.75%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,.65))]" />

          <div className="relative flex justify-between items-center font-mono text-[9px] md:text-[10px] tracking-widest text-zinc-500">
            <div className="flex items-center gap-1.5 sm:gap-2 text-red-600">
              <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_red]" />
              <span className="font-bold tracking-widest text-[9px] sm:text-[10px]">REC [CAM 01]</span>
            </div>
            
            <button 
              onClick={triggerClapper}
              className="pointer-events-auto border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-zinc-300 hover:text-white hover:border-red-500 hover:bg-black transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 group shadow-sm"
              title="Trigger Camera Clap / Take Sync"
            >
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z" />
                <path d="m4 11 1.6-4.8A2 2 0 0 1 7.5 5h10.9a2 2 0 0 1 1.9 1.4L22 11H4Z" />
                <path d="m9 5 2.5 6" />
                <path d="m14 5 2.5 6" />
              </svg>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] font-semibold group-hover:text-red-400 uppercase">
                TAKE SYNC
              </span>
            </button>

            <div className="text-right text-[8px] sm:text-[9px] text-zinc-400 font-mono hidden sm:block">
              <p>ANAMORPHIC • 9.14:5</p>
            </div>
          </div>

          {!isMobile && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] h-[85vh] border border-white/10 flex items-center justify-center pointer-events-none">
                <div className="w-4 h-px bg-red-500/50 absolute top-1/2 -left-2" />
                <div className="w-4 h-px bg-red-500/50 absolute top-1/2 -right-2" />
                <div className="w-px h-4 bg-red-500/50 absolute -top-2 left-1/2" />
                <div className="w-px h-4 bg-red-500/50 absolute -bottom-2 left-1/2" />
                <div className="w-3 h-3 border border-red-500/30 absolute rounded-full" />
            </div>
          )}

          <div className="relative flex flex-col gap-1 sm:gap-1.5 pointer-events-auto">
            <div className="flex justify-between items-end font-mono text-[8px] sm:text-[9px] md:text-[10px] text-zinc-500">
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-tight text-white font-mono">{timecode}</span>
              <motion.span 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-red-500 font-bold tracking-wider sm:tracking-widest text-right"
              >
                {isMobile ? 'VERTICAL ROLL // NATURAL SCROLL' : 'PLAYBACK // ACTIVE HORIZONTAL ROLL'}
              </motion.span>
            </div>
            <div className="w-full h-1.5 md:h-2.5 border border-zinc-800 bg-black/60 relative flex items-center overflow-hidden">
              <motion.div 
                className="absolute h-full w-[3px] bg-red-500 shadow-[0_0_10px_red] z-10" 
                style={{ left: timelineLeft }} 
              />
            </div>
          </div>
        </div>

        {/* =========================================
            CONTENT WRAPPER
        ========================================= */}
        <div className={`${isMobile ? 'relative z-10 flex flex-col gap-20 sm:gap-24 py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto w-full' : 'fixed top-0 left-0 w-full h-screen overflow-hidden z-10 flex flex-col justify-center'}`}>
          <motion.div 
            ref={trackRef} 
            style={isMobile ? {} : { x: xTransform }} 
            className={`${isMobile ? 'flex flex-col gap-20 sm:gap-24 w-full' : 'flex w-max items-center h-full'}`}
          >
            
            {/* SCENE 01: HERO */}
            <div data-scene="0" className={`${isMobile ? 'w-full min-h-[80vh] flex flex-col items-center justify-center snap-start scroll-mt-20 gap-8' : 'w-screen shrink-0 h-full flex flex-row items-center justify-center px-[6vw] lg:px-[10vw] border-r-[3px] border-dashed border-zinc-800 gap-8 lg:gap-16'} relative`}>
              <div className="w-full md:flex-1 z-10 max-w-xl lg:max-w-2xl text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-2.5 py-1 bg-red-950/60 border border-red-800 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase mb-3 sm:mb-4"
                >
                  SCENE 01 / OPENING FRAME
                </motion.div>
                
                <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black uppercase leading-[.9] tracking-[-.05em] text-white">
                  Muhamad<br /><span className="text-zinc-500">Haekal</span><br />Syukur.
                </h1>
                
                <div className="h-0.5 bg-gradient-to-r from-red-600 to-transparent w-full max-w-[200px] sm:max-w-[220px] mt-4 sm:mt-6" />
                
                <p className="mt-3 text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-zinc-400 font-mono">
                  Applied Bachelor (D4) Informatics Engineering • ULBI (GPA 3.65)
                </p>
                
                <p className="mt-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans max-w-xl">
                  Specializing in Web Development, experienced in building full-stack web applications from database schema design to responsive user interfaces. Proficient in RESTful API architectures, real-time Socket.io integrations, and payment gateway workflows.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400">
                    STATUS: READY FOR INTERNSHIP / OPPORTUNITY
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400">
                    BANDUNG, ID
                  </span>
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[60vw] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] flex-shrink-0 relative aspect-[4/5] bg-zinc-900 border border-zinc-700 p-2 transform rotate-1 z-10 mx-auto md:mx-0 shadow-2xl group"
              >
                <div className="w-full h-full relative overflow-hidden bg-black" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}>
                  {profileError ? (
                    <div className="w-full h-full flex items-center justify-center"><span className="text-xl font-black text-zinc-700">MHS</span></div>
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/profile.png`}
                      alt="Muhamad Haekal Syukur"
                      onError={() => setProfileError(true)}
                      className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity scale-110 group-hover:scale-100 group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-red-900/20 mix-blend-overlay" />
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center bg-black/80 backdrop-blur px-2.5 py-1 border border-zinc-800">
                  <span className="font-mono text-[7px] text-zinc-400 tracking-[0.2em]">DIRECTOR CUT</span>
                  <span className="font-mono text-[7px] text-red-500 animate-pulse">● LIVE</span>
                </div>
              </motion.div>
            </div>

            {/* SCENE 02: SKILLS */}
            <div data-scene="1" className={`${isMobile ? 'w-full flex flex-col justify-center snap-start scroll-mt-20' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[6vw] lg:px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10 text-left`}>
              <div className="mb-3 sm:mb-4 max-w-5xl">
                <span className="inline-block px-2.5 py-1 bg-red-950/60 border border-red-800 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase mb-2">SCENE 02 / BLUEPRINT MATRIX</span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-.05em] text-white">The Toolbox.</h2>
              </div>

              <div className="w-full max-w-5xl bg-zinc-950/95 border border-zinc-800 p-4 sm:p-6 md:p-7 relative shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 relative z-10 items-stretch">
                  <div className="md:col-span-7 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-2.5">
                    {skillsManifest.map((skill, index) => {
                      const isActive = activeBlueprintIndex === index;
                      return (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          key={skill.name}
                          onClick={() => setActiveBlueprintIndex(index)}
                          className={`text-left p-2.5 sm:p-3 border transition-all cursor-pointer pointer-events-auto flex flex-col justify-between h-auto min-h-[68px] sm:h-20 ${
                            isActive 
                              ? 'bg-red-600 text-white border-red-500 font-bold shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                              : 'bg-black/60 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className={`font-mono text-[7px] ${isActive ? 'text-zinc-200' : 'text-zinc-600'}`}>0{index + 1}</span>
                            <span className={`font-mono text-[7px] px-1 py-0.5 border ${isActive ? 'bg-black text-white border-black' : 'bg-zinc-900 text-zinc-500 border-zinc-800'}`}>
                              {skill.code}
                            </span>
                          </div>
                          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-tight truncate">{skill.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="md:col-span-5 bg-black border border-zinc-800 p-4 sm:p-5 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] relative">
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                      <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest">ACTIVE MODULE</span>
                    </div>

                    <div>
                      <div className="font-mono text-[8px] text-red-500 tracking-widest uppercase mb-1">
                        SYS // {activeSkill.category}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-white tracking-tight mb-2">
                        {activeSkill.name}
                      </h3>
                      <p className="font-mono text-[10px] text-zinc-300 leading-relaxed border-l-2 border-red-600 pl-2.5">
                        {activeSkill.spec}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-col gap-1.5">
                      <div className="flex justify-between font-mono text-[8px] text-zinc-400 uppercase">
                        <span>Proficiency Index</span>
                        <span className="text-white font-bold">{activeSkill.level}</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 overflow-hidden">
                        <motion.div 
                          key={activeSkill.name}
                          initial={{ width: 0 }}
                          animate={{ width: activeSkill.level }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="h-full bg-red-500 shadow-[0_0_8px_red]"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* SCENE 03: PROJECTS */}
            <div data-scene="2" className={`${isMobile ? 'w-full flex flex-col justify-center snap-start scroll-mt-20' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[6vw] lg:px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10 text-left`}>
              <div className="mb-3 sm:mb-4 max-w-5xl">
                <span className="inline-block px-2.5 py-1 bg-red-950/60 border border-red-800 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase mb-2">SCENE 03 / BOX OFFICE SCREENING</span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-.05em] text-white">Selected Works.</h2>
              </div>

              {!isMobile ? (
                <div className="w-full max-w-5xl grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-4 flex flex-col gap-2.5">
                    <p className="font-mono text-[8px] tracking-[0.25em] text-zinc-500 uppercase mb-1">PROJECT REEL SELECTOR</p>
                    {projects.map((p, idx) => (
                      <motion.button
                        whileHover={{ x: 4 }}
                        key={p.title}
                        onClick={() => setActiveProjectIndex(idx)}
                        className={`w-full text-left p-4 border transition-all cursor-pointer pointer-events-auto flex justify-between items-center ${
                          activeProjectIndex === idx 
                            ? 'bg-zinc-900 border-red-500 text-white shadow-[inset_0_0_12px_rgba(220,38,38,0.25)]' 
                            : 'bg-black/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <div>
                          <span className="font-mono text-[8px] text-red-400 block tracking-widest">TAKE 0{idx + 1}</span>
                          <span className="font-black text-base lg:text-lg uppercase tracking-tight">{p.title}</span>
                        </div>
                        <span className="font-mono text-[10px] text-red-500 font-bold">
                          {activeProjectIndex === idx ? '▶ SCREEN' : '○'}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="col-span-8">
                    <AnimatePresence mode="wait">
                      {(() => {
                        const project = projects[activeProjectIndex];
                        return (
                          <motion.div 
                            key={project.title} 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="w-full bg-zinc-950 border border-zinc-800 p-6 lg:p-7 relative shadow-2xl flex flex-col justify-between min-h-[340px]"
                          >
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/60 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/60 pointer-events-none" />

                            <div>
                              <div className="flex justify-between items-start border-b border-zinc-800/80 pb-3">
                                <span className="font-mono text-[9px] tracking-[0.25em] text-red-400 uppercase">TAKE {project.number} {"//"} {project.accent}</span>
                                <span className="font-mono text-[9px] text-zinc-500 bg-black px-2.5 py-1 border border-zinc-800">{project.year}</span>
                              </div>

                              <div className="pt-4">
                                <p className="font-mono text-[8px] tracking-[0.25em] text-zinc-500 uppercase">{project.type}</p>
                                <h3 className="mt-1 text-2xl lg:text-3xl font-black uppercase tracking-[-.05em] text-white">
                                  {project.title}
                                </h3>
                                <p className="mt-3 text-xs md:text-sm text-zinc-300 leading-relaxed">{project.desc}</p>
                                
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                  {project.tech.map((tech) => (
                                    <span key={tech} className="font-mono text-[8px] uppercase border border-zinc-800 bg-black px-2.5 py-1 text-zinc-400">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="pt-6 mt-4 border-t border-zinc-900 flex justify-between items-center">
                              <button 
                                onClick={() => setSelectedProject(project)}
                                className="group/btn inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.25em] bg-red-600 text-white px-5 py-2.5 hover:bg-red-500 transition cursor-pointer pointer-events-auto font-bold shadow-[0_0_12px_rgba(220,38,38,0.3)]"
                              >
                                <span>Inspect Full Reel</span>
                                <span className="text-xs group-hover/btn:translate-x-0.5 transition-transform">→</span>
                              </button>

                              <div className="flex gap-4 font-mono text-[10px]">
                                <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white border-b border-zinc-800 pb-0.5 transition">Live ↗</a>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white border-b border-zinc-800 pb-0.5 transition">Code ↗</a>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5 w-full">
                  {projects.map((project) => (
                    <div key={project.title} className="w-full bg-zinc-950/95 border border-zinc-800 p-5 sm:p-6 shadow-xl relative">
                      <div className="flex justify-between items-start border-b border-zinc-800 pb-3">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-red-400">TAKE {project.number}</span>
                        <span className="font-mono text-[9px] text-zinc-500 bg-black px-2 py-0.5 border border-zinc-800">{project.year}</span>
                      </div>

                      <div className="py-3.5">
                        <p className="font-mono text-[8px] text-zinc-500 uppercase">{project.type}</p>
                        <h3 className="mt-1 text-xl sm:text-2xl font-black uppercase text-white">{project.title}</h3>
                        <p className="mt-2 text-xs text-zinc-300 leading-relaxed">{project.desc}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span key={tech} className="font-mono text-[8px] uppercase border border-zinc-800 bg-black px-2 py-0.5 text-zinc-400">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-zinc-900 flex flex-col sm:flex-row gap-2.5 sm:items-center sm:justify-between">
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="w-full sm:w-auto bg-red-600 text-white text-center py-2.5 px-4 text-[9px] uppercase font-bold tracking-widest hover:bg-red-500 transition shadow-[0_0_10px_rgba(220,38,38,0.3)] cursor-pointer"
                        >
                          Inspect Full Reel →
                        </button>
                        <div className="flex justify-end gap-3 font-mono text-[9px] pt-1 sm:pt-0">
                          <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white border-b border-zinc-800 pb-0.5">Live ↗</a>
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white border-b border-zinc-800 pb-0.5">Code ↗</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SCENE 04: CERTIFICATIONS */}
            <div data-scene="3" className={`${isMobile ? 'w-full flex flex-col justify-center snap-start scroll-mt-20' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[6vw] lg:px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10 text-left`}>
              <div className="mb-3 sm:mb-4 max-w-5xl">
                <span className="inline-block px-2.5 py-1 bg-red-950/60 border border-red-800 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase mb-2">SCENE 04 / AWARDS & CREDENTIALS</span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-.05em] text-white">Certifications.</h2>
              </div>
              
              <div className="flex flex-col gap-3.5 sm:gap-4 w-full max-w-5xl">
                {certificates.map((cert) => (
                  <motion.div 
                    whileHover={{ scale: 1.01, x: 4 }}
                    key={cert.id} 
                    onClick={() => setSelectedCert(cert)}
                    className="group relative bg-zinc-950/90 border border-zinc-800 hover:border-red-500 p-4 sm:p-5 md:p-6 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto shadow-xl"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-red-400 bg-black px-2.5 sm:px-3 py-1 sm:py-1.5 border border-zinc-800 shrink-0 mt-0.5 font-bold">
                        CERT / {cert.id}
                      </span>
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block mb-1">{cert.type}</span>
                        <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase text-zinc-100 group-hover:text-white transition-colors">
                          {cert.title}
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-400 mt-1">Issued by: <span className="text-zinc-200">{cert.issuer}</span> ({cert.year})</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-zinc-800/80 pt-2.5 sm:pt-0">
                      <span className="inline-flex items-center gap-2 font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-400 group-hover:text-red-400 transition-all font-semibold">
                        Preview Document <span className="w-5 h-5 rounded-full border border-zinc-700 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center text-xs transition">↗</span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SCENE 05: EXPERIENCE */}
            <div data-scene="4" className={`${isMobile ? 'w-full flex flex-col justify-center snap-start scroll-mt-20' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[6vw] lg:px-[10vw] border-r-[3px] border-dashed border-zinc-800'} relative z-10 text-left`}>
              <div className="mb-3 sm:mb-4 max-w-5xl">
                <span className="inline-block px-2.5 py-1 bg-red-950/60 border border-red-800 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase mb-2">SCENE 05 / PRODUCTION CREW</span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-.05em] text-white">Organization.</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-5xl">
                {orgs.map((org, index) => (
                  <motion.div 
                    whileHover={{ y: -4 }}
                    key={index} 
                    className="bg-zinc-950/90 border border-zinc-800 p-5 sm:p-6 relative group hover:border-red-500 transition-all shadow-xl flex flex-col justify-between"
                  >
                    <div className="pt-1.5 sm:pt-1">
                      <span className="absolute top-0 left-5 -translate-y-1/2 bg-[#070707] px-2.5 py-0.5 font-mono text-[8px] text-red-400 border border-zinc-800 font-bold">
                        RECORD 0{index + 1}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-2xl font-black uppercase text-white mt-1 tracking-tight">
                        {org.role} — <span className="text-zinc-400">{org.event}</span>
                      </h3>
                      
                      <p className="mt-3 text-xs text-zinc-300 font-sans leading-relaxed border-l-2 border-red-600 pl-3 bg-black/40 py-2 sm:py-2.5">
                        {org.overview}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-col gap-1.5 sm:gap-2">
                      {org.desc.map((item, i) => (
                        <p key={i} className="text-[10px] sm:text-xs text-zinc-400 font-mono leading-relaxed border-l border-zinc-800 pl-2.5">
                          {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SCENE 06: CONTACT */}
            <div data-scene="5" className={`${isMobile ? 'w-full flex flex-col justify-center snap-start scroll-mt-20' : 'w-screen shrink-0 h-full flex flex-col justify-center px-[6vw] lg:px-[10vw]'} relative z-10 text-left`}>
              <div className="mb-3 sm:mb-4 max-w-5xl">
                <span className="inline-block px-2.5 py-1 bg-red-950/60 border border-red-800 font-mono text-[8px] tracking-[0.3em] text-red-400 uppercase mb-2">FINAL SCENE / DOCUMENTATION</span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-.05em] text-zinc-200">End Credits.</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 w-full max-w-5xl items-center bg-zinc-950 border border-zinc-800 p-5 sm:p-7 md:p-8 shadow-2xl">
                <div className="md:col-span-7">
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5 font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest">
                    <a href="https://github.com/Haekalss" target="_blank" rel="noopener noreferrer" className="border-b border-zinc-700 hover:border-red-500 text-zinc-300 hover:text-white pb-0.5 sm:pb-1 transition">GitHub ↗</a>
                    <a href="https://www.linkedin.com/in/muhamad-haekal-syukur-4b2018328/" target="_blank" rel="noopener noreferrer" className="border-b border-zinc-700 hover:border-red-500 text-zinc-300 hover:text-white pb-0.5 sm:pb-1 transition">LinkedIn ↗</a>
                    <a href="https://www.instagram.com/haekalsss_/" target="_blank" rel="noopener noreferrer" className="border-b border-zinc-700 hover:border-red-500 text-zinc-300 hover:text-white pb-0.5 sm:pb-1 transition">Instagram ↗</a>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 w-full">
                    {credits.map(([label, value]) => (
                      <div key={label} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 border-b border-zinc-900 pb-2">
                        <span className="font-mono text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest shrink-0">{label}</span>
                        <p className="text-[11px] sm:text-xs font-bold text-zinc-300 uppercase font-mono sm:text-right leading-snug">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col items-start md:items-end md:text-right border-t md:border-t-0 md:border-l-2 border-red-600 pt-5 md:pt-0 md:pl-8">
                  <p className="font-mono text-[10px] text-zinc-400 mb-4 sm:mb-5 leading-relaxed">
                    Need the full script? Download my complete resume or initiate communication for upcoming productions.
                  </p>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 pointer-events-auto w-full">
                    <a 
                      href={`${process.env.PUBLIC_URL}/cv-muhamad-haekal-syukur.pdf`} 
                      download="CV_Muhamad_Haekal_Syukur.pdf"
                      className="inline-flex justify-center items-center gap-2.5 bg-red-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition shadow-[0_0_15px_rgba(220,38,38,0.35)]"
                    >
                      Download Resume <span className="text-sm">↓</span>
                    </a>
                    <button 
                      onClick={copyEmail} 
                      className="border border-zinc-800 bg-zinc-900/60 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-300 hover:text-white hover:border-red-500 transition cursor-pointer font-mono text-center"
                    >
                      Copy Email Address
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* =========================================
            MODAL PROJECT REEL
        ========================================= */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[88vh] overflow-y-auto border border-zinc-800 bg-[#090909] shadow-2xl"
              >
                <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-zinc-900 px-4 sm:px-5 py-3 sm:py-3.5 flex justify-between items-center">
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-red-500 font-bold">PROJECT REEL / {selectedProject.number}</span>
                  <button onClick={() => setSelectedProject(null)} className="text-zinc-400 hover:text-white text-xs font-mono tracking-widest uppercase cursor-pointer">Close ✕</button>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[.3em] text-zinc-500">{selectedProject.type}</p>
                  <h2 className="mt-1 sm:mt-2 text-[clamp(1.75rem,5vw,3.5rem)] font-black uppercase tracking-[-.05em] leading-[.9] text-white">
                    {selectedProject.title}
                  </h2>

                  <div className="mt-5 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8">
                    <div className="md:col-span-7">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {selectedProject.desc}
                      </p>
                      <blockquote className="mt-4 sm:mt-5 border-l-2 border-red-600 pl-3 sm:pl-4 text-xs sm:text-base font-bold text-zinc-200 leading-snug bg-zinc-950 p-3">
                        “{selectedProject.quote}”
                      </blockquote>
                    </div>

                    <div className="md:col-span-5 md:border-l border-zinc-900 md:pl-6">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 mb-2">Tech Cast</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((tech) => (
                          <span key={tech} className="text-[8px] border border-zinc-800 bg-zinc-900 px-2 py-1 text-zinc-300 font-mono">{tech}</span>
                        ))}
                      </div>

                      <div className="mt-5 sm:mt-6">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 mb-2">Links & Source</p>
                        <div className="flex flex-col gap-2">
                          <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="text-xs text-white border-b border-zinc-800 pb-1.5 hover:border-red-500 transition flex justify-between">
                            Live Application <span className="text-red-500">↗</span>
                          </a>
                          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white border-b border-zinc-800 pb-1.5 hover:border-red-500 transition flex justify-between">
                            Source Code <span className="text-red-500">↗</span>
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

        {/* =========================================
            MODAL CERTIFICATE PREVIEW
        ========================================= */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-zinc-800 bg-[#090909] shadow-2xl flex flex-col"
              >
                <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-zinc-900 px-4 sm:px-5 py-3 sm:py-3.5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-red-400 font-bold truncate max-w-[200px] sm:max-w-none">
                      ARCHIVE // CERT {selectedCert.id} — {selectedCert.issuer}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)} 
                    className="text-zinc-400 hover:text-white text-xs font-mono tracking-widest uppercase cursor-pointer shrink-0 ml-2"
                  >
                    Close ✕
                  </button>
                </div>

                <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/80 pb-4">
                    <div>
                      <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[.3em] text-zinc-500">{selectedCert.type}</p>
                      <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                        {selectedCert.title}
                      </h2>
                      <p className="font-mono text-[11px] sm:text-xs text-zinc-400 mt-1">
                        Issued by: <span className="text-zinc-200">{selectedCert.issuer}</span> ({selectedCert.year})
                      </p>
                      <p className="text-xs text-zinc-400 mt-2 max-w-xl leading-relaxed">
                        {selectedCert.desc}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <a
                        href={`${process.env.PUBLIC_URL}${encodeURI(selectedCert.file)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition shadow-[0_0_10px_rgba(220,38,38,0.4)]"
                      >
                        Open Full PDF <span>↗</span>
                      </a>
                      <a
                        href={`${process.env.PUBLIC_URL}${encodeURI(selectedCert.file)}`}
                        download
                        className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-3.5 sm:px-4 py-2 sm:py-2.5 text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:border-red-500 transition"
                      >
                        Download <span>↓</span>
                      </a>
                    </div>
                  </div>

                  <div className="w-full bg-black border border-zinc-800 relative rounded overflow-hidden">
                    <div className="h-7 sm:h-8 bg-zinc-950 border-b border-zinc-800/80 px-3 sm:px-4 flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-zinc-500">
                      <span>DOCUMENT_PREVIEW.PDF</span>
                      <span>LIVE VIEWER</span>
                    </div>
                    <iframe 
                      src={`${process.env.PUBLIC_URL}${encodeURI(selectedCert.file)}#toolbar=0&navpanes=0`} 
                      className="w-full h-[45vh] sm:h-[55vh] md:h-[60vh] bg-zinc-950" 
                      title={selectedCert.title}
                    />
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