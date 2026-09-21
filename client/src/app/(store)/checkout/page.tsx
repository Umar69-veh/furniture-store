'use client';

import { useCartStore } from '@/store/useCartStore';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Checkout successful! (Mock)');
    clearCart();
    window.location.href = '/';
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#3e2723]">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#3e2723] mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <form onSubmit={handleCheckout} className="bg-white border border-[#e5e0d8] rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-[#3e2723] mb-4 border-b border-[#e5e0d8] pb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#5d4037] mb-1">First Name</label>
                <input required type="text" className="w-full border border-[#e5e0d8] rounded-lg px-4 py-2 focus:ring-[#b68d40] focus:border-[#b68d40]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5d4037] mb-1">Last Name</label>
                <input required type="text" className="w-full border border-[#e5e0d8] rounded-lg px-4 py-2 focus:ring-[#b68d40] focus:border-[#b68d40]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#5d4037] mb-1">Email</label>
                <input required type="email" className="w-full border border-[#e5e0d8] rounded-lg px-4 py-2 focus:ring-[#b68d40] focus:border-[#b68d40]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#5d4037] mb-1">Address</label>
                <input required type="text" className="w-full border border-[#e5e0d8] rounded-lg px-4 py-2 focus:ring-[#b68d40] focus:border-[#b68d40]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5d4037] mb-1">City</label>
                <input required type="text" className="w-full border border-[#e5e0d8] rounded-lg px-4 py-2 focus:ring-[#b68d40] focus:border-[#b68d40]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5d4037] mb-1">Phone</label>
                <input required type="tel" className="w-full border border-[#e5e0d8] rounded-lg px-4 py-2 focus:ring-[#b68d40] focus:border-[#b68d40]" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#3e2723] mb-4 border-b border-[#e5e0d8] pb-4">Payment Method</h2>
            <div className="space-y-3 mb-8">
              <label className="flex items-center gap-3 p-3 border border-[#b68d40] rounded-lg bg-[#faf8f5] cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="text-[#b68d40] focus:ring-[#b68d40]" />
                <span className="font-medium text-[#3e2723]">Cash on Delivery</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-[#e5e0d8] rounded-lg cursor-pointer">
                <input type="radio" name="payment" className="text-[#b68d40] focus:ring-[#b68d40]" disabled />
                <span className="font-medium text-gray-500">Credit Card (Coming Soon)</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-[#3e2723] hover:bg-[#b68d40] text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Place Order
            </button>
          </form>
        </div>
        
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-[#f5f1eb] border border-[#e5e0d8] rounded-2xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-[#3e2723] mb-6">Your Order</h2>
            
            <ul className="space-y-4 mb-6">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4">
                  <div className="w-16 h-16 relative bg-white rounded flex-shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill unoptimized className="object-cover rounded" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-sm text-[#3e2723]">{item.product.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="font-semibold text-sm text-[#3e2723]">PKR {(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#e5e0d8] pt-4 space-y-2">
              <div className="flex justify-between text-sm text-[#5d4037]">
                <span>Subtotal</span>
                <span>PKR {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5d4037]">
                <span>Shipping</span>
                <span>{getTotal() > 20000 ? 'Free' : 'PKR 1,500'}</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between font-bold text-lg text-[#3e2723]">
                <span>Total</span>
                <span>PKR {(getTotal() > 20000 ? getTotal() : getTotal() + 1500).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
