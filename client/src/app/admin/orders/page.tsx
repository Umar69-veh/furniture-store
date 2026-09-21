'use client';

import { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Truck, 
  XCircle,
  Eye
} from 'lucide-react';
import { mockRecentOrders, AdminOrder } from '@/lib/adminData';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<AdminOrder[]>(mockRecentOrders);
  const [activeTab, setActiveTab] = useState<'All' | 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const statusTabs: ('All' | 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled')[] = [
    'All',
    'Pending',
    'Shipped',
    'Delivered',
    'Cancelled',
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === 'All' || order.status === activeTab;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.customerPhone.includes(searchTerm);
    return matchesTab && matchesSearch;
  });

  const handleUpdateStatus = (id: string, newStatus: AdminOrder['status']) => {
    setOrders(orders.map((o) => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-[#0b192c] tracking-tight flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-[#0066ff]" />
            Orders Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track and process customer orders across Vehari & surrounding areas.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-[#0b192c] shrink-0">
          Total Orders: <span className="text-[#0066ff] font-black">{orders.length}</span>
        </div>
      </div>

      {/* Status Filter Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Status Tabs */}
        <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {statusTabs.map((tab) => {
            const count = tab === 'All' ? orders.length : orders.filter(o => o.status === tab).length;
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  isActive
                    ? 'bg-[#0b192c] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0b192c] hover:bg-white/60'
                }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 focus-within:border-[#ffb703] shadow-sm w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Search by Order ID, Name or Phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none focus:outline-none text-xs text-[#0b192c] w-full"
          />
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-4">Order Ref</th>
                <th className="py-4 px-4">Customer Details</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4">Items</th>
                <th className="py-4 px-4">Total Amount</th>
                <th className="py-4 px-4">Current Status</th>
                <th className="py-4 px-4 text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Order ID */}
                  <td className="py-4 px-4 font-black text-sm text-[#0b192c]">
                    {order.id}
                  </td>

                  {/* Customer */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-800">{order.customerName}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>{order.customerPhone}</span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-4 text-slate-500 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{order.date}</span>
                    </div>
                  </td>

                  {/* Items Count */}
                  <td className="py-4 px-4 font-bold text-slate-700">
                    {order.itemsCount} items
                  </td>

                  {/* Total Amount */}
                  <td className="py-4 px-4 font-black text-sm text-[#0066ff]">
                    PKR {order.amount.toLocaleString()}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold ${
                      order.status === 'Pending' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      order.status === 'Shipped' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                      order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {order.status === 'Pending' && <Clock className="w-3 h-3 text-amber-600" />}
                      {order.status === 'Shipped' && <Truck className="w-3 h-3 text-blue-600" />}
                      {order.status === 'Delivered' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                      {order.status === 'Cancelled' && <XCircle className="w-3 h-3 text-rose-600" />}
                      <span>{order.status}</span>
                    </span>
                  </td>

                  {/* Update Actions */}
                  <td className="py-4 px-4 text-right">
                    <select
                      value={order.status}
                      onChange={(e) => handleUpdateStatus(order.id, e.target.value as AdminOrder['status'])}
                      className="bg-slate-100 text-[#0b192c] text-xs font-bold px-2.5 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ffb703] cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
