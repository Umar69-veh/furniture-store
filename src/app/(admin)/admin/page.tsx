import { products } from '@/lib/data';
import Image from 'next/image';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Orders', value: '125', change: '+12% from last month' },
    { label: 'Total Revenue', value: 'PKR 1,250,000', change: '+18% from last month' },
    { label: 'Total Products', value: '85', change: '+5 new this month' },
    { label: 'Total Customers', value: '320', change: '+15% from last month' },
  ];

  const recentOrders = [
    { id: '#ORD-1001', customer: 'Ali Khan', date: 'May 28, 2025', total: 'PKR 45,000', status: 'Pending' },
    { id: '#ORD-1002', customer: 'Sara Ahmed', date: 'May 27, 2025', total: 'PKR 28,500', status: 'Processing' },
    { id: '#ORD-1003', customer: 'Usman Iqbal', date: 'May 26, 2025', total: 'PKR 75,000', status: 'Shipped' },
    { id: '#ORD-1004', customer: 'Fatima Noor', date: 'May 25, 2025', total: 'PKR 38,000', status: 'Delivered' },
    { id: '#ORD-1005', customer: 'Hamza Raza', date: 'May 24, 2025', total: 'PKR 22,000', status: 'Pending' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-indigo-100 text-indigo-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#3e2723] mb-2">Welcome back, Abdullah 👋</h2>
        <p className="text-gray-500">Here's what's happening with your store today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-[#e5e0d8] rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.label}</h3>
            <p className="text-2xl font-bold text-[#3e2723] mb-2">{stat.value}</p>
            <p className="text-xs text-green-600">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#e5e0d8] rounded-xl p-6 h-80 flex flex-col items-center justify-center text-gray-400">
           {/* Mock Chart Area */}
           <p className="mb-2">Revenue Overview (Chart Area)</p>
           <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
              [Line Chart Mock]
           </div>
        </div>
        <div className="bg-white border border-[#e5e0d8] rounded-xl p-6 h-80 flex flex-col items-center justify-center text-gray-400">
           {/* Mock Chart Area */}
           <p className="mb-2">Orders Overview</p>
           <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
              [Donut Chart Mock]
           </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white border border-[#e5e0d8] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#e5e0d8] flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#3e2723]">Recent Orders</h3>
          <button className="text-sm font-medium text-[#b68d40] hover:text-[#3e2723]">View All Orders</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-[#f5f1eb] text-[#5d4037]">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e0d8]">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#3e2723]">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-[#e5e0d8] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#e5e0d8] flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#3e2723]">Products</h3>
          <button className="flex items-center gap-2 bg-[#3e2723] hover:bg-[#b68d40] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-[#f5f1eb] text-[#5d4037]">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e0d8]">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 relative bg-gray-100 rounded overflow-hidden">
                       <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <span className="font-medium text-[#3e2723]">{product.name}</span>
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">PKR {product.price.toLocaleString()}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <button className="p-1 text-gray-400 hover:text-[#b68d40] transition-colors"><Pencil className="w-4 h-4" /></button>
                       <button className="p-1 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
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
