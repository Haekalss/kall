import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nyumbangin',
    desc: 'Website crowdfunding modern dengan tampilan clean dan sistem campaign interaktif.',
    tech: ['Next.js', 'MongoDB', 'Midtrans'],
    url: 'https://github.com/Haekalss/Nyumbangin',
    website: 'https://nyumbangin.web.id',
  },
  {
    title: 'TakoType',
    desc: 'Platform typing game dengan fitur kompetisi real-time dan tracking progress pengguna.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    url: 'https://github.com/Haekalss/TakoType',
    website: 'https://takotype.web.id',
  },
  {
    title: 'Dishy',
    desc: 'Landing page official band Dishy dengan fitur streaming links dan merchandise gallery.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    url: 'https://github.com/Haekalss/Dishy',
    website: 'https://dishy.web.id',
  }
];

const skills = [
  {
    name: 'JavaScript',
    node: (
      <div className="w-16 h-16 bg-[#F7DF1E] flex items-end justify-start rounded-sm overflow-hidden shadow-lg">
        <span className="text-[2rem] leading-none font-black text-black pl-1.5 pb-1">JS</span>
      </div>
    ),
  },
  {
    name: 'React',
    node: (
      <svg viewBox="0 0 120 120" className="w-16 h-16" role="img" aria-label="React">
        <circle cx="60" cy="60" r="10" fill="#61DAFB" />
        <ellipse cx="60" cy="60" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="6" />
        <ellipse cx="60" cy="60" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 60 60)" />
        <ellipse cx="60" cy="60" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 60 60)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    node: (
      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg border border-zinc-800">
        <span className="text-4xl font-medium leading-none text-white">N</span>
      </div>
    ),
  },
  {
    name: 'Node.js',
    node: (
      <svg viewBox="0 0 120 120" className="w-16 h-16" role="img" aria-label="Node.js">
        <path d="M60 10L99 32V88L60 110L21 88V32Z" fill="#3C873A" />
        <path d="M60 18L92 36V84L60 102L28 84V36Z" fill="#4CAF50" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'Leaflet',
    node: (
      <svg viewBox="0 0 120 120" className="w-16 h-16" role="img" aria-label="Leaflet">
        <path d="M60 14C44 30 35 50 35 70c0 15 10 28 25 36c15-8 25-21 25-36c0-20-9-40-25-56Z" fill="#73C84A" />
        <path d="M60 20c8 13 12 27 12 41c0 11-4 22-12 31" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 20c-8 13-12 27-12 41c0 11 4 22 12 31" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function PortfolioLandingPage() {
  const [profileImageError, setProfileImageError] = React.useState(false);

  const handleViewProjectsClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 md:px-20 py-24 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center md:min-h-screen">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-gray-400 mb-2">Hello, I'm</p>
          <h1 className="text-3xl md:text-7xl font-bold mb-4">Haekal Syukur</h1>
          <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-xl">
            Informatics student & frontend web developer passionate in building modern, interactive web applications.
          </p>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <a href="#projects" onClick={handleViewProjectsClick} className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-2xl font-medium inline-block text-sm md:text-base">View Projects</a>
            <a href="https://github.com/haekalss" target="_blank" rel="noopener noreferrer" className="border border-gray-600 px-4 md:px-6 py-2 md:py-3 rounded-2xl text-sm md:text-base">GitHub Profile</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-zinc-800 flex items-center justify-center shadow-2xl overflow-hidden border border-zinc-700">
            {profileImageError ? (
              <span className="text-6xl font-bold">HS</span>
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="Haekal Syukur profile"
                className="w-full h-full object-cover"
                onError={() => setProfileImageError(true)}
              />
            )}
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-20 py-12 md:py-16 md:min-h-screen md:flex md:flex-col md:justify-center relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-3 md:p-5 min-h-[100px] md:min-h-[132px] flex items-center justify-center hover:scale-105 transition shadow-lg">
              <div className="flex flex-col items-center gap-3">
                {skill.node}
                <span className="sr-only">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-6 md:px-20 py-12 md:py-16 md:min-h-screen md:flex md:flex-col md:justify-center relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-3xl p-4 md:p-6 hover:-translate-y-2 transition shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-5">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs md:text-sm bg-zinc-800 px-2 md:px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-2 md:gap-3">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="border border-gray-600 px-3 md:px-4 py-1 md:py-2 rounded-xl inline-block text-sm md:text-base hover:bg-zinc-800 transition">View Repo</a>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="border border-gray-600 px-3 md:px-4 py-1 md:py-2 rounded-xl inline-block text-sm md:text-base hover:bg-zinc-800 transition">View Website</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 md:py-16 text-center md:min-h-[65vh] md:flex md:flex-col md:justify-center md:items-center relative">
        <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-zinc-800" aria-hidden="true" />
        <div className="w-full max-w-xl md:max-w-2xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-3xl p-5 md:p-8 shadow-xl">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Contact Me</h2>
          <p className="text-gray-400 text-xs md:text-base mb-5 md:mb-8">I'm available for freelance projects and open to new collaboration opportunities.</p>
          <a href="mailto:haaaekall@gmail.com" className="bg-white text-black px-5 md:px-8 py-2 md:py-3 rounded-2xl font-medium text-xs md:text-base w-fit inline-block hover:bg-gray-200 transition">haaaekall@gmail.com</a>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-600 border-t border-zinc-800">
        <div className="mb-4">
          <p className="text-xs md:text-sm mb-3">____</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/haekalsss_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" title="Instagram">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/muhamad-haekal-syukur-4b2018328/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" title="LinkedIn">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.68-2.237-.915 0-1.46.615-1.7 1.209-.088.213-.111.51-.111.809v5.788h-3.554s.047-9.395 0-10.366h3.554v1.471c.458-.707 1.277-1.714 3.105-1.714 2.267 0 3.965 1.482 3.965 4.667v5.942zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.71 0-.957.77-1.71 1.958-1.71 1.187 0 1.915.753 1.94 1.71 0 .952-.753 1.71-1.983 1.71zm1.581 11.597H3.635V9.086h3.283v11.366zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="https://github.com/haekalss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" title="GitHub">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
