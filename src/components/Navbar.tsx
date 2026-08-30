'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e5e0d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Furniture Store" 
                width={200} 
                height={60} 
                className="h-12 md:h-14 w-auto object-contain" 
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#3e2723] hover:text-[#b68d40] font-medium transition-colors">Home</Link>
            <Link href="/shop" className="text-[#3e2723] hover:text-[#b68d40] font-medium transition-colors">Shop</Link>
            <Link href="/shop" className="text-[#3e2723] hover:text-[#b68d40] font-medium transition-colors">Categories</Link>
            <Link href="/" className="text-[#3e2723] hover:text-[#b68d40] font-medium transition-colors">About Us</Link>
            <Link href="/" className="text-[#3e2723] hover:text-[#b68d40] font-medium transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-6 text-[#3e2723]">
            <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 border border-[#e5e0d8]">
              <input 
                type="text" 
                placeholder="Search furniture..." 
                className="bg-transparent border-none focus:outline-none text-sm w-48 text-[#3e2723] placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 ml-2" />
            </div>
            
            <button className="hover:text-[#b68d40] transition-colors"><User className="w-5 h-5" /></button>
            <button className="hover:text-[#b68d40] transition-colors"><Heart className="w-5 h-5" /></button>
            <Link href="/cart" className="relative hover:text-[#b68d40] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#b68d40] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
