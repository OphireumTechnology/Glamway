import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory, ServiceItem } from '../../types';
import { Clock, ArrowRight, Sparkles, X, Info, Calendar, Eye, Scissors, Sparkle, Droplets } from 'lucide-react';

export const FeaturedServices: React.FC = () => {
  const { services, openBookingModal, setCurrentView } = useSalon();
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<ServiceCategory | null>(null);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);

  // The 4 verified categories with verified imagery and specialized aesthetic treatments
  const categoryShowcase = [
    {
      category: 'lashes' as ServiceCategory,
      title: 'Lashes',
      tagline: 'Customized Extension Architecture',
      description: 'Expert individual classic, hybrid, volume, and top & bottom eyelash extension sets tailored to eye architecture and natural lash health.',
      image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=85',
      icon: Eye,
      accentMotion: 'lash-accent',
      highlightBadge: 'Full Sets & Fill-Ins'
    },
    {
      category: 'hair' as ServiceCategory,
      title: 'Hair',
      tagline: 'Styling, Installations & Silk Press',
      description: 'Professional hair installations, sew-ins, thermal silk press treatments, and healthy maintenance trims protecting natural hair integrity.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
      icon: Scissors,
      accentMotion: 'hair-accent',
      highlightBadge: 'Installs & Silk Press'
    },
    {
      category: 'nails' as ServiceCategory,
      title: 'Nails',
      tagline: 'Structured Gel & Apex Enhancement',
      description: 'Precision dry manicure cuticle grooming, natural nail apex reinforcement with builder gel, and full custom nail enhancements.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
      icon: Sparkle,
      accentMotion: 'nail-accent',
      highlightBadge: 'Structured Gel'
    },
    {
      category: 'facial' as ServiceCategory,
      title: 'Facials',
      tagline: 'Licensed Esthetician Skin Care',
      description: 'Customized facial treatments led by licensed estheticians. Deep pore cleansing, enzymatic exfoliation, hydration infusions, and brow waxing.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
      icon: Droplets,
      accentMotion: 'facial-accent',
      highlightBadge: 'Esthetician Care'
    }
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header matching Directive Section 6 */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          <span>FOUR VERIFIED SPECIALIZATIONS</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
        </div>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B2A28] tracking-tight leading-tight">
          Our Beauty Services
        </h2>
        
        <p className="text-base sm:text-lg text-[#3B2A28]/80 font-light leading-relaxed max-w-2xl mx-auto">
          Discover The Glamway's beauty services, thoughtfully presented to help you explore your preferred beauty experience.
        </p>
      </div>

      {/* 4-Card Responsive Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {categoryShowcase.map(card => {
          const Icon = card.icon;
          const categoryServices = services.filter(s => s.category === card.category);
          
          return (
            <div
              key={card.category}
              className="group bg-white border border-[#C6A667]/30 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#8E4B63] hover:-translate-y-1 relative"
            >
              {/* Image Frame with Motion Visual Effect */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#D9B6A9]/20">
                <img
                  src={card.image}
                  alt={`The Glamway ${card.title} Services in Charlotte, NC`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Scrim & Shimmer Reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/90 via-[#3B2A28]/30 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />

                {/* Category Icon Badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-[#C6A667]/50 flex items-center justify-center text-[#8E4B63] shadow-md">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Verified Charlotte Badge */}
                <div className="absolute top-4 right-4 text-[10px] uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white px-2.5 py-1 rounded-xs border border-white/20">
                  {card.highlightBadge}
                </div>

                {/* Overlaid Title on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#E9D5B1] font-semibold">
                    The Glamway Charlotte
                  </div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="text-xs text-[#8E4B63] font-semibold">
                    {card.tagline}
                  </div>
                  <p className="text-xs text-[#3B2A28]/85 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 border-t border-[#C6A667]/20 flex flex-col gap-2.5">
                  <button
                    onClick={() => setSelectedCategoryModal(card.category)}
                    className="w-full py-2.5 bg-white border border-[#C6A667]/40 hover:border-[#8E4B63] text-[#3B2A28] hover:text-[#8E4B63] text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-1.5 rounded-xs"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C6A667]" />
                    <span>Explore {card.title}</span>
                  </button>

                  <button
                    onClick={() => {
                      const firstSrv = categoryServices[0];
                      openBookingModal(firstSrv?.id);
                    }}
                    className="w-full py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors flex items-center justify-center gap-1.5 rounded-xs shadow-xs border border-[#C6A667]/40"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Tasteful "Explore Our Services" Banner & Highlight Strip (Directive Section 7) */}
      <div className="mt-16 bg-white border border-[#C6A667]/35 rounded-xs p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#F5D6DE]/30 to-transparent pointer-events-none rounded-full blur-2xl" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8E4B63]" />
              <span>Expanded Official Offerings</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2A28] font-bold">
              Explore Our Complete Services Menu
            </h3>
            <p className="text-xs sm:text-sm text-[#3B2A28]/80 leading-relaxed font-light">
              We have updated our verified service menu with Brazilian Waxing, specialized Additional Lash Treatments (Removal + Full Set, routine &amp; 7-day Fill-Ins, Top &amp; Bottom sets), and private on-location House Calls.
            </p>

            {/* Quick treatment highlight badges (NO PRICES) */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-[#FFF9F4] border border-[#C6A667]/30 text-[#8E4B63] rounded-full font-medium">
                Brazilian Wax · 30 mins
              </span>
              <span className="px-3 py-1 bg-[#FFF9F4] border border-[#C6A667]/30 text-[#8E4B63] rounded-full font-medium">
                Removal + Full Set · 120 mins
              </span>
              <span className="px-3 py-1 bg-[#FFF9F4] border border-[#C6A667]/30 text-[#8E4B63] rounded-full font-medium">
                Fill In · 60 mins
              </span>
              <span className="px-3 py-1 bg-[#FFF9F4] border border-[#C6A667]/30 text-[#8E4B63] rounded-full font-medium">
                Top &amp; Bottom Sets · 100 mins
              </span>
              <span className="px-3 py-1 bg-[#FFF9F4] border border-[#C6A667]/30 text-[#8E4B63] rounded-full font-medium">
                House Calls · 150 mins
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => {
                setCurrentView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md border border-[#C6A667]/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-[#C6A667]" />
            </button>
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 border border-[#C6A667]/50 text-[#3B2A28] hover:text-[#8E4B63] text-xs uppercase tracking-[0.16em] font-medium rounded-xs bg-[#FFF9F4]/60 hover:bg-[#FFF9F4] flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6A667]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Overview Modal (Listing verified treatments under selected category without prices) */}
      {selectedCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF9F4] border border-[#C6A667]/40 rounded-xs max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedCategoryModal(null)}
              className="absolute top-4 right-4 p-2 text-[#3B2A28] hover:text-[#8E4B63] rounded-full hover:bg-black/5 z-10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2 border-b border-[#C6A667]/25 pb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                  Verified Charlotte Offerings
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#3B2A28] capitalize">
                  {selectedCategoryModal} Services
                </h3>
                <p className="text-xs text-[#A98F86]">
                  Select an appointment below to view detailed guidelines and reserve a private suite.
                </p>
              </div>

              {/* List of services in this category (NO PRICES) */}
              <div className="space-y-4">
                {services
                  .filter(s => s.category === selectedCategoryModal)
                  .map(srv => (
                    <div
                      key={srv.id}
                      className="bg-white border border-[#C6A667]/25 p-5 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#8E4B63] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="font-serif text-lg font-semibold text-[#3B2A28]">
                          {srv.name}
                        </div>
                        <div className="text-xs text-[#8E4B63]">
                          {srv.tagline}
                        </div>
                        <p className="text-xs text-[#3B2A28]/80 max-w-md">
                          {srv.description}
                        </p>
                        <div className="flex items-center gap-3 pt-1 text-[11px] text-[#A98F86]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C6A667]" />
                            <span>{srv.durationMinutes} mins</span>
                          </span>
                          <span>·</span>
                          <span>Charlotte, NC (Uptown &amp; Graham)</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                        <button
                          onClick={() => {
                            setSelectedCategoryModal(null);
                            setSelectedServiceForDetail(srv);
                          }}
                          className="px-3.5 py-2 border border-[#C6A667]/40 text-[#3B2A28] hover:text-[#8E4B63] text-xs font-medium rounded-xs"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => {
                            setSelectedCategoryModal(null);
                            openBookingModal(srv.id);
                          }}
                          className="px-4 py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Individual Service Detail Modal (NO PRICES) */}
      {selectedServiceForDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF9F4] border border-[#C6A667]/40 rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedServiceForDetail(null)}
              className="absolute top-4 right-4 p-2 text-[#3B2A28] hover:text-[#8E4B63] rounded-full hover:bg-black/5 z-10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#D9B6A9]/30">
              <img
                src={selectedServiceForDetail.image}
                alt={selectedServiceForDetail.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                    {selectedServiceForDetail.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    {selectedServiceForDetail.name}
                  </h3>
                </div>
                <div className="text-xs uppercase tracking-wider text-white/90 bg-black/40 px-2.5 py-1 rounded-xs border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C6A667]" />
                  <span>{selectedServiceForDetail.durationMinutes} Minutes</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold mb-2">
                  Service Overview
                </h4>
                <p className="text-sm text-[#3B2A28]/90 leading-relaxed font-light">
                  {selectedServiceForDetail.description}
                </p>
              </div>

              {selectedServiceForDetail.preparation && (
                <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                    Appointment Preparation:
                  </div>
                  <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
                    {selectedServiceForDetail.preparation}
                  </p>
                </div>
              )}

              {selectedServiceForDetail.aftercare && (
                <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                    Aftercare Guidelines:
                  </div>
                  <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
                    {selectedServiceForDetail.aftercare}
                  </p>
                </div>
              )}

              <div className="p-3 bg-white border border-[#C6A667]/20 rounded-xs text-xs text-[#A98F86]">
                <strong className="text-[#3B2A28] font-semibold">Notice:</strong> Appointments are reserved online in advance for private suites at our Charlotte locations or via scheduled house calls.
              </div>

              <div className="pt-4 border-t border-[#C6A667]/20 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedServiceForDetail(null)}
                  className="px-5 py-2.5 border border-[#3B2A28]/20 text-[#3B2A28] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-black/5"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = selectedServiceForDetail.id;
                    setSelectedServiceForDetail(null);
                    openBookingModal(id);
                  }}
                  className="px-6 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md border border-[#C6A667]/40 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
