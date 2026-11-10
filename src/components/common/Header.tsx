import React, { useState, useRef, useEffect } from 'react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO } from '../../data/salonData';
import { ShoppingBag, User, Menu, X, Shield, Calendar, LogOut } from 'lucide-react';
import { StaffAccessModal } from './StaffAccessModal';

export const Header: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    openBookingModal, 
    cart, 
    setIsCartOpen,
    currentUser,
    userRole,
    setUserRole
  } = useSalon();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Recommended Public Navigation as specified in Section 3
  const navLinks = [
    { label: 'Home', view: 'home' as const },
    { label: 'Services', view: 'services' as const },
    { label: 'Locations', view: 'branches' as const },
    { label: 'Beauty Boutique', view: 'boutique' as const },
    { label: 'Membership', view: 'membership' as const },
    { label: 'Gallery', view: 'gallery' as const },
    { label: 'About', view: 'about' as const },
    { label: 'Contact', view: 'contact' as const }
  ];

  const handleNavClick = (view: any) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setAccountDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFF9F4]/95 backdrop-blur-md border-b border-[#C6A667]/25 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Left: Official Glamway Logo (~56-64px height) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center shrink-0 hover:opacity-95 transition-opacity text-left focus:outline-none"
            aria-label="The Glamway Beauty Salon - Home"
          >
            <img
              src={GLAMWAY_LOGO}
              alt="The Glamway Beauty Salon - FOR WOMEN"
              className="h-14 sm:h-16 w-auto object-contain max-w-[190px] sm:max-w-[230px]"
            />
          </button>

          {/* Center: Main Navigation (Clean single line without AI Concierge) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#3B2A28]/85">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view)}
                className={`hover:text-[#8E4B63] transition-colors py-1 border-b-2 whitespace-nowrap shrink-0 ${
                  currentView === link.view 
                    ? 'border-[#8E4B63] text-[#8E4B63] font-semibold' 
                    : 'border-transparent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Account Icon, Shopping Bag, and Book Appointment button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Account Icon with Clean Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                aria-label="Guest and staff account"
                className="p-2 text-[#3B2A28] hover:text-[#8E4B63] transition-colors rounded-full hover:bg-black/5"
              >
                <User className="w-5 h-5 stroke-[1.6]" />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-[#C6A667]/30 rounded-xs shadow-xl py-2 z-50 text-xs animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-[#3B2A28]/10">
                    <div className="font-semibold text-[#3B2A28] truncate">{currentUser.name}</div>
                    <div className="text-[10px] text-[#A98F86] uppercase tracking-wider">{currentUser.tier} Guest</div>
                  </div>

                  <button
                    onClick={() => handleNavClick('customer-portal')}
                    className="w-full text-left px-4 py-2.5 text-[#3B2A28] hover:bg-[#FFF9F4] hover:text-[#8E4B63] flex items-center gap-2 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-[#C6A667]" />
                    <span>My Account &amp; Reservations</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('membership')}
                    className="w-full text-left px-4 py-2.5 text-[#3B2A28] hover:bg-[#FFF9F4] hover:text-[#8E4B63] flex items-center gap-2 transition-colors"
                  >
                    <span className="text-[#C6A667] font-serif font-bold">★</span>
                    <span>VIP Privilege Rewards ({currentUser.loyaltyPoints} PTS)</span>
                  </button>

                  <div className="my-1 border-t border-[#3B2A28]/10" />

                  {/* Private Portal Management Entry (Clean & Protected) */}
                  <button
                    onClick={() => {
                      setAccountDropdownOpen(false);
                      setStaffModalOpen(true);
                    }}
                    className="w-full text-left px-4 py-2 text-[#A98F86] hover:bg-[#FFF9F4] hover:text-[#3B2A28] flex items-center gap-2 transition-colors text-[11px]"
                  >
                    <Shield className="w-3.5 h-3.5 text-[#C6A667]" />
                    <span>Staff &amp; Management Portal</span>
                  </button>

                  {userRole !== 'guest' && userRole !== 'client' && (
                    <button
                      onClick={() => {
                        setUserRole('client');
                        setCurrentView('home');
                        setAccountDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-1.5 text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors text-[11px]"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Exit Staff Mode</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Shopping Bag Indicator */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="relative p-2 text-[#3B2A28] hover:text-[#8E4B63] transition-colors"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartTotalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#8E4B63] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartTotalItems}
                </span>
              )}
            </button>

            {/* Primary CTA Button: Book Appointment in Mauve Plum */}
            <button
              onClick={() => openBookingModal()}
              className="hidden sm:flex items-center px-5 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm whitespace-nowrap shrink-0 border border-[#C6A667]/40 rounded-xs"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#3B2A28]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#C6A667]/25 bg-[#FFF9F4] px-6 py-6 space-y-4 animate-in fade-in duration-200">
            <div className="flex justify-center pb-2">
              <img
                src={GLAMWAY_LOGO}
                alt="The Glamway Beauty Salon"
                className="h-14 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col space-y-3 text-xs tracking-[0.18em] uppercase text-[#3B2A28]">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-left py-2 border-b border-[#3B2A28]/5 ${currentView === link.view ? 'text-[#8E4B63] font-bold' : ''}`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('customer-portal')}
                  className="text-left py-2 text-[#A98F86] flex items-center gap-2 border-b border-[#3B2A28]/5"
                >
                  <User className="w-4 h-4 text-[#C6A667]" />
                  <span>My Account &amp; Reservations</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="w-full py-3 bg-[#8E4B63] text-white font-bold text-center tracking-[0.2em] uppercase rounded-xs shadow-xs mt-2"
                >
                  Book Appointment
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setStaffModalOpen(true);
                  }}
                  className="text-left py-2 text-[10px] text-[#A98F86] flex items-center gap-1.5 opacity-80 pt-2"
                >
                  <Shield className="w-3 h-3 text-[#C6A667]" />
                  <span>Staff &amp; Executive Access</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Staff & Management Access Modal */}
      <StaffAccessModal
        isOpen={staffModalOpen}
        onClose={() => setStaffModalOpen(false)}
      />
    </>
  );
};
