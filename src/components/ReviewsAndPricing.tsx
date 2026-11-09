import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronDown, ChevronUp, CreditCard, FileText, CheckCircle2 } from 'lucide-react';
import { PATIENT_REVIEWS, FAQ_LIST, CLINIC_INFO } from '../data/clinicData';

interface ReviewsAndPricingProps {
  onOpenBooking: () => void;
}

export const ReviewsAndPricing: React.FC<ReviewsAndPricingProps> = ({ onOpenBooking }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header with Verified Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span>Témoignages & Avis</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8C765C]">Patients Pris en Charge</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
              La confiance de nos patients est notre plus belle réussite
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Consultez les retours d'expérience authentiques sur les soins et interventions menés à la Clinique Vitalia (Abidjan, Cocody Riviera Palmeraie).
            </p>
          </div>

          {/* Google Review Score Badge */}
          <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center font-bold text-xl text-blue-600 font-display">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black text-slate-900 tabular-nums">4.9</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                248 avis Google vérifiés
              </div>
            </div>
          </div>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F8F9FA] p-7 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <div className="text-sm font-bold text-slate-900 font-display">
                  {rev.author}
                </div>
                <div className="text-xs text-slate-500 flex items-center justify-between mt-0.5">
                  <span>{rev.location}</span>
                  <span className="text-[#8C765C] font-semibold">{rev.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency & Mutuelles Section */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4C3B3]">
                Transparence & Accompagnement
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Devis clair, sans dépassement imprévu et prise en charge mutuelle
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Avant tout acte chirurgical, un devis conventionnel détaillé et codifié vous est systématiquement remis dès la première consultation. Notre secrétariat médical vous accompagne personnellement pour transmettre les demandes d'accord préalable à votre mutuelle santé.
              </p>

              {/* Guarantees pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4C3B3] shrink-0" />
                  <span>Devis personnalisé gratuit & sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4C3B3] shrink-0" />
                  <span>Facilités de règlement sans frais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4C3B3] shrink-0" />
                  <span>Prise en charge mutuelles et assurances</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4C3B3] shrink-0" />
                  <span>Traçabilité & matériel médical certifié</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5B29D] text-stone-950 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Première Consultation Bilan</div>
                  <div className="text-xs text-slate-300">Examen complet + Imagerie tomographique</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Comprend la consultation avec les spécialistes de la Clinique Vitalia, l'analyse 3D, le bilan personnalisé et l'établissement du devis chiffré.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Prendre rendez-vous pour mon bilan +
              </button>
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Questions fréquentes de nos patients
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Tout ce que vous devez savoir avant d'envisager une intervention implantaire.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all bg-[#F8F9FA]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#8C765C] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-700 shrink-0 border border-slate-200">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
