import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Scroll Down -> Hide navbar
      // Scroll Up -> Reveal navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pt-2 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className={`max-w-5xl mx-auto rounded-full px-4 sm:px-5 py-1.5 transition-all duration-300 border ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)]' 
          : 'bg-white/85 backdrop-blur-lg border-white/70 shadow-[0_2px_16px_rgba(0,0,0,0.04)]'
      }`}>
        
        {/* Top Bar: Zone 1 (Logo Clinique Vitalia) - Zone 2 (Nav Links) - Zone 3 (Action) */}
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Zone 1: Logo officiel Clinique Vitalia (Abidjan Riviera Palmeraie) */}
          <a href="#" className="flex items-center group whitespace-nowrap shrink-0 py-0.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-stone-950 border border-[#C5B29D] flex items-center justify-center text-[#D4C3B3] font-display font-black text-sm tracking-widest shadow-xs transition-transform group-hover:scale-105">
                V
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black tracking-[0.14em] text-slate-950 text-xs sm:text-sm">
                  CLINIQUE VITALIA
                </span>
                <span className="text-[8px] sm:text-[8.5px] uppercase tracking-wider text-stone-500 font-semibold">
                  Cocody Riviera Palmeraie • Abidjan
                </span>
              </div>
            </div>
          </a>

          {/* Zone 2: Navigation Links affinés */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-[11.5px] font-semibold text-slate-700">
            <a href="#" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              Accueil
            </a>
            <a href="#services" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              Spécialités
            </a>
            <a href="#technologies" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              Pôles Médicaux
            </a>
            <a href="#allon4" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              Spécialistes
            </a>
            <a href="#avant-apres" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              Expérience & Avis
            </a>
            <a href="#faq" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#8C765C] transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>

          {/* Zone 3: Bouton d'action compact et élégant */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-4 py-1.5 sm:py-2 text-[11px] font-bold text-white bg-slate-950 hover:bg-[#C5B29D] hover:text-stone-950 active:scale-[0.98] rounded-full shadow-2xs transition-all whitespace-nowrap cursor-pointer tracking-wider uppercase"
            >
              Rendez-vous
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-slate-800 hover:text-slate-950 rounded-full hover:bg-black/5"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer en français */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/80 p-5 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Accueil
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Spécialités & Soins
            </a>
            <a 
              href="#technologies" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Pôles Médicaux & Spécialités
            </a>
            <a 
              href="#allon4" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Spécialistes & Équipe
            </a>
            <a 
              href="#avant-apres" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Cas Cliniques & Résultats
            </a>
            <a 
              href="#clinique" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Plateau Technique & Avis
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Accès & Contact
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-slate-950 rounded-full uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              Prendre rendez-vous en ligne
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
