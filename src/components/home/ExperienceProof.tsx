import React from 'react';
import { ShieldCheck, Sparkles, GraduationCap, Clock } from 'lucide-react';

export const ExperienceProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF9F4] border-t border-[#C6A667]/25">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
            THE GLAMWAY STANDARDS · CHARLOTTE, NC
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] tracking-tight">
            Our Commitment to Quality &amp; Safety
          </h2>
          <p className="text-sm text-[#A98F86] font-light">
            Founded by licensed esthetician Summer Davis. Combining professional lash techniques, licensed skincare, and verified beauty supplies.
          </p>
        </div>

        {/* 4 Pillars Grid (No fabricated quotes or star ratings) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#C6A667]/25 rounded-xs space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
              <Sparkles className="w-5 h-5 text-[#C6A667]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3B2A28]">
              Lash Extension Mastery
            </h3>
            <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
              Expert classic, hybrid, and volume lash application tailored to natural lash strength and eye geometry.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#C6A667]/25 rounded-xs space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
              <ShieldCheck className="w-5 h-5 text-[#C6A667]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3B2A28]">
              Licensed Esthetician
            </h3>
            <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
              Summer Davis holds her esthetician license (2018), ensuring all facial and skin services follow strict hygiene standards.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#C6A667]/25 rounded-xs space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
              <GraduationCap className="w-5 h-5 text-[#C6A667]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3B2A28]">
              Verified Education
            </h3>
            <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
              Structured 4-hour Beginner Lash Tech Course and 2-hour Advanced Volume Course with hands-on coaching in Charlotte, NC.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#C6A667]/25 rounded-xs space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
              <Clock className="w-5 h-5 text-[#C6A667]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3B2A28]">
              Appointment Policy
            </h3>
            <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
              All appointments are reserved online with a 24-hour advance notice cancellation policy to respect client and artist time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
