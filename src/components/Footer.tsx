import React from 'react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuiz?: () => void;
  onFindDoctor?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onFindDoctor }) => {
  return (
    <footer id="contact" className="bg-black text-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* TITRE GÉANT DE LA MARQUE : VITALIA (En beige chaleureux / pierre noble)   */}
        {/* ========================================================================= */}
        <div className="w-full overflow-hidden border-b border-white/15 pb-6 sm:pb-10 mb-12 sm:mb-16">
          <h1 className="text-[15vw] sm:text-[16.5vw] font-black tracking-tight text-[#C5B29D] bg-[#000000] leading-none font-display uppercase select-none text-left w-full">
            VITALIA
          </h1>
        </div>

        {/* ========================================================================= */}
        {/* LES 4 COLONNES DU FOOTER EN FRANÇAIS                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-12">
          
          {/* Colonne 1 : Description de marque & Copyright (Lg: 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <p className="text-xs sm:text-[11.5px] leading-relaxed font-semibold tracking-wider text-slate-300 uppercase max-w-sm">
              CLINIQUE VITALIA — ÉTABLISSEMENT MÉDICAL PRIVÉ D'EXCELLENCE À ABIDJAN (COMMUNE DE COCODY, RIVIERA PALMERAIE). PRATICIENS SPÉCIALISÉS, CHIRURGIE DE POINTE ET PLATEAU TECHNIQUE MODERNE RÉUNIS POUR VOTRE SANTÉ.
            </p>

            <div className="text-[10px] text-stone-400 font-medium tracking-wider uppercase pt-4 sm:pt-10">
              © 2026 CLINIQUE VITALIA — ÉTABLISSEMENT MÉDICAL PRIVÉ.
              <br />
              ABIDJAN, COCODY RIVIERA PALMERAIE. TOUS DROITS RÉSERVÉS.
            </div>
          </div>

          {/* Colonne 2 : LIENS RAPIDES (Lg: 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
              LIENS RAPIDES
            </h4>
            <ul className="space-y-2.5 text-[10.5px] sm:text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ACCUEIL
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  À PROPOS
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onFindDoctor}
                  className="hover:text-white transition-colors cursor-pointer uppercase text-left"
                >
                  NOS MÉDECINS
                </button>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  SPÉCIALITÉS
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer uppercase text-left"
                >
                  BILANS DE SANTÉ
                </button>
              </li>
              <li>
                <a href="#avant-apres" className="hover:text-white transition-colors">
                  ESPACE PATIENTS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  RECRUTEMENT
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : SERVICES MÉDICAUX (Lg: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
              SERVICES MÉDICAUX
            </h4>
            <ul className="space-y-2.5 text-[10.5px] sm:text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  MÉDECINE DE FAMILLE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  MÉDECINE INTERNE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  CARDIOLOGIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  ORTHOPÉDIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  PÉDIATRIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  GYNÉCOLOGIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  DERMATOLOGIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  NEUROLOGIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  ORL & AUDITION
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  GASTRO-ENTÉROLOGIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  KINÉSITHÉRAPIE
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  ANALYSES & LABORATOIRE
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : ESPACE PATIENTS (Lg: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
              ESPACE PATIENTS
            </h4>
            <ul className="space-y-2.5 text-[10.5px] sm:text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer uppercase text-left"
                >
                  PRENDRE RENDEZ-VOUS
                </button>
              </li>
              <li>
                <a href="#avant-apres" className="hover:text-white transition-colors">
                  MUTUELLES & ASSURANCES
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer uppercase text-left"
                >
                  PORTAIL PATIENT
                </button>
              </li>
              <li>
                <a href="#avant-apres" className="hover:text-white transition-colors">
                  DOSSIER MÉDICAL SÉCURISÉ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  QUESTIONS FRÉQUENTES (FAQ)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer uppercase text-left"
                >
                  FACTURATION & TARIFS
                </button>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};
