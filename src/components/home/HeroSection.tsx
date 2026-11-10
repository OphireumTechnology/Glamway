import React, { useState, useEffect } from 'react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO, HERO_IMAGE } from '../../data/salonData';
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
              Founded by licensed esthetician Summer Davis in Charlotte, North Carolina, The Glamway is your destination for professional beauty services, lash supplies, and beauty education.
            </p>

            {/* Primary Actions with Mauve Plum & Gold */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => openBookingModal()}
                className="px-7 py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md flex items-center gap-2 rounded-xs border border-[#C6A667]/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#C6A667]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => setCurrentView('services')}
                className="px-6 py-3.5 bg-white/90 border border-[#C6A667]/50 text-[#3B2A28] hover:border-[#8E4B63] hover:text-[#8E4B63] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 rounded-xs shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A667]" />
              </button>

              <button
                onClick={() => setCurrentView('branches')}
                className="px-4 py-3.5 text-[#3B2A28]/80 hover:text-[#8E4B63] text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C6A667]" />
                <span>Charlotte Locations</span>
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
              
              {/* Flowing Champagne-Gold SVG Ribbons & Light Trails */}
              <svg 
                className="absolute -top-12 -left-12 w-[130%] h-[125%] pointer-events-none z-0 overflow-visible"
                viewBox="0 0 500 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldLightGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C6A667" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#E9D5B1" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#C6A667" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="goldLightGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F5D6DE" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#C6A667" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#8E4B63" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Flowing Ribbon Path 1 */}
                <path
                  d="M 20,150 C 90,80 180,220 280,110 C 370,10 440,160 490,260 C 530,350 460,490 390,540"
                  stroke="url(#goldLightGradient1)"
                  strokeWidth="2.5"
                  className="animate-flow-ribbon"
                />

                {/* Flowing Ribbon Path 2 */}
                <path
                  d="M 40,480 C 110,540 220,430 310,490 C 400,560 460,440 480,340 C 500,240 430,90 350,60"
                  stroke="url(#goldLightGradient2)"
                  strokeWidth="1.8"
                  className="animate-flow-ribbon"
                  style={{ animationDelay: '-6s' }}
                />
              </svg>

              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-3.5 border border-[#C6A667]/45 rounded-t-[110px] rounded-b-lg pointer-events-none z-10" />
              <div className="absolute -inset-1.5 border border-[#C6A667]/25 rounded-t-[105px] rounded-b-md pointer-events-none z-10" />

              {/* Arched image container with subtle mirror reflection */}
              <div className="relative rounded-t-[100px] rounded-b-lg overflow-hidden shadow-2xl bg-[#D9B6A9]/20 aspect-[4/5] max-h-[580px] w-full z-10">
                <img
                  src={HERO_IMAGE}
                  alt="The Glamway Beauty Salon Interior in Charlotte, NC"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/85 via-[#3B2A28]/20 to-transparent" />

                {/* Subtle digital shimmer sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-sweep" />
                </div>

                {/* Floating Official Brand Overlay Badge (Top Right) */}
                <div className="absolute top-6 right-6 p-2.5 glass-panel rounded-xs shadow-xl max-w-[150px] z-20 border border-[#C6A667]/50">
                  <img
                    src={GLAMWAY_LOGO}
                    alt="The Glamway Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Floating Glass Label 1: Lashes (Top Left) */}
                <div className="absolute top-16 left-6 glass-panel px-3.5 py-2 rounded-xs shadow-lg border border-[#C6A667]/40 z-20 animate-float-gentle hidden sm:flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-[#8E4B63]" />
                  <span className="text-xs uppercase tracking-[0.16em] font-bold text-[#3B2A28]">
                    Lashes Studio
                  </span>
                </div>

                {/* Floating Glass Label 2: Facials (Middle Right) */}
                <div className="absolute top-1/2 -right-2 glass-panel px-3.5 py-2 rounded-xs shadow-lg border border-[#C6A667]/40 z-20 animate-float-subtle-rev hidden sm:flex items-center gap-2">
                  <Droplets className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span className="text-xs uppercase tracking-[0.16em] font-bold text-[#3B2A28]">
                    Facial Esthetics
                  </span>
                </div>

                {/* Bottom floating card overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xs shadow-2xl z-20 border border-[#C6A667]/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[#8E4B63] font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#C6A667]" />
                        <span>Charlotte Sanctuaries</span>
                      </div>
                      <div className="font-serif text-base text-[#3B2A28] font-semibold">
                        The Glamway · Uptown &amp; Graham
                      </div>
                    </div>
                    <button
                      onClick={() => openBookingModal()}
                      className="px-4 py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs border border-[#C6A667]/40"
                    >
                      Book Online
                    </button>
                  </div>
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
