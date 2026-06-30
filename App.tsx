
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/FolkodeSection';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'pt'>('es');
  const [activeTab, setActiveTab] = useState<'experience' | 'certifications'>('experience');

  const toggleLang = () => setLang(prev => prev === 'es' ? 'pt' : 'es');

  useEffect(() => {
    try {
      document.body.setAttribute('data-lang', lang);
    } catch (e) {
      // ignore server-side or non-browser environments
    }
  }, [lang]);

  return (
    <main className="relative overflow-x-hidden">
      {/* Background Decor - Minimal cold tones */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[-10%] right-[10%] w-[50rem] h-[50rem] rounded-full blur-[150px] hidden md:block bg-accent-3"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full blur-[150px] hidden md:block bg-accent-2"></div>
        <div className="absolute top-[30%] left-[20%] w-[1px] h-full hidden md:block bg-gradient-accent"></div>
      </div>

      <Navbar lang={lang} onToggleLang={toggleLang} />
      <Hero lang={lang} />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-bold transition ${activeTab === 'experience' ? 'bg-accent text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
          >
            {lang === 'es' ? 'Trayectoria' : 'Trajetória'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-3 rounded-full uppercase tracking-[0.3em] text-sm font-bold transition ${activeTab === 'certifications' ? 'bg-accent text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
          >
            {lang === 'es' ? 'Certificaciones' : 'Certificações'}
          </button>
        </div>

        {activeTab === 'experience' ? (
          <ExperienceSection lang={lang} />
        ) : (
          <Certifications lang={lang} />
        )}
      </div>
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Footer lang={lang} />
    </main>
  );
};

export default App;
