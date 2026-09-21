import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Phone, 
  MapPin, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Briefcase, 
  Armchair, 
  Bed, 
  Sofa, 
  Box, 
  Users,
  Truck
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel';
import { products, categories, storeInfo } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  const categoryIcons: Record<string, any> = {
    'Office Furniture': Briefcase,
    'Executive Chairs': Armchair,
    'Foam & Mattresses': Bed,
    'Plastic Items': Sparkles,
    'Sofa Sets': Sofa,
    'Storage Solutions': Box,
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* 1. Full-Width Hero Section with Dark Overlay */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#070f1e] text-white overflow-hidden border-b border-slate-800">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt="Luxury Office & Living Room Furniture"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 backdrop-brightness-90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="max-w-2xl space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffb703]/20 border border-[#ffb703]/50 px-4 py-1.5 rounded-full text-xs font-black text-[#ffb703] backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#ffb703]" />
              <span>TRUSTED QUALITY • BEST VALUE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] via-sky-300 to-[#ffb703]">YOUR OFFICE</span> Into A <span className="text-[#ffb703]">PREMIUM WORKSPACE</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Design Your Office, Define Your Success. Discover high-grade executive desks, ergonomic chairs, orthopedic foam mattresses, durable plastic furniture, luxury sofa sets, and heavy-duty storage cabinets under one roof!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <Link 
                href="/shop" 
                className="bg-[#0066ff] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-base"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a 
                href={`tel:${storeInfo.rawPhone}`} 
                className="bg-white/10 hover:bg-[#ffb703] text-white hover:text-[#070f1e] backdrop-blur-md font-extrabold px-6 py-4 rounded-xl border border-white/20 hover:border-[#ffb703] transition-all flex items-center gap-2 text-base"
              >
                <Phone className="w-5 h-5 text-[#ffb703]" />
                <span>Call: {storeInfo.phone}</span>
              </a>
            </div>

            {/* Store Location Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#ffb703]" />
              <span>Store Address: <strong className="text-white">{storeInfo.address}</strong></span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Shop by Category Marquee */}
      <section className="w-full bg-[#faf6f0] py-8 border-y border-slate-200 overflow-hidden relative">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[...categories, ...categories, ...categories, ...categories].map((category, idx) => {
            const IconComponent = categoryIcons[category.name] || Layers;
            return (
              <Link 
                key={`${category.name}-${idx}`} 
                href={`/shop?category=${encodeURIComponent(category.name)}`} 
                className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[160px] mx-4 group"
              >
                <div className="text-[#0b192c] group-hover:text-[#ffb703] transition-colors mb-3">
                  <IconComponent className="w-10 h-10 stroke-1" />
                </div>
                <h3 className="font-medium text-sm text-[#0b192c] group-hover:text-[#ffb703] transition-colors text-center">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Bento Promotions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 min-h-[500px]">
          {/* Left Large Card */}
          <div className="relative rounded-3xl overflow-hidden group min-h-[400px] lg:min-h-full flex flex-col justify-between p-8 md:p-10 border border-slate-200 shadow-sm hover:border-[#ffb703] transition-colors">
            <Image 
              src="https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1000&q=80" 
              alt="Minimal Beds" 
              fill 
              unoptimized 
              className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" 
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070f1e]/80 via-[#070f1e]/40 to-transparent z-10 pointer-events-none"></div>
            
            <div className="relative z-20 max-w-md space-y-4">
              <span className="text-white font-bold text-sm tracking-wide">Hot deal</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Minimal Beds</h2>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                Discover modern minimal beds crafted for comfort, elegance, and timeless bedroom style.
              </p>
              <div className="pt-2">
                <Link 
                  href="/shop?category=Foam%20%26%20Mattresses" 
                  className="inline-flex items-center justify-center bg-white text-[#0b192c] hover:bg-[#ffb703] hover:text-[#070f1e] font-extrabold px-8 py-3.5 rounded-full transition-all shadow-lg"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Carousel Indicators (Mock) */}
            <div className="relative z-20 flex items-center justify-center gap-3 mt-12 lg:mt-0">
              <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors">
                <span className="sr-only">Previous</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div className="flex gap-2">
                <div className="w-6 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
              </div>
              <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors">
                <span className="sr-only">Next</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Right 4-Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-full">
            {[
              { title: "Luxury wooden bed", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
              { title: "Modern Design", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" },
              { title: "Fancy Centerd", image: "https://images.unsplash.com/photo-1533090368676-1fd25485d88e?w=500&q=80" },
              { title: "Royal Look", image: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&q=80" }
            ].map((item, i) => (
              <Link href="/shop" key={i} className="relative rounded-2xl md:rounded-3xl overflow-hidden group min-h-[200px] border border-slate-200 hover:border-[#ffb703] transition-colors shadow-sm flex items-end justify-center pb-6">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  unoptimized 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 pointer-events-none"></div>
                <h3 className="relative z-20 text-white font-bold text-sm md:text-base text-center px-4 leading-tight">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Products Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <FeaturedProductsCarousel products={products.slice(0, 10)} />
      </section>

      {/* 4. Complete Office Solutions Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-[#0b192c] via-[#070f1e] to-[#0d2342] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-[#ffb703] text-[#070f1e] text-xs font-black px-3 py-1 rounded-md uppercase tracking-wide">
                Under One Roof!
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                COMPLETE OFFICE FURNITURE SOLUTIONS
              </h2>

              <p className="text-slate-300 text-sm max-w-xl">
                We supply complete setup furniture for corporate offices, reception desks, conference rooms, executive suites, and educational institutes in Vehari and surrounding areas.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
                  <span>Executive Chairs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
                  <span>Executive Tables</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
                  <span>Work Stations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
                  <span>Meeting Tables</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
                  <span>Steel & Wooden Cabinets</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ffb703]" />
                  <span>Mattresses & Foam</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 text-center bg-slate-900/90 p-6 rounded-2xl border border-slate-700 shadow-lg">
              <h3 className="font-bold text-lg text-white">Visit Our Store Today</h3>
              <p className="text-xs text-slate-400">
                Kharkhana Bazar, Near Meezan Bank, Vehari
              </p>
              
              <a 
                href={`tel:${storeInfo.rawPhone}`} 
                className="bg-[#0066ff] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call: {storeInfo.phone}
              </a>

              <a 
                href={`https://wa.me/${storeInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>WhatsApp Order</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Explore Interior Inspirations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#faf6f0] py-12 rounded-3xl mt-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4 px-2">
          <h2 className="text-3xl font-extrabold text-[#0b192c]">Explore Interior Inspirations</h2>
          <Link href="/shop" className="bg-[#ffb703] hover:bg-[#d97706] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-sm inline-flex justify-center shrink-0 w-fit">
            Shop Now
          </Link>
        </div>
        
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[85vw] sm:min-w-[600px] h-[400px] shrink-0 snap-start relative rounded-2xl overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Inspiration 1" />
            <div className="absolute bottom-4 right-4 bg-white text-[#0b192c] font-bold px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>4 items</span>
            </div>
          </div>
          <div className="min-w-[85vw] sm:min-w-[400px] h-[400px] shrink-0 snap-start relative rounded-2xl overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1618220179428-22790b46a015?w=800&q=80" fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Inspiration 2" />
            <div className="absolute top-4 left-4 bg-[#0b192c] text-white p-2 rounded-lg shadow-lg">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="absolute bottom-4 right-4 bg-white text-[#0b192c] font-bold px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>5 items</span>
            </div>
          </div>
          <div className="min-w-[85vw] sm:min-w-[500px] h-[400px] shrink-0 snap-start relative rounded-2xl overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80" fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Inspiration 3" />
            <div className="absolute bottom-4 right-4 bg-white text-[#0b192c] font-bold px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>3 items</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-[#0b192c]">What Our Clients Say</h2>
          <p className="text-slate-500 text-sm mt-1">Trusted by businesses, offices, and homeowners in Vehari</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              name: "Tariq Mahmood", 
              role: "Corporate Office Manager", 
              quote: "Abdullah Foam & Office Furniture furnished our entire 12-person workstation in Vehari. The quality of the executive chairs and desks is outstanding!", 
              rating: 5 
            },
            { 
              name: "Dr. Usman Raza", 
              role: "Clinic Director", 
              quote: "Bought orthopedic foam mattresses and plastic waiting chairs. Highly durable materials and exceptional customer service.", 
              rating: 5 
            },
            { 
              name: "Muhammad Ahsan", 
              role: "Business Owner", 
              quote: "Best prices for executive sofa sets and filing cabinets. The finishing and solid build really transformed our office space.", 
              rating: 5 
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#ffb703] transition-all flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-3 text-[#ffb703]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <h4 className="font-bold text-sm text-[#0b192c]">{testimonial.name}</h4>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "Why Choose Us" / "Crafted for Comfort" Section (Moved to Last Place Before Footer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-[#ffb703]/10 border border-[#ffb703]/30 px-3.5 py-1 rounded-full text-[11px] font-black text-[#ffb703] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#ffb703]" />
              WHY CHOOSE FURNITURE STORE
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b192c] tracking-tight">
              Crafted for Comfort, Built to Last
            </h2>
          </div>

          {/* 4 Stat Cards Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat Card 1 */}
            <div className="group relative bg-gradient-to-b from-[#faf6f0] via-[#fdfbf7] to-white rounded-2xl p-6 border border-slate-200 border-b-4 border-b-transparent hover:border-b-[#ffb703] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              
              {/* Circular Gold Gradient Badge */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffb703] to-[#ffb703] text-white flex items-center justify-center shadow-lg shadow-[#ffb703]/20 group-hover:scale-110 transition-transform duration-300 mb-5">
                <Users className="w-8 h-8" />
              </div>

              {/* Large Animated-Feel Stat Number */}
              <span className="text-4xl font-black text-[#0b192c] tracking-tight mb-1">
                500+
              </span>

              {/* Bold Label */}
              <h3 className="font-extrabold text-base text-[#0b192c] mb-2">
                Happy Customers
              </h3>

              {/* Short Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Furnishing homes across Pakistan with quality furniture.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="group relative bg-gradient-to-b from-[#faf6f0] via-[#fdfbf7] to-white rounded-2xl p-6 border border-slate-200 border-b-4 border-b-transparent hover:border-b-[#ffb703] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              
              {/* Circular Gold Gradient Badge */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffb703] to-[#ffb703] text-white flex items-center justify-center shadow-lg shadow-[#ffb703]/20 group-hover:scale-110 transition-transform duration-300 mb-5">
                <Award className="w-8 h-8" />
              </div>

              {/* Large Animated-Feel Stat Number */}
              <span className="text-4xl font-black text-[#0b192c] tracking-tight mb-1">
                15+ Years
              </span>

              {/* Bold Label */}
              <h3 className="font-extrabold text-base text-[#0b192c] mb-2">
                Industry Experience
              </h3>

              {/* Short Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Trusted furniture craftsmanship since 2010.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="group relative bg-gradient-to-b from-[#faf6f0] via-[#fdfbf7] to-white rounded-2xl p-6 border border-slate-200 border-b-4 border-b-transparent hover:border-b-[#ffb703] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              
              {/* Circular Gold Gradient Badge */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffb703] to-[#ffb703] text-white flex items-center justify-center shadow-lg shadow-[#ffb703]/20 group-hover:scale-110 transition-transform duration-300 mb-5">
                <ShieldCheck className="w-8 h-8" />
              </div>

              {/* Large Animated-Feel Stat Number */}
              <span className="text-4xl font-black text-[#0b192c] tracking-tight mb-1">
                100%
              </span>

              {/* Bold Label */}
              <h3 className="font-extrabold text-base text-[#0b192c] mb-2">
                Quality Guaranteed
              </h3>

              {/* Short Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Solid wood, premium materials, built to last.
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="group relative bg-gradient-to-b from-[#faf6f0] via-[#fdfbf7] to-white rounded-2xl p-6 border border-slate-200 border-b-4 border-b-transparent hover:border-b-[#ffb703] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              
              {/* Circular Gold Gradient Badge */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffb703] to-[#ffb703] text-white flex items-center justify-center shadow-lg shadow-[#ffb703]/20 group-hover:scale-110 transition-transform duration-300 mb-5">
                <Truck className="w-8 h-8" />
              </div>

              {/* Large Animated-Feel Stat Number */}
              <span className="text-4xl font-black text-[#0b192c] tracking-tight mb-1">
                Fast
              </span>

              {/* Bold Label */}
              <h3 className="font-extrabold text-base text-[#0b192c] mb-2">
                Delivery & Setup
              </h3>

              {/* Short Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Nationwide delivery with professional assembly.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
