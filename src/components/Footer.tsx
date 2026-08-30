import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#3e2723] text-[#faf8f5] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="Furniture Store" 
                width={200} 
                height={60} 
                className="h-12 w-auto object-contain invert brightness-0 saturate-100" 
              />
            </div>
            <p className="text-[#e5e0d8] text-sm">
              Elevate your space with premium furniture. Discover timeless designs crafted for comfort, style and lasting quality.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#b68d40]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#e5e0d8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#b68d40]">Categories</h3>
            <ul className="space-y-2 text-sm text-[#e5e0d8]">
              <li><Link href="/shop" className="hover:text-white transition-colors">Chairs</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Tables</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Sofas</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Beds</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#b68d40]">Contact Us</h3>
            <ul className="space-y-2 text-sm text-[#e5e0d8]">
              <li>123 Furniture Street</li>
              <li>Design District, City 12345</li>
              <li>contact@furniturestore.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#5d4037] mt-12 pt-8 text-center text-sm text-[#e5e0d8]">
          <p>&copy; {new Date().getFullYear()} Furniture Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
