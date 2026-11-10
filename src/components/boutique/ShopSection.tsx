import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ProductItem } from '../../types';
import { ShoppingBag, Star, Check } from 'lucide-react';

export const ShopSection: React.FC = () => {
  const { products, addToCart } = useSalon();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Formulations' },
    { key: 'skincare', label: 'Dermal Skincare' },
    { key: 'haircare', label: 'Haute Haircare' },
    { key: 'nailcare', label: 'Nail Couture' },
    { key: 'accessories', label: 'Silk Sleepwear' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-medium">
          Maison Aurélia Boutiques
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#302725] tracking-tight">
          Salon-Exclusive Formulations
        </h2>
        <p className="text-sm sm:text-base text-[#A48D84] font-light">
          Take home the exact French peptides, 24-karat gold botanicals, and grade-6A mulberry silk utilized in our private suites.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all whitespace-nowrap rounded-sm border ${
              activeCategory === cat.key
                ? 'bg-[#302725] text-white border-[#302725]'
                : 'bg-white text-[#302725]/70 border-[#C6A667]/20 hover:border-[#C6A667]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 4 Column Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="group bg-white border border-[#C6A667]/25 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#C6A667]"
          >
            {/* Product Image Frame */}
            <div className="relative aspect-square overflow-hidden bg-[#FAF8F5] p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[#302725] border border-[#C6A667]/30">
                {product.volume}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#A48D84] font-medium">
                  {product.brand}
                </div>
                <h3 className="font-serif text-base font-semibold text-[#302725] leading-snug line-clamp-2 group-hover:text-[#C6A667] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#A48D84] line-clamp-2">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="pt-2 space-y-1">
                  {product.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#302725]/80">
                      <Check className="w-3 h-3 text-[#C6A667] shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Add to Bag */}
              <div className="pt-4 border-t border-[#C6A667]/20 flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg font-bold text-[#302725] tabular-nums">
                    ${product.priceUSD}
                  </div>
                  <div className="flex items-center text-[#C6A667] text-[10px]">
                    <Star className="w-3 h-3 fill-[#C6A667]" />
                    <span className="ml-1 text-[#302725]">{product.rating}</span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-[#302725] hover:bg-[#C6A667] text-white text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
