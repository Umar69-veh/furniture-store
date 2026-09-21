'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ShoppingBag, 
  DollarSign, 
  Package, 
  Users, 
  ArrowUpRight, 
  AlertTriangle, 
  Eye, 
  ArrowRight 
} from 'lucide-react';
import StatCard from '@/components/admin/StatCard';
import { 
  salesOverviewData, 
  categoryDistributionData, 
  mockRecentOrders, 
  mockAdminProducts 
} from '@/lib/adminData';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export default function AdminDashboardPage() {
  const lowStockProducts = mockAdminProducts.filter(
    (p) => p.status === 'Low Stock' || p.status === 'Out of Stock'
  );

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Title */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-[#0b192c] tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Welcome back, <strong className="text-[#0b192c]">Abdullah</strong>! Here is what’s happening with your store today.
          </p>
        </div>

        <Link
          href="/admin/products"
          className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md shrink-0"
        >
          <span>+ Add New Product</span>
        </Link>
      </div>

      {/* 1. 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Orders"
          value="142"
          change="+18.4%"
          isPositive={true}
          icon={ShoppingBag}
          iconBgColor="bg-blue-50"
          iconTextColor="text-[#0066ff]"
        />

        <StatCard 
          title="Total Revenue"
          value="PKR 2,450,000"
          change="+24.2%"
          isPositive={true}
          icon={DollarSign}
          iconBgColor="bg-amber-50"
          iconTextColor="text-amber-600"
        />

        <StatCard 
          title="Total Products"
          value="38"
          change="+4.5%"
          isPositive={true}
          icon={Package}
          iconBgColor="bg-indigo-50"
          iconTextColor="text-indigo-600"
        />

        <StatCard 
          title="Total Customers"
          value="196"
          change="+12.8%"
          isPositive={true}
          icon={Users}
          iconBgColor="bg-emerald-50"
          iconTextColor="text-emerald-600"
        />
      </div>

      {/* 2. Charts Section (Sales Overview Line Chart + Top Categories Pie Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sales Overview Line Chart */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-extrabold text-lg text-[#0b192c]">Sales Revenue Overview</h3>
              <p className="text-xs text-slate-400">Monthly revenue growth (PKR)</p>
            </div>
            <span className="text-xs font-bold text-[#0066ff] bg-blue-50 px-3 py-1 rounded-full">
              Year 2026
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesOverviewData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  formatter={(val: any) => [`PKR ${Number(val).toLocaleString()}`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#0b192c', color: '#fff', borderRadius: '12px', border: 'none' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#0066ff" 
                  strokeWidth={3} 
                  dot={{ fill: '#ffb703', r: 5 }} 
                  activeDot={{ r: 8, fill: '#ffb703' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Categories Donut Chart */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="font-extrabold text-lg text-[#0b192c]">Category Sales Breakdown</h3>
            <p className="text-xs text-slate-400">Share by department %</p>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(val: any) => [`${val}%`, 'Share']}
                  contentStyle={{ backgroundColor: '#0b192c', color: '#fff', borderRadius: '12px', border: 'none' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* 3. Recent Orders & Low Stock Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Orders Table */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-extrabold text-lg text-[#0b192c]">Recent Orders</h3>
              <p className="text-xs text-slate-400">Latest customer orders</p>
            </div>
            <Link 
              href="/admin/orders" 
              className="text-xs font-bold text-[#0066ff] hover:text-[#ffb703] flex items-center gap-1 transition-colors"
            >
              <span>View All Orders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-3">Order ID</th>
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Amount</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium">
                {mockRecentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#0b192c]">{order.id}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-700">{order.customerName}</td>
                    <td className="py-3.5 px-3 text-slate-500">{order.date}</td>
                    <td className="py-3.5 px-3 font-extrabold text-[#0066ff]">PKR {order.amount.toLocaleString()}</td>
                    <td className="py-3.5 px-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                        order.status === 'Pending' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        order.status === 'Shipped' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <Link 
                        href="/admin/orders"
                        className="p-1.5 inline-block text-slate-400 hover:text-[#ffb703] transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts Card */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="font-extrabold text-lg text-[#0b192c]">Inventory Alerts</h3>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                {lowStockProducts.length} Items
              </span>
            </div>

            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div 
                  key={product.id}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#ffb703] transition-colors"
                >
                  <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-slate-200 shrink-0">
                    <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-[#0b192c] truncate">{product.name}</h4>
                    <p className="text-[11px] text-slate-400">{product.category}</p>
                  </div>

                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full shrink-0 ${
                    product.status === 'Out of Stock' 
                      ? 'bg-rose-100 text-rose-700' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {product.stock === 0 ? 'Out of stock' : `${product.stock} left`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6">
            <Link 
              href="/admin/products"
              className="w-full text-center bg-[#0b192c] hover:bg-[#ffb703] text-white hover:text-[#070f1e] font-extrabold py-2.5 rounded-xl transition-all block text-xs"
            >
              Restock Inventory
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
