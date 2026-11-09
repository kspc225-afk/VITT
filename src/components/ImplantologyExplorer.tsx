import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface PinnedScrollSectionProps {
  onOpenBooking: (motive?: string) => void;
  onOpenQuiz?: () => void;
  onFindDoctor?: () => void;
}

interface SpecialtyItem {
  name: string;
  badge: string;
}

interface StepData {
  id: string;
  keyword: string;
  counter: string;
  poleKicker: string;
  title: string;
  description: string;
  specialties: SpecialtyItem[];
  imageSrc: string;
  imageAlt: string;
  bookingMotive: string;
}

const STEPS: StepData[] = [
  {
    id: 'step-medecine',
    keyword: 'MÉDECINE',
    counter: '01 / 10',
    poleKicker: 'PÔLE MÉDECINE INTERNE & SOINS GÉNÉRAUX',
    title: 'Médecine Interne, Générale & Bilan de Santé',
    description: 'Prise en charge globale, médecine préventive, suivi des pathologies chroniques et bilans de santé approfondis sans multiplication des démarches.',
    specialties: [
      { name: 'Médecine Interne', badge: 'Bilan complet' },
      { name: 'Médecine de Famille', badge: 'Soins continus' },
      { name: 'Endocrinologie', badge: 'Métabolisme' },
      { name: 'Gastro-entérologie', badge: 'Digestif' }
    ],
    imageSrc: '/assets/aistudio/image_cddeba72.webp',
    imageAlt: 'Consultations de médecine interne et soins coordonnés',
    bookingMotive: 'Consultation Médecine Interne & Générale'
  },
  {
    id: 'step-chirurgie',
    keyword: 'CHIRURGIE',
    counter: '02 / 10',
    poleKicker: 'PÔLE CHIRURGIE & BLOC OPÉRATOIRE ISO 7',
    title: 'Chirurgie Générale & Mini-invasive',
    description: 'Plateau chirurgical certifié ISO 7 pour les interventions mini-invasives, la chirurgie ambulatoire sans hospitalisation lourde et les gestes de haute technicité.',
    specialties: [
      { name: 'Chirurgie Générale', badge: 'Bloc opératoire' },
      { name: 'Chirurgie Ambulatoire', badge: 'Sortie le jour même' },
      { name: 'Coelio-chirurgie', badge: 'Mini-invasif' },
      { name: 'Chirurgie Digestive', badge: 'Spécialisée' }
    ],
    imageSrc: '/assets/aistudio/image_2b30b815.webp',
    imageAlt: 'Bloc chirurgical et chirurgiens d\'excellence',
    bookingMotive: 'Consultation Chirurgie Générale'
  },
  {
    id: 'step-cardiologie',
    keyword: 'CARDIOLOGIE',
    counter: '03 / 10',
    poleKicker: 'PÔLE CARDIOVASCULAIRE & RYTHMOLOGIE',
    title: 'Cardiologie, Rythmologie & Vaisseaux',
    description: 'Dépistage cardiovasculaire complet, bilans ECG d\'effort, holter tensionnel, échocardiographie doppler et prévention active des risques vasculaires.',
    specialties: [
      { name: 'Cardiologie Clinique', badge: 'Cœur & Rythme' },
      { name: 'Échocardiographie', badge: 'Doppler haute précision' },
      { name: 'ECG d\'effort', badge: 'Exploration fonctionnelle' },
      { name: 'Rythmologie', badge: 'Surveillance' }
    ],
    imageSrc: '/assets/aistudio/image_d24e758d.webp',
    imageAlt: 'Explorations cardiologiques et respiratoires',
    bookingMotive: 'Bilan Cardiologie & Vaisseaux'
  },
  {
    id: 'step-ophtalmologie',
    keyword: 'OPHTALMOLOGIE',
    counter: '04 / 10',
    poleKicker: 'PÔLE SANTÉ VISUELLE & CHIRURGIE OCULAIRE',
    title: 'Santé Visuelle, Réfraction & Rétine',
    description: 'Plateau technique d\'imagerie rétinienne 3D, bilans visuels de réfraction, dépistage du glaucome et microchirurgie ophtalmique de haute précision.',
    specialties: [
      { name: 'Ophtalmologie', badge: 'Santé visuelle' },
      { name: 'Bilan Réfractif', badge: 'Correction visuelle' },
      { name: 'Imagerie Rétinienne 3D', badge: 'Scan maculaire' },
      { name: 'Chirurgie Réfractive', badge: 'Laser' }
    ],
    imageSrc: '/assets/aistudio/image_cddeba72.webp',
    imageAlt: 'Plateau ophtalmologique et santé oculaire',
    bookingMotive: 'Consultation Ophtalmologie & Réfraction'
  },
  {
    id: 'step-dermatologie',
    keyword: 'DERMATOLOGIE',
    counter: '05 / 10',
    poleKicker: 'PÔLE DERMATOLOGIE MÉDICALE & CHIRURGICALE',
    title: 'Dermatologie, Dépistage & Santé Cutanée',
    description: 'Dépistage précoce des mélanomes par dermatoscopie numérique, traitement des affections cutanées aiguës ou chroniques et chirurgie dermatologique ambulatoire.',
    specialties: [
      { name: 'Dermatologie Médicale', badge: 'Soins cutanés' },
      { name: 'Dermatoscopie Numérique', badge: 'Dépistage mélanome' },
      { name: 'Chirurgie Cutanée', badge: 'Gestes ambulatoires' },
      { name: 'Allergologie Cutanée', badge: 'Tests cutanés' }
    ],
    imageSrc: '/assets/aistudio/image_d24e758d.webp',
    imageAlt: 'Cabinet de dermatologie médicale et chirurgicale',
    bookingMotive: 'Consultation Dermatologie & Dépistage'
  },
  {
    id: 'step-pediatrie',
    keyword: 'PÉDIATRIE',
    counter: '06 / 10',
    poleKicker: 'PÔLE SANTÉ DE L\'ENFANT & DU NOURRISSON',
    title: 'Pédiatrie, Néonatologie & Développement',
    description: 'Suivi bienveillant de l\'enfant dès la naissance, calendrier vaccinal, suivi de la croissance psychomotrice et consultations pédiatriques sans attente.',
    specialties: [
      { name: 'Pédiatrie Générale', badge: 'Dès la naissance' },
      { name: 'Suivi du Nourrisson', badge: 'Croissance' },
      { name: 'Calendrier Vaccinal', badge: 'Prévention' },
      { name: 'Urgences Pédiatriques', badge: 'Accueil rapide' }
    ],
    imageSrc: '/assets/aistudio/image_2b30b815.webp',
    imageAlt: 'Soins pédiatriques et suivi de l\'enfant',
    bookingMotive: 'Consultation Pédiatrie & Nourrisson'
  },
  {
    id: 'step-orthopedie',
    keyword: 'ORTHOPÉDIE',
    counter: '07 / 10',
    poleKicker: 'PÔLE APPAREIL LOCOMOTEUR & TRAUMATOLOGIE',
    title: 'Orthopédie, Traumatologie & Articulations',
    description: 'Diagnostic et traitement des pathologies articulaires, ligamentaires et osseuses, chirurgie réparatrice et accompagnement en médecine du sport.',
    specialties: [
      { name: 'Chirurgie Orthopédique', badge: 'Articulations' },
      { name: 'Traumatologie du Sport', badge: 'Ligaments & Muscules' },
      { name: 'Chirurgie du Genou & Hanche', badge: 'Prothèses mini-invasives' },
      { name: 'Pathologies Rachidiennes', badge: 'Colonne vertébrale' }
    ],
    imageSrc: '/assets/aistudio/image_e41f658e.webp',
    imageAlt: 'Chirurgie orthopédique et traumatologie',
    bookingMotive: 'Consultation Chirurgie Orthopédique'
  },
  {
    id: 'step-neurologie',
    keyword: 'NEUROLOGIE',
    counter: '08 / 10',
    poleKicker: 'PÔLE SYSTÈME NERVEUX & EXPLORATIONS',
    title: 'Neurologie Clinique & Explorations Cérébrales',
    description: 'Explorations neurologiques approfondies, bilans de mémoire, prise en charge des migraines et céphalées chroniques et explorations neurophysiologiques.',
    specialties: [
      { name: 'Neurologie Clinique', badge: 'Système nerveux' },
      { name: 'Électro-encéphalogramme', badge: 'EEG' },
      { name: 'Bilans Cognitifs', badge: 'Mémoire & Attention' },
      { name: 'Explorations Nerveuses', badge: 'EMG' }
    ],
    imageSrc: '/assets/aistudio/image_d24e758d.webp',
    imageAlt: 'Plateau neurologique et explorations fonctionnelles',
    bookingMotive: 'Consultation Neurologie Clinique'
  },
  {
    id: 'step-gynecologie',
    keyword: 'GYNÉCOLOGIE',
    counter: '09 / 10',
    poleKicker: 'PÔLE SANTÉ DE LA FEMME & MATERNITÉ',
    title: 'Gynécologie Médicale, Obstétrique & Échographie',
    description: 'Suivi gynécologique préventif, échographie obstétricale haute définition, accompagnement à la fertilité et suivi coordonné de la santé des femmes.',
    specialties: [
      { name: 'Gynécologie Médicale', badge: 'Suivi annuel' },
      { name: 'Échographie 3D/4D', badge: 'Obstétrique' },
      { name: 'Santé Féminine', badge: 'Prévention' },
      { name: 'Chirurgie Gynécologique', badge: 'Ambulatoire' }
    ],
    imageSrc: '/assets/aistudio/image_cddeba72.webp',
    imageAlt: 'Pôle gynécologique et santé de la femme',
    bookingMotive: 'Consultation Gynécologie & Obstétrique'
  },
  {
    id: 'step-pneumologie',
    keyword: 'PNEUMOLOGIE',
    counter: '10 / 10',
    poleKicker: 'PÔLE RESPIRATOIRE & SOMMEIL',
    title: 'Pneumologie, Allergologie & Sommeil',
    description: 'Explorations fonctionnelles respiratoires (EFR), polygraphie du sommeil pour apnées, prise en charge de l\'asthme et des allergies respiratoires.',
    specialties: [
      { name: 'Pneumologie', badge: 'Voies aériennes' },
      { name: 'Explorations EFR', badge: 'Capacité pulmonaire' },
      { name: 'Diagnostic Sommeil', badge: 'Apnée du sommeil' },
      { name: 'Allergologie Respiratoire', badge: 'Dépistage' }
    ],
    imageSrc: '/assets/aistudio/image_2b30b815.webp',
    imageAlt: 'Pneumologie et explorations respiratoires',
    bookingMotive: 'Consultation Pneumologie & Sommeil'
  }
];

