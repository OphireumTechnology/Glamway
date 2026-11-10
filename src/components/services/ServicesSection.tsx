import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory, ServiceItem } from '../../types';
import { 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Info, 
  X, 
  Eye, 
  Scissors, 
  Sparkle, 
  Droplets, 
  Flower2, 
  Home, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

interface CategoryGroup {
  key: ServiceCategory | 'all';
  label: string;
  headline: string;
  description: string;
  icon: React.ElementType;
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    key: 'all',
    label: 'All Services',
    headline: 'Complete Beauty Menu',
    description: 'Explore the full spectrum of verified salon treatments, lash artistry, and private beauty services.',
    icon: Sparkles
  },
  {
    key: 'lashes',
    label: 'Lashes',
    headline: 'Lash Extension Architecture',
    description: 'Custom classic, hybrid, volume, and top & bottom lash designs tailored to eye anatomy and natural lash health.',
    icon: Eye
  },
  {
    key: 'additional-lashes',
    label: 'Additional Lash Treatments',
    headline: 'Full Sets, Fill-Ins & Removals',
    description: 'Specialized lash appointments including removal + full set packages, routine refills, and rapid touch-ups.',
    icon: Layers
  },
  {
    key: 'hair',
    label: 'Hair',
    headline: 'Styling, Installations & Silk Press',
    description: 'Professional sew-in installations, precision thermal silk press, and restorative growth trims.',
    icon: Scissors
  },
  {
    key: 'nails',
    label: 'Nails',
    headline: 'Structured Gel & Nail Artistry',
    description: 'Builder gel apex overlays, detailed cuticle grooming, and durable nail extension enhancements.',
    icon: Sparkle
  },
  {
    key: 'facial',
    label: 'Facials',
    headline: 'Licensed Esthetician Skin Care',
    description: 'Personalized skin evaluations, deep pore cleansing, enzymatic exfoliation, and brow shaping.',
    icon: Droplets
  },
  {
    key: 'waxing',
    label: 'Waxing',
    headline: 'Precision Waxing Care',
    description: 'Specialized waxing treatments performed in private suites with gentle, botanical-infused formulas.',
    icon: Flower2
  },
  {
    key: 'house-calls',
    label: 'House Calls',
    headline: 'Private On-Location Services',
    description: 'Personalized beauty appointments delivered directly to your private residence or venue.',
    icon: Home
  }
];

