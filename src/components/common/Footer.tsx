import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO } from '../../data/salonData';
import { Sparkles, MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, openBookingModal } = useSalon();

  return (
    <footer className="bg-[#3B2A28] text-[#FFF9F4] border-t border-[#C6A667]/30 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Four Clean Sections Grid: Company, Locations, Navigation, Appointments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Section 1: Company (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-3">
              <img 
                src={GLAMWAY_LOGO} 
                alt="The Glamway Beauty Salon" 
                className="h-24 sm:h-28 w-auto max-w-full object-contain"
              />
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
                Charlotte, North Carolina
              </div>
            </div>
            <p className="text-sm text-[#FFF9F4]/85 font-light leading-relaxed max-w-sm">
              Founded by licensed esthetician Summer Davis in Charlotte, NC. Offering specialized eyelash extensions, hair styling, structured nails, esthetician facials, waxing, and beauty education.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#C6A667]">
              <Sparkles className="w-4 h-4 text-[#C6A667] shrink-0" />
              <span>Luxury Beauty Salon &amp; Private Suites</span>
            </div>
          </div>

          {/* Section 2: Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-serif text-base text-[#C6A667] font-semibold tracking-wide">
              Charlotte Locations
            </div>
            <ul className="space-y-3.5 text-xs text-[#FFF9F4]/85">
              <li className="space-y-1">
                <div className="font-medium text-white text-sm">The Glamway — Uptown</div>
                <div className="text-[#D9B6A9] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A667] shrink-0" />
                  <span>428 E. Fourth St., Charlotte, NC 28202</span>
                </div>
              </li>
              <li className="space-y-1">
                <div className="font-medium text-white text-sm">The Glamway — Graham</div>
                <div className="text-[#D9B6A9] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A667] shrink-0" />
                  <span>2506 Lucena St., Charlotte, NC 28206</span>
                </div>
              </li>
              <li className="pt-2 text-[#D9B6A9] space-y-1.5 border-t border-white/10">
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

          {/* Section 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-serif text-base text-[#C6A667] font-semibold tracking-wide">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-[#FFF9F4]/80">
              <li>
                <button 
                  onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#C6A667] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#C6A667] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#C6A667] transition-colors font-medium text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentView('branches'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#C6A667] transition-colors"
                >
                  Locations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentView('training'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#C6A667] transition-colors"
                >
                  Beauty Training
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-[#C6A667] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Section 4: Appointments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-serif text-base text-[#C6A667] font-semibold tracking-wide">
              Appointments
            </div>
            <p className="text-xs text-[#FFF9F4]/85 leading-relaxed font-light">
              Browse our services and contact the salon for current appointment availability. Online reservation confirmation is temporarily unavailable.
            </p>
            <button
              onClick={() => openBookingModal()}
              className="w-full py-3 px-4 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-xs shadow-md border border-[#C6A667]/40 flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#C6A667]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-[#A98F86]">
              Appointments are not confirmed through this website until secure online booking is restored.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Verified Info Only */}
        <div className="pt-8 border-t border-[#C6A667]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A98F86]">
          <div>
            &copy; 2026 The Glamway LLC. All rights reserved. Charlotte, North Carolina.
          </div>
          <div className="text-right">
            Official Beauty Salon &amp; Academy Platform
          </div>
        </div>

      </div>
    </footer>
  );
};
