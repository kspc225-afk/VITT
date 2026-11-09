import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithRecommendation: (rec: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onBookWithRecommendation
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    teethState: '',
    primaryGoal: '',
    hasImaging: ''
  });

  if (!isOpen) return null;

  const questions = [
    {
      title: "Quelle est votre situation dentaire actuelle ?",
      subtitle: "Sélectionnez la description la plus proche de votre cas.",
      field: "teethState" as const,
      options: [
        { label: "Édentement total (aucune dent sur le haut ou le bas)", tag: "Édentement complet" },
        { label: "Plusieurs dents déchaussées, mobiles ou très douloureuses", tag: "Parodontite / Dégradation" },
        { label: "Une ou deux dents cassées ou manquantes isolées", tag: "Édentement unitaire" },
        { label: "Je porte un appareil amovible (dentier) mais il bouge", tag: "Inconfort prothétique" }
      ]
    },
    {
      title: "Quel est votre objectif prioritaire ?",
      subtitle: "Cela nous permet d'orienter le protocole chirurgical.",
      field: "primaryGoal" as const,
      options: [
        { label: "Retrouver des dents fixes et définitives en 24h", tag: "Fixation immédiate" },
        { label: "Pouvoir remanger normalement sans douleur ni restrictions", tag: "Fonction masticatoire" },
        { label: "Éviter les greffes osseuses longues et invasives", tag: "Solution All-on-4" },
        { label: "Rajeunir et harmoniser l'esthétique de mon sourire", tag: "Excellence esthétique" }
      ]
    },
    {
      title: "Avez-vous une radiographie panoramique ou scanner récent ?",
      subtitle: "Un examen 3D est de toute façon réalisé sur place au cabinet.",
      field: "hasImaging" as const,
      options: [
        { label: "Oui, un scanner 3D ou panoramique de moins de 6 mois", tag: "Examen disponible" },
        { label: "Oui, mais il date de plus d'un an", tag: "À actualiser" },
        { label: "Non, je souhaite réaliser le bilan 3D lors de la consultation", tag: "Bilan complet sur place" }
      ]
    }
  ];

  const handleSelectOption = (field: 'teethState' | 'primaryGoal' | 'hasImaging', value: string) => {
    setAnswers({ ...answers, [field]: value });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Results step
    }
  };

  const isAllOn4Candidate = answers.teethState.includes("Édentement total") || 
                           answers.teethState.includes("appareil amovible") || 
                           answers.teethState.includes("déchaussées");

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4C3B3] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulateur d'Orientation Clinique</span>
            </div>
            <h3 className="text-xl font-bold font-display">
              Diagnostic d'Éligibilité Spécialisée
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress indicator */}
        {currentStep < questions.length && (
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-[#C5B29D] h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {currentStep < questions.length ? (
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Question {currentStep + 1} sur {questions.length}
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  {questions[currentStep].title}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              <div className="space-y-2.5">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(questions[currentStep].field, opt.label)}
                    className="w-full p-4 text-left rounded-2xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs text-slate-500 hover:text-slate-900 font-medium cursor-pointer"
                >
                  ← Revenir à la question précédente
                </button>
              )}
            </div>
          ) : (
            /* RESULTS VIEW */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F7F4EE] border-2 border-[#C5B29D] flex items-center justify-center mx-auto text-[#8C765C]">
                <Award className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C765C]">
                  Résultat de l'analyse clinique
                </span>
                <h4 className="text-2xl font-extrabold text-slate-900 font-display">
                  {isAllOn4Candidate ? "Éligibilité Réhabilitation Confirmée à 98%" : "Éligibilité Implantation Guidée 3D"}
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed pt-1">
                  {isAllOn4Candidate
                    ? "D'après vos réponses, le protocole de réhabilitation complète à la Clinique Vitalia est la solution recommandée pour vous apporter des dents fixes en 24h avec planification assistée par ordinateur."
                    : "Votre situation correspond parfaitement à une pose d'implant(s) de précision unitaire avec chirurgie guidée 3D sans douleur."}
                </p>
              </div>

              {/* Recommended perks */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 text-left text-xs space-y-2 border border-[#E8E2D7]">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C765C] shrink-0" />
                  <span>Protocole fixe le jour même disponible à la Clinique Vitalia</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C765C] shrink-0" />
                  <span>Examen Tomographique Cone Beam 3D sur place</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C765C] shrink-0" />
                  <span>Devis gratuit sans engagement remis lors du rendez-vous</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onBookWithRecommendation(
                      isAllOn4Candidate ? "Bilan Réhabilitation Complète & Imagerie 3D" : "Bilan Implantaire 3D & Scanner"
                    );
                  }}
                  className="w-full py-3.5 px-5 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-full shadow-md cursor-pointer"
                >
                  Réserver ma consultation de bilan 3D +
                </button>

                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-900 font-medium cursor-pointer"
                >
                  Fermer le simulateur
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
