'use client';

import { Search, Bell } from 'lucide-react';

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 h-20 px-6 flex items-center justify-between shadow-sm">

      {/* Search Input */}
      <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 focus-within:border-[#ffb703] focus-within:bg-white transition-all w-72 md:w-96">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Search orders, products, customers..."
          className="bg-transparent border-none focus:outline-none text-xs md:text-sm text-[#0b192c] placeholder-slate-400 w-full"
        />
      </div>

      {/* Right Controls: Notifications & Abdullah Profile */}
      <div className="flex items-center gap-6">

        {/* Notifications */}
        <button
          className="relative p-2.5 rounded-xl text-slate-500 hover:text-[#0b192c] hover:bg-slate-100 transition-colors"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#ffb703] rounded-full ring-2 ring-white"></span>
        </button>

        {/* Profile Avatar Badge */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0b192c] to-[#0066ff] border-2 border-[#ffb703] text-white flex items-center justify-center font-black text-base shadow-md">
            A
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-extrabold text-sm text-[#0b192c] leading-tight">
              Abdullah
            </span>
            <span className="text-[11px] font-bold text-amber-600 leading-none">
              Store Owner & Admin
            </span>
          </div>
        </div>

      </div>

    </header>
  );
}
