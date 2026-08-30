import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/store/useCartStore';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl bg-white overflow-hidden border border-[#e5e0d8] hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <div className="p-5">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-lg text-[#3e2723] mb-1 hover:text-[#b68d40] transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg text-[#3e2723]">PKR {product.price.toLocaleString()}</span>
          <div className="flex items-center text-sm text-yellow-500">
            {'★'.repeat(Math.floor(product.rating))}
            <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
          </div>
        </div>
        
        <Link href={`/product/${product.id}`} className="block w-full text-center bg-[#f5f1eb] hover:bg-[#3e2723] text-[#3e2723] hover:text-white border border-[#e5e0d8] hover:border-[#3e2723] font-medium py-2 rounded-lg transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
}
