import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Award, ShieldCheck } from 'lucide-react';

interface AllOnFourSectionProps {
  onOpenBooking: (motive?: string) => void;
  onOpenQuiz?: () => void;
  onFindDoctor?: () => void;
}

interface Specialist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  consultations: string;
  rating: string;
  image: string;
}

const SPECIALISTS: Specialist[] = [
  {
    id: 'dr-jean-luc-kouame',
    name: 'Pr. Jean-Luc Kouamé',
    specialty: 'Neurologue & Soins Pédiatriques',
    experience: '15 Ans d\'Expérience',
    consultations: '1 200+ Consultations',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-aminata-toure',
    name: 'Dr. Aminata Touré',
    specialty: 'Endocrinologue & Diabétologue',
    experience: '12 Ans d\'Expérience',
    consultations: '1 500+ Consultations',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1594824813626-d922bc3086eb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-koffi-ndri',
    name: 'Dr. Koffi N\'Dri',
    specialty: 'Gastro-entérologue & Hépatologue',
    experience: '17 Ans d\'Expérience',
    consultations: '1 900+ Consultations',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-marie-josee-konan',
    name: 'Dr. Marie-Josée Konan',
    specialty: 'Chirurgienne Orthopédiste',
    experience: '20 Ans d\'Expérience',
    consultations: '2 300+ Consultations',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-bakary-traore',
    name: 'Dr. Bakary Traoré',
    specialty: 'Cardiologue Interventionnel',
    experience: '14 Ans d\'Expérience',
    consultations: '1 600+ Consultations',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
  }
];

export const AllOnFourSection: React.FC<AllOnFourSectionProps> = ({
  onOpenBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Contrôle du carrousel horizontal des spécialistes
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

  return (
    // SECTION MEET OUR SPECIALISTS : EFFET CARTE EMPILÉE (Sticky Stacking Card au-dessus de la section précédente)
    <section
      id="allon4"
      className="relative z-30 -mt-[100vh] min-h-screen bg-[#F9FAFB] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] border-t border-slate-200/90 shadow-[0_-25px_60px_rgba(0,0,0,0.30)] py-14 sm:py-20 lg:py-24 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE SECTION (Exactement comme dans la maquette fournie) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12">
          
          {/* À gauche : Grand titre en gras et description soignée */}
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight font-display leading-[1.1]">
              Nos Médecins
              <br />
              Spécialistes
            </h2>
            <div className="space-y-1 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>Consultez des médecins praticiens expérimentés réunis au sein de la Clinique Vitalia à Abidjan (Cocody Riviera Palmeraie).</p>
              <p>Nos spécialistes allient des années d'excellence clinique à des soins attentionnés centrés sur le patient.</p>
            </div>
          </div>

          {/* À droite : Deux boutons circulaires de navigation avec contour épuré et fond blanc */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Spécialistes précédents"
              className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full border bg-white flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-xs'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Spécialistes suivants"
              className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full border bg-white flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-xs'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

        </div>

        {/* CARROUSEL HORIZONTAL DES 5 SPÉCIALISTES (Conforme à l'image) */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SPECIALISTS.map((spec) => (
            <div
              key={spec.id}
              className="w-[270px] sm:w-[290px] md:w-[305px] h-[390px] sm:h-[415px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-md bg-white border border-slate-200/90 snap-start group select-none hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* En haut : Étiquette blanche avec note (ex : ★ 4.8) */}
              <div className="absolute top-3.5 left-3.5 z-20 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="tabular-nums font-mono">{spec.rating}</span>
              </div>

              {/* Au centre : Grand portrait médical haute qualité sur fond studio bleu très clair */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-sky-50/70 via-sky-50/40 to-slate-100 overflow-hidden">
                <img
                  src={spec.image}
                  alt={spec.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                  loading="lazy"
                />
              </div>

              {/* En bas : Panneau d'informations translucide bleu-gris avec bouton circulaire flèche vers la droite */}
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/92 via-slate-900/70 to-transparent pt-14 pb-4 px-4.5 text-white flex flex-col justify-end">
                
                <div className="flex items-end justify-between gap-2.5">
                  
                  <div className="space-y-1 min-w-0 flex-1">
                    <h3 className="text-base sm:text-[17px] font-bold font-display text-white tracking-tight truncate drop-shadow-xs">
                      {spec.name}
                    </h3>
                    
                    <p className="text-xs text-sky-200 font-medium truncate drop-shadow-xs">
                      {spec.specialty}
                    </p>

                    {/* Badges d'expérience et de consultations */}
                    <div className="flex flex-col gap-1 pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-xs w-fit">
                        {spec.experience}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-xs w-fit">
                        {spec.consultations}
                      </span>
                    </div>
                  </div>

                  {/* Petit bouton circulaire avec flèche vers la droite pour prise de rendez-vous */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onOpenBooking(`Consultation avec ${spec.name} (${spec.specialty})`)}
                    title={`Prendre rendez-vous avec ${spec.name}`}
                    className="w-8 h-8 rounded-full bg-white text-slate-900 hover:bg-[#C5B29D] hover:text-stone-950 flex items-center justify-center shadow-md transition-colors cursor-pointer shrink-0 mb-0.5"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </motion.button>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Pied de section avec badges de réassurance */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8C765C]" />
            <span>Médecins accrédités auprès des plus grands hôpitaux universitaires et centres d'excellence.</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <Award className="w-4 h-4 text-[#E5A823]" />
            <span>Consultations disponibles sur rendez-vous ou téléconsultation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
