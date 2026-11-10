import React from 'react';
import { Star, ShieldCheck, Sparkles, Award } from 'lucide-react';

export const ExperienceProof: React.FC = () => {
  const editorialMentions = [
    {
      publication: 'Charleston Magazine',
      quote: 'Aurélia has established an unprecedented standard of discreet luxury on King Street, pairing French color chemistry with private suites designed for Lowcountry living.'
    },
    {
      publication: 'Southern Living',
      quote: 'The ultimate sanctuary for women who seek hair health, dermal precision, and Southern hospitality elevated to five-star hospitality standards.'
    },
    {
      publication: 'Harper’s Bazaar',
      quote: 'Their 24K gold couture manicures and caviar scalp infusions are the red-carpet prerequisite for Charleston’s galas and weddings.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#C6A667]/20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-medium">
            Recognized Excellence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#302725] tracking-tight">
            Acclaimed by Leading Beauty Editors
          </h2>
        </div>

        {/* 3-Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorialMentions.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-[#C6A667]/25 rounded-sm shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex text-[#C6A667]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A667]" />
                  ))}
                </div>
                <blockquote className="font-serif text-base text-[#302725] italic leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#302725]/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#A48D84]">
                {item.publication}
              </div>
            </div>
          ))}
        </div>

        {/* Hospital-Grade Safety & SC LLR Compliance Guarantee */}
        <div className="bg-white border border-[#C6A667]/35 rounded-sm p-8 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#302725]">Autoclave Sterilization</h3>
              <p className="text-xs text-[#A48D84] leading-relaxed">
                Hospital-grade autoclave pouches opened exclusively in front of each guest. 100% single-use nail files and buffers adhering to SC LLR sanitation mandates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#302725]">Clean Organic Formulations</h3>
              <p className="text-xs text-[#A48D84] leading-relaxed">
                Strictly ammonia-free, formaldehyde-free, and cruelty-free botanical infusions imported directly from France and certified laboratories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#302725]">SC LLR Licensed Artisans</h3>
              <p className="text-xs text-[#A48D84] leading-relaxed">
                Every specialist holds verified active credentials with the South Carolina Board of Cosmetology &amp; Esthetics with ongoing European training.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
