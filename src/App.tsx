import React from 'react';
import { SalonProvider, useSalon } from './context/SalonContext';
import { Header } from './components/common/Header';
import { PlatformNavigation } from './components/common/PlatformNavigation';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { FeaturedServices } from './components/home/FeaturedServices';
import { BeautyEducationFeature } from './components/home/BeautyEducationFeature';
import { BranchShowcase } from './components/home/BranchShowcase';
import { ExperienceProof } from './components/home/ExperienceProof';
import { MembershipSection } from './components/membership/MembershipSection';
import { CustomerPortal } from './components/portals/CustomerPortal';
import { BranchConsole } from './components/portals/BranchConsole';
import { CorporateDashboard } from './components/portals/CorporateDashboard';
import { BookingModal } from './components/booking/BookingModal';
import { AboutSection } from './components/about/AboutSection';
import { BeautyTrainingSection } from './components/training/BeautyTrainingSection';
import { ContactSection } from './components/contact/ContactSection';
import { CheckCircle2 } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentView, toastMessage } = useSalon();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#302725]">
      
      {/* Platform & Role Switcher Bar */}
      <PlatformNavigation />

      {/* Top Bar Header */}
      <Header />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection />
            <FeaturedServices />
            <BeautyEducationFeature />
            <BranchShowcase />
            <ExperienceProof />
          </>
        )}

        {currentView === 'about' && (
          <AboutSection />
        )}

        {currentView === 'services' && (
          <div className="py-8">
            <FeaturedServices />
          </div>
        )}

        {currentView === 'branches' && (
          <div className="py-8">
            <BranchShowcase />
          </div>
        )}


        {currentView === 'training' && (
          <BeautyTrainingSection />
        )}

        {currentView === 'contact' && (
          <ContactSection />
        )}

        {currentView === 'membership' && (
          <div className="py-8">
            <MembershipSection />
          </div>
        )}

        {currentView === 'customer-portal' && (
          <CustomerPortal />
        )}

        {currentView === 'branch-console' && (
          <div className="mx-auto max-w-xl px-6 py-24 text-center" role="alert"><h1 className="font-serif text-3xl mb-4">Staff portal unavailable</h1><p>Secure staff authentication and server-side authorization are required before this portal can be enabled.</p></div>
        )}

        {currentView === 'corporate-dashboard' && (
          <div className="mx-auto max-w-xl px-6 py-24 text-center" role="alert"><h1 className="font-serif text-3xl mb-4">Corporate portal unavailable</h1><p>Secure corporate authentication and server-side authorization are required before this portal can be enabled.</p></div>
        )}
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Global Interactive Modals & Drawers */}
      <BookingModal />

      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#302725] text-white px-5 py-3 rounded-sm border border-[#C6A667] shadow-2xl flex items-center gap-3 text-xs animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#C6A667] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export default function App() {
  return (
    <SalonProvider>
      <MainLayout />
    </SalonProvider>
  );
}
