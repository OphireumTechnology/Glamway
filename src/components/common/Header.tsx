import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    openBookingModal, 
    setIsAiConciergeOpen, 
    cart, 
    setIsCartOpen 
  } = useSalon();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Services', view: 'services' as const },
    { label: 'Sanctuaries', view: 'branches' as const },
    { label: 'Boutique', view: 'boutique' as const },
    { label: 'Membership', view: 'membership' as const },
    { label: 'Virtual Studio', view: 'virtual-studio' as const },
  ];

  const handleNavClick = (view: any) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#C6A667]/25 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => handleNavClick('home')}
          className="font-serif text-2xl tracking-[0.25em] text-[#302725] uppercase whitespace-nowrap shrink-0 hover:text-[#C6A667] transition-colors text-left"
        >
          Aurélia
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#302725]/80">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.view)}
              className={`hover:text-[#C6A667] transition-colors pb-1 border-b-2 whitespace-nowrap shrink-0 ${
                currentView === link.view 
                  ? 'border-[#C6A667] text-[#C6A667] font-semibold' 
                  : 'border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setIsAiConciergeOpen(true)}
            className="flex items-center gap-1.5 text-[#C6A667] hover:text-[#A98748] transition-colors whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Concierge</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Shopping bag indicator */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
            className="relative p-2 text-[#302725] hover:text-[#C6A667] transition-colors"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartTotalItems > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#C6A667] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {cartTotalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 bg-[#302725] hover:bg-[#C6A667] text-[#FAF8F5] hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm whitespace-nowrap shrink-0"
          >
            Book an Appointment
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#302725]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C6A667]/20 bg-[#FAF7F2] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4 text-sm tracking-[0.15em] uppercase text-[#302725]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view)}
                className={`text-left py-2 border-b border-[#302725]/5 ${currentView === link.view ? 'text-[#C6A667] font-semibold' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsAiConciergeOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 text-[#C6A667] font-medium flex items-center gap-2 border-b border-[#302725]/5"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Beauty Concierge</span>
            </button>
            <button
              onClick={() => {
                handleNavClick('customer-portal');
              }}
              className="text-left py-2 text-[#9D8980]"
            >
              My Account & Appointments
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
