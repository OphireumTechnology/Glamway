import React, { useState, useEffect } from 'react';
import { useSalon } from '../../context/SalonContext';
import { HERO_IMAGE } from '../../data/salonData';
import { GlamwayLogo } from '../common/GlamwayLogo';
import { Calendar, MapPin, ArrowRight, Sparkles, Eye, Scissors, Sparkle, Droplets } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBookingModal, setCurrentView } = useSalon();
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  const floatingBadges = [
    { label: 'Lashes', icon: Eye, desc: 'Classic, Hybrid & Volume Extensions' },
    { label: 'Hair', icon: Scissors, desc: 'Styling, Installations & Silk Press' },
    { label: 'Nails', icon: Sparkle, desc: 'Structured Gel & Apex Architecture' },
    { label: 'Facials', icon: Droplets, desc: 'Licensed Esthetician Skin Care' },
  ];

  // Subtle cyclic highlight pulse every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlightIndex(prev => (prev + 1) % floatingBadges.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [floatingBadges.length]);

  return (
    <section className="relative overflow-hidden bg-[#FFF9F4] border-b border-[#C6A667]/25">
      
      {/* Background Ambient Illumination & Shimmer Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#F5D6DE]/40 via-[#C6A667]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-16 left-12 w-[420px] h-[420px] bg-gradient-to-tr from-[#D9B6A9]/30 via-[#F5D6DE]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Golden Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/4 left-1/12 w-2 h-2 rounded-full bg-[#C6A667]/40 blur-xs animate-particle-1" />
        <span className="absolute top-2/3 left-1/6 w-2.5 h-2.5 rounded-full bg-[#D9B6A9]/50 blur-xs animate-particle-2" />
        <span className="absolute top-1/5 right-1/4 w-3 h-3 rounded-full bg-[#C6A667]/35 blur-xs animate-particle-3" />
        <span className="absolute bottom-1/4 right-1/12 w-2 h-2 rounded-full bg-[#F5D6DE]/60 blur-xs animate-particle-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Verified metadata kicker with champagne gold accents */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#C6A667]/35 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E4B63] font-bold">The Glamway</span>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#3B2A28]/80 font-medium">Charlotte, North Carolina</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2A28] leading-[1.1] tracking-tight text-balance">
                Where Beauty Meets Elegance.
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#C6A667] via-[#8E4B63] to-transparent rounded-full" />
            </div>

            {/* Supporting description using verified business details */}
            <p className="text-base sm:text-lg text-[#3B2A28]/85 font-light leading-relaxed max-w-xl font-sans">
              Founded by Summer Davis in Charlotte, North Carolina, The Glamway is your premier destination for luxury beauty services and professional beauty education.
            </p>

            {/* Primary Actions with Mauve Plum & Gold */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => openBookingModal()}
                className="px-7 py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 shadow-sm flex items-center justify-center gap-2 rounded-xs border border-[#C6A667]/40 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#C6A667]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => setCurrentView('services')}
                className="px-7 py-3.5 bg-white border border-[#C6A667]/50 text-[#3B2A28] hover:border-[#8E4B63] hover:text-[#8E4B63] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 flex items-center justify-center gap-2 rounded-xs shadow-xs active:scale-[0.98]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A667]" />
              </button>

              <button
                onClick={() => setCurrentView('branches')}
                className="px-3 py-3.5 text-[#3B2A28]/80 hover:text-[#8E4B63] text-xs uppercase tracking-[0.14em] font-medium transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C6A667]" />
                <span>Locations</span>
              </button>
            </div>

            {/* Quick Interactive Service Pill Preview */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#A98F86] font-semibold mb-3">
                Verified Beauty Specializations:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
                {floatingBadges.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeHighlightIndex === idx;
                  return (
                    <div
                      key={item.label}
                      className={`p-2.5 rounded-xs border transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? 'bg-white border-[#8E4B63] shadow-sm ring-1 ring-[#8E4B63]/30'
                          : 'bg-white/60 border-[#C6A667]/25'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-[#8E4B63] text-white' : 'bg-[#FFF9F4] text-[#C6A667]'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-[#3B2A28] tracking-wider uppercase">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#A98F86]">
              <span className="font-semibold text-[#3B2A28]">Charlotte, North Carolina</span>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span>Lashes · Hair · Nails · Facials</span>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span>24-Hour Notice Policy</span>
            </div>

          </div>

          {/* Right Column: Advanced Beauty Technology Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-3 border border-[#C6A667]/35 rounded-t-[105px] rounded-b-lg pointer-events-none z-10" />

              {/* Arched image container showcasing unobstructed luxury interior */}
              <div className="relative rounded-t-[96px] rounded-b-lg overflow-hidden shadow-2xl bg-[#D9B6A9]/20 aspect-[4/5] max-h-[580px] w-full z-10 border border-[#C6A667]/30">
                <img
                  src={HERO_IMAGE}
                  alt="The Glamway Beauty Salon Interior in Charlotte, NC"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle bottom gradient scrim for gentle tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/40 via-transparent to-transparent pointer-events-none" />

                {/* Quiet caption bar at the bottom */}
                <div className="absolute bottom-4 left-4 right-4 py-2.5 px-4 bg-[#FFF9F4]/95 backdrop-blur-sm border border-[#C6A667]/40 rounded-xs shadow-sm flex items-center justify-between text-xs text-[#3B2A28]">
                  <span className="font-serif font-medium">The Glamway · Charlotte, NC</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E4B63] font-semibold">Uptown &amp; Graham</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4-Column Proof & Business Offerings Strip */}
      <div className="bg-[#FFF9F4] border-t border-[#C6A667]/25 py-6 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C6A667]/25">
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#3B2A28] font-semibold">Charlotte, NC</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Uptown &amp; Graham Locations</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#8E4B63] font-semibold">4 Services</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Lashes, Hair, Nails, Facials</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#3B2A28] font-semibold">Beauty Supply</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Lash Glues, Trays &amp; Wholesale</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#3B2A28] font-semibold">Education</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Beginner &amp; Volume Lash Courses</div>
          </div>
        </div>
      </div>

    </section>
  );
};
