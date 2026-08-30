import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, ShoppingBag, Box, Tag, Users, Star, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#f5f1eb]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3e2723] text-[#faf8f5] flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <Image 
              src="/logo.png" 
              alt="Furniture Store" 
              width={200} 
              height={60} 
              className="h-12 w-auto object-contain invert brightness-0 saturate-100" 
            />
          </div>
          
          <nav className="space-y-2 flex-grow">
            <Link href="/admin" className="flex items-center gap-3 bg-[#5d4037] text-white px-4 py-3 rounded-lg font-medium transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/admin" className="flex items-center gap-3 text-[#e5e0d8] hover:bg-[#5d4037] px-4 py-3 rounded-lg font-medium transition-colors">
              <ShoppingBag className="w-5 h-5" />
              Orders
            </Link>
            <Link href="/admin" className="flex items-center gap-3 text-[#e5e0d8] hover:bg-[#5d4037] px-4 py-3 rounded-lg font-medium transition-colors">
              <Box className="w-5 h-5" />
              Products
            </Link>
            <Link href="/admin" className="flex items-center gap-3 text-[#e5e0d8] hover:bg-[#5d4037] px-4 py-3 rounded-lg font-medium transition-colors">
              <Tag className="w-5 h-5" />
              Categories
            </Link>
            <Link href="/admin" className="flex items-center gap-3 text-[#e5e0d8] hover:bg-[#5d4037] px-4 py-3 rounded-lg font-medium transition-colors">
              <Users className="w-5 h-5" />
              Customers
            </Link>
            <Link href="/admin" className="flex items-center gap-3 text-[#e5e0d8] hover:bg-[#5d4037] px-4 py-3 rounded-lg font-medium transition-colors">
              <Star className="w-5 h-5" />
              Reviews
            </Link>
            <Link href="/admin" className="flex items-center gap-3 text-[#e5e0d8] hover:bg-[#5d4037] px-4 py-3 rounded-lg font-medium transition-colors">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </nav>
        </div>
        
        <div className="p-6 mt-auto">
          <Link href="/" className="flex items-center gap-3 text-[#e5e0d8] hover:text-white px-4 py-3 rounded-lg font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-[#e5e0d8] h-20 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold text-[#3e2723]">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=abdullah" alt="Abdullah" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-[#3e2723] text-sm leading-tight">Abdullah</p>
              <p className="text-xs text-gray-500">Store Owner</p>
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
