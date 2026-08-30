import Link from 'next/link';
import Image from 'next/image';
import { Truck, ShieldCheck, RefreshCw, Lock, ArrowRight, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(0, 4).reverse(); // Just to make it slightly different visually

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center bg-[#f5f1eb]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt="Hero Background"
            fill
            className="object-cover opacity-60 mix-blend-multiply"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[#3e2723] leading-tight mb-6">
              Elevate Your Space with Premium Furniture
            </h1>
            <p className="text-lg text-[#5d4037] mb-8">
              Discover timeless designs crafted for comfort, style and lasting quality.
            </p>
            <div className="flex gap-4">
              <Link href="/shop" className="bg-[#3e2723] hover:bg-[#b68d40] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Shop Now
              </Link>
              <Link href="/shop" className="bg-white/80 hover:bg-white text-[#3e2723] px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors border border-[#e5e0d8]">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category */}
      <section className="w-full bg-white py-12 border-b border-[#e5e0d8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
          <h2 className="text-2xl font-bold text-[#3e2723] text-center">Shop by Category</h2>
        </div>
          
        <div className="relative w-full flex overflow-hidden">
          <div className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused] px-4">
            {[...categories, ...categories, ...categories, ...categories].map((category, index) => (
              <Link 
                key={`${category.name}-${index}`} 
                href={`/shop?category=${category.name.toLowerCase()}`} 
                className="group flex-shrink-0"
              >
                <div className="w-32 h-32 rounded-full bg-amber-50 flex flex-col items-center justify-center border border-amber-100 group-hover:bg-[#b68d40] group-hover:border-[#b68d40] transition-colors shadow-sm gap-1">
                  <span className="text-3xl font-bold text-[#b68d40] group-hover:text-white transition-colors leading-none">
                    {category.name[0]}
                  </span>
                  <span className="text-sm font-medium text-[#3e2723] group-hover:text-white transition-colors leading-none">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-[#3e2723]">Featured Products</h2>
          <Link href="/shop" className="text-[#b68d40] hover:text-[#3e2723] font-medium border-b border-transparent hover:border-[#3e2723] transition-all">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-[#3e2723]">Best Sellers</h2>
          <Link href="/shop?sort=popular" className="text-[#b68d40] hover:text-[#3e2723] font-medium border-b border-transparent hover:border-[#3e2723] transition-all">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id + '-bs'} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Our Story / Brand Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center bg-white rounded-2xl p-8 md:p-12 border border-[#e5e0d8]">
          <div className="w-full md:w-1/2 relative h-[400px] rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80" 
              alt="Craftsmanship" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-6">
              Rooted in Nature, Crafted for Life
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every piece of furniture we create tells a story of dedication to the craft. We source only the finest, sustainably harvested materials to ensure that your furniture not only looks beautiful but stands the test of time. Our master woodworkers bring decades of experience to every joint, curve, and finish.
            </p>
            <Link href="/shop" className="inline-flex items-center gap-2 text-[#b68d40] font-medium hover:text-[#3e2723] transition-colors">
              Discover Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#e5e0d8]">
          <div className="flex items-center gap-4">
            <Truck className="w-8 h-8 text-[#b68d40]" />
            <div>
              <h4 className="font-semibold text-[#3e2723]">Free Delivery</h4>
              <p className="text-sm text-gray-500">On orders above PKR 20,000</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-[#b68d40]" />
            <div>
              <h4 className="font-semibold text-[#3e2723]">Quality Guarantee</h4>
              <p className="text-sm text-gray-500">Premium quality products</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RefreshCw className="w-8 h-8 text-[#b68d40]" />
            <div>
              <h4 className="font-semibold text-[#3e2723]">Easy Returns</h4>
              <p className="text-sm text-gray-500">Within 7 days</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Lock className="w-8 h-8 text-[#b68d40]" />
            <div>
              <h4 className="font-semibold text-[#3e2723]">Secure Payments</h4>
              <p className="text-sm text-gray-500">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-[#3e2723] text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Aisha R.", quote: "The dining table completely transformed our space. The quality of the wood is exceptional and it feels incredibly sturdy.", rating: 5 },
            { name: "Bilal K.", quote: "I was looking for a modern yet comfortable sofa, and this exceeded my expectations. Delivery was fast and seamless.", rating: 5 },
            { name: "Zainab M.", quote: "Beautiful craftsmanship. You can really tell that attention to detail goes into every single piece they make.", rating: 4 }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#faf8f5] p-8 rounded-2xl border border-[#e5e0d8]">
              <div className="flex gap-1 mb-4 text-[#b68d40]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <h4 className="font-semibold text-[#3e2723]">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#f5f1eb] border border-[#e5e0d8] rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3e2723] mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to receive updates, access to exclusive deals, and more directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-3 rounded-lg border border-[#e5e0d8] focus:outline-none focus:ring-2 focus:ring-[#b68d40] text-[#3e2723]"
              required
            />
            <button type="button" className="bg-[#3e2723] hover:bg-[#b68d40] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* 9. Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="bg-[#3e2723] rounded-2xl p-12 text-center flex flex-col md:flex-row items-center justify-between">
           <h2 className="text-3xl font-serif text-[#faf8f5] mb-6 md:mb-0">Crafted for Comfort. Designed for You.</h2>
           <Link href="/shop" className="bg-[#faf8f5] text-[#3e2723] hover:bg-[#b68d40] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors border border-transparent">
              Explore Collection
           </Link>
         </div>
      </section>
    </div>
  );
}
