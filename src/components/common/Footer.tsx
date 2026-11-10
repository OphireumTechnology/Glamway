import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, setIsAiConciergeOpen, setUserRole } = useSalon();

  return (
    <footer className="bg-[#302725] text-[#FAF8F5] border-t border-[#C6A667]/30 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl tracking-[0.25em] text-[#C6A667] uppercase">
              Aurélia
            </span>
            <div className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/60">
              Haute Beauté &amp; Wellness Sanctuaries · South Carolina
            </div>
            <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed max-w-sm">
              A luxury women-focused beauty and wellness sanctuary network, combining French aesthetic innovation with gracious Southern hospitality across Charleston, Greenville, Columbia, Mount Pleasant, and Hilton Head Island.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C6A667]">
              <Sparkles className="w-4 h-4" />
              <span>USD ($) Currency · Eastern Time (America/New_York)</span>
            </div>
          </div>

          {/* Destination Sanctuaries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              South Carolina Sanctuaries
            </div>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>284 King Street, Charleston, SC 29401</li>
              <li>103 N Main Street, Suite 400, Greenville, SC 29601</li>
              <li>410 W Coleman Blvd, Mount Pleasant, SC 29464</li>
              <li>812 Gervais Street, The Vista, Columbia, SC 29201</li>
              <li>100 Lighthouse Road, Hilton Head Island, SC 29928</li>
            </ul>
          </div>

          {/* Quick Curations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Curations
            </div>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-[#C6A667] transition-colors">
                  Hair &amp; Balayage
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-[#C6A667] transition-colors">
                  Facial &amp; Hydra-Infusion
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-[#C6A667] transition-colors">
                  24K Gold Nail Couture
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('boutique')} className="hover:text-[#C6A667] transition-colors">
                  Boutique Formulations
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('membership')} className="hover:text-[#C6A667] transition-colors">
                  Privilege Membership
                </button>
              </li>
            </ul>
          </div>

          {/* Private Management & Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Enterprise Portals
            </div>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <button 
                  onClick={() => {
                    setUserRole('branch_manager');
                    setCurrentView('branch-console');
                  }} 
                  className="hover:text-[#C6A667] transition-colors text-left"
                >
                  Branch Operations &amp; Reception Console
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setUserRole('corporate_admin');
                    setCurrentView('corporate-dashboard');
                  }} 
                  className="hover:text-[#C6A667] transition-colors text-left"
                >
                  Corporate Head Office &amp; AI Intelligence
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setUserRole('client');
                    setCurrentView('customer-portal');
                  }} 
                  className="hover:text-[#C6A667] transition-colors text-left"
                >
                  Guest Account &amp; Reservation History
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsAiConciergeOpen(true)}
                  className="hover:text-[#C6A667] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#C6A667]" />
                  <span>Consult Madame Aurélia (AI)</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal, Privacy & Compliance Bar */}
        <div className="pt-8 border-t border-[#C6A667]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A48D84]">
          <div>
            &copy; 2026 Aurélia Haute Beauté USA Inc. All rights reserved. Registered in South Carolina. Licensed by the SC Department of Labor, Licensing and Regulation (LLR) Board of Cosmetology &amp; Esthetics.
          </div>
          <div className="flex items-center gap-6">
            <span>Women-Focused Sanctuary Policy</span>
            <span>U.S. Consumer Privacy &amp; Data Security</span>
            <span>Terms of Reservation &amp; Cancellation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
