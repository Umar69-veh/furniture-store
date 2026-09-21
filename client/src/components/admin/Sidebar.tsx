'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Layers,
  Users,
  Star,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Categories', href: '/admin/categories', icon: Layers },
    { name: 'Customers', href: '/admin#customers', icon: Users },
    { name: 'Reviews', href: '/admin#reviews', icon: Star },
    { name: 'Settings', href: '/admin#settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0b192c] text-white min-h-screen flex flex-col border-r border-slate-800 shadow-xl fixed left-0 top-0 bottom-0 z-40">

      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#0b192c] border-2 border-[#ffb703] flex items-center justify-center p-1 shadow-md shrink-0">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19h16M4 15h16M6 15v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-black text-white leading-tight uppercase tracking-wider">
            ABDULLAH
          </span>
          <span className="text-[10px] font-bold text-[#ffb703] uppercase tracking-tight">
            FURNITURE ADMIN
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
          Main Menu
        </p>

        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                  ? 'bg-[#0066ff] text-white shadow-md shadow-[#0066ff]/20'
                  : 'text-slate-300 hover:text-[#ffb703] hover:bg-slate-800/80'
                }`}
            >
              <div className="flex items-center gap-3">
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#ffb703]'}`} />
                <span>{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4 text-white" />}
            </Link>
          );
        })}
      </div>

      {/* Footer Store Switch & Logout */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-[#ffb703] hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-[#ffb703]" />
          <span>View Public Store Front</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>

    </aside>
  );
}
