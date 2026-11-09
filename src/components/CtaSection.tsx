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
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] md:min-h-[720px] overflow-hidden bg-slate-950 select-none flex items-center">
      
      {/* Photo d'arrière-plan fournie : médecin en tenue médicale et espace clinique */}
      <img
        src="/assets/aistudio/image_ff786aff.png"
        alt="Praticien de la Clinique Vitalia en tenue médicale"
        className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center filter brightness-[0.98] contrast-[1.02]"
        loading="lazy"
      />

      {/* Dégradé doux placé sur la droite pour assurer une lisibilité optimale du texte et des boutons */}
      <div className="absolute inset-y-0 right-0 w-full md:w-3/5 bg-gradient-to-l from-slate-950/90 via-slate-950/65 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />

      {/* Conteneur principal : alignement du texte et des actions SUR LA DROITE où se trouve l'espace libre */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col justify-center">
        
        <div className="w-full md:w-1/2 lg:w-[48%] ml-auto flex flex-col items-start space-y-6 text-left">
          
          {/* Kicker élégant */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest text-[#E5A823] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E5A823]" />
            <span>EXCELLENCE MÉDICALE EN CÔTE D'IVOIRE</span>
          </div>

          {/* Grand titre blanc imposant à droite */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white tracking-tight uppercase leading-[1.06] font-display drop-shadow-md">
            VOTRE SANTÉ
            <br />
            MÉRITE DES SOINS
            <br />
            D'EXCEPTION.
          </h2>

          {/* Descriptif d'accompagnement */}
          <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-lg drop-shadow-xs">
            Consultations avec nos spécialistes de premier plan, plateau chirurgical de pointe et suivi personnalisé : la Clinique Vitalia réunit à Abidjan (Cocody Riviera Palmeraie) le meilleur de la médecine contemporaine pour votre bien-être.
          </p>

          {/* Les deux boutons d'action alignés à droite */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
            
            {/* Bouton 1 : Fond blanc plein avec icône calendrier */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950 stroke-[2.2]" />
              <span>PRENDRE RENDEZ-VOUS</span>
            </motion.button>

            {/* Bouton 2 : Pilule translucide avec fine bordure blanche et icône recherche */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onFindDoctor}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/80 bg-black/35 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer shadow-md"
            >
              <Search className="w-4 h-4 text-white stroke-[2.2]" />
              <span>TROUVER UN MÉDECIN</span>
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
};
