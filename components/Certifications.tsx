
import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';

interface Props {
  lang: 'es' | 'pt';
}

const Certifications: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].certs;
  const certifications = [
    {
      title: 'Front - End JS',
      issuer: 'Agencia de Habilidades para el Futuro',
      period: 'Sept 2025 - Dic 2025',
    },
    {
      title: 'Python Inicial',
      issuer: 'Agencia de Habilidades para el Futuro',
      period: 'Abr 2025 - Jul 2025',
    },
    {
      title: 'Curso de Excel',
      issuer: 'Coderhouse',
      period: 'Nov 2023 - Ene 2024',
    }
  ];

  const unaBSkills = ['Scrum', 'Kanban', 'GitHub', 'Git', 'Figma'];

  return (
    <section className="py-32 border-t border-cool/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-12">
              <Award className="text-accent" size={40} />
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter">{t.title1} <br/> <span className="text-slate-600">{t.title2}</span></h2>
            </div>
            
            <div className="grid gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group bg-cool-dark border border-cool p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-accent transition-all">
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ShieldCheck className="text-accent-2 opacity-50 group-hover:opacity-100" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-accent transition-colors">{cert.title}</h3>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                      <p className="text-[10px] uppercase font-bold text-slate-600 mt-2 tracking-widest">{cert.period}</p>
                    </div>
                  </div>
                  <button className="px-6 py-3 border border-cool rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                    {t.btn} <ExternalLink size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent-5 border border-accent-30 p-10 rounded-[3rem]">
            <h3 className="font-heading text-2xl mb-8 uppercase text-accent">{t.unabTitle}</h3>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed uppercase tracking-widest font-bold">
              {t.unabDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              {unaBSkills.map(skill => (
                <div key={skill} className="px-5 py-3 bg-[#0a0a0c] border border-cool rounded-2xl flex items-center gap-3 group hover:border-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent opacity-40 group-hover:opacity-100"></div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-accent-30">
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.4em]">{t.unabTag}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
