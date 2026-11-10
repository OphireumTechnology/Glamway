import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO, FOUNDER_INFO } from '../../data/salonData';
import { Sparkles, Calendar, ArrowRight, CheckCircle2, GraduationCap, ShoppingBag } from 'lucide-react';

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
            <Sparkles className="w-4 h-4 text-[#C6A667]" />
            <span>THE GLAMWAY STORY &amp; FOUNDER</span>
            <Sparkles className="w-4 h-4 text-[#C6A667]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2A28] tracking-tight leading-tight">
            About The Glamway
          </h1>

          <p className="text-base sm:text-lg text-[#3B2A28]/85 font-light leading-relaxed max-w-2xl mx-auto">
            A one-stop beauty destination in Charlotte, North Carolina offering specialized eyelash extensions, hair care, structured nails, esthetician facials, beauty supplies, and professional lash training.
          </p>
        </div>
      </section>

      {/* Founder Story Section (Summer Davis) */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#C6A667]/40 p-4 rounded-xs bg-white shadow-xl">
              <div className="aspect-[4/5] overflow-hidden rounded-xs bg-[#D9B6A9]/20">
                <img
                  src={FOUNDER_INFO.image}
                  alt="Summer Davis - Founder of The Glamway"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFF9F4] p-3 border border-[#C6A667]/40 rounded-xs shadow-lg max-w-[170px] hidden sm:block">
                <img
                  src={GLAMWAY_LOGO}
                  alt="The Glamway"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              FOUNDER BACKGROUND
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] leading-snug">
              Summer Davis · Founder &amp; Licensed Esthetician
            </h2>

            <p className="text-sm sm:text-base text-[#3B2A28]/80 leading-relaxed font-light">
              Summer Davis is the founder of The Glamway. Born and raised in Charlotte, North Carolina, her journey in the beauty industry began with lash training in 2017, followed by obtaining her esthetician license in 2018.
            </p>

            <p className="text-sm sm:text-base text-[#3B2A28]/80 leading-relaxed font-light">
              With a passion for client beauty and practical education, Summer expanded The Glamway to encompass physical salon locations in Charlotte, providing exceptional eyelash extension services, hair styling, nail care, and customized facial treatments.
            </p>

            <p className="text-sm sm:text-base text-[#3B2A28]/80 leading-relaxed font-light">
              In addition to salon appointments, The Glamway operates a dedicated beauty supply line for lash technicians across the country and delivers hands-on lash certification courses for aspiring and practicing artists.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C6A667]/20">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center shrink-0 text-[#8E4B63]">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A667]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B2A28] uppercase tracking-wider">Lash Training 2017</div>
                  <div className="text-xs text-[#A98F86]">Certified lash extension specialist</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center shrink-0 text-[#8E4B63]">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A667]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B2A28] uppercase tracking-wider">Licensed Esthetician 2018</div>
                  <div className="text-xs text-[#A98F86]">Professional skin and esthetic care</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* The 3 Core Business Pillars */}
      <section className="bg-white py-20 px-4 sm:px-6 border-y border-[#C6A667]/25">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              THE THREE DIVISIONS OF THE GLAMWAY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28]">
              Services, Supplies &amp; Education
            </h2>
            <p className="text-sm text-[#A98F86] font-light">
              A comprehensive platform serving individual beauty clients and beauty professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <Sparkles className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                1. Salon Beauty Services
              </h3>
              <p className="text-xs sm:text-sm text-[#3B2A28]/80 leading-relaxed font-light">
                Appointment-based beauty services covering our 4 verified categories: eyelash extensions (full sets, fill-ins, top and bottom lashes), hair styling and extensions, structured nails, and esthetician facials.
              </p>
              <button
                onClick={() => setCurrentView('services')}
                className="text-xs text-[#8E4B63] font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <ShoppingBag className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                2. Professional Beauty Retail
              </h3>
              <p className="text-xs sm:text-sm text-[#3B2A28]/80 leading-relaxed font-light">
                Providing lash technicians with essential tools: 0.03 and 0.5 second adhesives, standard and XL lash trays in C, CC, and D curls, DIY lash kits, glue rings, mascara wands, and wholesale supplies.
              </p>
              <button
                onClick={() => setCurrentView('boutique')}
                className="text-xs text-[#8E4B63] font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                <span>Browse Shop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                <GraduationCap className="w-5 h-5 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                3. Beauty Training Academy
              </h3>
              <p className="text-xs sm:text-sm text-[#3B2A28]/80 leading-relaxed font-light">
                Structured courses for beauty professionals including the 4-hour Beginner Lash Tech Course ($650) and the 2-hour Advanced Volume Lashes Course ($300), taught hands-on in Charlotte, NC.
              </p>
              <button
                onClick={() => setCurrentView('training')}
                className="text-xs text-[#8E4B63] font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Callout */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8E4B63] font-semibold">
            VISIT US IN CHARLOTTE, NC
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28]">
            Schedule Your Appointment
          </h2>
          <p className="text-sm text-[#3B2A28]/80 font-light max-w-lg mx-auto">
            Book online for our Charlotte locations. All services are provided by appointment with a 24-hour advance notice cancellation policy.
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
            <span>View Charlotte Locations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
