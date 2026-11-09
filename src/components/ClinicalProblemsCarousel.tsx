import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types/clinic';

interface ClinicalProblemsCarouselProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ClinicalProblemsCarousel: React.FC<ClinicalProblemsCarouselProps> = ({
  onSelectService,
  onOpenBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Progressive scroll text scrub: words transition from grey to solid black as user scrolls into the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating when section top enters near 85% of viewport
      // Complete when section top reaches 25% of viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const current = rect.top;

      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update carousel button states based on scroll position
  const checkCarouselScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkCarouselScroll, { passive: true });
    checkCarouselScroll();
    return () => el.removeEventListener('scroll', checkCarouselScroll);
  }, []);

  // Title words: clean sentence with NO mid-sentence dashes
  const titleWords = [
    "Tout", "ce", "dont", "vous", "avez", "besoin", "pour",
    "une", "santé", "optimale", "réunie", "au", "même", "endroit."
  ];

  const cardsData = [
    {
      id: "care",
      title: "Prise en charge globale",
      description: "De la médecine préventive aux consultations chirurgicales spécialisées de pointe.",
      bgPos: "13% 68%",
      serviceCategory: "Médecine & Soins",
      serviceItem: {
        id: "comprehensive",
        title: "Prise en charge médicale et chirurgicale globale",
        subtitle: "Consultations pluridisciplinaires coordonnées",
        category: "Médecine Spécialisée",
        description: "Prise en charge intégrale de votre parcours de santé sans multiplication des rendez-vous externes. Nos spécialistes communiquent en temps réel pour un suivi médical fluide.",
        indications: ["Bilan de santé complet", "Consultations chirurgicales", "Médecine préventive"],
        duration: "30 à 45 minutes",
        anesthesia: "Non applicable selon acte",
        recovery: "Retour à domicile immédiat",
        imageFallbackGradient: "from-slate-900 to-stone-950",
        accentBadge: "Coordination médicale complète"
      } as ServiceItem
    },
    {
      id: "doctors",
      title: "Médecins et Spécialistes réunis",
      description: "Nos praticiens travaillent en synergie pour élaborer des plans de traitement complets.",
      bgPos: "38% 68%",
      serviceCategory: "Équipe Médicale",
      serviceItem: {
        id: "collaborative",
        title: "Concertation pluridisciplinaire des spécialistes",
        subtitle: "Comité médical et décisions concertées",
        category: "Chirurgie & Médecine",
        description: "Chaque dossier complexe fait l'objet d'un échange direct entre chirurgiens, radiologues et médecins traitants pour vous garantir le diagnostic le plus rigoureux.",
        indications: ["Deuxième avis chirurgical", "Cas cliniques complexes", "Soins pluridisciplinaires"],
        duration: "Étude collégiale sous 24h",
        anesthesia: "Sans objet",
        recovery: "Plan de soins personnalisé immédiat",
        imageFallbackGradient: "from-stone-900 to-slate-950",
        accentBadge: "Comité médical dédié"
      } as ServiceItem
    },
    {
      id: "diagnostics",
      title: "Diagnostics de pointe",
      description: "Analyses de laboratoire rapides et imagerie tomographique 3D avec résultats immédiats.",
      bgPos: "62% 68%",
      serviceCategory: "Imagerie & Labo",
      serviceItem: {
        id: "diagnostics-3d",
        title: "Plateau technique diagnostique haute précision",
        subtitle: "Scanner Cone Beam 3D et Biologie sur place",
        category: "Imagerie Médicale",
        description: "Plateau d'imagerie volumique 3D à ultra-faible irradiation et laboratoire d'analyses d'urgence intégrés au sein de la clinique pour un diagnostic sans attente.",
        indications: ["Tomographie 3D Cone Beam", "Bilan osseux pré-implantaire", "Analyses biologiques rapides"],
        duration: "15 minutes par examen",
        anesthesia: "Examen indolore et non invasif",
        recovery: "Compte-rendu numérique remis le jour même",
        imageFallbackGradient: "from-slate-950 to-stone-900",
        accentBadge: "Résultats immédiats le jour même"
      } as ServiceItem
    },
    {
      id: "scheduling",
      title: "Rendez-vous simplifié",
      description: "Réservez en ligne 24h sur 24, choisissez votre praticien et gérez vos consultations facilement.",
      bgPos: "86% 68%",
      serviceCategory: "Prise en Charge",
      serviceItem: {
        id: "easy-schedule",
        title: "Parcours patient digital et accueil personnalisé",
        subtitle: "Accompagnement administratif et mutuelle",
        category: "Services Patients",
        description: "Prise de rendez-vous fluide, rappels automatiques par SMS, téléconsultation de suivi et télétransmission directe avec les mutuelles santé.",
        indications: ["Réservation en ligne 24h sur 24", "Télétransmission directe mutuelle", "Accompagnement personnalisé"],
        duration: "Accueil immédiat sans attente",
        anesthesia: "Sans objet",
        recovery: "Espace patient digital sécurisé",
        imageFallbackGradient: "from-slate-900 to-amber-950",
        accentBadge: "Zéro temps d'attente"
      } as ServiceItem
    },
    {
      id: "surgery-3d",
      title: "Pôle Chirurgie 3D & Bloc Stérile",
      description: "Interventions mini-invasives assistées par ordinateur en salle d'opération ISO 7.",
      bgPos: "25% 68%",
      serviceCategory: "Chirurgie Avancée",
      serviceItem: {
        id: "surgical-wing",
        title: "Bloc Opératoire & Chirurgie Assistée 3D",
        subtitle: "Environnement stérile certifié ISO 7",
        category: "Chirurgie de Pointe",
        description: "Chirurgie guidée numérique sans ouverture large, protocoles flapless et pose d'implants de haute précision avec sédation consciente.",
        indications: ["Chirurgie guidée", "Implantologie Straumann", "Greffes tissulaires"],
        duration: "45 à 90 minutes",
        anesthesia: "Anesthésie ciblée sans douleur",
        recovery: "Protocole ambulatoire rapide",
        imageFallbackGradient: "from-slate-950 to-teal-950",
        accentBadge: "Stérilité maximale ISO 7"
      } as ServiceItem
    },
    {
      id: "followup",
      title: "Suivi post-opératoire continu",
      description: "Un contact direct avec l'équipe soignante et des téléconsultations de contrôle dédiées.",
      bgPos: "75% 68%",
      serviceCategory: "Accompagnement",
      serviceItem: {
        id: "patient-followup",
        title: "Protocole de suivi et téléconsultations de contrôle",
        subtitle: "Assistance médicale dédiée après chaque soin",
        category: "Suivi Clinique",
        description: "Suivi personnalisé dès le lendemain de votre intervention, hotline d'astreinte chirurgicale 7j/7 et contrôles réguliers jusqu'à parfaite consolidation.",
        indications: ["Contrôle post-opératoire", "Suivi de cicatrisation", "Ligne directe soignants"],
        duration: "Suivi continu sur 6 mois",
        anesthesia: "Sans objet",
        recovery: "Accompagnement sécurisé",
        imageFallbackGradient: "from-slate-900 to-stone-950",
        accentBadge: "Ligne directe soignants 7j/7"
      } as ServiceItem
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative z-20 -mt-12 sm:-mt-16 bg-white rounded-t-[40px] sm:rounded-t-[54px] shadow-[0_-25px_60px_rgba(0,0,0,0.22)] border-t border-white/90 pt-10 sm:pt-14 pb-20 sm:pb-28 transition-all"
    >
      {/* Visual Sheet Handle Indicator for Card Transition */}
      <div className="w-12 h-1 rounded-full bg-slate-300 mx-auto mb-8 sm:mb-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title with progressive scroll-scrub fill + Pill Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          
          <div className="space-y-3.5 max-w-2xl">
            {/* Title with Word-by-Word Progressive Scroll Color Fill (Taille réduite, sans tiret au milieu) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight font-display leading-[1.16] select-none text-balance">
              {titleWords.map((word, idx) => {
                const threshold = idx / titleWords.length;
                const isBlack = scrollProgress >= threshold;
                return (
                  <span
                    key={idx}
                    className="inline-block mr-2 transition-colors duration-300 ease-out"
                    style={{
                      color: isBlack ? '#0F172A' : '#CBD5E1',
                      transitionDelay: `${idx * 15}ms`
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>

            {/* Subtitle in French (taille réduite, fluide, sans tiret au milieu) */}
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-xl font-normal pt-0.5">
              Prendre soin de sa santé ne devrait pas nécessiter de consulter plusieurs cabinets, de répéter sans cesse ses antécédents ou d'attendre des semaines. La Clinique Vitalia réunit à Abidjan (Cocody Riviera Palmeraie) médecins spécialistes, imagerie de pointe et suivi personnalisé au sein d'une expérience coordonnée.
            </p>
          </div>

          {/* Tall Pill-shaped Carousel Navigation Buttons controlling horizontal scroll */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Faire défiler vers la gauche"
              className={`w-12 h-18 sm:w-13 sm:h-20 rounded-full border bg-white shadow-xs flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-slate-300 hover:border-slate-500 hover:bg-[#F8F6F2] text-slate-800 hover:text-slate-950 active:scale-95'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Faire défiler vers la droite"
              className={`w-12 h-18 sm:w-13 sm:h-20 rounded-full border bg-white shadow-xs flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-slate-300 hover:border-slate-500 hover:bg-[#F8F6F2] text-slate-800 hover:text-slate-950 active:scale-95'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Horizontal Card Carousel (Never wraps into a long vertical queue/file!) */}
        <div className="relative">
          
          <div 
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {cardsData.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelectService(card.serviceItem)}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start relative aspect-[3/4] sm:aspect-[3.2/4.4] rounded-[24px] overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/60 flex flex-col justify-end select-none"
              >
                {/* Background slice extracted from authentic image asset */}
                <div 
                  className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('/assets/aistudio/image_cddeba72.webp')`,
                    backgroundPosition: card.bgPos,
                    backgroundSize: '430% auto'
                  }}
                />

                {/* Top ambient highlight on hover */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Frosted Gradient Scrim in elegant charcoal and warm beige */}
                <div className="relative z-10 bg-gradient-to-t from-[#181C21]/95 via-[#23272E]/85 via-45% to-transparent pt-16 pb-5 px-5 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5D7C5] mb-1">
                    {card.serviceCategory}
                  </span>
                  <h3 className="text-base sm:text-[17px] font-bold text-white font-display leading-snug drop-shadow-xs">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/85 leading-relaxed mt-1 font-normal line-clamp-2">
                    {card.description}
                  </p>

                  <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] font-bold text-[#E5D7C5] group-hover:text-white transition-colors">
                    <span>En savoir plus</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Subtle scroll edge fade indicator when more content is available to the right */}
          {canScrollRight && (
            <div className="hidden sm:block absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white via-white/40 to-transparent pointer-events-none" />
          )}

        </div>

        {/* Carousel hint */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 px-1">
          <span>Glissez ou utilisez les boutons pour parcourir les spécialités</span>
          <span className="font-semibold text-slate-700">
            {cardsData.length} pôles de soins coordonnés
          </span>
        </div>

      </div>
    </section>
  );
};
