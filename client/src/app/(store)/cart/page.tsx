'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 bg-blue-50 text-[#0066ff] rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#0b192c] mb-3">Your Shopping Cart is Empty</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm">Explore our executive furniture, foam mattresses, plastic items, and office solutions.</p>
        <Link href="/shop" className="bg-[#0066ff] hover:bg-[#0055e6] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#0066ff]/20 inline-flex items-center gap-2">
          <span>Explore Store Catalog</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-[#0b192c] mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <ul className="divide-y divide-slate-100">
              {items.map((item) => (
                <li key={item.product.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 relative bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                    <Image src={item.product.image} alt={item.product.name} fill unoptimized className="object-cover" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <Link href={`/product/${item.product.id}`} className="font-bold text-base text-[#0b192c] hover:text-[#0066ff] transition-colors">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-slate-400 mb-2">{item.product.category}</p>
                    <p className="font-extrabold text-base text-[#0066ff]">PKR {item.product.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="p-2.5 hover:bg-slate-200 text-slate-600 rounded-l-xl transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-sm text-[#0b192c]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2.5 hover:bg-slate-200 text-slate-600 rounded-r-xl transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="p-2.5 text-slate-400 hover:text-red-500 transition-colors bg-slate-50 hover:bg-red-50 rounded-xl"
                      title="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-28 shadow-sm">
            <h2 className="text-lg font-bold text-[#0b192c] mb-4 pb-3 border-b border-slate-100">Order Summary</h2>
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-[#0b192c]">PKR {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery (Vehari / Nearby)</span>
                <span className="text-emerald-600 font-semibold">{getTotal() > 30000 ? 'FREE Delivery' : 'PKR 1,500'}</span>
              </div>
              <div className="border-t border-slate-100 pt-3 flex justify-between font-extrabold text-lg text-[#0b192c]">
                <span>Total Amount</span>
                <span className="text-[#0066ff]">PKR {(getTotal() > 30000 ? getTotal() : getTotal() + 1500).toLocaleString()}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout" 
              className="block w-full text-center bg-[#0066ff] hover:bg-[#0055e6] text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#0066ff]/20 text-sm"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
