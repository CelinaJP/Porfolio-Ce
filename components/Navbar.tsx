
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Download } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
  lang: 'es' | 'pt';
  onToggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cvUrl = 'https://docs.google.com/document/d/135s7Qz4kcNfTKYNg1KfNKX0j3pqb-Ux20FG21KkgshQ/export?format=pdf';

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.exp, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-xl py-4 border-b border-cool' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="font-heading text-2xl tracking-tighter uppercase flex items-center gap-2">
          <span>CELINA</span>
          <span className="text-xl animate-wave">🇦🇷</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 px-4 py-2 border border-cool rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-white transition-colors"
          >
            <Download size={12} className="text-accent" />
            <span>{t.downloadCv}</span>
          </a>

          <button 
            onClick={onToggleLang}
            className="flex items-center gap-2 px-3 py-1.5 border border-cool rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-accent transition-colors"
          >
            <Globe size={12} className="text-accent" />
            <span className={lang === 'es' ? 'text-white' : 'text-slate-500'}>ES</span>
            <span className="text-slate-700">/</span>
            <span className={lang === 'pt' ? 'text-white' : 'text-slate-500'}>PT</span>
          </button>

          <a 
            href="https://wa.me/1167906178" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-2 bg-white text-black font-bold rounded-full text-[10px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
          >
            {t.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button onClick={onToggleLang} className="text-[10px] font-bold uppercase tracking-widest text-accent border border-accent-30 px-2 py-1 rounded">
            {lang.toUpperCase()}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0c] border-b border-cool p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-heading text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 border border-accent rounded-full text-sm font-bold uppercase tracking-widest text-white hover:bg-accent transition-colors"
          >
            <Download size={16} className="text-accent" />
            <span>{t.downloadCv}</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;