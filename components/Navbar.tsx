
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
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
          
          <button 
            onClick={onToggleLang}
            className="flex items-center gap-2 px-3 py-1.5 border border-cool rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-teal-500 transition-colors"
          >
            <Globe size={12} className="text-teal-500" />
            <span className={lang === 'es' ? 'text-white' : 'text-slate-500'}>ES</span>
            <span className="text-slate-700">/</span>
            <span className={lang === 'pt' ? 'text-white' : 'text-slate-500'}>PT</span>
          </button>

          <a 
            href="#contact" 
            className="px-6 py-2 bg-white text-black font-bold rounded-full text-[10px] uppercase tracking-widest hover:bg-teal-500 hover:text-white transition-all"
          >
            {t.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button onClick={onToggleLang} className="text-[10px] font-bold uppercase tracking-widest text-teal-500 border border-teal-500/20 px-2 py-1 rounded">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;