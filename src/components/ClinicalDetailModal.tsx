import React from 'react';
import { X, Clock, ShieldCheck, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types/clinic';

interface ClinicalDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ClinicalDetailModal: React.FC<ClinicalDetailModalProps> = ({
  service,
  onClose,
  onBook
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Banner with gradient */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${service.imageFallbackGradient} text-white relative`}>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-md mb-2">
            {service.category}
          </span>
          <h3 className="text-2xl font-bold font-display drop-shadow-xs">
            {service.title}
          </h3>
          <p className="text-xs text-white/80 mt-1 font-medium">
            {service.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {service.description}
          </p>

          {/* Indications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Indications Cliniques :
            </h4>
            <div className="space-y-1.5">
              {service.indications.map((ind, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C765C] shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#F8F9FA] p-4 rounded-2xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 font-medium block text-[10px] uppercase">Durée :</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{service.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block text-[10px] uppercase">Anesthésie :</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{service.anesthesia}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block text-[10px] uppercase">Récupération :</span>
              <span className="font-bold text-stone-900 mt-0.5 block">{service.recovery}</span>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-900 font-medium cursor-pointer"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(service.title);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-full shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre rendez-vous pour ce soin +</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
