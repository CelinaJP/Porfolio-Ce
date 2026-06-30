import React from 'react';
import { translations } from '../translations';

interface Props {
  lang: 'es' | 'pt';
}

const reels = [
  {
    title: '¿Qué es una issue?',
    shortcode: 'DUb3OykDigf',
    url: 'https://www.instagram.com/reel/DUb3OykDigf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    title: 'allmart',
    shortcode: 'DVMTH4sjrXK',
    url: 'https://www.instagram.com/reel/DVMTH4sjrXK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    title: 'elarcagym',
    shortcode: 'DUBXvDgjurs',
    url: 'https://www.instagram.com/reel/DUBXvDgjurs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];

const SocialMedia: React.FC<Props> = ({ lang }) => {
  const t = translations[lang].socialMedia || {
    tag: 'Social Media',
    title: 'Instagram Reels',
    description: 'Mira algunos de mis trabajos en Instagram.',
    reelLabel: 'Reel',
    openDescription: 'Haz clic para ver el contenido en Instagram.',
    openButton: 'Ver en Instagram'
  };

  return (
    <section id="social" className="py-32 bg-[#020814]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">{t.tag}</span>
          <h2 className="font-heading text-5xl md:text-6xl mt-6 uppercase tracking-tight">
            {t.title}
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reels.map((reel) => (
            <div key={reel.shortcode} className="rounded-3xl overflow-hidden border border-cool bg-[#080f1f] shadow-2xl">
              <div className="aspect-video bg-black">
                <iframe
                  title={`Instagram Reel ${reel.title}`}
                  src={`https://www.instagram.com/reel/${reel.shortcode}/embed`}
                  className="w-full h-full"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-3">{t.reelLabel} {reel.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.openDescription}</p>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-4 items-center gap-2 px-4 py-3 bg-accent text-black font-bold rounded-full hover:bg-white transition-colors"
                >
                  {t.openButton}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
