import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconBgColor?: string;
  iconTextColor?: string;
}

export default function StatCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  iconBgColor = 'bg-blue-50',
  iconTextColor = 'text-[#0066ff]',
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#ffb703] transition-all duration-300 flex items-center justify-between">
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
          {title}
        </span>
        <h3 className="text-2xl font-black text-[#0b192c] tracking-tight">
          {value}
        </h3>
        
        <div className="flex items-center gap-1.5 text-xs font-bold">
          <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full ${
            isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{change}</span>
          </span>
          <span className="text-slate-400 font-normal">vs last month</span>
        </div>
      </div>

      <div className={`w-14 h-14 rounded-2xl ${iconBgColor} ${iconTextColor} flex items-center justify-center shrink-0 shadow-sm`}>
        <Icon className="w-7 h-7" />
      </div>
    </div>
  );
}
