'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { products, storeInfo } from '@/lib/data';
import { Minus, Plus, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Phone } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug) || products[0];
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    alert(`${product.name} added to your cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" priority />
            <div className="absolute top-4 left-4 bg-[#0b192c] text-[#00c2ff] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00c2ff]/30">
              {product.category}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer border-2 hover:border-[#0066ff] border-slate-200 transition-colors">
                <Image src={product.image} alt={`${product.name} ${i}`} fill unoptimized className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6 pb-6 border-b border-slate-200">
            <span className="text-[#0066ff] font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b192c] mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-black text-[#0066ff]">PKR {product.price.toLocaleString()}</span>
              <div className="flex items-center text-amber-500 text-sm bg-amber-50 px-3 py-1 rounded-lg font-bold">
                {'★'.repeat(Math.floor(product.rating))}
                <span className="text-slate-600 ml-2 text-xs font-normal">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm">{product.description}</p>
          </div>

          <div className="space-y-3 mb-8 text-sm">
            <div className="flex">
              <span className="w-32 font-bold text-[#0b192c]">Material:</span>
              <span className="text-slate-600 font-medium">{product.material}</span>
            </div>
            <div className="flex">
              <span className="w-32 font-bold text-[#0b192c]">Dimensions:</span>
              <span className="text-slate-600 font-medium">{product.dimensions}</span>
            </div>
            <div className="flex">
              <span className="w-32 font-bold text-[#0b192c]">Availability:</span>
              <span className="text-emerald-600 font-bold">{product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}</span>
            </div>
            <div className="flex">
              <span className="w-32 font-bold text-[#0b192c]">Store Location:</span>
              <span className="text-slate-600 font-medium">{storeInfo.address}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-slate-200 text-slate-600 transition-colors rounded-l-xl">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-bold text-[#0b192c]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-slate-200 text-slate-600 transition-colors rounded-r-xl">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-[#0066ff] hover:bg-[#0055e6] text-white py-3.5 px-6 rounded-xl font-bold transition-all shadow-lg shadow-[#0066ff]/20 flex items-center justify-center gap-2 text-sm"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            <button className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-red-500 text-slate-400 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <a 
            href={`https://wa.me/${storeInfo.whatsapp}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0b192c] hover:bg-[#070f1e] text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm mb-8 shadow-md border border-slate-800"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            Inquire / Order via Call or WhatsApp: {storeInfo.phone}
          </a>

          <div className="grid grid-cols-3 gap-4 border border-slate-200 rounded-2xl p-4 bg-white shadow-sm">
            <div className="flex flex-col items-center text-center gap-1.5">
              <Truck className="w-5 h-5 text-[#0066ff]" />
              <span className="text-xs text-[#0b192c] font-bold">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span className="text-xs text-[#0b192c] font-bold">Quality Assured</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5">
              <RotateCcw className="w-5 h-5 text-[#00c2ff]" />
              <span className="text-xs text-[#0b192c] font-bold">Easy Inspection</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
