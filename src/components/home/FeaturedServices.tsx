import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory } from '../../types';
import { Clock, ArrowRight, Check } from 'lucide-react';

export const FeaturedServices: React.FC = () => {
  const { services, openBookingModal } = useSalon();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { key: ServiceCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Rituals' },
    { key: 'hair', label: 'Hair Studio' },
    { key: 'nails', label: 'Nail Lounge' },
    { key: 'facial', label: 'Facial & Skincare' },
    { key: 'lashes-brows', label: 'Lashes & Brows' },
    { key: 'makeup', label: 'Makeup Studio' },
    { key: 'body-wellness', label: 'Spa & Wellness' },
    { key: 'vip-packages', label: 'VIP Experiences' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-medium">
          Haute Coiffure &amp; Esthétique
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#302725] tracking-tight">
          Curated Beauty &amp; Wellness Rituals
        </h2>
        <p className="text-sm sm:text-base text-[#A48D84] font-light">
          Meticulously tailored to your facial contours, natural hair texture, and Southern climate needs using certified clean European and organic formulations.
        </p>
      </div>

      {/* Interactive Category Segmented Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all whitespace-nowrap rounded-sm border ${
              activeCategory === cat.key
                ? 'bg-[#302725] text-[#FAF8F5] border-[#302725] shadow-xs'
                : 'bg-white/80 text-[#302725]/70 border-[#C6A667]/20 hover:border-[#C6A667] hover:text-[#302725]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service Cards Grid (3 Columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="group bg-white border border-[#C6A667]/25 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#C6A667]"
          >
            {/* Image Container with measured overlay */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DCC2BA]/20">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Price Tag in USD - Bottom aligned */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="font-serif text-xl font-semibold tabular-nums drop-shadow-sm">
                  ${service.priceUSD}
                </span>
                <span className="text-xs uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C6A667]" />
                  <span>{service.durationMinutes} mins</span>
                </span>
              </div>
            </div>

            {/* Service Details Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                  {service.categoryLabel}
                </div>
                <h3 className="font-serif text-xl text-[#302725] group-hover:text-[#C6A667] transition-colors leading-snug">
                  {service.name}
                </h3>
                <p className="text-xs text-[#A48D84] italic">
                  "{service.tagline}"
                </p>
                <p className="text-xs text-[#302725]/80 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Add-ons list if present */}
              {service.popularAddOns && service.popularAddOns.length > 0 && (
                <div className="pt-2 border-t border-[#302725]/5 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#A48D84] font-medium">
                    Signature Add-Ons:
                  </div>
                  <div className="text-xs text-[#302725]/70 space-y-0.5">
                    {service.popularAddOns.slice(0, 2).map((addon, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                        <Check className="w-3 h-3 text-[#C6A667] shrink-0" />
                        <span>{addon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Book CTA Button */}
              <div className="pt-4 border-t border-[#C6A667]/20 flex items-center justify-between">
                <span className="text-[11px] text-[#A48D84] uppercase tracking-wider">
                  5 SC Locations
                </span>
                <button
                  onClick={() => openBookingModal(service.id)}
                  className="px-4 py-2 bg-[#302725] group-hover:bg-[#C6A667] text-white text-xs uppercase tracking-[0.15em] font-medium transition-colors flex items-center gap-1.5"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
