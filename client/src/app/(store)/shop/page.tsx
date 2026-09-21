import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';
import { Filter } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 bg-gradient-to-r from-[#0b192c] to-[#070f1e] p-8 rounded-2xl text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-1 text-white">All Furniture & Foam Catalog</h1>
          <p className="text-slate-300 text-sm">Browse executive desks, chairs, foam mattresses, plastic items, and storage solutions.</p>
        </div>
        <span className="bg-[#0066ff] text-white text-xs font-bold px-4 py-2 rounded-full shrink-0">
          Showing {products.length} Products
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-28 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-[#0b192c] pb-3 border-b border-slate-100">
              <Filter className="w-5 h-5 text-[#0066ff]" />
              <h2 className="font-bold text-base">Filter Products</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">Categories</h3>
              <div className="space-y-2.5">
                {categories.map((category) => (
                  <label key={category.name} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="rounded text-[#0066ff] focus:ring-[#0066ff] accent-[#0066ff] w-4 h-4" />
                    <span className="text-sm text-slate-700 group-hover:text-[#0066ff] font-medium">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">Price Range (PKR)</h3>
              <div className="space-y-2.5">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                  <input type="radio" name="price" className="text-[#0066ff] focus:ring-[#0066ff] accent-[#0066ff]" />
                  <span>Under PKR 25,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                  <input type="radio" name="price" className="text-[#0066ff] focus:ring-[#0066ff] accent-[#0066ff]" />
                  <span>PKR 25,000 - 50,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 font-medium">
                  <input type="radio" name="price" className="text-[#0066ff] focus:ring-[#0066ff] accent-[#0066ff]" />
                  <span>Above PKR 50,000</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
