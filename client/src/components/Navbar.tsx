'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, MapPin, Shield, ChevronDown, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { storeInfo } from '@/lib/data';

/* ─── Theme tokens (single source of truth) ─────────────────────────────
   navy  : #0F172A   amber : #F5B335
   cream : #F8F5EE   white : #FFFFFF
   red   : #E53935   gray  : #6B7280
──────────────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md flex flex-col w-full relative">

      {/* ── TOP BAR: navy bg, white text, amber hovers ─────────────── */}
      <div className="bg-[#0F172A] text-white text-[11px] font-medium py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">

          {/* Left: quick links */}
          <div className="flex items-center gap-6">
            <Link href="/about"   className="hover:text-[#F5B335] transition-colors">About Us</Link>
            <Link href="#contact" className="hover:text-[#F5B335] transition-colors">Contact Us</Link>
            <Link href="/blogs"   className="hover:text-[#F5B335] transition-colors">Blogs</Link>
            <Link href="/faqs"    className="hover:text-[#F5B335] transition-colors">FAQs</Link>
          </div>

          {/* Right: social icons | location | admin badge */}
          <div className="flex items-center gap-4">

            {/* Social icons — white, amber on hover */}
            <div className="flex items-center gap-3 pr-4 border-r border-white/20">
              {/* Facebook */}
              <Link href="#" className="text-white hover:text-[#F5B335] transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="text-white hover:text-[#F5B335] transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="text-white hover:text-[#F5B335] transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </Link>
            </div>

            {/* Location — amber icon */}
            <span className="flex items-center gap-1 text-white">
              <MapPin className="w-3.5 h-3.5 text-[#F5B335]" />
              <span>{storeInfo.address}</span>
            </span>

            {/* Admin badge — amber bg, navy text */}
            <Link
              href="/admin"
              className="flex items-center gap-1 font-bold text-[#0F172A] bg-[#F5B335] hover:bg-white px-2.5 py-0.5 rounded text-[10px] transition-colors ml-1"
            >
              <Shield className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER: cream bg ──────────────────────────────────── */}
      <div className="bg-[#F8F5EE] border-b border-[#6B7280]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 gap-8">

            {/* Logo — actual logo image + navy text, amber tagline */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform border-2 border-[#F5B335]">
                  <Image
                    src="/logo2.png"
                    alt="Abdullah Foam, Plastic & Office Furniture Logo"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-wider text-[#0F172A] leading-tight uppercase group-hover:text-[#F5B335] transition-colors">
                    ABDULLAH
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-[#F5B335] leading-none uppercase">
                    FOAM, PLASTIC &amp; FURNITURE
                  </span>
                </div>
              </Link>
            </div>

            {/* Search Bar — white bg, gray border, amber focus ring, navy icon */}
            <div className="hidden md:flex flex-grow max-w-2xl relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-white border border-[#6B7280]/30 rounded-full py-3 px-6 text-sm text-[#0F172A] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F5B335] focus:border-transparent shadow-sm transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F172A] hover:text-[#F5B335] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Actions — navy icons, amber hover; cart badge amber bg + navy text */}
            <div className="flex items-center space-x-6 text-[#0F172A]">
              <Link href="/admin" className="hidden lg:flex items-center gap-2 hover:text-[#F5B335] font-medium text-sm transition-colors">
                <User className="w-5 h-5" />
                <span>Sign in/ Register</span>
              </Link>

              <Link href="/cart" className="relative hover:text-[#F5B335] transition-colors p-1" title="Shopping Cart">
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#F5B335] text-[#0F172A] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── NAV ROW: white bg, navy links, amber underline hover ────── */}
      <nav className="bg-white border-b border-[#6B7280]/20 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 justify-between">
            <div className="hidden md:flex space-x-8 items-center h-full">

              <Link href="/" className="text-[#0F172A] hover:text-[#F5B335] border-b-2 border-transparent hover:border-[#F5B335] font-bold text-[13px] h-full flex items-center transition-all">
                Home
              </Link>

              {/* Products mega-menu trigger */}
              <div
                className="h-full flex items-center group"
                onMouseEnter={() => setIsProductsHovered(true)}
                onMouseLeave={() => setIsProductsHovered(false)}
              >
                <button className="text-[#0F172A] group-hover:text-[#F5B335] font-bold text-[13px] h-full flex items-center gap-1 transition-all border-b-2 border-transparent group-hover:border-[#F5B335]">
                  Products <ChevronDown className="w-4 h-4 text-[#0F172A] group-hover:text-[#F5B335]" />
                </button>

                {/* ── DROPDOWN MENU: white bg, navy text, cream hover, amber left border ── */}
                {isProductsHovered && (
                  <div className="absolute top-14 left-0 w-full bg-white border-b border-[#6B7280]/20 shadow-xl z-50">
                    <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                      {[
                        {
                          heading: 'Beds',
                          items: ['Single Bed', 'Double Bed'],
                          subheading: 'Decor',
                          subItems: ['Lamps', 'Mirrors', 'Console', 'Others'],
                        },
                        {
                          heading: 'Sofas',
                          items: ['L Shape Sofas', 'Drawing Room Sofas', 'Sofa Cum Bed', 'Divans', 'Setties'],
                          subheading: 'Packages',
                          subItems: ['Wedding Packages', 'Entire Home Packages'],
                        },
                        {
                          heading: 'Tables',
                          items: ['Center table', 'Dining Table', 'Dressing Tables', 'Tea Trolly'],
                        },
                        {
                          heading: 'Chairs',
                          items: ['Bedroom Chairs', 'Executive Chairs'],
                        },
                      ].map((col) => (
                        <div key={col.heading}>
                          <h4 className="font-extrabold text-[#0F172A] text-base mb-4">{col.heading}</h4>
                          <ul className="space-y-2.5 text-sm font-medium">
                            {col.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href="/shop"
                                  className="text-[#6B7280] hover:text-[#0F172A] hover:bg-[#F8F5EE] hover:border-l-4 hover:border-[#F5B335] pl-0 hover:pl-2 block rounded-r-sm transition-all duration-150"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {col.subheading && (
                            <>
                              <h4 className="font-extrabold text-[#0F172A] text-base mt-8 mb-4">{col.subheading}</h4>
                              <ul className="space-y-2.5 text-sm font-medium">
                                {col.subItems!.map((item) => (
                                  <li key={item}>
                                    <Link
                                      href="/shop"
                                      className="text-[#6B7280] hover:text-[#0F172A] hover:bg-[#F8F5EE] hover:border-l-4 hover:border-[#F5B335] pl-0 hover:pl-2 block rounded-r-sm transition-all duration-150"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/shop" className="text-[#0F172A] hover:text-[#F5B335] border-b-2 border-transparent hover:border-[#F5B335] font-bold text-[13px] h-full flex items-center gap-1 transition-all">
                Categories <ChevronDown className="w-4 h-4 text-[#0F172A]" />
              </Link>
              <Link href="/shop" className="text-[#0F172A] hover:text-[#F5B335] border-b-2 border-transparent hover:border-[#F5B335] font-bold text-[13px] h-full flex items-center transition-all">
                Full Collection
              </Link>
              <Link href="/shop" className="text-[#0F172A] hover:text-[#F5B335] border-b-2 border-transparent hover:border-[#F5B335] font-bold text-[13px] h-full flex items-center gap-1 transition-all">
                Wedding Packages <ChevronDown className="w-4 h-4 text-[#0F172A]" />
              </Link>
              <Link href="/shop" className="text-[#0F172A] hover:text-[#F5B335] border-b-2 border-transparent hover:border-[#F5B335] font-bold text-[13px] h-full flex items-center gap-1 transition-all">
                Home Packages <ChevronDown className="w-4 h-4 text-[#0F172A]" />
              </Link>
              {/* Special Sale stays red */}
              <Link href="/shop" className="text-[#E53935] hover:text-red-700 font-extrabold text-[13px] h-full flex items-center transition-colors">
                Special Sale ✦
              </Link>
            </div>

            <div>
              <Link href="#contact" className="text-[#0F172A] font-black text-[13px] flex items-center gap-1 hover:text-[#F5B335] transition-colors">
                Visit our Showroom <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
