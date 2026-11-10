import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, setIsAiConciergeOpen, setUserRole } = useSalon();

  return (
    <footer className="bg-[#3B2A28] text-[#FFF9F4] border-t border-[#C6A667]/30 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-2">
              <img 
                src="/branding/glamway-official-logo.png" 
                alt="The Glamway Beauty Salon — FOR WOMEN" 
                className="h-20 w-auto object-contain drop-shadow-md"
              />
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
                FOR WOMEN · NORTH CAROLINA
              </div>
            </div>
            <p className="text-xs text-[#FFF9F4]/80 font-light leading-relaxed max-w-sm">
              The premier luxury women's beauty and wellness network in North Carolina. Combining refined artistry, bespoke aesthetics, and private suite hospitality.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C6A667]">
              <Sparkles className="w-4 h-4" />
              <span>USD ($) Currency · Eastern Time (America/New_York)</span>
            </div>
          </div>

          {/* Destination Sanctuaries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              North Carolina Branches
            </div>
            <ul className="space-y-3 text-xs text-[#FFF9F4]/85">
              <li className="space-y-0.5">
                <div className="font-semibold text-white">Branch 1 — The Glamway Flagship</div>
                <div className="text-[#A98F86]">Official Location Details Pending · NC</div>
              </li>
              <li className="space-y-0.5">
                <div className="font-semibold text-white">Branch 2 — The Glamway Atelier</div>
                <div className="text-[#A98F86]">Official Location Details Pending · NC</div>
              </li>
            </ul>
          </div>

          {/* Quick Curations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Curations
            </div>
            <ul className="space-y-2 text-xs text-[#FFF9F4]/80">
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
            <ul className="space-y-2 text-xs text-[#FFF9F4]/80">
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
                  Corporate Head Office &amp; AI Command
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
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>The Glamway AI Beauty Concierge</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal, Privacy & Compliance Bar */}
        <div className="pt-8 border-t border-[#C6A667]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A98F86]">
          <div>
            &copy; 2026 The Glamway Beauty Salon LLC. All rights reserved. Registered in North Carolina. Licensed by the North Carolina Board of Cosmetic Art Sciences.
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
