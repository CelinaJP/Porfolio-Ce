
import React from 'react';
import { Terminal, Layout, Globe, Cpu, Megaphone } from 'lucide-react';
import { translations } from '../translations';

interface Props {
  lang: 'es' | 'pt';
}

const Skills: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].skills;
  const categories = t.categories;

  const skillSets = [
    {
      title: categories[2],
      icon: <Megaphone className="text-accent" size={32} />,
      items: lang === 'es'
        ? ['Redacción de guiones', 'Copywriter', 'Estrategia digital', 'Creadora de contenido']
        : ['Redação de roteiros', 'Copywriter', 'Estratégia digital', 'Criadora de conteúdo']
    },
    {
      title: categories[0],
      icon: <Terminal className="text-accent" size={32} />,
      items: ['Python', 'API REST', 'PostgreSQL']
    },
    {
      title: categories[1],
      icon: <Layout className="text-accent" size={32} />,
      items: lang === 'es'
        ? ['React', 'HTML5', 'CSS', 'Estructura Web', 'Diseño Responsivo']
        : ['React', 'HTML5', 'CSS', 'Estrutura Web', 'Design Responsivo']
    },
    {
      title: categories[3],
      icon: <Globe className="text-accent" size={32} />,
      items: lang === 'es'
        ? ['Gestión de clientes', 'Generación de leads', 'Coordinación operativa']
        : ['Gestão de clientes', 'Geração de leads', 'Coordenação operativa']
    },
    {
      title: categories[4],
      icon: <Cpu className="text-accent" size={32} />,
      items: lang === 'es'
        ? ['Git / GitHub', 'Metodologías Ágiles', 'Diseño de Experiencia e Interfaz', 'Planificación de Arquitectura']
        : ['Git / GitHub', 'Metodologias Ágeis', 'Design de Experiência e Interface', 'Planejamento de Arquitectura']
    }
  ];

  return (
    <section id="skills" className="py-32 bg-cool-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-20 text-center uppercase">{t.title1} <span className="text-slate-600">{t.title2}</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillSets.map((set, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-[#0a0a0c] border border-cool rounded-3xl hover:border-accent transition-all duration-500">
              <div className="mb-6">{set.icon}</div>
              <h3 className="font-heading text-2xl mb-6 uppercase tracking-tight">{set.title}</h3>
              <ul className="space-y-4">
                {set.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 font-medium">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
