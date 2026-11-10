import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, setUserRole } = useSalon();

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
                alt="The Glamway Beauty Salon" 
                className="h-16 w-auto object-contain drop-shadow-md"
              />
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
                CHARLOTTE, NORTH CAROLINA
              </div>
            </div>
            <p className="text-xs text-[#FFF9F4]/80 font-light leading-relaxed max-w-sm">
              Founded by licensed esthetician Summer Davis in Charlotte, NC. Offering specialized eyelash extensions, hair styling, structured nails, esthetician facials, lash supplies, and professional beauty training.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C6A667]">
              <Sparkles className="w-4 h-4" />
              <span>USD ($) Currency · Eastern Time (America/New_York)</span>
            </div>
          </div>

          {/* Charlotte Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Charlotte Locations
            </div>
            <ul className="space-y-3 text-xs text-[#FFF9F4]/85">
              <li className="space-y-1">
                <div className="font-semibold text-white">The Glamway — Uptown</div>
                <div className="text-[#A98F86] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A667] shrink-0" />
                  <span>428 E. Fourth St., Charlotte, NC 28202</span>
                </div>
              </li>
              <li className="space-y-1">
                <div className="font-semibold text-white">The Glamway — Graham</div>
                <div className="text-[#A98F86] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A667] shrink-0" />
                  <span>2506 Lucena St., Charlotte, NC 28206</span>
                </div>
              </li>
              <li className="pt-1 text-[#A98F86] space-y-1 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C6A667] shrink-0" />
                  <span>(704) 756-2253</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C6A667] shrink-0" />
                  <span>theglamwayllc@icloud.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#FFF9F4]/80">
              <li>
                <button onClick={() => setCurrentView('home')} className="hover:text-[#C6A667] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-[#C6A667] transition-colors">
                  About Us &amp; Founder
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-[#C6A667] transition-colors">
                  Services (4 Categories)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('branches')} className="hover:text-[#C6A667] transition-colors">
                  Charlotte Locations
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('boutique')} className="hover:text-[#C6A667] transition-colors">
                  Shop Lash Supplies
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('training')} className="hover:text-[#C6A667] transition-colors">
                  Beauty Training
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('contact')} className="hover:text-[#C6A667] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Private Management & Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Client &amp; Staff Access
            </div>
            <ul className="space-y-2 text-xs text-[#FFF9F4]/80">
              <li>
                <button 
                  onClick={() => {
                    setUserRole('client');
                    setCurrentView('customer-portal');
                  }} 
                  className="hover:text-[#C6A667] transition-colors text-left"
                >
                  Client Appointment History
                </button>
              </li>
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
                  Corporate Administration
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal, Policy & Cancellation Notice Bar */}
        <div className="pt-8 border-t border-[#C6A667]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A98F86]">
          <div>
            &copy; 2026 The Glamway LLC. All rights reserved. Charlotte, North Carolina, USA.
          </div>
          <div className="flex items-center gap-6">
            <span>24-Hour Cancellation Policy</span>
            <span>Appointment Policy</span>
            <span>Privacy &amp; Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