export const ImplantologyExplorer: React.FC<PinnedScrollSectionProps> = ({
  onOpenBooking,
  onOpenQuiz,
  onFindDoctor
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const innerScaleRef = useRef<HTMLDivElement>(null);
  const wordButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Track active index in ref to avoid react state re-renders on scroll
  const activeIndexRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Directly update DOM styles and accessibility attributes at 60 FPS
  const updateDOMForIndex = useCallback((newIndex: number) => {
    if (newIndex === activeIndexRef.current && panelsRef.current[newIndex]?.style.opacity === '1') {
      return;
    }
    activeIndexRef.current = newIndex;

    // Update navigation words
    wordButtonsRef.current.forEach((btn, idx) => {
      if (!btn) return;
      const isActive = idx === newIndex;
      if (isActive) {
        btn.classList.add('text-black', 'is-active');
        btn.classList.remove('text-[#dbdbdb]');
        btn.setAttribute('aria-current', 'step');
      } else {
        btn.classList.remove('text-black', 'is-active');
        btn.classList.add('text-[#dbdbdb]');
        btn.removeAttribute('aria-current');
      }
    });

    // Update panels
    panelsRef.current.forEach((panel, idx) => {
      if (!panel) return;
      const isActive = idx === newIndex;
      if (isActive) {
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0px)';
        panel.style.pointerEvents = 'auto';
        panel.setAttribute('aria-hidden', 'false');
      } else {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(16px)';
        panel.style.pointerEvents = 'none';
        panel.setAttribute('aria-hidden', 'true');
      }
    });
  }, []);

  // Scroll computation with requestAnimationFrame
  const onScroll = useCallback(() => {
    if (rafIdRef.current !== null) return;

    rafIdRef.current = window.requestAnimationFrame(() => {
      rafIdRef.current = null;
      const track = trackRef.current;
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      const scrollY = window.scrollY;
      const trackTop = trackRect.top + scrollY;
      const trackHeight = track.offsetHeight;
      const windowHeight = window.innerHeight;

      // Distance réservée à la transition effet carte à la fin de la section (1 pleine hauteur d'écran)
      const transitionDistance = windowHeight;
      const stepsScrollDistance = Math.max(1, trackHeight - windowHeight - transitionDistance);
      const scrollRelativeToTrack = scrollY - trackTop;
      const nbEtapes = STEPS.length;

      if (scrollRelativeToTrack <= 0) {
        updateDOMForIndex(0);
        if (innerScaleRef.current) {
          innerScaleRef.current.style.transform = 'scale(1)';
        }
      } else if (scrollRelativeToTrack < stepsScrollDistance) {
        // Défilement régulier à travers les 10 spécialités
        const progression = scrollRelativeToTrack / stepsScrollDistance;
        const computedIndex = Math.min(nbEtapes - 1, Math.floor(progression * nbEtapes));
        updateDOMForIndex(computedIndex);
        if (innerScaleRef.current) {
          innerScaleRef.current.style.transform = 'scale(1)';
        }
      } else {
        // ZONE DE TRANSITION : Dernière étape reste active, la section se réduit légèrement de scale 1 à 0.92
        // Elle reste 100% visible et opaque pendant que la section suivante glisse par-dessus comme une carte
        updateDOMForIndex(nbEtapes - 1);
        const transitionProgress = Math.min(1, Math.max(0, (scrollRelativeToTrack - stepsScrollDistance) / transitionDistance));
        const currentScale = 1 - 0.08 * transitionProgress; // 1 -> 0.92
        if (innerScaleRef.current) {
          innerScaleRef.current.style.transform = `scale(${currentScale.toFixed(4)})`;
        }
      }
    });
  }, [updateDOMForIndex]);

  // Click on word triggers smooth scroll to the exact middle of that step
  const handleWordClick = (stepIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const scrollY = window.scrollY;
    const trackTop = trackRect.top + scrollY;
    const trackHeight = track.offsetHeight;
    const windowHeight = window.innerHeight;
    const transitionDistance = windowHeight;
    const stepsScrollDistance = Math.max(1, trackHeight - windowHeight - transitionDistance);

    const nbEtapes = STEPS.length;
    // Target the middle of the step segment
    const targetProgress = (stepIndex + 0.5) / nbEtapes;
    const targetScrollY = trackTop + targetProgress * stepsScrollDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Initial paint
    updateDOMForIndex(0);

    // Passive scroll listener for 60 FPS
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // ResizeObserver for geometry changes
    let resizeObserver: ResizeObserver | null = null;
    if (trackRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        onScroll();
      });
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      resizeObserver?.disconnect();
    };
  }, [onScroll, updateDOMForIndex]);

  return (
    // 1. Structure & Hauteur de défilement : Section parente avec piste longue + 100vh pour la transition effet carte
    <section
      id="technologies"
      ref={trackRef}
      className="relative bg-[#FAFAFA] border-t border-slate-200/80 z-10"
      style={{
        // 100svh pour la 1ère vue + 9 * 75svh pour les étapes + 100vh pour la transition effet carte vers la section suivante
        height: 'calc(100svh + 9 * 75svh + 100vh)'
      }}
    >
      {/* Conteneur enfant sticky : position sticky; top 0; height 100svh; overflow hidden */}
      <div
        ref={stickyContainerRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center z-10"
      >
        <div
          ref={innerScaleRef}
          style={{ transformOrigin: 'top center', willChange: 'transform' }}
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 h-full flex items-center transition-transform duration-75"
        >
          
          {/* 2. Disposition à 2 colonnes : Desktop (>= 900px) 1fr 1fr; Mobile (< 900px) colonne unique */}
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 lg:gap-14 w-full h-full items-center">
            
            {/* 3. Colonne Gauche (Mots-clés de navigation géants des 10 spécialités) */}
            <div className="flex flex-col justify-center space-y-2 sm:space-y-3 select-none">
              
              {/* Kicker en majuscules */}
              <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8C765C] uppercase mb-0.5 sm:mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5A823]" />
                <span>10 GRANDES SPÉCIALITÉS RÉUNIES</span>
              </div>

              {/* Vertical list of clickable giant words for all 10 specialties */}
              <nav 
                aria-label="Navigation des 10 spécialités médicales" 
                className="flex flex-col items-start space-y-0.5 sm:space-y-1 max-h-[68vh] overflow-y-auto pr-2 scrollbar-none"
              >
                {STEPS.map((step, idx) => (
                  <button
                    key={step.id}
                    ref={(el) => { wordButtonsRef.current[idx] = el; }}
                    onClick={() => handleWordClick(idx)}
                    type="button"
                    className={`font-display font-extrabold uppercase tracking-tight text-[22px] sm:text-[28px] min-[900px]:text-[34px] lg:text-[40px] xl:text-[46px] leading-[1.04] transition-colors duration-400 ease-out cursor-pointer text-left motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg ${
                      idx === 0 ? 'text-black is-active' : 'text-[#dbdbdb]'
                    }`}
                  >
                    {step.keyword}
                  </button>
                ))}
              </nav>

              {/* Bottom hint and quick doctor directory CTA */}
              <div className="pt-2 sm:pt-3 space-y-2">
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <span>Défilez ou cliquez sur une spécialité pour l'explorer</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C765C]" />
                </div>

                {onFindDoctor && (
                  <button
                    onClick={onFindDoctor}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2 rounded-full shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8C765C]" />
                    <span>Consulter l'annuaire des 16 spécialités</span>
                  </button>
                )}
              </div>

            </div>

            {/* 4. Colonne Droite (Panneaux superposés des spécialités en absolute inset-0) */}
            <div className="relative w-full h-[54vh] sm:h-[62vh] min-[900px]:h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950">
              
              {STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  ref={(el) => { panelsRef.current[idx] = el; }}
                  aria-hidden={idx !== 0}
                  className="absolute inset-0 flex flex-col justify-between transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    transform: idx === 0 ? 'translateY(0px)' : 'translateY(16px)',
                    pointerEvents: idx === 0 ? 'auto' : 'none'
                  }}
                >
                  {/* Image container filling space */}
                  <div className="relative flex-1 w-full min-h-0 overflow-hidden bg-slate-900">
                    <img
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center filter contrast-[1.02]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient scrim for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />

                    {/* Top right quick booking badge */}
                    <button
                      onClick={() => onOpenBooking(step.bookingMotive)}
                      className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold hover:bg-white shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#8C765C]" />
                      <span>Prendre rendez-vous</span>
                    </button>
                  </div>

                  {/* Bottom meta block: Counter + Kicker + H2 Title (24px) + Description + Specialties chips */}
                  <div className="bg-slate-950 text-white p-5 sm:p-7 shrink-0 border-t border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#E5A823] uppercase">
                        {step.poleKicker}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                        {step.counter}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-[24px] font-bold font-display leading-snug text-white">
                      {step.title}
                    </h2>

                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* Specialty tags with direct booking triggers */}
                    <div className="pt-1.5 flex flex-wrap gap-1.5 sm:gap-2">
                      {step.specialties.map((spec) => (
                        <button
                          key={spec.name}
                          type="button"
                          onClick={() => onOpenBooking(`Consultation ${spec.name}`)}
                          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[11px] sm:text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                          title={`Prendre rendez-vous en ${spec.name}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823]" />
                          <span>{spec.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
