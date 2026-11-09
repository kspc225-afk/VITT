import React, { useState } from 'react';
import { X, Search, Star, Calendar, MapPin } from 'lucide-react';

interface DoctorDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctor: (doctorName: string, specialty: string) => void;
}

export const DoctorDirectoryModal: React.FC<DoctorDirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectDoctor
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Tous');

  if (!isOpen) return null;

  const doctors = [
    {
      id: 'doc-1',
      name: 'Pr. Jean-Luc Kouamé',
      role: 'Chirurgien Maxillo-Facial & Stomatologiste',
      specialty: 'Chirurgie Maxillo-Faciale & Dentaire',
      rating: 4.9,
      reviewsCount: 142,
      location: 'Clinique Vitalia - Riviera Palmeraie (Pavillon A)',
      nextSlot: 'Aujourd\'hui à 14h30',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=75&fm=webp'
    },
    {
      id: 'doc-2',
      name: 'Dr. Marie-Josée Konan',
      role: 'Chirurgienne Orthopédiste & Reconstruction',
      specialty: 'Chirurgie Maxillo-Faciale & Dentaire',
      rating: 5.0,
      reviewsCount: 198,
      location: 'Pôle Chirurgical Vitalia - Cocody',
      nextSlot: 'Demain à 10h00',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=75&fm=webp'
    },
    {
      id: 'doc-3',
      name: 'Dr. Aminata Touré',
      role: 'Médecin Coordinatrice & Endocrinologue',
      specialty: 'Médecine Générale & Interne',
      rating: 4.9,
      reviewsCount: 110,
      location: 'Centre Médical Vitalia - Palmeraie',
      nextSlot: 'Aujourd\'hui à 16h15',
      photo: 'https://images.unsplash.com/photo-1594824813626-d922bc3086eb?auto=format&fit=crop&w=200&q=75&fm=webp'
    },
    {
      id: 'doc-4',
      name: 'Dr. Koffi N\'Dri',
      role: 'Gastro-entérologue & Médecine du Sport',
      specialty: 'Orthopédie',
      rating: 4.8,
      reviewsCount: 88,
      location: 'Clinique Vitalia - Pavillon B',
      nextSlot: 'Jeudi à 09h30',
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=75&fm=webp'
    }
  ];

  const specialties = ['Tous', 'Chirurgie Maxillo-Faciale & Dentaire', 'Médecine Générale & Interne', 'Orthopédie'];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSpec = selectedSpecialty === 'Tous' || doc.specialty === selectedSpecialty;
    const matchesQuery = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpec && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* En-tête */}
        <div className="bg-slate-950 text-white p-6 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#D4C3B3] uppercase tracking-wider">
              Équipe Médicale Clinique Vitalia
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Trouver un Médecin ou Chirurgien Spécialiste
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

        {/* Barre de recherche et filtres */}
        <div className="p-6 border-b border-slate-100 bg-[#FAF7F5] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par nom de médecin, spécialité ou motif..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* Filtres par spécialité */}
          <div className="flex flex-wrap items-center gap-2">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedSpecialty === spec
                    ? 'bg-slate-950 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des praticiens */}
        <div className="p-6 max-h-[50vh] overflow-y-auto space-y-3.5">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="p-4 rounded-2xl border border-slate-200/90 hover:border-slate-300 bg-white hover:bg-slate-50/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 font-display">
                      {doc.name}
                    </h4>
                    <div className="flex items-center text-amber-500 text-xs font-bold gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 font-medium">
                    {doc.role}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {doc.location}
                    </span>
                    <span>·</span>
                    <span className="text-stone-700 font-semibold">
                      Prochain créneau : {doc.nextSlot}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onSelectDoctor(doc.name, doc.role);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-[#C5B29D] hover:text-stone-950 rounded-xl transition-all shrink-0 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Prendre rendez-vous</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
