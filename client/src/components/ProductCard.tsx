import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/store/useCartStore';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  // Mock a discount for the UI to match the "Sale" requirement
  const originalPrice = product.price * 1.35; // Mock 35% higher price
  const discountAmount = originalPrice - product.price;

  return (
    <div className="group flex flex-col items-center">
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="relative w-full aspect-square bg-[#faf6f0] overflow-hidden mb-4">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Sale Badge */}
        <div className="absolute top-0 right-0 bg-[#070f1e] text-white text-[10px] font-medium px-3 py-1.5 uppercase tracking-[0.2em] shadow-sm">
          Sale
        </div>
      </Link>

      {/* Text Content */}
      <div className="flex flex-col items-center text-center px-1 w-full">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-[11px] sm:text-xs text-[#0b192c] uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 hover:text-[#ffb703] transition-colors leading-relaxed line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-center gap-2 mb-1 w-full flex-wrap">
          <span className="text-[10px] sm:text-[11px] text-slate-400 line-through">
            Rs.{originalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#0b192c] font-medium">
            Rs.{product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </span>
        </div>
        
        <div className="text-[10px] sm:text-[11px] text-[#ffb703] font-bold">
          Save Rs.{discountAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        </div>
      </div>
    </div>
  );
}
