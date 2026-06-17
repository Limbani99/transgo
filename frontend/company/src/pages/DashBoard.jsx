import React from 'react'
import { 
  Calendar, 
  DollarSign, 
  AlertTriangle, 
  Truck, 
  CheckCircle2, 
  UserCheck, 
  Download, 
  Plus, 
  ChevronDown, 
  MoreVertical, 
  MapPin, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  Activity,
  MessageSquare
} from 'lucide-react'

import teamMarcus from '../assets/team_marcus.png'
import teamSarah from '../assets/team_sarah.png'
import teamRobert from '../assets/team_robert.png'

const stats = [
  { 
    label: 'Total Bookings', 
    value: '12,840', 
    badge: '+12% this month', 
    badgeType: 'success', 
    icon: Calendar,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  { 
    label: 'Total Revenue', 
    value: '$1.2M', 
    badge: '+8% YoY', 
    badgeType: 'success', 
    icon: DollarSign,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  { 
    label: 'Pending Requests', 
    value: '24', 
    badge: 'Needs Attention', 
    badgeType: 'warning', 
    icon: AlertTriangle,
    iconBg: 'bg-red-50 text-red-650',
    borderColor: 'border-l-4 border-l-red-500'
  },
  { 
    label: 'Active Deliveries', 
    value: '452', 
    badge: 'In Transit', 
    badgeType: 'stable', 
    icon: Truck,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  { 
    label: 'Completed Deliveries', 
    value: '11,288', 
    badge: 'Delivered', 
    badgeType: 'success', 
    icon: CheckCircle2,
    iconBg: 'bg-green-50 text-green-600'
  },
]

const recentBookings = [
  { 
    id: '#TR-902', 
    pickup: 'Chicago, IL', 
    delivery: 'Seattle, WA', 
    status: 'Shipped', 
    statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
    date: 'Oct 24, 14:00' 
  },
  { 
    id: '#TR-895', 
    pickup: 'Dallas, TX', 
    delivery: 'Austin, TX', 
    status: 'Pending', 
    statusColor: 'bg-slate-50 text-slate-550 border-slate-200',
    date: 'Oct 25, 09:30' 
  },
  { 
    id: '#TR-880', 
    pickup: 'Boston, MA', 
    delivery: 'New York, NY', 
    status: 'Delivered', 
    statusColor: 'bg-green-50 text-green-600 border-green-100',
    date: 'Oct 23, 11:15' 
  },
  { 
    id: '#TR-872', 
    pickup: 'Phoenix, AZ', 
    delivery: 'Denver, CO', 
    status: 'Delayed', 
    statusColor: 'bg-red-50 text-red-650 border-red-100',
    date: 'Oct 26, 18:00' 
  },
  { 
    id: '#TR-865', 
    pickup: 'Atlanta, GA', 
    delivery: 'Miami, FL', 
    status: 'Shipped', 
    statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
    date: 'Oct 24, 16:45' 
  },
]

const drivers = [
  {
    name: 'Marcus Johnson',
    vehicle: 'Truck #402',
    status: 'On Road',
    statusBg: 'bg-blue-50 text-blue-600',
    avatar: teamMarcus
  },
  {
    name: 'Sarah Chen',
    vehicle: 'Van #11B',
    status: 'At Warehouse',
    statusBg: 'bg-blue-50 text-blue-600',
    avatar: teamSarah
  },
  {
    name: 'David Jones',
    vehicle: 'Truck #205',
    status: 'Off Duty',
    statusBg: 'bg-slate-100 text-slate-500',
    initials: 'DJ'
  }
]

const activities = [
  {
    text: 'Shipment #TR-902 picked up',
    time: '10 mins ago',
    dotColor: 'bg-blue-600'
  },
  {
    text: 'New driver Marcus J. onboarded',
    time: '2 hours ago',
    dotColor: 'bg-green-500'
  },
  {
    text: 'Route 42 delayed due to traffic',
    time: '4 hours ago',
    dotColor: 'bg-red-500'
  }
]

function DashBoard() {
  const driverRatio = 86 / 120;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - driverRatio);

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-8 font-sans text-slate-700">
      
      {/* Top Banner: Title & Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Welcome back. Here's what's happening with your operations today.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-650 bg-white hover:bg-slate-50 transition duration-150 shadow-sm cursor-pointer">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer">
            <Plus className="w-4 h-4" />
            New Booking
          </button>
        </div>
      </div>

      {/* Grid of 6 Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className={`bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between ${stat.borderColor || ''}`}>
              <div className="flex justify-between items-start">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.iconBg}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                  stat.badgeType === 'success' 
                    ? 'bg-green-50 text-green-600' 
                    : stat.badgeType === 'warning'
                    ? 'bg-red-50 text-red-650'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {stat.badge}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.label}</p>
                <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">{stat.value}</p>
              </div>
            </div>
          )
        })}

        {/* Card 6: Available Drivers with Circle Progress */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <UserCheck className="w-4.5 h-4.5" />
            </div>
            {/* SVG Circle Progress */}
            <div className="relative flex items-center justify-center w-9 h-9">
              <svg className="w-9 h-9 transform -rotate-90">
                <circle cx="18" cy="18" r={radius} className="stroke-slate-100" strokeWidth="3" fill="transparent" />
                <circle 
                  cx="18" 
                  cy="18" 
                  r={radius} 
                  className="stroke-blue-600 transition-all duration-300" 
                  strokeWidth="3" 
                  fill="transparent" 
                  strokeDasharray={circumference} 
                  strokeDashoffset={strokeDashoffset} 
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Available Drivers</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">
              86 <span className="text-xs font-semibold text-slate-400">/ 120</span>
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Revenue Trends (Chart) & Delivery Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Trends Chart Card */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Revenue Trends</h2>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Monthly performance vs target</p>
            </div>
            <button className="inline-flex items-center gap-1 text-xs font-bold text-slate-650 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition duration-150 cursor-pointer">
              This Year
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* SVG Custom Premium Chart */}
          <div className="relative w-full h-[200px] mt-4 select-none">
            <svg viewBox="0 0 700 200" width="100%" height="100%" className="overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Gridlines */}
              <line x1="0" y1="20" x2="700" y2="20" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="70" x2="700" y2="70" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="120" x2="700" y2="120" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="170" x2="700" y2="170" stroke="#f1f5f9" strokeWidth="1" />

              {/* Area Under Curve */}
              <path 
                d="M 10 140 Q 90 120, 150 110 T 300 130 T 430 110 T 560 60 L 680 70 L 680 170 L 10 170 Z" 
                fill="url(#chartGradient)" 
              />

              {/* Chart Line Path */}
              <path 
                d="M 10 140 Q 90 120, 150 110 T 300 130 T 430 110 T 560 60 L 680 70" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />

              {/* Data Dot Indicators */}
              <circle cx="150" cy="110" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              <circle cx="300" cy="130" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              <circle cx="430" cy="110" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
              
              {/* Highlight Tooltip Peak Dot (Aug 2023 peak) */}
              <circle cx="560" cy="60" r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="3" className="shadow-lg shadow-blue-500/50" />

              {/* Tooltip Overlay */}
              <g transform="translate(520, 15)">
                <rect width="80" height="30" rx="6" fill="#0f172a" />
                <polygon points="40,30 35,35 45,35" fill="#0f172a" transform="translate(0, -2)" />
                <text x="40" y="18" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Aug 2023</text>
              </g>

              {/* X Axis Labels */}
              <text x="15" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">Jan</text>
              <text x="110" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">Feb</text>
              <text x="205" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">Mar</text>
              <text x="300" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">Apr</text>
              <text x="395" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">May</text>
              <text x="490" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">Jun</text>
              <text x="585" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold">Jul</text>
              <text x="680" y="195" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="end">Aug</text>

              {/* Y Axis Labels (Left Aligned Overlay) */}
              <text x="0" y="24" fill="#cbd5e1" fontSize="9" fontWeight="bold">60k</text>
              <text x="0" y="74" fill="#cbd5e1" fontSize="9" fontWeight="bold">40k</text>
              <text x="0" y="124" fill="#cbd5e1" fontSize="9" fontWeight="bold">20k</text>
              <text x="0" y="174" fill="#cbd5e1" fontSize="9" fontWeight="bold">0k</text>
            </svg>
          </div>
        </div>

        {/* Delivery Status Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Delivery Status</h2>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">On-time vs Delayed</p>
          </div>

          <div className="space-y-6 my-auto py-4">
            {/* Week 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-650">
                <span>Week 1</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">95% On Time</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden bg-slate-100">
                <div className="bg-blue-600 h-full" style={{ width: '95%' }}></div>
                <div className="bg-red-500 h-full" style={{ width: '5%' }}></div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-650">
                <span>Week 2</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">92% On Time</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden bg-slate-100">
                <div className="bg-blue-600 h-full" style={{ width: '92%' }}></div>
                <div className="bg-red-500 h-full" style={{ width: '8%' }}></div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-650">
                <span>Week 3</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">88% On Time</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden bg-slate-100">
                <div className="bg-blue-600 h-full" style={{ width: '88%' }}></div>
                <div className="bg-red-500 h-full" style={{ width: '12%' }}></div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-650">
                <span>Week 4</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">94% On Time</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden bg-slate-100">
                <div className="bg-blue-600 h-full" style={{ width: '94%' }}></div>
                <div className="bg-red-500 h-full" style={{ width: '6%' }}></div>
              </div>
            </div>
          </div>

          {/* Legend indicator */}
          <div className="flex items-center justify-center gap-6 border-t border-slate-50 pt-4 text-[10px] font-bold text-slate-455">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span className="text-slate-500">On Time</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="text-slate-500">Delayed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Recent Bookings (Table) & Driver Status / Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings Table */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Recent Bookings</h2>
            <button className="text-xs font-bold text-blue-600 hover:text-blue-700 transition cursor-pointer">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3.5 font-semibold text-[10px] tracking-widest">ID</th>
                  <th className="pb-3.5 font-semibold text-[10px] tracking-widest pl-4">Destination</th>
                  <th className="pb-3.5 font-semibold text-[10px] tracking-widest pl-4">Status</th>
                  <th className="pb-3.5 font-semibold text-[10px] tracking-widest pl-4">ETA</th>
                  <th className="pb-3.5 font-semibold text-[10px] tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 font-bold text-blue-600">{booking.id}</td>
                    <td className="py-4 pl-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900">{booking.delivery}</p>
                          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">From: {booking.pickup}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pl-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${booking.statusColor}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 pl-4 font-bold text-slate-650">{booking.date}</td>
                    <td className="py-4 text-right">
                      <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right side: Driver Status & Recent Activities */}
        <div className="space-y-8">
          {/* Driver Status Panel */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 tracking-tight mb-6">Driver Status</h2>
            
            <div className="space-y-4">
              {drivers.map((driver, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-2xl hover:bg-slate-50/50 transition duration-150">
                  <div className="flex items-center gap-3">
                    {driver.avatar ? (
                      <img 
                        src={driver.avatar} 
                        alt={driver.name} 
                        className="w-10 h-10 rounded-xl object-cover border border-slate-100" 
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center text-xs">
                        {driver.initials}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold text-slate-900">{driver.name}</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{driver.vehicle}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold ${driver.statusBg}`}>
                    {driver.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities Panel */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 tracking-tight mb-6">Recent Activities</h2>
            
            <div className="relative border-l border-slate-100 pl-5 ml-2.5 space-y-6">
              {activities.map((activity, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline bullet dot */}
                  <span className={`absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full ${activity.dotColor} border-2 border-white ring-4 ring-white`}></span>
                  <div>
                    <p className="text-xs font-bold text-slate-950 leading-tight">{activity.text}</p>
                    <p className="text-[9px] text-slate-400 font-semibold mt-1 uppercase tracking-wide flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DashBoard
