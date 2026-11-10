import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { HERO_IMAGE } from '../../data/salonData';
import { Sparkles, Calendar, MapPin, ArrowRight, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBookingModal, setCurrentView, setIsAiConciergeOpen } = useSalon();

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-[#C6A667]/20">
      
      {/* Ambient luxury champagne and blush background illumination */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3DFE3]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#C6A667]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8 z-10">
            
            {/* Elegant metadata kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-medium">
              <span>Haute Beauté Sanctuary</span>
              <span aria-hidden="true">·</span>
              <span>South Carolina, USA</span>
              <span aria-hidden="true">·</span>
              <span>Charleston · Greenville · Columbia · Hilton Head</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302725] leading-[1.12] tracking-tight text-balance">
              Where Beauty Meets Elegance &amp; Innovation.
            </h1>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-[#302725]/80 font-light leading-relaxed max-w-xl">
              Experience exceptional hair, nail, skincare, and beauty services at our luxury salon destinations across South Carolina. Indulge in bespoke French balayage, coastal humidity keratin rituals, and private suite pampering.
            </p>

            {/* Three Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="px-7 py-3.5 bg-[#302725] text-[#FAF8F5] hover:bg-[#C6A667] hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => setCurrentView('services')}
                className="px-6 py-3.5 bg-white border border-[#C6A667]/40 text-[#302725] hover:border-[#302725] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentView('branches')}
                className="px-5 py-3.5 text-[#302725]/80 hover:text-[#C6A667] text-xs uppercase tracking-[0.15em] font-medium transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C6A667]" />
                <span>Find a Location</span>
              </button>
            </div>

            {/* Interactive AI Concierge banner strip */}
            <div className="p-4 bg-white/70 backdrop-blur-sm border border-[#C6A667]/30 rounded-sm flex items-center justify-between gap-4 max-w-xl shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#302725]">Unsure which treatment suits your hair or skin?</div>
                  <div className="text-xs text-[#A48D84]">Consult Madame Aurélia, our intelligent South Carolina beauty concierge.</div>
                </div>
              </div>
              <button
                onClick={() => setIsAiConciergeOpen(true)}
                className="text-xs font-medium text-[#C6A667] hover:text-[#302725] underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                Start Consultation
              </button>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#A48D84]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#C6A667]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A667]" />
                  ))}
                </div>
                <span className="font-semibold text-[#302725]">4.98 / 5.0</span>
                <span>(1,480+ verified guest reviews)</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>5 South Carolina Locations</span>
              <span aria-hidden="true">·</span>
              <span>SC LLR Board Certified</span>
            </div>

          </div>

          {/* Right Column: Architectural Hero Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-3 border border-[#C6A667]/35 rounded-t-[100px] rounded-b-lg pointer-events-none" />

              {/* Arched image container */}
              <div className="relative rounded-t-[96px] rounded-b-lg overflow-hidden shadow-2xl bg-[#DCC2BA]/20 aspect-[4/5] max-h-[580px] w-full">
                <img
                  src={HERO_IMAGE}
                  alt="Aurélia Haute Beauté Charleston Sanctuary Interior with curved architectural arches and champagne gold detailing"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle luxury gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#302725]/70 via-transparent to-transparent" />

                {/* Bottom floating card overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-[#C6A667]/40 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                        Historic Lowcountry Sanctuary
                      </div>
                      <div className="font-serif text-base text-[#302725] font-semibold">
                        King Street, Charleston SC
                      </div>
                    </div>
                    <button
                      onClick={() => openBookingModal(undefined, 'branch-charleston')}
                      className="px-3.5 py-1.5 bg-[#C6A667] hover:bg-[#302725] text-white text-[11px] font-medium uppercase tracking-wider transition-colors"
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
      <div className="bg-[#FAF8F5] border-t border-[#C6A667]/20 py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C6A667]/20">
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#302725] font-semibold">5 SC Sanctuaries</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A48D84] mt-1">Charleston · Greenville · Columbia · Hilton Head · Mt Pleasant</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#302725] font-semibold">48+ Master Artisans</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A48D84] mt-1">SC LLR Licensed &amp; European Trained</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#302725] font-semibold">Private Suites</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A48D84] mt-1">Single-Guest Luxury Architecture</div>
          </div>
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl lg:text-3xl text-[#302725] font-semibold">USD ($) Pricing</div>
            <div className="text-xs uppercase tracking-[0.15em] text-[#A48D84] mt-1">Apple Pay · Visa/MC · Stripe Secure Checkout</div>
          </div>
        </div>
      </div>

    </section>
  );
};
