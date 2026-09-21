import Link from 'next/link';
import { Phone, MapPin, Award, CheckCircle } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#070f1e] text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066ff] to-[#0b192c] border border-[#ffb703] flex items-center justify-center p-1">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19h16M4 15h16M6 15v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-tight uppercase tracking-wider">
                  ABDULLAH
                </span>
                <span className="text-[9px] font-bold text-[#ffb703] uppercase tracking-tight">
                  FOAM, PLASTIC & OFFICE FURNITURE
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Your premier destination for high-quality office furniture, ergonomic executive chairs, orthopedic mattresses, durable plastic furniture, and executive sofa sets.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="bg-slate-800 text-[#ffb703] text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                Premium Quality
              </span>
              <span className="bg-slate-800 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                Best Prices
              </span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffb703]"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-[#ffb703] transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-[#ffb703] transition-colors">Shop All Catalog</Link></li>
              <li><Link href="/shop?category=Office%20Furniture" className="hover:text-[#ffb703] transition-colors">Office Solutions</Link></li>
              <li><Link href="/cart" className="hover:text-[#ffb703] transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffb703]"></span>
              Product Lines
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/shop?category=Office%20Furniture" className="hover:text-[#ffb703] transition-colors">Office Furniture & Desks</Link></li>
              <li><Link href="/shop?category=Executive%20Chairs" className="hover:text-[#ffb703] transition-colors">Executive Chairs</Link></li>
              <li><Link href="/shop?category=Foam%20%26%20Mattresses" className="hover:text-[#ffb703] transition-colors">Foam & Mattresses</Link></li>
              <li><Link href="/shop?category=Plastic%20Items" className="hover:text-[#ffb703] transition-colors">Plastic Furniture Items</Link></li>
              <li><Link href="/shop?category=Sofa%20Sets" className="hover:text-[#ffb703] transition-colors">Sofa Sets</Link></li>
              <li><Link href="/shop?category=Storage%20Solutions" className="hover:text-[#ffb703] transition-colors">Steel Storage Cabinets</Link></li>
            </ul>
          </div>

          {/* Contact Store */}
          <div id="contact">
            <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffb703]"></span>
              Visit / Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffb703] shrink-0 mt-0.5" />
                <span>{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ffb703] shrink-0" />
                <a href={`tel:${storeInfo.rawPhone}`} className="text-white font-bold hover:text-[#ffb703] transition-colors">
                  {storeInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#0066ff] shrink-0" />
                <span className="text-xs text-slate-300">Complete Solutions Under One Roof</span>
              </li>
            </ul>

            <div className="mt-5">
              <a 
                href={`https://wa.me/${storeInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#ffb703] hover:text-[#070f1e] text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all w-full text-center shadow-md"
              >
                <CheckCircle className="w-4 h-4" />
                WhatsApp Inquiry Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {storeInfo.name}. All rights reserved.</p>
          <p className="text-slate-400">Kharkhana Bazar, Near Meezan Bank, Vehari</p>
        </div>
      </div>
    </footer>
  );
}
