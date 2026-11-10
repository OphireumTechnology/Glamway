import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory, ServiceItem } from '../../types';
import { Clock, ArrowRight, Sparkles, X, Info, Calendar } from 'lucide-react';

export const FeaturedServices: React.FC = () => {
  const { services, openBookingModal } = useSalon();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  // Strictly the 4 verified categories identified on original website: Lashes, Hair, Nails, Facials
  const categories: { key: ServiceCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Services' },
    { key: 'lashes', label: 'Lashes' },
    { key: 'hair', label: 'Hair' },
    { key: 'nails', label: 'Nails' },
    { key: 'facial', label: 'Facials' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header matching Directive Section 6 */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          <span>THE GLAMWAY SALON</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
        </div>
        
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B2A28] tracking-tight leading-tight">
          Our Beauty Services
        </h1>
        
        <p className="text-base sm:text-lg text-[#3B2A28]/80 font-light leading-relaxed max-w-2xl mx-auto">
          Discover The Glamway's beauty services, thoughtfully presented to help you explore your preferred beauty experience.
        </p>
      </div>

      {/* 4 Verified Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-semibold transition-all whitespace-nowrap rounded-xs border shrink-0 ${
              activeCategory === cat.key
                ? 'bg-[#8E4B63] text-white border-[#8E4B63] shadow-sm'
                : 'bg-[#FFF9F4] text-[#3B2A28]/80 border-[#C6A667]/30 hover:border-[#8E4B63] hover:text-[#8E4B63]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service Cards Grid (3 Columns) - NO PRICES DISPLAYED */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="group bg-white border border-[#C6A667]/25 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#C6A667]"
          >
            {/* Image Container with Duration Badge */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#D9B6A9]/20">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Duration and Location Overlay (Zero Pricing) */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs uppercase tracking-wider bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-xs flex items-center gap-1.5 border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>{service.durationMinutes} mins</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-xs border border-white/20">
                  Charlotte, NC
                </span>
              </div>
            </div>

            {/* Service Details Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                    {service.categoryLabel}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-[#FFF9F4] text-[#8E4B63] px-2 py-0.5 rounded-xs border border-[#C6A667]/30">
                    By Appointment
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#3B2A28] group-hover:text-[#8E4B63] transition-colors leading-snug">
                  {service.name}
                </h3>
                
                <p className="text-xs text-[#8E4B63] italic font-medium">
                  "{service.tagline}"
                </p>
                
                <p className="text-xs text-[#3B2A28]/85 leading-relaxed line-clamp-3 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-[#C6A667]/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedServiceForModal(service)}
                  className="text-xs text-[#3B2A28]/80 hover:text-[#8E4B63] uppercase tracking-wider font-medium flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>Explore Service</span>
                </button>

                <button
                  onClick={() => openBookingModal(service.id)}
                  className="px-5 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors flex items-center gap-1.5 rounded-xs shadow-xs border border-[#C6A667]/40"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Service Details Modal (Without Prices) */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF9F4] border border-[#C6A667]/40 rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-4 right-4 p-2 text-[#3B2A28] hover:text-[#8E4B63] rounded-full hover:bg-black/5 z-10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#D9B6A9]/30">
              <img
                src={selectedServiceForModal.image}
                alt={selectedServiceForModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                    {selectedServiceForModal.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    {selectedServiceForModal.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-white/90 bg-black/40 px-2.5 py-1 rounded-xs border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C6A667]" />
                    <span>{selectedServiceForModal.durationMinutes} Minutes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold mb-2">
                  Service Overview
                </h4>
                <p className="text-sm text-[#3B2A28]/90 leading-relaxed font-light">
                  {selectedServiceForModal.description}
                </p>
              </div>

              {selectedServiceForModal.preparation && (
                <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                    Appointment Preparation:
                  </div>
                  <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
                    {selectedServiceForModal.preparation}
                  </p>
                </div>
              )}

              {selectedServiceForModal.aftercare && (
                <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                    Aftercare Guidelines:
                  </div>
                  <p className="text-xs text-[#3B2A28]/80 leading-relaxed">
                    {selectedServiceForModal.aftercare}
                  </p>
                </div>
              )}

              <div className="p-3 bg-white border border-[#C6A667]/20 rounded-xs text-xs text-[#A98F86]">
                <strong className="text-[#3B2A28] font-semibold">Notice:</strong> Appointments are scheduled online in advance with a 24-hour cancellation policy.
              </div>

              <div className="pt-4 border-t border-[#C6A667]/20 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedServiceForModal(null)}
                  className="px-5 py-2.5 border border-[#3B2A28]/20 text-[#3B2A28] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-black/5"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = selectedServiceForModal.id;
                    setSelectedServiceForModal(null);
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
