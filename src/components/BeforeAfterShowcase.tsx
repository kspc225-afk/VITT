import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Laptop,
  FileCheck,
  DoorClosed,
  CircleDollarSign,
  Coffee,
  ShieldCheck,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

interface BeforeAfterShowcaseProps {
  onOpenBooking?: (motive?: string) => void;
}

interface FeatureItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface PatientReview {
  id: string;
  name: string;
  quote: string;
  rating: number;
  image: string;
  accentGradient: string;
}

const HEALTHCARE_FEATURES: FeatureItem[] = [
  {
    id: 'waiting-time',
    label: 'Temps d\'attente minimal',
    icon: Clock
  },
  {
    id: 'online-reg',
    label: 'Pré-inscription en ligne',
    icon: Laptop
  },
  {
    id: 'digital-rx',
    label: 'Ordonnances numériques',
    icon: FileCheck
  },
  {
    id: 'private-rooms',
    label: 'Cabinets de consultation privés',
    icon: DoorClosed
  },
  {
    id: 'insurance',
    label: 'Prise en charge mutuelle',
    icon: CircleDollarSign
  },
  {
    id: 'lounge',
    label: 'Espace d\'attente grand confort',
    icon: Coffee
  },
  {
    id: 'medical-records',
    label: 'Dossier médical sécurisé',
    icon: ShieldCheck
  },
  {
    id: 'reminders',
    label: 'Rappels automatiques de RDV',
    icon: CalendarCheck
  }
];

const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'review-1',
    name: 'AÏCHA KONÉ',
    quote: '"J\'ai pu consulter le médecin du sport et la kinésithérapeute en un seul rendez-vous à la clinique. Leur coordination a accéléré ma guérison de façon spectaculaire."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=75&fm=webp',
    accentGradient: 'from-amber-500/20 via-pink-500/20 to-sky-500/30'
  },
  {
    id: 'review-2',
    name: 'KOUAMÉ SYLVAIN',
    quote: '"Voir un spécialiste des articulations et réaliser le bilan d\'imagerie le jour même a été d\'un confort inestimable. Leur bienveillance a rendu ma convalescence très sereine."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=75&fm=webp',
    accentGradient: 'from-amber-600/30 via-orange-500/20 to-yellow-500/20'
  },
  {
    id: 'review-3',
    name: 'FATIMA DIALLO',
    quote: '"J\'ai rencontré le chirurgien orthopédiste et le rééducateur en une seule session. Le protocole coordonné m\'a permis de reprendre mon travail bien plus vite que prévu."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=75&fm=webp',
    accentGradient: 'from-amber-600/30 via-stone-500/20 to-amber-500/20'
  },
  {
    id: 'review-4',
    name: 'DRISSA BAMBA',
    quote: '"Zéro temps d\'attente, une équipe médicale très à l\'écoute et des diagnostics d\'une clarté exemplaire. La meilleure expérience de soins vécue à Abidjan."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=75&fm=webp',
    accentGradient: 'from-stone-500/30 via-amber-500/20 to-stone-400/20'
  },
  {
    id: 'review-5',
    name: 'MARIE-ESTELLE YAO',
    quote: '"L\'inscription en ligne est d\'une fluidité parfaite, les cabinets de consultation sont intimes et confortables. Un standard hospitalier moderne et rassurant."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=75&fm=webp',
    accentGradient: 'from-rose-500/20 via-amber-500/20 to-indigo-500/30'
  }
];

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

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
    <section id="avant-apres" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* PARTIE 1 : UNE MÉDECINE QUI RESPECTE VOTRE TEMPS                         */}
        {/* ========================================================================= */}
        <div className="mb-16 sm:mb-24">
          {/* Titre principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight font-display leading-[1.12] mb-8 sm:mb-10">
            Une médecine qui
            <br />
            respecte votre temps
          </h2>

          {/* Grille de 8 boutons / pilules de services (2 lignes x 4 colonnes sur desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {HEALTHCARE_FEATURES.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xs transition-all px-4.5 py-4 flex items-center gap-3.5 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-700 group-hover:text-[#8C765C] transition-colors">
                    <IconComp className="w-4.5 h-4.5 stroke-[1.75]" />
                  </div>
                  <span className="text-xs sm:text-[13.5px] font-semibold text-slate-900 tracking-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PARTIE 2 : LA CONFIANCE DE MILLIERS DE PATIENTS                          */}
        {/* ========================================================================= */}
        <div>
          {/* En-tête avec titre à gauche et deux boutons circulaires à droite */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight font-display leading-[1.12]">
              La confiance de
              <br />
              milliers de patients
            </h2>

            {/* Deux boutons circulaires avec bordure fine et fond blanc */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                aria-label="Avis précédents"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full border bg-white flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-2xs'
                    : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={scrollRight}
                disabled={!canScrollRight}
                aria-label="Avis suivants"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full border bg-white flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? 'border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-2xs'
                    : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Carrousel horizontal des avis patients */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PATIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="w-[310px] sm:w-[360px] md:w-[390px] shrink-0 rounded-2xl sm:rounded-3xl bg-[#F8F9FA] border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between gap-6 snap-start shadow-2xs hover:shadow-md transition-shadow select-none"
              >
                {/* Partie supérieure : Portrait artistique à gauche + Témoignage à droite */}
                <div className="flex items-start gap-4">
                  {/* Portrait avec éclairage studio chaud et coloré comme sur l'image */}
                  <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden relative shrink-0 shadow-xs bg-slate-900">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.2]"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Filtre d'éclairage artistique vibrant (ambre/cyan/rose) */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${review.accentGradient} mix-blend-color pointer-events-none`} />
                  </div>

                  {/* Citation du patient */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                    {review.quote}
                  </p>
                </div>

                {/* Partie inférieure : 5 étoiles à gauche + Nom du patient à droite */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                  {/* 5 étoiles */}
                  <div className="flex items-center gap-1 text-slate-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-3.5 h-3.5 ${
                          idx < review.rating ? 'fill-slate-700 text-slate-700' : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Nom du patient en majuscules discrètes */}
                  <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase font-mono">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
