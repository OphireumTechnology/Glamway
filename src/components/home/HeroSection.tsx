import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO, HERO_IMAGE } from '../../data/salonData';
import { Calendar, MapPin, ArrowRight, Star, Crown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBookingModal, setCurrentView } = useSalon();

  return (
    <section className="relative overflow-hidden bg-[#FFF9F4] border-b border-[#C6A667]/25">
      
      {/* Ambient luxury champagne and blush background illumination */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5D6DE]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#C6A667]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-7 z-10">
            
            {/* Elegant metadata kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8E4B63] font-semibold">
              <Crown className="w-3.5 h-3.5 text-[#C6A667]" />
              <span>The Glamway Beauty Salon</span>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span className="text-[#C6A667]">FOR WOMEN</span>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span>North Carolina</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2A28] leading-[1.12] tracking-tight text-balance">
              Where Beauty Meets Elegance.
            </h1>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-[#3B2A28]/85 font-light leading-relaxed max-w-xl font-sans">
              Discover exceptional hair, nail, skincare, and beauty experiences at The Glamway Beauty Salon in North Carolina. Thoughtfully curated for women across our premier destination sanctuaries.
            </p>

            {/* Three Primary Actions with Mauve Plum & Gold */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="px-7 py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md flex items-center gap-2 rounded-xs border border-[#C6A667]/40"
              >
                <Calendar className="w-4 h-4 text-[#C6A667]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => setCurrentView('services')}
                className="px-6 py-3.5 bg-white border border-[#C6A667]/50 text-[#3B2A28] hover:border-[#8E4B63] hover:text-[#8E4B63] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 rounded-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentView('branches')}
                className="px-5 py-3.5 text-[#3B2A28]/80 hover:text-[#8E4B63] text-xs uppercase tracking-[0.15em] font-medium transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C6A667]" />
                <span>Find a Location</span>
              </button>
            </div>

            {/* Luxury Sanctuary & Hospitality Banner Strip */}
            <div className="p-4 bg-white/90 backdrop-blur-sm border border-[#C6A667]/35 rounded-xs flex items-center justify-between gap-4 max-w-xl shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63] shrink-0">
                  <Sparkles className="w-4 h-4 text-[#C6A667]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#3B2A28]">Private Suite Sanctuary Experience</div>
                  <div className="text-xs text-[#A98F86]">Complimentary champagne, artisanal tea, and private styling suites.</div>
                </div>
              </div>
              <button
                onClick={() => openBookingModal()}
                className="text-xs font-semibold text-[#8E4B63] hover:text-[#C6A667] underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                Reserve Suite
              </button>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#A98F86]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#C6A667]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A667]" />
                  ))}
                </div>
                <span className="font-semibold text-[#3B2A28]">4.98 / 5.0</span>
                <span>(1,520+ verified guest reviews)</span>
              </div>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span>2 North Carolina Branches</span>
              <span aria-hidden="true" className="text-[#C6A667]">·</span>
              <span>Exclusively For Women</span>
            </div>

          </div>

          {/* Right Column: Architectural Hero Image Frame with Official Glamway Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-3 border border-[#C6A667]/40 rounded-t-[100px] rounded-b-lg pointer-events-none" />

              {/* Arched image container */}
              <div className="relative rounded-t-[96px] rounded-b-lg overflow-hidden shadow-2xl bg-[#D9B6A9]/20 aspect-[4/5] max-h-[580px] w-full">
                <img
                  src={HERO_IMAGE}
                  alt="The Glamway Beauty Salon Interior with curved architectural arches and champagne gold detailing"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/80 via-transparent to-transparent" />

                {/* Floating Official Brand Overlay Badge */}
                <div className="absolute top-6 right-6 p-2 bg-[#FFF9F4]/95 backdrop-blur-md border border-[#C6A667]/40 rounded-xs shadow-lg max-w-[140px]">
                  <img
                    src={GLAMWAY_LOGO}
                    alt="The Glamway Beauty Salon Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Bottom floating card overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-[#C6A667]/40 rounded-xs shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8E4B63] font-bold">
                        North Carolina Sanctuaries
                      </div>
                      <div className="font-serif text-base text-[#3B2A28] font-semibold">
                        The Glamway Beauty Salon
                      </div>
                    </div>
                    <button
                      onClick={() => openBookingModal(undefined, 'branch-nc-1')}
                      className="px-3.5 py-1.5 bg-[#8E4B63] hover:bg-[#C6A667] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
                    >
                      Reserve Suite
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full-width 4-Column Proof & Statistics Strip */}
      <div className="bg-[#FFF9F4] border-t border-[#C6A667]/25 py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C6A667]/25">
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#3B2A28] font-semibold">2 NC Branches</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">North Carolina Flagship &amp; Atelier</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#8E4B63] font-semibold">FOR WOMEN</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Private Suite Sanctuary Standards</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#3B2A28] font-semibold">100% Certified</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Hospital-Grade Clean Formulations</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#3B2A28] font-semibold">USD ($) Pricing</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A98F86] mt-1">Apple Pay · Visa · Amex · In-Salon</div>
          </div>
        </div>
      </div>

    </section>
  );
};
