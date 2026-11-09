import React from 'react';
import { Calendar, Search, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  onFindDoctor?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenQuiz,
  onFindDoctor
}) => {
  const scrollToContent = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#EFE3D4] pt-24 sm:pt-32 pb-24 sm:pb-32">
      
      {/* Background Image: positioned to ensure doctor's forehead has plenty of headroom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source srcSet="/assets/aistudio/image_579fdd89.webp" type="image/webp" />
          <img
            src="/assets/aistudio/image_579fdd89.png"
            alt="Clinique Vitalia — Établissement Médical Privé à Abidjan Cocody Riviera Palmeraie"
            className="w-full h-full object-cover object-[70%_35%] lg:object-[68%_35%] filter brightness-[1.01] contrast-[1.02]"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Atmosphere gradient scrim on left in elegant warm champagne/sand tone ensuring crisp contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#F0E4D7]/95 via-[#F0E4D7]/75 to-transparent pointer-events-none" />

        {/* Ambient bottom blend */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#EFE3D4] via-[#EFE3D4]/40 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Left Column: Headlines & Actions (Text reduced in size, no dashes mid-sentence) */}
        <div className="max-w-xl flex flex-col justify-center space-y-6 sm:space-y-7 min-h-[55vh]">
          
          <div className="space-y-3">
            {/* Display Title: Reduced size, clean editorial prose */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] font-extrabold text-slate-950 tracking-tight font-display leading-[1.08] text-balance">
              DES SOINS <br />
              PENSÉS <br />
              POUR VOUS
            </h1>
          </div>

          {/* Boutons d'action: refined padding and typography */}
          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold text-white bg-slate-950 hover:bg-[#C5B29D] hover:text-stone-950 active:scale-[0.98] rounded-full shadow-lg transition-all tracking-wider uppercase cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>PRENDRE RENDEZ-VOUS</span>
            </button>

            <button
              onClick={onFindDoctor || onOpenQuiz}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold text-slate-900 bg-white/95 hover:bg-white active:scale-[0.98] rounded-full shadow-md border border-stone-300/80 transition-all tracking-wider uppercase cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-slate-800" />
              <span>TROUVER UN MÉDECIN</span>
            </button>
          </div>

          {/* Descriptif: refined size, no hyphens */}
          <p className="text-slate-800 text-xs sm:text-[13px] leading-relaxed max-w-sm sm:max-w-md font-medium pt-1">
            Des consultations de routine aux chirurgies de haute technicité, la Clinique Vitalia réunit à Abidjan (Cocody Riviera Palmeraie) des médecins et spécialistes d'excellence pour des soins plus simples, plus rapides et personnalisés.
          </p>

        </div>

      </div>

      {/* Bouton d'animation de transition vers la deuxième section */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToContent}
          aria-label="Défiler vers l'offre de soins"
          className="group flex flex-col items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-stone-300/80 text-slate-800 transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-700">
            Explorer les spécialités
          </span>
          <ChevronDown className="w-4 h-4 text-slate-800 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
