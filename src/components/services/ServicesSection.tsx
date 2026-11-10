import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ServiceCategory, ServiceItem } from '../../types';
import { 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Eye, 
  Scissors, 
  Sparkle, 
  Droplets, 
  Flower2, 
  Home, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

interface CategoryTab {
  key: ServiceCategory | 'all';
  label: string;
  headline: string;
  description: string;
  icon: React.ElementType;
}

const CATEGORY_TABS: CategoryTab[] = [
  {
    key: 'all',
    label: 'All Services',
    headline: 'Complete Service Menu',
    description: 'Explore the full spectrum of verified salon treatments, lash artistry, and private beauty services in Charlotte, NC.',
    icon: Sparkles
  },
  {
    key: 'lashes',
    label: 'Lashes',
    headline: 'Eyelash Extensions',
    description: 'Custom full sets, maintenance refills, and delicate lash removals tailored to your eye shape.',
    icon: Eye
  },
  {
    key: 'additional-lashes',
    label: 'Additional Lash Treatments',
    headline: 'Specialized Lash Artistry',
    description: 'Removal with new full set combinations, express fills, and complete top & bottom lash applications.',
    icon: Layers
  },
  {
    key: 'hair',
    label: 'Hair',
    headline: 'Hair Styling & Installations',
    description: 'Professional sew-in installations, precision thermal silk press, and healthy hair trims.',
    icon: Scissors
  },
  {
    key: 'nails',
    label: 'Nails',
    headline: 'Structured Gel & Extensions',
    description: 'Builder gel apex reinforcement, detailed cuticle grooming, and full nail extensions.',
    icon: Sparkle
  },
  {
    key: 'facial',
    label: 'Facials',
    headline: 'Esthetician Skin Care',
    description: 'Customized facial evaluations, deep pore cleansing, hydration infusions, and brow detailing.',
    icon: Droplets
  },
  {
    key: 'waxing',
    label: 'Waxing',
    headline: 'Precision Waxing Care',
    description: 'Specialized Brazilian waxing performed in private treatment suites with gentle hard wax.',
    icon: Flower2
  },
  {
    key: 'house-calls',
    label: 'House Calls',
    headline: 'Private On-Location Services',
    description: 'Dedicated on-location beauty appointments scheduled in advance for your private residence or venue.',
    icon: Home
  }
];

export const ServicesSection: React.FC = () => {
  const { services, openBookingModal } = useSalon();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  // Filtered services
  const displayedServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  // Grouped for structured layout when "all" is active
  const sectionsToRender = activeCategory === 'all'
    ? CATEGORY_TABS.filter(g => g.key !== 'all')
    : CATEGORY_TABS.filter(g => g.key === activeCategory);

  return (
    <div className="bg-[#FFF9F4] min-h-screen text-[#3B2A28]">
      
      {/* Editorial Luxury Header Banner */}
      <section className="relative py-16 sm:py-24 border-b border-[#C6A667]/25 overflow-hidden">
        {/* Ambient Subtle Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C6A667_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold bg-white/90 border border-[#C6A667]/35 px-4 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8E4B63]" />
            <span>The Glamway · Official Services Menu</span>
            <Sparkles className="w-3.5 h-3.5 text-[#8E4B63]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2A28] tracking-tight leading-tight">
            Curated Beauty Services
          </h1>

          <p className="text-base sm:text-lg text-[#3B2A28]/85 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our verified eyelash extensions, hair styling, structured nails, esthetician facials, waxing, and private house calls in Charlotte, North Carolina.
          </p>

          {/* Verified Location & Suite Notice */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#7C6862]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C6A667]" />
              <span>Private Charlotte Suites (Uptown &amp; Graham)</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C6A667]" />
              <span>Verified Service Durations</span>
            </span>
            <span>·</span>
            <span>No Public Prices Displayed</span>
          </div>
        </div>
      </section>

      {/* Category Navigation Filter Bar */}
      <div className="sticky top-20 sm:top-22 z-30 bg-[#FFF9F4]/95 backdrop-blur-md border-b border-[#C6A667]/25 py-3.5 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar">
          {CATEGORY_TABS.map(tab => {
            const Icon = tab.icon;
            const isSelected = activeCategory === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all flex items-center gap-2 whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-[#8E4B63] text-white border-[#8E4B63] shadow-sm'
                    : 'bg-white text-[#3B2A28] border-[#C6A667]/30 hover:border-[#8E4B63] hover:text-[#8E4B63]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C6A667]' : 'text-[#8E4B63]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area: Spacious Editorial Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16 sm:space-y-24">
        {sectionsToRender.map(group => {
          const groupServices = services.filter(s => s.category === group.key);
          if (groupServices.length === 0) return null;

          const Icon = group.icon;

          return (
            <section key={group.key} id={`category-${group.key}`} className="space-y-8">
              
              {/* Category Section Header */}
              <div className="border-b border-[#C6A667]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                    <Icon className="w-4 h-4 text-[#8E4B63]" />
                    <span>{group.label}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#3B2A28] font-bold">
                    {group.headline}
                  </h2>
                  <p className="text-sm sm:text-base text-[#7C6862] max-w-2xl font-light">
                    {group.description}
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-[#7C6862] uppercase tracking-wider shrink-0 font-medium">
                  {groupServices.length} {groupServices.length === 1 ? 'Service' : 'Services'}
                </div>
              </div>

              {/* Service Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop (1200-1280px max-width) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupServices.map(service => (
                  <div
                    key={service.id}
                    className="group bg-white border border-[#C6A667]/30 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-[#8E4B63]/60 hover:-translate-y-1"
                  >
                    
                    {/* Large Premium Service Photograph */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                      <img
                        src={service.image}
                        alt={`The Glamway - ${service.name}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                      {/* Duration Badge with Clock */}
                      <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 font-medium shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-[#C6A667]" />
                        <span>{service.durationMinutes} minutes</span>
                      </div>

                      {/* Category Label Pill */}
                      <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#8E4B63] text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-[#C6A667]/35 font-semibold shadow-sm">
                        {service.categoryLabel}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-2.5">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2A28] group-hover:text-[#8E4B63] transition-colors leading-snug">
                          {service.name}
                        </h3>

                        {service.tagline && (
                          <div className="text-xs sm:text-sm text-[#8E4B63] font-medium">
                            {service.tagline}
                          </div>
                        )}

                        <p className="text-[15px] sm:text-base text-[#3B2A28]/85 leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>

                      {/* Card Action Controls: Clean Full-Width Book Appointment Button */}
                      <div className="pt-5 border-t border-[#C6A667]/20">
                        <button
                          onClick={() => openBookingModal(service.id)}
                          className="w-full py-3.5 px-4 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-2 rounded-xs shadow-sm border border-[#C6A667]/40 hover:shadow-md"
                        >
                          <Calendar className="w-4 h-4 text-[#C6A667]" />
                          <span>Book Appointment</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

            </section>
          );
        })}

        {/* Informational Notice Footer */}
        <section className="bg-white border border-[#C6A667]/30 rounded-xs p-6 sm:p-8 space-y-2 text-center max-w-3xl mx-auto shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#8E4B63]" />
            <span>Appointment Information</span>
          </div>
          <p className="text-sm text-[#3B2A28]/85 leading-relaxed font-light">
            All beauty appointments are scheduled online in advance for private treatment suites at our Charlotte locations or via scheduled house calls. Illustrative photography represents beauty service categories.
          </p>
        </section>
      </main>

    </div>
  );
};
