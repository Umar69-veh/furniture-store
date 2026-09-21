'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/store/useCartStore';

export default function FeaturedProductsCarousel({ products }: { products: Product[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
    } else {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    // Scroll by slightly less than the full container width for a nice snap effect
    const scrollAmount = container.clientWidth * 0.8; 
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-[#0b192c]">Featured Products</h2>
          <p className="text-sm text-slate-500 mt-1 uppercase tracking-[0.2em] font-medium">Top picks for your space</p>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2"
      >
        {products.map((product) => {
          const originalPrice = product.price * 1.25; // mock original price
          return (
            <div 
              key={product.id} 
              className="group shrink-0 snap-start flex flex-col relative
                         w-[85vw] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)]"
            >
              {/* Image & Badges */}
              <div className="relative aspect-square bg-[#faf6f0] rounded-2xl overflow-hidden mb-4 border border-slate-100">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Discount Badge (Top Left) */}
                <div className="absolute top-3 left-3 bg-[#0b192c] text-white text-[10px] font-bold px-2.5 py-1 rounded-sm shadow-sm z-10 uppercase tracking-widest">
                  -25%
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4">
                  <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="flex-1 bg-white text-[#0b192c] hover:bg-[#ffb703] font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-lg">
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                    <button className="w-11 h-11 bg-white/20 hover:bg-white text-white hover:text-[#0b192c] backdrop-blur-md rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-lg border border-white/30">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col px-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1.5 font-bold">{product.category}</span>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-extrabold text-sm text-[#0b192c] line-clamp-2 hover:text-[#ffb703] transition-colors mb-2 leading-snug">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-[15px] font-black text-[#0b192c]">
                    Rs.{product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </span>
                  <span className="text-xs text-slate-400 line-through font-medium">
                    Rs.{originalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls & Progress */}
      <div className="flex items-center gap-6 mt-8">
        {/* Progress Bar */}
        <div className="flex-grow h-1.5 bg-slate-200 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-[#0b192c] transition-all duration-300 rounded-full"
            style={{ width: `${Math.max(scrollProgress, 5)}%` }}
          />
        </div>
        
        {/* Arrows */}
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#0b192c] hover:border-[#0b192c] hover:bg-[#0b192c] hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-[#0b192c] hover:border-[#0b192c] hover:bg-[#0b192c] hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
