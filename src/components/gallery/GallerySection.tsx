import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { Sparkles, Calendar, X, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'bridal' | 'nails' | 'skincare';
  categoryLabel: string;
  image: string;
  description: string;
  artist: string;
  serviceId?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Champagne Melt French Balayage',
    category: 'hair',
    categoryLabel: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
    description: 'Dimensional micro-weave balayage tailored with soft butter and champagne tones, sealed with a high-shine hyaluronic gloss.',
    artist: 'Camille De La Rosa',
    serviceId: 'srv-balayage-couture'
  },
  {
    id: 'gal-2',
    title: 'Couture Bridal Chignon & Pearl Veil',
    category: 'bridal',
    categoryLabel: 'Bridal Couture',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    description: 'Architectural romantic bridal updo structured for all-day ceremony hold with organic hair prep and hand-placed veil.',
    artist: 'Elena Vance',
    serviceId: 'srv-bridal-hair-veil'
  },
  {
    id: 'gal-3',
    title: 'Russian Dry Apex Gel & 24K Leafing',
    category: 'nails',
    categoryLabel: 'Nail Lounge',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
    description: 'Diamond cuticle micro-alignment with milky rose base and genuine 24-karat gold leaf micro-accents.',
    artist: 'Sophia Isabel Reyes',
    serviceId: 'srv-gold-couture-mani'
  },
  {
    id: 'gal-4',
    title: 'Dermal Hydra-Infusion Glass Glow',
    category: 'skincare',
    categoryLabel: 'Skincare Radiance',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    description: 'Post-facial luminescence achieved through triple-vortex hyaluronic acid extraction and botanical peptide infusions.',
    artist: 'Dr. Vivienne St. Claire',
    serviceId: 'srv-hydra-radiance'
  },
  {
    id: 'gal-5',
    title: 'Cascading Remy Tape-In Volume',
    category: 'hair',
    categoryLabel: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1200&q=85',
    description: '22-inch double-drawn human hair extensions color-blended into warm hazelnut undertones with seamless root transition.',
    artist: 'Camille De La Rosa',
    serviceId: 'srv-hair-extensions'
  },
  {
    id: 'gal-6',
    title: 'Private Suite Bridal Glow & Airbrush Finish',
    category: 'bridal',
    categoryLabel: 'Bridal Couture',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    description: 'Tear-proof waterproof HD airbrush bridal makeup highlighting sculpted cheekbones and delicate blush rose lips.',
    artist: 'Elena Vance',
    serviceId: 'srv-bridal-glam-suite'
  },
  {
    id: 'gal-7',
    title: 'Minimalist Chrome Glaze Almond Nails',
    category: 'nails',
    categoryLabel: 'Nail Lounge',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
    description: 'Clean sculpted almond silhouette finished with iridescent pearl glaze over soft peony pink foundation.',
    artist: 'Sophia Isabel Reyes',
    serviceId: 'srv-gel-architecture'
  },
  {
    id: 'gal-8',
    title: 'Caviar Silk Keratin Mirror Finish',
    category: 'hair',
    categoryLabel: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    description: 'Frizz-free silk press and amino-acid restoration demonstrating mirror reflection under ambient light.',
    artist: 'Camille De La Rosa',
    serviceId: 'srv-keratin-silk'
  },
  {
    id: 'gal-9',
    title: 'Featherweight Japanese Cashmere Lashes',
    category: 'skincare',
    categoryLabel: 'Skincare Radiance',
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=85',
    description: 'Bespoke eye architecture set with featherweight matte cashmere lash extensions that flutter effortlessly.',
    artist: 'Vivienne St. Claire',
    serviceId: 'srv-silk-lash-couture'
  }
];

export const GallerySection: React.FC = () => {
  const { openBookingModal } = useSalon();
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'bridal' | 'nails' | 'skincare'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          <span>THE GLAMWAY COUTURE PORTFOLIO</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
        </div>
        
        <h1 className="font-serif text-3xl sm:text-5xl text-[#3B2A28] tracking-tight">
          Artistry in Motion
        </h1>
        
        <p className="text-base sm:text-lg text-[#3B2A28]/80 font-light leading-relaxed max-w-2xl mx-auto">
          Explore a visual curation of haute coiffure, dimensional balayage, Russian structured manicures, and bespoke bridal transformations from our North Carolina sanctuaries.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
        {[
          { key: 'all', label: 'All Works' },
          { key: 'hair', label: 'Hair & Balayage' },
          { key: 'bridal', label: 'Couture Bridal' },
          { key: 'nails', label: 'Nail Lounge' },
          { key: 'skincare', label: 'Skincare & Lashes' }
        ].map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key as any)}
            className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-semibold transition-all rounded-xs border ${
              activeCategory === cat.key
                ? 'bg-[#8E4B63] text-white border-[#8E4B63] shadow-xs'
                : 'bg-[#FFF9F4] text-[#3B2A28]/80 border-[#C6A667]/30 hover:border-[#8E4B63] hover:text-[#8E4B63]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveLightbox(item)}
            className="group relative bg-white border border-[#C6A667]/25 rounded-xs overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden bg-[#D9B6A9]/20">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Gradient Overlay & Hover Details */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A28]/90 via-[#3B2A28]/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold mb-1">
                {item.categoryLabel}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 font-light mb-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <span className="text-[11px] text-[#F5D6DE]">Artisan: {item.artist}</span>
                <span className="text-xs text-[#C6A667] flex items-center gap-1 font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#FFF9F4] border border-[#C6A667]/50 rounded-xs max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 p-2 text-[#3B2A28] hover:text-[#8E4B63] rounded-full hover:bg-black/5 z-10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/5] bg-black/10">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                    {activeLightbox.categoryLabel} · Portfolio Work
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2A28] leading-snug">
                    {activeLightbox.title}
                  </h3>
                  <p className="text-sm text-[#3B2A28]/85 leading-relaxed font-light">
                    {activeLightbox.description}
                  </p>
                  
                  <div className="p-4 bg-white border border-[#C6A667]/25 rounded-xs space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#8E4B63] font-semibold">
                      Executed By Master Specialist:
                    </div>
                    <div className="text-sm font-serif font-bold text-[#3B2A28]">
                      {activeLightbox.artist}
                    </div>
                    <div className="text-xs text-[#A98F86]">
                      Available at both North Carolina Sanctuaries
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C6A667]/25 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveLightbox(null)}
                    className="px-4 py-2.5 border border-[#3B2A28]/20 text-xs uppercase tracking-wider font-semibold text-[#3B2A28] rounded-xs"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const srvId = activeLightbox.serviceId;
                      setActiveLightbox(null);
                      openBookingModal(srvId);
                    }}
                    className="px-6 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-xs shadow-md border border-[#C6A667]/40 flex items-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C6A667]" />
                    <span>Book This Look</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
