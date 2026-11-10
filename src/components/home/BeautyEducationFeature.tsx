import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { FOUNDER_INFO } from '../../data/salonData';
import { GraduationCap, Sparkles, ArrowRight, Check, Clock, MapPin } from 'lucide-react';

export const BeautyEducationFeature: React.FC = () => {
  const { setCurrentView } = useSalon();

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-[#C6A667]/25 relative overflow-hidden">
      
      {/* Subtle gold line & background aura */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F5D6DE]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#C6A667]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-[#FFF9F4] border border-[#C6A667]/35 rounded-xs p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle animated hairline accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6A667] via-[#8E4B63] to-[#C6A667]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C6A667]/40 shadow-xs">
                <GraduationCap className="w-4 h-4 text-[#8E4B63]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#8E4B63] font-bold">
                  Glamway Beauty Education
                </span>
                <span aria-hidden="true" className="text-[#C6A667]">·</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#3B2A28]/80 font-medium">
                  Charlotte, NC
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B2A28] tracking-tight leading-tight">
                  Master the Art of Professional Lash Artistry
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A667] rounded-full" />
              </div>

              <p className="text-sm sm:text-base text-[#3B2A28]/85 font-light leading-relaxed">
                Founded by licensed esthetician Summer Davis. The Glamway Beauty Education delivers structured, hands-on lash extension courses designed for aspiring beauty entrepreneurs and practicing artists seeking advanced volume mastery.
              </p>

              {/* 2 Verified Courses Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 bg-white border border-[#C6A667]/30 rounded-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#C6A667] font-bold">
                      Foundational Track
                    </span>
                    <span className="text-[11px] text-[#8E4B63] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>4 Hours</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#3B2A28]">
                    Beginner Lash Tech Course
                  </h3>
                  <p className="text-xs text-[#A98F86] leading-relaxed">
                    Sanitation, client safety, natural lash isolation, adhesive chemistry, and classic set placement.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#C6A667]/30 rounded-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#C6A667] font-bold">
                      Mastery Track
                    </span>
                    <span className="text-[11px] text-[#8E4B63] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>2 Hours</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#3B2A28]">
                    Advanced Volume Lashes Course
                  </h3>
                  <p className="text-xs text-[#A98F86] leading-relaxed">
                    Manual volume fan creation, weight-to-diameter balance, fast pickup, and retention optimization.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentView('training')}
                  className="px-6 py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all rounded-xs shadow-md border border-[#C6A667]/40 flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <span>View All Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A667]" />
                </button>

                <div className="text-xs text-[#A98F86] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>Conducted at Charlotte Locations</span>
                </div>
              </div>

            </div>

            {/* Right Media (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#C6A667]/40 p-3 rounded-xs bg-white shadow-xl">
                
                <div className="aspect-[4/5] rounded-xs overflow-hidden bg-[#D9B6A9]/20 relative">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                    alt="The Glamway Professional Lash Training"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/80 via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xs border border-[#C6A667]/40 text-xs text-white">
                    <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-bold">
                      Hands-On Charlotte Academy
                    </div>
                    <div className="font-serif text-sm font-semibold text-[#3B2A28]">
                      Summer Davis · Lead Instructor
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
