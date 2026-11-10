import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ShoppingBag, PackageX, Sparkles, Check } from 'lucide-react';

export const ShopSection: React.FC = () => {
  const { products, addToCart } = useSalon();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Strictly the 5 verified shopping categories from the original website
  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'lash-supplies', label: 'Lash Supplies' },
    { key: 'lash-trays', label: 'Lash Trays' },
    { key: 'shop-hair', label: 'Shop Hair' },
    { key: 'best-sellers', label: 'Best Sellers' },
    { key: 'wholesale', label: 'Wholesale' }
  ];

  // Best sellers list based on top verified products
  const bestSellerIds = ['prod-003-glue', 'prod-xl-trays', 'prod-diy-lash-kit'];

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'best-sellers') return bestSellerIds.includes(p.id);
    return p.category === activeCategory;
  });

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          <span>THE GLAMWAY SHOP · CHARLOTTE, NC</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] tracking-tight">
          Professional Lash &amp; Beauty Supplies
        </h1>
        <p className="text-sm sm:text-base text-[#A98F86] font-light">
          Official beauty retail by The Glamway. Providing professional lash artists and beauty clients with verified adhesives, extension trays, DIY kits, and wholesale orders.
        </p>
      </div>

      {/* 5 Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 sm:px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold transition-all whitespace-nowrap rounded-xs border shrink-0 ${
              activeCategory === cat.key
                ? 'bg-[#8E4B63] text-white border-[#8E4B63] shadow-sm'
                : 'bg-white text-[#3B2A28]/80 border-[#C6A667]/25 hover:border-[#8E4B63] hover:text-[#8E4B63]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center max-w-md mx-auto space-y-4 bg-white border border-[#C6A667]/25 p-8 rounded-xs">
          <div className="w-12 h-12 rounded-full bg-[#FFF9F4] border border-[#C6A667]/30 flex items-center justify-center mx-auto text-[#A98F86]">
            <PackageX className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#3B2A28]">
            No products are currently available in this category.
          </h3>
          <p className="text-xs text-[#A98F86] leading-relaxed">
            Please check back soon or browse our verified lash supplies and trays.
          </p>
          <button
            onClick={() => setActiveCategory('all')}
            className="px-5 py-2 bg-[#8E4B63] text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
          >
            View All Available Supplies
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white border border-[#C6A667]/25 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#C6A667]"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-[#FAF8F5] p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {product.specification && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-white/95 backdrop-blur-xs px-2 py-0.5 text-[#302725] border border-[#C6A667]/30">
                    {product.specification}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#C6A667] font-semibold">
                    {product.brand}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#3B2A28] leading-snug line-clamp-2 group-hover:text-[#8E4B63] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#A98F86] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Benefits */}
                  {product.keyBenefits && (
                    <div className="pt-2 space-y-1">
                      {product.keyBenefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#3B2A28]/80">
                          <Check className="w-3 h-3 text-[#C6A667] shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Add to Bag (No fabricated ratings or fake review counts) */}
                <div className="pt-4 border-t border-[#C6A667]/20 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-xl font-bold text-[#3B2A28] tabular-nums">
                      ${product.priceUSD.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-[#A98F86] uppercase tracking-wider">USD</div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors shadow-xs rounded-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
};
