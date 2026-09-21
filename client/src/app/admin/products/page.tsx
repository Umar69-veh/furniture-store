'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  AlertCircle,
  X
} from 'lucide-react';
import { mockAdminProducts, AdminProductItem } from '@/lib/adminData';

export default function AdminProductsPage() {
  const [productsList, setProductsList] = useState<AdminProductItem[]>(mockAdminProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New product form state
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('Office Furniture');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductStock, setNewProductStock] = useState('');

  const filteredProducts = productsList.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProductsList(productsList.filter((p) => p.id !== id));
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice) return;

    const stockNum = parseInt(newProductStock) || 0;
    const priceNum = parseInt(newProductPrice) || 0;

    const newProduct: AdminProductItem = {
      id: Date.now().toString(),
      name: newProductName,
      category: newProductCategory,
      price: priceNum,
      stock: stockNum,
      status: stockNum > 5 ? 'In Stock' : stockNum > 0 ? 'Low Stock' : 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80',
    };

    setProductsList([newProduct, ...productsList]);
    setIsAddModalOpen(false);
    setNewProductName('');
    setNewProductPrice('');
    setNewProductStock('');
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-[#0b192c] tracking-tight flex items-center gap-3">
            <Package className="w-8 h-8 text-[#0066ff]" />
            Products Inventory
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage your furniture catalog items, prices, and stock levels.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold px-5 py-3 rounded-xl text-xs transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
        
        {/* Search */}
        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 focus-within:border-[#ffb703] w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none focus:outline-none text-xs text-[#0b192c] w-full"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500 font-medium">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-100 text-[#0b192c] text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#ffb703]"
          >
            <option value="All">All Departments</option>
            <option value="Office Furniture">Office Furniture</option>
            <option value="Executive Chairs">Executive Chairs</option>
            <option value="Foam & Mattresses">Foam & Mattresses</option>
            <option value="Plastic Items">Plastic Items</option>
            <option value="Sofa Sets">Sofa Sets</option>
            <option value="Storage Solutions">Storage Solutions</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-4">Item</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Price</th>
                <th className="py-4 px-4">Stock</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Product Info */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                        <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#0b192c]">{product.name}</h4>
                        <span className="text-[11px] text-slate-400">ID: #{product.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4 text-slate-600 font-bold">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4 font-black text-sm text-[#0066ff]">
                    PKR {product.price.toLocaleString()}
                  </td>

                  {/* Stock */}
                  <td className="py-4 px-4 font-bold text-slate-700">
                    {product.stock} units
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold ${
                      product.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      product.status === 'Low Stock' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {product.status}
                    </span>
                  </td>

                  {/* Action Icons */}
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => alert(`Edit ${product.name}`)}
                        className="p-2 text-slate-400 hover:text-[#0066ff] hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Product"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in">
            <button 
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-extrabold text-[#0b192c] mb-1">Add New Product</h3>
            <p className="text-xs text-slate-400 mb-6">Enter new product details to add to catalog.</p>

            <form onSubmit={handleAddProduct} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Product Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Executive Wooden Desk"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ffb703]"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Category</label>
                <select
                  value={newProductCategory}
                  onChange={(e) => setNewProductCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ffb703]"
                >
                  <option value="Office Furniture">Office Furniture</option>
                  <option value="Executive Chairs">Executive Chairs</option>
                  <option value="Foam & Mattresses">Foam & Mattresses</option>
                  <option value="Plastic Items">Plastic Items</option>
                  <option value="Sofa Sets">Sofa Sets</option>
                  <option value="Storage Solutions">Storage Solutions</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Price (PKR)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="35000"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ffb703]"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Initial Stock</label>
                  <input 
                    type="number" 
                    required
                    placeholder="10"
                    value={newProductStock}
                    onChange={(e) => setNewProductStock(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ffb703]"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#0066ff] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold py-3 rounded-xl transition-all shadow-md"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
