import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO } from '../../data/salonData';
import { Crown, Sparkles, ShieldCheck, Heart, Award, Calendar, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { openBookingModal, setCurrentView } = useSalon();

  return (
    <div className="bg-[#FFF9F4] text-[#3B2A28]">
      
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#C6A667]/25 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#F5D6DE]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-96 h-96 bg-[#C6A667]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8E4B63] font-semibold">
            <Crown className="w-4 h-4 text-[#C6A667]" />
            <span>THE GLAMWAY HERITAGE &amp; ETHOS</span>
            <Crown className="w-4 h-4 text-[#C6A667]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2A28] tracking-tight leading-tight">
            A Sanctuary Crafted Exclusively For Women
          </h1>

          <p className="text-base sm:text-lg text-[#3B2A28]/85 font-light leading-relaxed max-w-2xl mx-auto">
            The Glamway Beauty Salon was founded on a singular conviction: that a woman’s beauty ritual should be an immersive sanctuary of calm, elevation, and peerless technical mastery.
          </p>
        </div>
      </section>

      {/* The Brand Story & Official Logo Integration */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#C6A667]/40 p-4 rounded-xs bg-white shadow-xl">
              <div className="aspect-[4/5] overflow-hidden rounded-xs bg-[#D9B6A9]/20">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="The Glamway Salon Architectural Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFF9F4] p-3 border border-[#C6A667]/40 rounded-xs shadow-lg max-w-[170px] hidden sm:block">
                <img
                  src={GLAMWAY_LOGO}
                  alt="The Glamway Beauty Salon"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              North Carolina Presence
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] leading-snug">
              Elevating the Beauty Standard Across Two Premier Locations
            </h2>

            <p className="text-sm sm:text-base text-[#3B2A28]/80 leading-relaxed font-light">
              Across our two North Carolina destinations — <strong className="font-semibold text-[#3B2A28]">The Glamway Flagship</strong> and <strong className="font-semibold text-[#3B2A28]">The Glamway Atelier</strong> — we offer a refined escape from the rush of daily life. Every architectural detail, from our sound-dampened private suites to warm champagne lighting, is engineered to cultivate peace.
            </p>

            <p className="text-sm sm:text-base text-[#3B2A28]/80 leading-relaxed font-light">
              Unlike traditional open-floor salons, The Glamway provides women with serene, private styling cabanas where personal consultations, hair treatments, Russian dry manicures, and dermal hydra-infusions take place in complete comfort and privacy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C6A667]/20">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center shrink-0 text-[#8E4B63]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A667]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B2A28] uppercase tracking-wider">NC State Licensed</div>
                  <div className="text-xs text-[#A98F86]">Certified by the North Carolina Board of Cosmetic Art Sciences</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center shrink-0 text-[#8E4B63]">
                  <Heart className="w-4 h-4 text-[#C6A667]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B2A28] uppercase tracking-wider">100% For Women</div>
                  <div className="text-xs text-[#A98F86]">Curated privacy, respectful atmosphere, bespoke hospitality</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* The 4 Core Brand Pillars */}
      <section className="bg-white py-20 px-4 sm:px-6 border-y border-[#C6A667]/25">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              OUR PILLARS OF DISTINCTION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28]">
              The Glamway Standard
            </h2>
            <p className="text-sm text-[#A98F86] font-light">
              Four non-negotiable commitments embedded in every client journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-6 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <Crown className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                Private Suite Architecture
              </h3>
              <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
                Indulge without distraction. Our private dressing suites allow clients to unwind, work remotely, or enjoy quiet relaxation during comprehensive transformations.
              </p>
            </div>

            <div className="p-6 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <Award className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                Master French Artistry
              </h3>
              <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
                Our creative directors undergo rigorous international apprenticeships in Paris, London, and New York to master seamless balayage and structured dry manicures.
              </p>
            </div>

            <div className="p-6 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <Sparkles className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                Clean Formulation Ethos
              </h3>
              <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
                Every elixir, bleach, and gloss is ammonia-free, formaldehyde-free, and dermatologically vetted. We combine botanical purity with clinical performance.
              </p>
            </div>

            <div className="p-6 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <Heart className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                Bespoke Concierge Care
              </h3>
              <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
                Enjoy chilled champagne, French macarons, heated organic herbal pillows, and personalized post-treatment care plans with direct stylist support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Location Summary & Invitation */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8E4B63] font-semibold">
            EXPERIENCE THE DISTINCTION
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28]">
            Begin Your Glamway Experience
          </h2>
          <p className="text-sm text-[#3B2A28]/80 font-light max-w-lg mx-auto">
            Book an appointment or visit one of our two North Carolina sanctuaries to discover personalized luxury beauty.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => openBookingModal()}
            className="px-7 py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md border border-[#C6A667]/40 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#C6A667]" />
            <span>Book an Appointment</span>
          </button>

          <button
            onClick={() => setCurrentView('branches')}
            className="px-6 py-3.5 bg-white border border-[#C6A667]/50 text-[#3B2A28] hover:text-[#8E4B63] hover:border-[#8E4B63] text-xs uppercase tracking-[0.18em] font-medium rounded-xs flex items-center gap-2"
          >
            <span>Explore Both NC Branches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
