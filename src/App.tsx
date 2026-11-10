import React from 'react';
import { SalonProvider, useSalon } from './context/SalonContext';
import { Header } from './components/common/Header';
import { PlatformNavigation } from './components/common/PlatformNavigation';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { FeaturedServices } from './components/home/FeaturedServices';
import { BranchShowcase } from './components/home/BranchShowcase';
import { ExperienceProof } from './components/home/ExperienceProof';
import { ShopSection } from './components/boutique/ShopSection';
import { CartDrawer } from './components/boutique/CartDrawer';
import { MembershipSection } from './components/membership/MembershipSection';
import { VirtualBeautyStudio } from './components/virtual/VirtualBeautyStudio';
import { CustomerPortal } from './components/portals/CustomerPortal';
import { BranchConsole } from './components/portals/BranchConsole';
import { CorporateDashboard } from './components/portals/CorporateDashboard';
import { BookingModal } from './components/booking/BookingModal';
import { BeautyConciergeModal } from './components/ai/BeautyConciergeModal';
import { GallerySection } from './components/gallery/GallerySection';
import { AboutSection } from './components/about/AboutSection';
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
            <BranchShowcase />
            <ExperienceProof />
          </>
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

        {currentView === 'boutique' && (
          <div className="py-8">
            <ShopSection />
          </div>
        )}

        {currentView === 'membership' && (
          <div className="py-8">
            <MembershipSection />
          </div>
        )}

        {currentView === 'gallery' && (
          <GallerySection />
        )}

        {currentView === 'about' && (
          <AboutSection />
        )}

        {currentView === 'contact' && (
          <ContactSection />
        )}

        {currentView === 'virtual-studio' && (
          <div className="py-8">
            <VirtualBeautyStudio />
          </div>
        )}

        {currentView === 'customer-portal' && (
          <CustomerPortal />
        )}

        {currentView === 'branch-console' && (
          <BranchConsole />
        )}

        {currentView === 'corporate-dashboard' && (
          <CorporateDashboard />
        )}
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Global Interactive Modals & Drawers */}
      <BookingModal />
      <BeautyConciergeModal />
      <CartDrawer />

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
