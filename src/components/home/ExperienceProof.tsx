import React from 'react';
import { Star, ShieldCheck, Sparkles, Award } from 'lucide-react';

export const ExperienceProof: React.FC = () => {
  const editorialMentions = [
    {
      publication: 'Vogue Beauty',
      quote: 'The Glamway Beauty Salon has established an unprecedented standard of discreet luxury for women in North Carolina, pairing master color chemistry with private styling suites.'
    },
    {
      publication: 'Luxury Lifestyle Magazine',
      quote: 'The ultimate sanctuary for women who seek hair health, dermal precision, and attentive hospitality elevated to five-star standards.'
    },
    {
      publication: 'Harper’s Bazaar',
      quote: 'Their 24K gold couture manicures and caviar scalp infusions are the luxury prerequisite for North Carolina galas, weddings, and executive engagements.'
    }
  ];

  return (
    <section className="py-20 bg-[#FFF9F4] border-t border-[#C6A667]/25">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
            Recognized Excellence · FOR WOMEN
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] tracking-tight">
            Acclaimed by Leading Beauty Curators
          </h2>
        </div>

        {/* 3-Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorialMentions.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-[#C6A667]/25 rounded-xs shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex text-[#C6A667]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A667]" />
                  ))}
                </div>
                <blockquote className="font-serif text-base text-[#3B2A28] italic leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#3B2A28]/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#8E4B63]">
                {item.publication}
              </div>
            </div>
          ))}
        </div>

        {/* Hospital-Grade Safety & NC Board Compliance Guarantee */}
        <div className="bg-white border border-[#C6A667]/35 rounded-xs p-8 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#3B2A28]">Autoclave Sterilization</h3>
              <p className="text-xs text-[#A98F86] leading-relaxed">
                Hospital-grade autoclave pouches opened exclusively in front of each guest. 100% single-use nail files and buffers adhering to NC Board sanitation mandates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#3B2A28]">Clean Organic Formulations</h3>
              <p className="text-xs text-[#A98F86] leading-relaxed">
                Strictly ammonia-free, formaldehyde-free, and cruelty-free botanical infusions imported directly from certified French and European laboratories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#3B2A28]">NC Board Licensed Artisans</h3>
              <p className="text-xs text-[#A98F86] leading-relaxed">
                Every specialist holds verified active credentials with the North Carolina Board of Cosmetic Art Sciences with ongoing master aesthetic training.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
