'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { products } from '@/lib/data';
import { Minus, Plus, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug) || products[0];
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    alert('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 hover:border-[#b68d40] border-transparent transition-colors">
                <Image src={product.image} alt={`${product.name} ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6 pb-6 border-b border-[#e5e0d8]">
            <p className="text-[#b68d40] font-medium mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-[#3e2723]">PKR {product.price.toLocaleString()}</span>
              <div className="flex items-center text-yellow-500 text-sm bg-yellow-50 px-2 py-1 rounded">
                {'★'.repeat(Math.floor(product.rating))}
                <span className="text-[#5d4037] ml-2 font-medium">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex text-sm">
              <span className="w-32 font-medium text-[#5d4037]">Material:</span>
              <span className="text-gray-600">{product.material}</span>
            </div>
            <div className="flex text-sm">
              <span className="w-32 font-medium text-[#5d4037]">Dimensions:</span>
              <span className="text-gray-600">{product.dimensions}</span>
            </div>
            <div className="flex text-sm">
              <span className="w-32 font-medium text-[#5d4037]">Availability:</span>
              <span className="text-green-600 font-medium">{product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center border border-[#e5e0d8] rounded-lg">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50 text-gray-600 transition-colors">
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-12 text-center font-medium text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50 text-gray-600 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-[#3e2723] hover:bg-[#b68d40] text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="p-3 border border-[#e5e0d8] rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-[#e5e0d8] rounded-xl p-4 bg-[#faf8f5]">
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-6 h-6 text-[#b68d40]" />
              <span className="text-xs text-[#5d4037] font-medium">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#b68d40]" />
              <span className="text-xs text-[#5d4037] font-medium">1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="w-6 h-6 text-[#b68d40]" />
              <span className="text-xs text-[#5d4037] font-medium">7 Days Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
