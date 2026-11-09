import React from 'react';
import { ShieldCheck, Scan, Cpu, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechAndSafety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8C765C]" />,
      title: "Bloc Chirurgical Stérile ISO 7",
      desc: "Environnement opératoire à pression positive et filtration d'air particulaire HEPA, garantissant un risque infectieux proche de zéro pour les greffes et implants."
    },
    {
      icon: <Scan className="w-6 h-6 text-[#8C765C]" />,
      title: "Scanner 3D Cone Beam Intégré",
      desc: "Tomographie volumique numérique haute définition à très faible dose de radiation. Vos bilans osseux sont réalisés immédiatement sur place sans vous déplacer."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#8C765C]" />,
      title: "Empreintes Optiques 3D Trios",
      desc: "Caméra intra-orale laser pour un confort total : finie la pâte dentaire désagréable. Modélisation numérique instantanée de vos dents avec une précision au micromètre."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#8C765C]" />,
      title: "Sédation Consciente Indolore",
      desc: "Prise en charge de l'anxiété via sédation vigile au MEOPA ou monitoring anesthésique continu. Réveillez-vous détendu, sans aucun souvenir désagréable."
    }
  ];

  return (
    <section id="clinique" className="py-20 lg:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span>Sécurité & Rigueur</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8C765C]">Normes Chirurgicales Hospitalières</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            Un plateau technique d'excellence médicale à Abidjan (Cocody Riviera Palmeraie)
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Chaque intervention est encadrée par des protocoles rigoureux de traçabilité et les équipements de dernière génération.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F4EE] border border-[#C5B29D]/40 flex items-center justify-center mb-6 text-[#8C765C]">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8C765C]" />
                <span>Norme Médicale CE & ISO</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sterilization and Traceability commitment */}
        <div className="mt-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold font-display text-white">
              Passeport Implantaire & Traçabilité à Vie
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Chaque implant Straumann® Roxolid® posé est assorti d'un numéro de lot unique certifié et d'une garantie mondiale valable dans plus de 70 pays.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="text-sm font-bold text-[#D4C3B3]">Certifié Straumann®</div>
              <div className="text-xs text-slate-400">Suisse - Bâle</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#C5B29D] text-stone-950 font-bold flex items-center justify-center shadow-md">
              ✓
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