export const ServicesSection: React.FC = () => {
  const { services, openBookingModal } = useSalon();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);

  // Filtered services
  const displayedServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  // Grouped for structured layout when "all" is active
  const sectionsToRender = activeCategory === 'all'
    ? CATEGORY_GROUPS.filter(g => g.key !== 'all')
    : CATEGORY_GROUPS.filter(g => g.key === activeCategory);

  return (
    <div className="bg-[#FFF9F4] min-h-screen text-[#3B2A28]">
      
      {/* Editorial Luxury Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-[#C6A667]/25 overflow-hidden">
        {/* Ambient Subtle Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C6A667_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold bg-white/80 border border-[#C6A667]/30 px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
            <span>The Glamway · Official Services Menu</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3B2A28] tracking-tight leading-tight">
            Curated Beauty Services
          </h1>

          <p className="text-sm sm:text-base text-[#3B2A28]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our complete collection of verified lash artistry, hair styling, structured nails, esthetician facials, waxing, and private house calls in Charlotte, North Carolina.
          </p>

          {/* Policy & Suite Notice */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#A98F86]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C6A667]" />
              <span>Private Charlotte Suites (Uptown &amp; Graham)</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C6A667]" />
              <span>24-Hour Notice Cancellation Policy</span>
            </span>
            <span>·</span>
            <span>No Public Prices Displayed</span>
          </div>
        </div>
      </section>

      {/* Category Navigation Filter Bar */}
      <div className="sticky top-20 sm:top-22 z-30 bg-[#FFF9F4]/95 backdrop-blur-md border-b border-[#C6A667]/25 py-3 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {CATEGORY_GROUPS.map(group => {
            const Icon = group.icon;
            const isSelected = activeCategory === group.key;

            return (
              <button
                key={group.key}
                onClick={() => setActiveCategory(group.key)}
                className={`px-3.5 py-2 text-xs uppercase tracking-[0.14em] font-medium rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-[#8E4B63] text-white border-[#8E4B63] shadow-xs'
                    : 'bg-white/80 text-[#3B2A28] border-[#C6A667]/30 hover:border-[#8E4B63] hover:text-[#8E4B63]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C6A667]' : 'text-[#8E4B63]'}`} />
                <span>{group.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area: Grouped Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-24">
        {sectionsToRender.map(group => {
          const groupServices = services.filter(s => s.category === group.key);
          if (groupServices.length === 0) return null;

          const Icon = group.icon;

          return (
            <section key={group.key} id={`category-${group.key}`} className="space-y-8">
              
              {/* Category Section Header */}
              <div className="border-b border-[#C6A667]/25 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                    <Icon className="w-4 h-4 text-[#8E4B63]" />
                    <span>{group.label}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#3B2A28] font-bold">
                    {group.headline}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A98F86] max-w-xl">
                    {group.description}
                  </p>
                </div>

                <div className="text-xs text-[#A98F86] uppercase tracking-wider shrink-0 font-medium">
                  {groupServices.length} {groupServices.length === 1 ? 'Verified Service' : 'Verified Services'}
                </div>
              </div>

              {/* Service Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {groupServices.map(service => (
                  <div
                    key={service.id}
                    className="group bg-white border border-[#C6A667]/30 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-400 hover:shadow-xl hover:border-[#8E4B63] hover:-translate-y-1"
                  >
                    
                    {/* Visual Card Media */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF8F5]">
                      <img
                        src={service.image}
                        alt={`The Glamway - ${service.name}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Duration Badge with Clock (NO PRICES) */}
                      <div className="absolute top-3.5 right-3.5 bg-black/65 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 font-medium shadow-xs">
                        <Clock className="w-3.5 h-3.5 text-[#C6A667]" />
                        <span>{service.durationMinutes} minutes</span>
                      </div>

                      {/* Category Label Pill */}
                      <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[#8E4B63] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C6A667]/40 font-semibold shadow-xs">
                        {service.categoryLabel}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-bold text-[#3B2A28] group-hover:text-[#8E4B63] transition-colors leading-snug">
                          {service.name}
                        </h3>

                        {service.tagline && (
                          <div className="text-xs text-[#8E4B63] italic">
                            "{service.tagline}"
                          </div>
                        )}

                        <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Card Actions (NO PRICES) */}
                      <div className="pt-4 border-t border-[#C6A667]/20 flex flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedServiceForDetail(service)}
                            className="flex-1 py-2.5 px-3 border border-[#C6A667]/40 hover:border-[#8E4B63] text-[#3B2A28] hover:text-[#8E4B63] text-xs uppercase tracking-[0.14em] font-medium transition-colors flex items-center justify-center gap-1.5 rounded-xs bg-[#FFF9F4]/40"
                          >
                            <Info className="w-3.5 h-3.5 text-[#C6A667]" />
                            <span>Guidelines</span>
                          </button>

                          <button
                            onClick={() => openBookingModal(service.id)}
                            className="flex-1 py-2.5 px-3 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-1.5 rounded-xs shadow-xs border border-[#C6A667]/40"
                          >
                            <span>Book</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

            </section>
          );
        })}

        {/* Informational Disclaimer Footer */}
        <section className="bg-white border border-[#C6A667]/30 rounded-xs p-6 sm:p-8 space-y-3 text-center max-w-3xl mx-auto shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#8E4B63]" />
            <span>Official Appointment Standards</span>
          </div>
          <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
            All beauty appointments are scheduled online in advance and held in private treatment suites at our Charlotte locations or via pre-arranged house calls. Illustrative imagery represents service categories. Cancellation or rescheduling requires a minimum of 24 hours advance notice.
          </p>
        </section>
      </main>

      {/* Service Details & Guidelines Modal (NO PRICES) */}
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

            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#D9B6A9]/30">
              <img
                src={selectedServiceForDetail.image}
                alt={selectedServiceForDetail.name}
                className="w-full h-full object-cover"
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
                <div className="text-xs uppercase tracking-wider text-white/90 bg-black/50 px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>{selectedServiceForDetail.durationMinutes} Minutes</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold mb-2">
                  Service Description
                </h4>
                <p className="text-sm text-[#3B2A28]/90 leading-relaxed font-light">
                  {selectedServiceForDetail.description}
                </p>
              </div>

              {selectedServiceForDetail.preparation && (
                <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                    Preparation Guidelines:
                  </div>
                  <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
                    {selectedServiceForDetail.preparation}
                  </p>
                </div>
              )}

              {selectedServiceForDetail.aftercare && (
                <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                    Recommended Aftercare:
                  </div>
                  <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
                    {selectedServiceForDetail.aftercare}
                  </p>
                </div>
              )}

              <div className="p-3 bg-white border border-[#C6A667]/20 rounded-xs text-xs text-[#A98F86]">
                <strong className="text-[#3B2A28] font-semibold">Policy:</strong> Appointments are subject to The Glamway's 24-hour advance notice cancellation policy.
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

    </div>
  );
};
