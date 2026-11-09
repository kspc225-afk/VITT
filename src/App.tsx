/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClinicalProblemsCarousel } from './components/ClinicalProblemsCarousel';
import { ImplantologyExplorer } from './components/ImplantologyExplorer';
import { AllOnFourSection } from './components/AllOnFourSection';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { ComfortAndFaqSection } from './components/ComfortAndFaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QuizModal } from './components/QuizModal';
import { ClinicalDetailModal } from './components/ClinicalDetailModal';
import { DoctorDirectoryModal } from './components/DoctorDirectoryModal';
import { ServiceItem } from './types/clinic';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDoctorDirOpen, setIsDoctorDirOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingMotive, setBookingMotive] = useState<string>("Bilan Implantaire 3D & Scanner");

  const handleOpenBooking = (motive?: string) => {
    if (motive) {
      setBookingMotive(motive);
    }
    setIsBookingOpen(true);
  };

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookWithRecommendation = (recommendedProtocol: string) => {
    setBookingMotive(recommendedProtocol);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 selection:bg-[#C5B29D]/40 selection:text-stone-950 font-sans">
      
      {/* 3-zone Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={handleOpenQuiz}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuiz={handleOpenQuiz}
          onFindDoctor={() => setIsDoctorDirOpen(true)}
        />

        {/* 2. Clinical Problems & Consultation Motives Carousel */}
        <ClinicalProblemsCarousel
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBooking("Consultation Chirurgicale Générale")}
        />

        {/* 3. Spécialités Médicales & Chirurgie de Pointe */}
        <ImplantologyExplorer
          onOpenBooking={(motive) => handleOpenBooking(motive || "Consultation Spécialisée")}
          onOpenQuiz={handleOpenQuiz}
          onFindDoctor={() => setIsDoctorDirOpen(true)}
        />

        {/* 4. Médecins Spécialistes d'Excellence */}
        <AllOnFourSection
          onOpenBooking={(motive) => handleOpenBooking(motive || "Consultation avec un Médecin Spécialiste")}
          onOpenQuiz={handleOpenQuiz}
          onFindDoctor={() => setIsDoctorDirOpen(true)}
        />

        {/* 5. Before & After Interactive Draggable Showcase */}
        <BeforeAfterShowcase
          onOpenBooking={() => handleOpenBooking("Bilan Esthétique du Sourire")}
        />

        {/* 6. Questions & FAQ / Comfort and Care */}
        <ComfortAndFaqSection
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. Call To Action (Exceptional Care) */}
        <CtaSection
          onOpenBooking={() => handleOpenBooking("Consultation Immédiate")}
          onFindDoctor={() => setIsDoctorDirOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={handleOpenQuiz}
        onFindDoctor={() => setIsDoctorDirOpen(true)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultMotive={bookingMotive}
      />

      {/* Interactive All-on-4 Eligibility Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onBookWithRecommendation={handleBookWithRecommendation}
      />

      {/* Detailed Clinical Protocol Modal */}
      <ClinicalDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(serviceTitle) => handleOpenBooking(`Protocole : ${serviceTitle}`)}
      />

      {/* Doctor Directory Modal */}
      <DoctorDirectoryModal
        isOpen={isDoctorDirOpen}
        onClose={() => setIsDoctorDirOpen(false)}
        onSelectDoctor={(name, role) => handleOpenBooking(`Consultation avec ${name} (${role})`)}
      />

    </div>
  );
}
