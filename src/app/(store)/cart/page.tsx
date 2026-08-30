'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#3e2723] mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added any furniture to your cart yet.</p>
        <Link href="/shop" className="bg-[#3e2723] hover:bg-[#b68d40] text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#3e2723] mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <div className="bg-white border border-[#e5e0d8] rounded-2xl overflow-hidden">
            <ul className="divide-y divide-[#e5e0d8]">
              {items.map((item) => (
                <li key={item.product.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <Link href={`/product/${item.product.id}`} className="font-semibold text-lg text-[#3e2723] hover:text-[#b68d40]">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                    <p className="font-bold text-[#3e2723]">PKR {item.product.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#e5e0d8] rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-gray-50 text-gray-600 rounded-l-lg transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-50 text-gray-600 rounded-r-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
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
          <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-[#3e2723] mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>PKR {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{getTotal() > 20000 ? 'Free' : 'PKR 1,500'}</span>
              </div>
              <div className="border-t border-[#e5e0d8] pt-3 flex justify-between font-bold text-lg text-[#3e2723]">
                <span>Total</span>
                <span>PKR {(getTotal() > 20000 ? getTotal() : getTotal() + 1500).toLocaleString()}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout" 
              className="block w-full text-center bg-[#3e2723] hover:bg-[#b68d40] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
