
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../translations';

interface HeroProps {
  lang: 'es' | 'pt';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-block mb-8 px-5 py-2 bg-transparent border border-teal-500/30 text-teal-500 rounded-lg text-[10px] font-bold uppercase tracking-[0.4em]">
            {t.role}
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9.5rem] mb-10 text-white uppercase leading-[0.82]">
            <span className="block">
              {t.title1} <span className="text-slate-600">{t.title2}</span>
            </span>
            <span className="block text-slate-400">{t.title3}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
            {t.desc.split('folkode').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <a 
                    href="https://www.folkode.com.ar/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white font-bold italic underline decoration-teal-500 underline-offset-4 hover:text-teal-400 transition-all"
                  >
                    folkode
                  </a>
                )}
              </React.Fragment>
            ))}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#projects" 
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-teal-500 hover:text-white transition-all group text-sm uppercase tracking-widest"
            >
              {t.btnProjects} <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#experience" 
              className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-cool text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-sm uppercase tracking-widest"
            >
              {t.btnHistory}
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-teal-500/5 to-blue-500/5 rounded-full blur-[120px] opacity-40"></div>
          <div className="relative group overflow-hidden rounded-[3rem] border border-cool bg-cool-dark shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop" 
              alt="Celina J. Pereyra Workspace" 
              className="w-full h-[650px] object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                <div className="bg-[#0a0a0c]/40 backdrop-blur-md p-6 rounded-2xl border border-cool self-start">
                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.3em] mb-2">{t.languages}</p>
                    <p className="text-lg font-bold text-white flex items-center gap-2 uppercase">
                        Portugués <span className="text-teal-500">{t.langLevel}</span>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
