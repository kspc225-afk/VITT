import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Search } from 'lucide-react';

interface CtaSectionProps {
  onOpenBooking: () => void;
  onFindDoctor: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenBooking,
  onFindDoctor
}) => {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] md:min-h-[720px] overflow-hidden bg-[#EFE3D4] select-none flex items-center">
      
      {/* Photo d'arrière-plan fournie : médecin en tenue médicale beige et espace clinique */}
      <picture>
        <source srcSet="/assets/aistudio/image_579fdd89.webp" type="image/webp" />
        <img
          src="/assets/aistudio/image_579fdd89.png"
          alt="Praticienne de la Clinique Vitalia en tenue médicale à Abidjan Cocody Riviera Palmeraie"
          className="absolute inset-0 w-full h-full object-cover object-[72%_35%] lg:object-[68%_35%] filter brightness-[1.01] contrast-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Dégradé doux placé sur la gauche pour assurer une lisibilité optimale du texte et des boutons */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#F0E4D7]/95 via-[#F0E4D7]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#EFE3D4] via-[#EFE3D4]/40 to-transparent pointer-events-none" />

      {/* Conteneur principal : alignement du texte et des actions SUR LA GAUCHE où se trouve l'espace libre beige */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col justify-center">
        
        <div className="w-full md:w-1/2 lg:w-[48%] mr-auto flex flex-col items-start space-y-6 text-left">
          

          {/* Grand titre imposant */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black text-slate-950 tracking-tight uppercase leading-[1.06] font-display">
            VOTRE SANTÉ
            <br />
            MÉRITE DES SOINS
            <br />
            D'EXCEPTION.
          </h2>

          {/* Descriptif d'accompagnement */}
          <p className="text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-lg">
            Consultations avec nos spécialistes de premier plan, plateau chirurgical de pointe et suivi personnalisé : la Clinique Vitalia réunit à Abidjan (Cocody Riviera Palmeraie) le meilleur de la médecine contemporaine pour votre bien-être.
          </p>

          {/* Les deux boutons d'action alignés */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
            
            {/* Bouton 1 : Fond sombre avec icône calendrier */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-[#C5B29D] hover:text-stone-950 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white stroke-[2.2]" />
              <span>PRENDRE RENDEZ-VOUS</span>
            </motion.button>

            {/* Bouton 2 : Pilule avec fine bordure et icône recherche */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onFindDoctor}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-stone-400 bg-white/90 backdrop-blur-md text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-md"
            >
              <Search className="w-4 h-4 text-slate-950 stroke-[2.2]" />
              <span>TROUVER UN MÉDECIN</span>
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
};
