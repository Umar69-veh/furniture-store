'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Layers, 
  Plus, 
  Edit3, 
  Trash2, 
  Package, 
  X 
} from 'lucide-react';
import { mockAdminCategories, AdminCategoryItem } from '@/lib/adminData';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<AdminCategoryItem[]>(mockAdminCategories);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');

  const handleDeleteCategory = (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName) return;

    const newCategory: AdminCategoryItem = {
      id: `cat-${Date.now()}`,
      name: newCatName,
      productCount: 0,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80',
      description: newCatDesc || 'Custom furniture & solutions department.',
    };

    setCategories([...categories, newCategory]);
    setIsAddModalOpen(false);
    setNewCatName('');
    setNewCatDesc('');
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-[#0b192c] tracking-tight flex items-center gap-3">
            <Layers className="w-8 h-8 text-[#0066ff]" />
            Category Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Organize product lines for Office Furniture, Foam, Plastic & Storage Solutions.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold px-5 py-3 rounded-xl text-xs transition-all shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-[#ffb703] hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Image Thumbnail */}
            <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 right-3 bg-[#0b192c]/90 text-[#ffb703] text-xs font-black px-3 py-1 rounded-full border border-[#ffb703]/30 backdrop-blur-md flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                <span>{cat.productCount} Products</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-extrabold text-lg text-[#0b192c] group-hover:text-[#0066ff] transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">ID: #{cat.id}</span>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => alert(`Edit category ${cat.name}`)}
                    className="p-2 text-slate-400 hover:text-[#0066ff] hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit Category"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Category"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
            <button 
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-extrabold text-[#0b192c] mb-1">Add New Category</h3>
            <p className="text-xs text-slate-400 mb-6">Create a new department category for the store.</p>

            <form onSubmit={handleAddCategory} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Category Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Executive Desks"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ffb703]"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Short description of products in this category..."
                  value={newCatDesc}
                  onChange={(e) => setNewCatDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ffb703]"
                />
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
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
