import React from 'react'
import { 
  Calendar, 
  Download, 
  DollarSign, 
  Package, 
  Truck, 
  UserPlus, 
  MoreHorizontal, 
  Star,
  ArrowRight,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

import teamMarcus from '../assets/team_marcus.png'
import teamSarah from '../assets/team_sarah.png'
import teamRobert from '../assets/team_robert.png'

const metrics = [
  {
    label: 'Total Revenue',
    value: '$1.24M',
    trend: '+14.5% vs last month',
    trendType: 'up',
    icon: DollarSign,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  {
    label: 'Total Deliveries',
    value: '8,432',
    trend: '+5.2% vs last month',
    trendType: 'up',
    icon: Package,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  {
    label: 'Active Drivers',
    value: '342',
    trend: '-1.2% vs last month',
    trendType: 'down',
    icon: Truck,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  {
    label: 'New Customers',
    value: '128',
    trend: '+22.4% vs last month',
    trendType: 'up',
    icon: UserPlus,
    iconBg: 'bg-green-50 text-green-600'
  }
]

const topDrivers = [
  {
    name: 'Marcus Johnson',
    rating: '4.9 Rating',
    deliveries: 142,
    avatar: teamMarcus
  },
  {
    name: 'Sarah Chen',
    rating: '4.8 Rating',
    deliveries: 138,
    avatar: teamSarah
  },
  {
    name: 'David Rodriguez',
    rating: '4.8 Rating',
    deliveries: 131,
    avatar: teamRobert
  }
]

const activeRoutes = [
  {
    origin: 'Los Angeles, CA',
    destination: 'Phoenix, AZ',
    volume: '1,245',
    trend: '12%',
    trendType: 'up'
  },
  {
    origin: 'Chicago, IL',
    destination: 'Detroit, MI',
    volume: '982',
    trend: '8%',
    trendType: 'up'
  },
  {
    origin: 'Dallas, TX',
    destination: 'Houston, TX',
    volume: '845',
    trend: '3%',
    trendType: 'down'
  },
  {
    origin: 'Atlanta, GA',
    destination: 'Miami, FL',
    volume: '721',
    trend: '5%',
    trendType: 'up'
  }
]

function Analytics() {
  // Circular performance stats
  const performanceRate = 92
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - performanceRate / 100)

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-8 font-sans text-slate-700">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Analytics Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Real-time performance metrics and business intelligence.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-650 bg-white hover:bg-slate-50 transition duration-150 shadow-sm cursor-pointer whitespace-nowrap">
            <Calendar className="w-4 h-4 text-slate-400" />
            Last 30 Days
          </button>
          <button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer whitespace-nowrap">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Grid of 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.label} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${metric.iconBg}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{metric.label}</p>
                <p className="text-3xl font-extrabold text-slate-900 mt-1.5 tracking-tight">{metric.value}</p>
                
                <p className={`text-[10px] font-bold mt-2 flex items-center gap-1 ${
                  metric.trendType === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {metric.trendType === 'up' ? '↗' : '↘'} {metric.trend}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Row 2: Revenue Trend & On-Time Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Revenue Trend Chart Card */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Revenue Trend</h2>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Monthly financial performance</p>
            </div>
            <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Styled HTML/Tailwind Vertical Bar Chart */}
          <div className="flex items-end justify-between h-[250px] pt-8 px-4 relative select-none">
            {/* Grid Line Marks */}
            <div className="absolute left-0 right-0 top-8 border-t border-dashed border-slate-100 flex justify-between text-[9px] font-bold text-slate-300 pointer-events-none">
              <span>$300k</span>
            </div>
            <div className="absolute left-0 right-0 top-28 border-t border-dashed border-slate-100 flex justify-between text-[9px] font-bold text-slate-300 pointer-events-none">
              <span>$200k</span>
            </div>
            <div className="absolute left-0 right-0 top-48 border-t border-dashed border-slate-100 flex justify-between text-[9px] font-bold text-slate-300 pointer-events-none">
              <span>$100k</span>
            </div>
            <div className="absolute left-0 right-0 top-68 border-t border-slate-100 flex justify-between text-[9px] font-bold text-slate-300 pointer-events-none">
              <span>0</span>
            </div>

            {/* Jan Bar */}
            <div className="flex flex-col items-center gap-3 w-12 z-10">
              <div className="w-full bg-blue-100 hover:bg-blue-250 transition duration-200 rounded-t-lg h-[110px] relative group cursor-pointer border-t-[3px] border-t-blue-500">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">$110k</span>
              </div>
              <span className="text-[10px] font-bold text-slate-450">Jan</span>
            </div>

            {/* Feb Bar */}
            <div className="flex flex-col items-center gap-3 w-12 z-10">
              <div className="w-full bg-blue-100 hover:bg-blue-250 transition duration-200 rounded-t-lg h-[160px] relative group cursor-pointer border-t-[3px] border-t-blue-500">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">$160k</span>
              </div>
              <span className="text-[10px] font-bold text-slate-450">Feb</span>
            </div>

            {/* Mar Bar */}
            <div className="flex flex-col items-center gap-3 w-12 z-10">
              <div className="w-full bg-blue-100 hover:bg-blue-250 transition duration-200 rounded-t-lg h-[130px] relative group cursor-pointer border-t-[3px] border-t-blue-500">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">$130k</span>
              </div>
              <span className="text-[10px] font-bold text-slate-450">Mar</span>
            </div>

            {/* Apr Bar */}
            <div className="flex flex-col items-center gap-3 w-12 z-10">
              <div className="w-full bg-blue-100 hover:bg-blue-250 transition duration-200 rounded-t-lg h-[210px] relative group cursor-pointer border-t-[3px] border-t-blue-500">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">$210k</span>
              </div>
              <span className="text-[10px] font-bold text-slate-450">Apr</span>
            </div>

            {/* May Bar */}
            <div className="flex flex-col items-center gap-3 w-12 z-10">
              <div className="w-full bg-blue-100 hover:bg-blue-250 transition duration-200 rounded-t-lg h-[250px] relative group cursor-pointer border-t-[3px] border-t-blue-500">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">$250k</span>
              </div>
              <span className="text-[10px] font-bold text-slate-450">May</span>
            </div>

            {/* Jun Bar (Active dark blue) */}
            <div className="flex flex-col items-center gap-3 w-12 z-10">
              <div className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-t-lg h-[280px] relative group cursor-pointer shadow-lg shadow-blue-500/20">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">$280k</span>
              </div>
              <span className="text-[10px] font-bold text-slate-900">Jun</span>
            </div>
          </div>
        </div>

        {/* On-Time Performance Circular Chart Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">On-Time Performance</h2>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">SLA Compliance</p>
          </div>

          {/* SVG Circular Donut Chart */}
          <div className="relative flex items-center justify-center py-6">
            <svg width="160" height="160" className="transform -rotate-90">
              {/* Underlay grey track */}
              <circle 
                cx="80" 
                cy="80" 
                r={radius} 
                className="stroke-slate-50" 
                strokeWidth="16" 
                fill="transparent" 
              />
              {/* Active performance green track */}
              <circle 
                cx="80" 
                cy="80" 
                r={radius} 
                className="stroke-emerald-600 transition-all duration-300" 
                strokeWidth="16" 
                fill="transparent" 
                strokeDasharray={circumference} 
                strokeDashoffset={strokeDashoffset} 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{performanceRate}%</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">On Time</span>
            </div>
          </div>

          {/* SLA Performance Legends */}
          <div className="flex items-center justify-center gap-6 border-t border-slate-50 pt-4 text-[10px] font-bold text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span>On Time (7,757)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-100"></span>
              <span>Late (675)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Top Drivers & Active Routes Volume */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Top Drivers Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Top Drivers</h2>
            <a href="/drivers" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition">
              View All
            </a>
          </div>

          <div className="space-y-5">
            {topDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-slate-50/50 transition duration-150">
                <div className="flex items-center gap-3">
                  <img 
                    src={driver.avatar} 
                    alt={driver.name} 
                    className="w-10 h-10 rounded-xl object-cover border border-slate-100 shadow-sm"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-snug">{driver.name}</p>
                    <p className="text-[10px] text-amber-500 font-bold mt-1 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-550" />
                      {driver.rating}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-slate-900 leading-snug">{driver.deliveries}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-1">Deliveries</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Routes Volume Card */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Active Routes Volume</h2>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">Top origin-destination pairs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/20">
                  <th className="py-3 px-4 font-semibold text-[10px] tracking-widest">Origin</th>
                  <th className="py-3 px-4 font-semibold text-[10px] tracking-widest w-12 text-center"></th>
                  <th className="py-3 px-4 font-semibold text-[10px] tracking-widest">Destination</th>
                  <th className="py-3 px-4 font-semibold text-[10px] tracking-widest">Volume</th>
                  <th className="py-3 px-4 font-semibold text-[10px] tracking-widest text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
                {activeRoutes.map((route, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/30 transition">
                    <td className="py-4 px-4 font-bold text-slate-900">{route.origin}</td>
                    <td className="py-4 px-4 text-center text-slate-400">
                      <ArrowRight size={14} className="mx-auto" />
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-900">{route.destination}</td>
                    <td className="py-4 px-4 font-extrabold text-blue-650">{route.volume}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold ${
                        route.trendType === 'up' ? 'text-green-650' : 'text-red-500'
                      }`}>
                        {route.trendType === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {route.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Analytics
