
import React from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { translations } from '../translations';

interface Props {
  lang: 'es' | 'pt';
}

const Footer: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].footer;
  return (
    <footer id="contact" className="pt-32 pb-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <span className="text-teal-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">{t.tag}</span>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[10rem] uppercase leading-none hover:text-teal-500 transition-all duration-700 cursor-pointer">
              {t.cta}<span className="text-slate-900">.</span>
            </h2>
          </div>
          <div className="md:text-right">
             <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-4">{t.available}</p>
             <p className="text-white text-xl font-light">{t.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-cool pt-20">
          <div className="space-y-16">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-slate-600 mb-8">{t.channels}</p>
              <div className="flex flex-col gap-6">
                <a href="#" className="flex items-center justify-between text-3xl font-heading group uppercase hover:text-teal-500 transition-colors">
                  LinkedIn <Linkedin className="group-hover:translate-x-1 transition-transform opacity-30 group-hover:opacity-100" size={32} />
                </a>
                <a href="#" className="flex items-center justify-between text-3xl font-heading group uppercase hover:text-teal-500 transition-colors">
                  GitHub <Github className="group-hover:translate-x-1 transition-transform opacity-30 group-hover:opacity-100" size={32} />
                </a>
                <a 
                  href="https://www.instagram.com/cancherea/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-3xl font-heading group uppercase hover:text-pink-500 transition-colors"
                >
                  Instagram <Instagram className="group-hover:translate-x-1 transition-transform opacity-30 group-hover:opacity-100 group-hover:text-pink-500" size={32} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-[#0a0a0c] border border-cool p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Mail size={120} />
              </div>
              <h4 className="font-heading text-4xl mb-6 uppercase text-white leading-tight">Celina Jazmin <br/> Pereyra</h4>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                {lang === 'es' ? 'Técnica en Programación enfocada en liderar proyectos digitales, uniendo el desarrollo, el diseño y la estrategia comercial.' : 'Técnica em Programação focada em liderar projetos digitais, unindo o desenvolvimento, o design e a estratégia comercial.'}
              </p>
              <a href="mailto:celinapereyra1@gmail.com" className="inline-flex items-center gap-6 text-xl md:text-2xl font-bold text-teal-400 hover:text-white transition-all group">
                celinapereyra1@gmail.com 
                <div className="w-14 h-14 rounded-2xl border border-teal-500/50 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-black group-hover:scale-110 transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-cool flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <p>© 2024 CELINA J. PEREYRA</p>
             <div className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></div>
             <a 
               href="https://www.folkode.com.ar/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-slate-800 hover:text-teal-500 transition-colors"
             >
               {t.copy}
             </a>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors uppercase">{lang === 'es' ? 'Técnica' : 'Técnica'}</a>
            <a href="#" className="hover:text-white transition-colors uppercase">{lang === 'es' ? 'Desarrollo' : 'Desenvolvimento'}</a>
            <a href="#" className="hover:text-white transition-colors uppercase">{lang === 'es' ? 'Creatividad' : 'Criatividade'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
