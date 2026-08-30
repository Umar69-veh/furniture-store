import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';
import { Filter } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-[#3e2723]">
              <Filter className="w-5 h-5" />
              <h2 className="font-bold text-lg">Filters</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-[#3e2723] mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.name} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-[#b68d40] focus:ring-[#b68d40] accent-[#b68d40]" />
                    <span className="text-[#5d4037] hover:text-[#b68d40]">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-[#3e2723] mb-3">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="price" className="text-[#b68d40] focus:ring-[#b68d40] accent-[#b68d40]" />
                  <span className="text-[#5d4037]">Under PKR 20,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="price" className="text-[#b68d40] focus:ring-[#b68d40] accent-[#b68d40]" />
                  <span className="text-[#5d4037]">PKR 20,000 - 50,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="price" className="text-[#b68d40] focus:ring-[#b68d40] accent-[#b68d40]" />
                  <span className="text-[#5d4037]">Above PKR 50,000</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#3e2723]">All Products</h1>
            <span className="text-gray-500">{products.length} results</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Duplicate for visual fullness in mock */}
            {products.map((product) => (
              <ProductCard key={product.id + '-dup'} product={{...product, id: product.id + '-dup'}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
