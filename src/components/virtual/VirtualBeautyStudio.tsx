import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { HAIR_IMAGE, NAILS_IMAGE, FACIAL_IMAGE } from '../../data/salonData';
import { Sparkles, Palette, Eye, Bookmark, Check, ShieldAlert } from 'lucide-react';

export const VirtualBeautyStudio: React.FC = () => {
  const { openBookingModal, showToast } = useSalon();
  
  const [activeTab, setActiveTab] = useState<'hair' | 'makeup' | 'nails'>('hair');
  const [selectedHairShade, setSelectedHairShade] = useState('French Caramel Balayage');
  const [selectedLipShade, setSelectedLipShade] = useState('Rose Terracotta');
  const [selectedNailStyle, setSelectedNailStyle] = useState('24K Champagne Gold Leaf');

  const hairShades = [
    { name: 'French Caramel Balayage', hex: '#8B5A2B', description: 'Sun-kissed honey and warm mocha ribbons' },
    { name: 'Espresso Caviar Gloss', hex: '#261C19', description: 'Deep reflective cool-toned espresso' },
    { name: 'Champagne Blonde Tint', hex: '#D2B55B', description: 'Soft golden luminous platinum reflections' },
    { name: 'Muted Rose Bronde', hex: '#A36B63', description: 'Soft pink beige intertwined with brunette' }
  ];

  const lipShades = [
    { name: 'Rose Terracotta', hex: '#B86B65' },
    { name: 'Nude Velvet Nectar', hex: '#C49488' },
    { name: 'Midnight Bordeaux', hex: '#581825' },
    { name: 'Champagne Shimmer Gloss', hex: '#E2C4A2' }
  ];

  const nailStyles = [
    { name: '24K Champagne Gold Leaf', tag: 'Gold Couture' },
    { name: 'Micro-French Porcelain', tag: 'Minimalist' },
    { name: 'Blush Glazed Donut Chrome', tag: 'Glass Effect' },
    { name: 'Velvet Rose Ombré', tag: 'Airbrushed' }
  ];

  const handleSaveToProfile = () => {
    showToast('Look saved to your Aurélia Beauty Profile!');
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-medium">
          Digital Atelier
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#302725] tracking-tight">
          Virtual Beauty Lookbook &amp; Shade Visualizer
        </h2>
        <p className="text-sm sm:text-base text-[#9D8980] font-light">
          Simulate signature pigment tones, lip finishes, and nail couture architecture before entering your private suite.
        </p>
      </div>

      {/* Tab Selector */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setActiveTab('hair')}
          className={`px-5 py-2 text-xs uppercase tracking-wider font-medium border rounded-sm transition-all ${
            activeTab === 'hair'
              ? 'bg-[#302725] text-white border-[#302725]'
              : 'bg-white text-[#302725] border-[#C6A667]/30 hover:border-[#C6A667]'
          }`}
        >
          Hairstyle &amp; Balayage
        </button>
        <button
          onClick={() => setActiveTab('makeup')}
          className={`px-5 py-2 text-xs uppercase tracking-wider font-medium border rounded-sm transition-all ${
            activeTab === 'makeup'
              ? 'bg-[#302725] text-white border-[#302725]'
              : 'bg-white text-[#302725] border-[#C6A667]/30 hover:border-[#C6A667]'
          }`}
        >
          Lip &amp; Complexion
        </button>
        <button
          onClick={() => setActiveTab('nails')}
          className={`px-5 py-2 text-xs uppercase tracking-wider font-medium border rounded-sm transition-all ${
            activeTab === 'nails'
              ? 'bg-[#302725] text-white border-[#302725]'
              : 'bg-white text-[#302725] border-[#C6A667]/30 hover:border-[#C6A667]'
          }`}
        >
          Nail Couture Studio
        </button>
      </div>

      {/* Interactive Visualizer Canvas (2 Columns) */}
      <div className="bg-white border border-[#C6A667]/30 rounded-sm shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left: Preview Canvas */}
        <div className="lg:col-span-6 relative aspect-square sm:aspect-auto sm:min-h-[460px] bg-[#FAF8F5] flex items-center justify-center p-8">
          <img
            src={activeTab === 'hair' ? HAIR_IMAGE : activeTab === 'makeup' ? FACIAL_IMAGE : NAILS_IMAGE}
            alt="Virtual Beauty Simulation"
            className="w-full h-full object-cover rounded-sm shadow-md transition-all duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Active selection tag overlay */}
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-[#C6A667]/30 rounded-sm flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-semibold">
                Simulated Architecture
              </div>
              <div className="font-serif text-base text-[#302725] font-semibold">
                {activeTab === 'hair' && selectedHairShade}
                {activeTab === 'makeup' && selectedLipShade}
                {activeTab === 'nails' && selectedNailStyle}
              </div>
            </div>
            <button
              onClick={handleSaveToProfile}
              className="p-2 bg-[#FAF8F5] border border-[#C6A667]/40 text-[#302725] hover:bg-[#C6A667] hover:text-white rounded-xs transition-colors"
              title="Save to your lookbook"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Palettes & Controls */}
        <div className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6">
          
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A48D84]">Interactive Palette</span>
              <h3 className="font-serif text-2xl text-[#302725] font-semibold">
                {activeTab === 'hair' && 'Balayage Pigment Formulation'}
                {activeTab === 'makeup' && 'Velvet Lip Shade Customization'}
                {activeTab === 'nails' && 'Nail Architecture & Texture'}
              </h3>
            </div>

            {/* Hair Shade Options */}
            {activeTab === 'hair' && (
              <div className="space-y-3">
                {hairShades.map(shade => (
                  <button
                    key={shade.name}
                    onClick={() => setSelectedHairShade(shade.name)}
                    className={`w-full p-3.5 border rounded-sm flex items-center justify-between text-left transition-all ${
                      selectedHairShade === shade.name
                        ? 'border-[#C6A667] bg-[#FAF8F5] shadow-xs'
                        : 'border-[#302725]/10 bg-white hover:border-[#C6A667]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: shade.hex }}
                      />
                      <div>
                        <div className="text-xs font-semibold text-[#302725]">{shade.name}</div>
                        <div className="text-[11px] text-[#A48D84]">{shade.description}</div>
                      </div>
                    </div>
                    {selectedHairShade === shade.name && (
                      <Check className="w-4 h-4 text-[#C6A667]" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Lip Options */}
            {activeTab === 'makeup' && (
              <div className="grid grid-cols-2 gap-3">
                {lipShades.map(shade => (
                  <button
                    key={shade.name}
                    onClick={() => setSelectedLipShade(shade.name)}
                    className={`p-3.5 border rounded-sm flex items-center gap-3 text-left transition-all ${
                      selectedLipShade === shade.name
                        ? 'border-[#C6A667] bg-[#FAF8F5]'
                        : 'border-[#302725]/10 bg-white'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-white shadow-xs shrink-0"
                      style={{ backgroundColor: shade.hex }}
                    />
                    <div className="text-xs font-medium text-[#302725]">{shade.name}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Nail Options */}
            {activeTab === 'nails' && (
              <div className="space-y-3">
                {nailStyles.map(style => (
                  <button
                    key={style.name}
                    onClick={() => setSelectedNailStyle(style.name)}
                    className={`w-full p-3.5 border rounded-sm flex items-center justify-between text-left transition-all ${
                      selectedNailStyle === style.name
                        ? 'border-[#C6A667] bg-[#FAF8F5]'
                        : 'border-[#302725]/10 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#302725]">{style.name}</div>
                      <div className="text-[11px] text-[#C6A667]">{style.tag}</div>
                    </div>
                    {selectedNailStyle === style.name && (
                      <Check className="w-4 h-4 text-[#C6A667]" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="text-[11px] text-[#A48D84] flex items-center gap-1.5 pt-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#C6A667]" />
              <span>Digital simulation for aesthetic reference. Stylist will calibrate pigment precisely to your hair or skin undertones during diagnosis.</span>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-6 border-t border-[#C6A667]/20 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3 bg-[#302725] hover:bg-[#C6A667] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Book This Exact Concept
            </button>
            <button
              onClick={handleSaveToProfile}
              className="text-xs text-[#C6A667] hover:text-[#302725] font-semibold underline underline-offset-4"
            >
              Save to Lookbook
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
