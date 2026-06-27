
import React from 'react';
import { Project } from '../types';
import { translations } from '../translations';
import { ExternalLink } from 'lucide-react';

interface Props {
  lang: 'es' | 'pt';
}

const Projects: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].projects;
  
  const projects: Project[] = [
    {
      id: '1',
      title: t.items[0].title,
      description: t.items[0].desc,
      tags: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      link: t.items[0].link,
    },
    {
      id: '2',
      title: t.items[1].title,
      description: t.items[1].desc,
      tags: ['TypeScript', 'HTML'],
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      link: t.items[1].link,
    },
    {
      id: '3',
      title: t.items[2].title,
      description: t.items[2].desc,
      tags: ['TypeScript'],
      imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      link: t.items[2].link,
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-xs">{t.tag}</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 uppercase">{t.title1} <br/> <span className="text-slate-700">{t.title2}</span></h2>
          </div>
          {t.desc && (
            <p className="text-slate-400 max-w-sm mb-4">
              {t.desc}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block cursor-pointer bg-white/[0.01] hover:bg-white/[0.03] p-6 rounded-3xl border border-cool hover:border-accent-30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-cool-dark border border-cool relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={18} className="text-accent-2" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-accent-5 border border-accent-30 text-accent-2 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-2xl md:text-3xl group-hover:text-accent transition-colors uppercase leading-tight">
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-accent shrink-0 transition-colors mt-1" />
                </div>
                <p className="text-slate-400 leading-relaxed text-sm font-light mt-3">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
