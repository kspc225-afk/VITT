import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, ArrowRight, Download } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMotive?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultMotive
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [motive, setMotive] = useState(defaultMotive || "Bilan Implantaire 3D & Scanner");
  const [selectedDate, setSelectedDate] = useState("Demain - 10:30");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [dossierNumber, setDossierNumber] = useState("");

  if (!isOpen) return null;

  const motivesList = [
    { id: "allon4", title: "Bilan All-on-4® / All-on-6® (Arcade complète en 24h)" },
    { id: "implant", title: "Bilan Implantaire 3D & Scanner Cone Beam" },
    { id: "recession", title: "Recouvrement de gencive & Greffe conjonctive" },
    { id: "sagesse", title: "Extraction chirurgicale / Dents de sagesse" },
    { id: "avis", title: "Deuxième avis chirurgical avant opération" }
  ];

  const availableSlots = [
    "Demain - 09:30",
    "Demain - 10:30",
    "Demain - 14:00",
    "Demain - 16:30",
    "Jeudi - 11:00",
    "Jeudi - 15:30",
    "Vendredi - 10:00",
    "Vendredi - 14:30"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = `VIT-${Math.floor(100000 + Math.random() * 900000)}`;
    setDossierNumber(refNum);
    setStep(4);
  };

  const handleDownloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Clinique Vitalia//CI\nBEGIN:VEVENT\nSUMMARY:Consultation Clinique Vitalia - ${motive}\nDESCRIPTION:Rendez-vous médical à la Clinique Vitalia. Adresse: Boulevard de la Riviera Palmeraie, Cocody, Abidjan. Tél: +225 27 22 49 50 00.\nLOCATION:Boulevard de la Riviera Palmeraie, Cocody, Abidjan\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'consultation-clinique-vitalia.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-slate-950 text-white p-6 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4C3B3]">
              Prise de Rendez-vous en Ligne
            </span>
            <h3 className="text-xl font-bold font-display">
              {CLINIC_INFO.name}
            </h3>
            <p className="text-xs text-slate-300">
              {CLINIC_INFO.address}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {step < 4 && (
          <div className="flex border-b border-slate-100 text-xs font-semibold text-slate-500 bg-slate-50">
            <div className={`flex-1 py-2.5 text-center ${step === 1 ? 'text-slate-900 border-b-2 border-[#C5B29D] bg-white font-bold' : ''}`}>
              1. Motif
            </div>
            <div className={`flex-1 py-2.5 text-center ${step === 2 ? 'text-slate-900 border-b-2 border-[#C5B29D] bg-white font-bold' : ''}`}>
              2. Horaire
            </div>
            <div className={`flex-1 py-2.5 text-center ${step === 3 ? 'text-slate-900 border-b-2 border-[#C5B29D] bg-white font-bold' : ''}`}>
              3. Coordonnées
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: MOTIF */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Quel est le motif de votre consultation ?
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Tous les premiers bilans comportent l'analyse tomographique 3D sur place.
                </p>
              </div>

              <div className="space-y-2.5">
                {motivesList.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMotive(m.title)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all border flex items-center justify-between cursor-pointer ${
                      motive === m.title
                        ? 'bg-[#F7F4EE] border-[#C5B29D] text-slate-950 font-bold ring-1 ring-[#C5B29D]'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{m.title}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      motive === m.title ? 'border-[#8C765C] bg-[#C5B29D]' : 'border-slate-300'
                    }`}>
                      {motive === m.title && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-full shadow-xs cursor-pointer"
                >
                  <span>Continuer vers les disponibilités</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CRENEAU */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Sélectionnez un créneau disponible
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Les consultations ont lieu à la Clinique Vitalia (Cocody Riviera Palmeraie, Abidjan).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedDate(slot)}
                    className={`p-3.5 rounded-xl text-xs font-semibold text-center transition-all border cursor-pointer ${
                      selectedDate === slot
                        ? 'bg-slate-950 text-white border-slate-900 shadow-md ring-1 ring-[#C5B29D]'
                        : 'bg-slate-50 hover:bg-[#F6F4F0] text-slate-800 border-slate-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  ← Retour au motif
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-full shadow-xs cursor-pointer"
                >
                  <span>Vos coordonnées</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: COORDONNEES FORM */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Vos informations pour la confirmation
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Un SMS de rappel et les consignes médicales vous seront transmis.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5B29D] text-slate-900 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Téléphone mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+225 07 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5B29D] text-slate-900 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email de confirmation *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean.dupont@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5B29D] text-slate-900 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Précision sur votre situation ou antécédents (Optionnel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Consultation spécialisée, bilan de santé, antécédents médicaux..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5B29D] text-slate-900 text-xs resize-none"
                  />
                </div>
              </div>

              {/* Security notice */}
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#8C765C] shrink-0" />
                <span>Données médicales strictement confidentielles protégées par le secret professionnel.</span>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  ← Modifier l'horaire
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-full shadow-md cursor-pointer"
                >
                  Confirmer mon rendez-vous
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && (
            <div className="text-center space-y-6 py-2">
              <div className="w-16 h-16 rounded-full bg-[#F7F4EE] border-2 border-[#C5B29D] flex items-center justify-center mx-auto text-[#8C765C]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-slate-900 font-display">
                  Votre rendez-vous est confirmé
                </h4>
                <p className="text-xs text-slate-500">
                  Dossier N° <strong className="text-slate-900 font-mono">{dossierNumber}</strong>
                </p>
              </div>

              {/* Summary ticket */}
              <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-slate-200 text-left text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Établissement :</span>
                  <span className="font-bold text-slate-900">{CLINIC_INFO.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Motif :</span>
                  <span className="font-bold text-slate-900">{motive}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Créneau :</span>
                  <span className="font-bold text-stone-900">{selectedDate}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200/80 pt-2">
                  <span className="text-slate-500">Lieu :</span>
                  <span className="font-medium text-slate-800">{CLINIC_INFO.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleDownloadIcs}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Ajouter au calendrier (.ics)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:flex-1 py-3 px-4 text-xs font-bold text-stone-950 bg-[#C5B29D] hover:bg-[#B8A48F] rounded-xl cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
