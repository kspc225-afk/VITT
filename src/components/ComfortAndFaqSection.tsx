import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface ComfortAndFaqSectionProps {
  onOpenBooking?: (motive?: string) => void;
}

interface GalleryCard {
  id: string;
  type: 'image' | 'badge';
  image?: string;
  alt?: string;
  badgeTitle?: string;
  badgeSubtitle?: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const GALLERY_ITEMS: GalleryCard[] = [
  {
    id: 'card-1',
    type: 'image',
    image: '/assets/aistudio/image_2b30b815.png',
    alt: 'Médecin spécialiste de la Clinique Vitalia souriante en consultation'
  },
  {
    id: 'card-2',
    type: 'badge',
    badgeTitle: 'Équipements',
    badgeSubtitle: 'De Pointe'
  },
  {
    id: 'card-3',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    alt: 'Médecin praticien de la Clinique Vitalia à Abidjan'
  },
  {
    id: 'card-4',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    alt: 'Patiente satisfaite et épanouie après ses soins'
  },
  {
    id: 'card-5',
    type: 'image',
    image: '/src/assets/images/sterile_surgical_suite_1793831504177.jpg',
    alt: 'Plateau chirurgical de haute sécurité'
  }
];

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Comment prendre rendez-vous à la clinique ?',
    answer:
      'Vous pouvez réserver votre consultation en ligne 24h/24 en choisissant votre praticien et votre créneau horaire, ou contacter directement notre accueil médical. Chaque rendez-vous fait l\'objet d\'une confirmation instantanée par SMS et e-mail.'
  },
  {
    id: 'faq-2',
    question: 'Prenez-vous en charge les assurances et mutuelles ?',
    answer:
      'Oui, la Clinique Vitalia (Cocody Riviera Palmeraie) est conventionnée avec les principales assurances et mutuelles santé nationales et internationales. Notre équipe administrative vous accompagne pour la prise en charge directe et les démarches de tiers-payant.'
  },
  {
    id: 'faq-3',
    question: 'Puis-je choisir mon médecin spécialiste ?',
    answer:
      'Absolument. Vous êtes libre de choisir votre praticien via notre annuaire médical selon la spécialité recherchée, ou de vous faire orienter par notre médecin coordonnateur lors de votre accueil.'
  },
  {
    id: 'faq-4',
    question: 'Prenez-vous les urgences et consultations sans rendez-vous ?',
    answer:
      'Bien que nous privilégions les créneaux programmés pour garantir un temps d\'attente nul, notre clinique dispose d\'un accueil d\'urgence pour les consultations médicales et traumatologiques quotidiennes.'
  },
  {
    id: 'faq-5',
    question: 'Les spécialistes se coordonnent-ils entre eux ?',
    answer:
      'Oui. L\'ensemble de nos médecins, chirurgiens et radiologues partagent un dossier médical électronique sécurisé et unifié, permettant une concertation pluridisciplinaire rapide et un suivi cohérent.'
  }
];

export const ComfortAndFaqSection: React.FC<ComfortAndFaqSectionProps> = ({
  onOpenBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

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
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HAUT : CONÇU POUR VOTRE CONFORT ET VOS SOINS                             */}
        {/* ========================================================================= */}
        <div className="mb-20 sm:mb-28">
          
          {/* En-tête avec titre à gauche et boutons circulaires à droite */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight font-display leading-[1.12]">
              Conçu pour votre
              <br />
              confort et vos soins
            </h2>

            {/* Deux boutons circulaires avec bordure fine et fond blanc */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                aria-label="Images précédentes"
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
                aria-label="Images suivantes"
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

          {/* Carrousel horizontal de photos et badge ovale crème/beige */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {GALLERY_ITEMS.map((item) => {
              if (item.type === 'badge') {
                return (
                  <div
                    key={item.id}
                    className="w-[230px] sm:w-[270px] md:w-[290px] h-[190px] sm:h-[220px] shrink-0 rounded-[44px] bg-[#E8DDD4] flex flex-col items-center justify-center p-6 text-center text-slate-900 select-none shadow-xs snap-start transition-transform hover:scale-102"
                  >
                    <span className="text-sm sm:text-base font-semibold leading-tight font-display">
                      {item.badgeTitle}
                    </span>
                    <span className="text-sm sm:text-base font-semibold leading-tight font-display mt-0.5">
                      {item.badgeSubtitle}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="w-[260px] sm:w-[300px] md:w-[330px] h-[190px] sm:h-[220px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-md bg-slate-100 snap-start select-none group"
                >
                  <img
                    src={item.image}
                    alt={item.alt || 'Clinic interior'}
                    className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BAS : FAQ ACCORDION SUR 2 COLONNES (Conforme à l'image fournie)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-6">
          
          {/* Colonne Gauche : Titre FAQ imposant */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
              FAQ
            </h2>
          </div>

          {/* Colonne Droite : Accordéon de questions avec chevrons fins */}
          <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-slate-200">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#8C765C] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#8C765C]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3.5 pr-8 font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
