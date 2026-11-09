import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, X } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenBooking,
  onOpenQuiz
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down past hero (~350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <aside 
      aria-label="Barre d'action rapide"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40 max-w-2xl w-auto animate-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="bg-slate-950/95 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.35)] border border-white/15 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left Indicator & Quiz trigger */}
        <button
          onClick={onOpenQuiz}
          className="flex items-center gap-2.5 pl-3 sm:pl-4 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#C5B29D]/20 border border-[#C5B29D]/40 flex items-center justify-center shrink-0 text-[#D4C3B3] transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4 text-[#D4C3B3]" />
          </div>
          <div className="text-xs hidden sm:block">
            <span className="font-bold text-white group-hover:text-[#D4C3B3] transition-colors block leading-tight">
              Test d'orientation médicale
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              Vérifiez vos options de soins en 2 min
            </span>
          </div>
          <div className="text-xs sm:hidden font-medium text-slate-200">
            Orientation médicale
          </div>
        </button>

        {/* Right CTA Button & close */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] active:scale-95 rounded-full shadow-xs transition-all whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-950" />
            <span>Prendre rendez-vous +</span>
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Fermer la barre"
            className="w-7 h-7 rounded-full text-slate-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors mr-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
