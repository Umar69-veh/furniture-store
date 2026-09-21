export interface AdminOrder {
  id: string;
  customerName: string;
  customerPhone: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  itemsCount: number;
}

export interface AdminProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}

export interface AdminCategoryItem {
  id: string;
  name: string;
  productCount: number;
  image: string;
  description: string;
}

export const salesOverviewData = [
  { month: 'Jan', revenue: 180000, orders: 18 },
  { month: 'Feb', revenue: 220000, orders: 24 },
  { month: 'Mar', revenue: 310000, orders: 32 },
  { month: 'Apr', revenue: 290000, orders: 28 },
  { month: 'May', revenue: 420000, orders: 45 },
  { month: 'Jun', revenue: 380000, orders: 39 },
  { month: 'Jul', revenue: 490000, orders: 52 },
  { month: 'Aug', revenue: 530000, orders: 58 },
  { month: 'Sep', revenue: 610000, orders: 64 },
];

export const categoryDistributionData = [
  { name: 'Office Furniture', value: 42, color: '#0066ff' },
  { name: 'Executive Chairs', value: 28, color: '#ffb703' },
  { name: 'Foam & Mattresses', value: 18, color: '#00c2ff' },
  { name: 'Plastic Items', value: 12, color: '#10b981' },
];

export const mockRecentOrders: AdminOrder[] = [
  {
    id: 'ORD-9082',
    customerName: 'Tariq Mahmood',
    customerPhone: '0301-2345678',
    date: '2026-09-10',
    amount: 97000,
    status: 'Pending',
    itemsCount: 3,
  },
  {
    id: 'ORD-9081',
    customerName: 'Dr. Usman Raza',
    customerPhone: '0302-8765432',
    date: '2026-09-09',
    amount: 48500,
    status: 'Shipped',
    itemsCount: 1,
  },
  {
    id: 'ORD-9080',
    customerName: 'Muhammad Ahsan',
    customerPhone: '0300-1122334',
    date: '2026-09-08',
    amount: 147500,
    status: 'Delivered',
    itemsCount: 4,
  },
  {
    id: 'ORD-9079',
    customerName: 'Zainab Bibi',
    customerPhone: '0333-9988776',
    date: '2026-09-07',
    amount: 26500,
    status: 'Delivered',
    itemsCount: 1,
  },
  {
    id: 'ORD-9078',
    customerName: 'Bilal Khan',
    customerPhone: '0345-5544332',
    date: '2026-09-06',
    amount: 34000,
    status: 'Cancelled',
    itemsCount: 2,
  },
];

export const mockAdminProducts: AdminProductItem[] = [
  {
    id: '1',
    name: 'Executive Managerial Desk',
    category: 'Office Furniture',
    price: 48500,
    stock: 12,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80',
  },
  {
    id: '2',
    name: 'Ergonomic Executive High-Back Chair',
    category: 'Executive Chairs',
    price: 26500,
    stock: 25,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d12bd?w=400&q=80',
  },
  {
    id: '3',
    name: 'Orthopedic Multi-Layer Foam Mattress',
    category: 'Foam & Mattresses',
    price: 34000,
    stock: 4,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80',
  },
  {
    id: '4',
    name: 'Heavy-Duty Plastic Armchairs (Set of 4)',
    category: 'Plastic Items',
    price: 14500,
    stock: 30,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80',
  },
  {
    id: '5',
    name: 'Luxury Leatherette Executive Sofa Set',
    category: 'Sofa Sets',
    price: 89000,
    stock: 2,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
  },
  {
    id: '6',
    name: 'Heavy Steel Filing & Storage Cabinet',
    category: 'Storage Solutions',
    price: 29500,
    stock: 0,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80',
  },
  {
    id: '7',
    name: '4-Person Modular Office Workstation',
    category: 'Office Furniture',
    price: 76000,
    stock: 5,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
  },
];

export const mockAdminCategories: AdminCategoryItem[] = [
  {
    id: 'cat-1',
    name: 'Office Furniture',
    productCount: 14,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80',
    description: 'Executive Desks, Workstations & Meeting Tables',
  },
  {
    id: 'cat-2',
    name: 'Executive Chairs',
    productCount: 10,
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d12bd?w=400&q=80',
    description: 'Ergonomic High-Back & Mesh Office Chairs',
  },
  {
    id: 'cat-3',
    name: 'Foam & Mattresses',
    productCount: 8,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80',
    description: 'Orthopedic & High-Density Comfort Mattresses',
  },
  {
    id: 'cat-4',
    name: 'Plastic Items',
    productCount: 6,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80',
    description: 'Heavy-Duty & Stackable Plastic Furniture',
  },
  {
    id: 'cat-5',
    name: 'Sofa Sets',
    productCount: 5,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    description: 'Luxury Leatherette & Fabric Executive Sofas',
  },
  {
    id: 'cat-6',
    name: 'Storage Solutions',
    productCount: 7,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80',
    description: 'Steel Cabinets, File Racks & Lockers',
  },
];
