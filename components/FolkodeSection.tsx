
import React from 'react';
import { translations } from '../translations';
import { GraduationCap } from 'lucide-react';

interface Props {
  lang: 'es' | 'pt';
}

const ExperienceSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].experience;
  return (
    <section id="experience" className="py-32 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-32">
             <div className="aspect-[4/5] bg-cool-dark border border-cool rounded-[4rem] p-4 flex flex-col justify-center items-center relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 bg-accent-5 transition-colors"></div>
                <h2 className="font-heading text-[10rem] text-white/[0.03] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">IMPULSO</h2>
                <div className="relative z-10 text-center space-y-8 p-12">
                   <div>
                       <a 
                         href="https://www.folkode.com.ar/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="font-heading text-6xl md:text-8xl text-white mb-2 leading-none hover:text-accent transition-colors block"
                       >
                         FOLKODE
                       </a>
                       <p className="text-accent-2 font-bold tracking-[0.4em] uppercase text-xs">Fundadora & Líder de Proyectos</p>
                   </div>
                   <div className="pt-10 border-t border-cool space-y-4">
                       <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Visión Convergente</p>
                       <p className="text-slate-300 italic text-lg leading-relaxed">
                         {lang === 'es' ? '"La tecnología es el medio, la cultura y la identidad son el mensaje."' : '"A tecnologia é o meio, a cultura e a identidade são a mensagem."'}
                       </p>
                   </div>
                </div>
             </div>
          </div>
          <div>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">{t.tag}</span>
            <h2 className="font-heading text-5xl md:text-7xl mt-6 mb-12 uppercase leading-[0.9]">Arquitectura <br/><span className="text-slate-600">Resolutiva</span> <br/><span className="text-white">e Integral</span></h2>
            
            <div className="space-y-10 text-xl text-slate-400 leading-relaxed font-light mb-20">
              <p className="text-white font-medium text-2xl leading-snug">
                {t.sub}
              </p>
              
              <p>
                {t.desc1}
              </p>
            </div>

            {/* Academic Timeline */}
            <div className="relative pt-8 pb-12">
              <div className="flex items-center gap-4 mb-10">
                <GraduationCap className="text-accent" size={32} />
                <h3 className="font-heading text-3xl uppercase tracking-tight">{t.timelineTitle}</h3>
              </div>

              <div className="relative ml-4 pl-10 border-l border-accent-30 space-y-12">
                {t.timeline.map((item: any, idx: number) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[49px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-[#0a0a0c] transition-colors duration-500" style={{ boxShadow: '0 0 15px rgba(var(--accent), 0.3)' }}></div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-accent font-heading text-xl mb-1">{item.year}</span>
                      <h4 className="text-white font-bold text-xl uppercase tracking-wide">{item.title}</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">{item.institution}</p>
                      <p className="text-slate-400 text-base leading-relaxed max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 space-y-6">
              {t.cards && t.cards.map((card: any) => (
                <div key={card.num} className="flex items-start gap-6 p-6 bg-white/[0.01] border border-cool rounded-3xl hover:bg-white/[0.03] hover:border-accent transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-accent-5 flex items-center justify-center text-accent-2 font-heading text-2xl shrink-0">
                    {card.num}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-base mb-1">{card.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
