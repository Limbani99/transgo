import React from 'react'
import { 
  LayoutDashboard, 
  PlusCircle, 
  Package, 
  MapPin, 
  CreditCard, 
  Bell, 
  User, 
  HelpCircle, 
  Search, 
  Settings, 
  Download, 
  Plus, 
  TrendingUp, 
  Truck, 
  ClipboardCheck, 
  CheckCircle2, 
  Wallet, 
  ChevronDown, 
  Clock, 
  MessageSquare 
} from 'lucide-react'
import teamMarcus from '../../assets/team_marcus.png'
import teamSarah from '../../assets/team_sarah.png'
import teamRobert from '../../assets/team_robert.png'

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Create Shipment', icon: PlusCircle },
  { label: 'My Shipments', icon: Package },
  { label: 'Tracking', icon: MapPin },
  { label: 'Payments', icon: CreditCard },
  { label: 'Notifications', icon: Bell },
  { label: 'Profile', icon: User },
  { label: 'Support', icon: HelpCircle },
]

const stats = [
  { 
    label: 'ACTIVE SHIPMENTS', 
    value: '24', 
    badge: '+12% ↗', 
    badgeType: 'success', 
    icon: Truck,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  { 
    label: 'PENDING DELIVERIES', 
    value: '08', 
    badge: 'Stable', 
    badgeType: 'stable', 
    icon: ClipboardCheck,
    iconBg: 'bg-slate-50 text-slate-550'
  },
  { 
    label: 'COMPLETED SHIPMENTS', 
    value: '1,482', 
    badge: '+4% ↗', 
    badgeType: 'success', 
    icon: CheckCircle2,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  { 
    label: 'TOTAL SPENT', 
    value: '$42.8k', 
    badge: 'YTD', 
    badgeType: 'stable', 
    icon: Wallet,
    iconBg: 'bg-slate-50 text-slate-550'
  },
]

const recentBookings = [
  { 
    id: '#TG-4829', 
    pickup: 'San Francisco, CA', 
    delivery: 'Austin, TX', 
    status: 'In Transit', 
    statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
    date: 'Oct 24, 2023' 
  },
  { 
    id: '#TG-4830', 
    pickup: 'New York, NY', 
    delivery: 'Chicago, IL', 
    status: 'Delivered', 
    statusColor: 'bg-green-50 text-green-600 border-green-100',
    date: 'Oct 23, 2023' 
  },
  { 
    id: '#TG-4831', 
    pickup: 'Seattle, WA', 
    delivery: 'Denver, CO', 
    status: 'Processing', 
    statusColor: 'bg-amber-50 text-amber-600 border-amber-100',
    date: 'Oct 22, 2023' 
  },
]

const notifications = [
  {
    title: 'Driver Assigned',
    desc: 'Robert Henderson has been assigned to shipment #TG-90122-TX.',
    time: '10 MINS AGO',
    icon: teamRobert
  },
  {
    title: 'Shipment Picked Up',
    desc: 'Package from Austin Hub for #TG-4829 has been picked up.',
    time: '2 HOURS AGO',
    icon: teamMarcus
  },
  {
    title: 'Delivery Scheduled',
    desc: 'Shipment #TG-4830 is scheduled for delivery today at 2:00 PM.',
    time: '5 HOURS AGO',
    icon: teamSarah
  },
  {
    title: 'Invoice Generated',
    desc: 'Monthly summary invoice for September is now available.',
    time: 'YESTERDAY',
    icon: teamMarcus
  }
]

function DashBoard() {
  return (
    <div className="flex bg-slate-50/50 min-h-screen font-sans text-slate-700">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0 sticky top-0 h-screen z-30">
        <div className="space-y-8">
          {/* Logo Branding */}
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
              <Truck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">TransGo</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">
                Logistics Enterprise
              </p>
            </div>
          </div>

          {/* Navigation Menu Links */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition duration-150 text-left ${
                    item.active 
                      ? 'bg-blue-50/70 text-blue-600 border-l-4 border-blue-600 rounded-l-none pl-3' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* User Profile Footer in Sidebar */}
        <div className="border border-slate-100 bg-slate-50/50 p-3 rounded-2xl flex items-center gap-3 shadow-inner">
          <img 
            src={teamMarcus} 
            alt="Malhar Avatar" 
            className="w-10 h-10 rounded-xl object-cover" 
          />
          <div>
            <p className="text-xs font-bold text-slate-900 leading-tight">Malhar</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Enterprise Tier
            </p>
          </div>
        </div>
      </aside>

      {/* 2. MAIN HEADER & CONTENT */}
      <div className="flex-grow flex flex-col min-w-0">
        
        {/* Header Bar */}
        <header className="flex items-center justify-between py-4 px-8 border-b border-slate-100 bg-white sticky top-0 z-20">
          {/* Search bar */}
          <div className="relative w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search shipments, bookings, or documents..."
              className="w-full rounded-xl bg-slate-50/80 border border-slate-200/50 pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
            />
          </div>

          {/* Action icons & Profile dropdown */}
          <div className="flex items-center gap-5">
            <button className="relative p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1 right-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            </button>
            <button className="p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150">
              <Settings className="w-4.5 h-4.5" />
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2.5 cursor-pointer hover:bg-slate-50 py-1.5 px-3 rounded-xl transition duration-150">
              <img 
                src={teamMarcus} 
                alt="Malhar Profile" 
                className="w-8 h-8 rounded-lg object-cover" 
              />
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Panels Scrollable Content */}
        <main className="p-8 max-w-[1400px] w-full mx-auto flex-grow space-y-8">
          
          {/* Dashboard Title & Quick Actions Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                Welcome Back, Malhar 👋
              </h1>
              <p className="text-slate-500 text-xs mt-1 font-medium">
                Your logistics network is running smoothly across 12 active global routes.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition duration-150">
                <Download className="w-3.5 h-3.5" />
                Export Report
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-200 hover:bg-blue-700 transition duration-150">
                <Plus className="w-3.5 h-3.5" />
                New Booking
              </button>
            </div>
          </div>

          {/* Stats, Bookings, Active Focus, Notifications & Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 items-start">
            
            {/* Left Column Content */}
            <div className="space-y-8">
              
              {/* Stats Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.iconBg}`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${
                          stat.badgeType === 'success' 
                            ? 'bg-green-50 text-green-600' 
                            : 'bg-slate-150 bg-slate-100 text-slate-500'
                        }`}>
                          {stat.badge}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{stat.label}</p>
                        <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">{stat.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Quick Actions Shortcuts */}
              <div className="grid grid-cols-3 gap-4">
                <button className="bg-white hover:bg-slate-50 transition border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center gap-4 text-left">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Create New</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Booking</p>
                  </div>
                </button>

                <button className="bg-white hover:bg-slate-50 transition border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center gap-4 text-left">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Track</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Shipment</p>
                  </div>
                </button>

                <button className="bg-white hover:bg-slate-50 transition border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center gap-4 text-left">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Booking</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">History</p>
                  </div>
                </button>
              </div>

              {/* Recent Bookings Table */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight">Recent Bookings</h2>
                  <a href="/bookings" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition">
                    View All Bookings
                  </a>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                        <th className="pb-3 font-semibold text-[10px] tracking-widest">Booking ID</th>
                        <th className="pb-3 font-semibold text-[10px] tracking-widest">Pickup Location</th>
                        <th className="pb-3 font-semibold text-[10px] tracking-widest">Delivery Location</th>
                        <th className="pb-3 font-semibold text-[10px] tracking-widest">Status</th>
                        <th className="pb-3 font-semibold text-[10px] tracking-widest">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-slate-50/30 transition">
                          <td className="py-4 font-bold text-blue-600">{booking.id}</td>
                          <td className="py-4 font-medium text-slate-800">{booking.pickup}</td>
                          <td className="py-4 font-medium text-slate-800">{booking.delivery}</td>
                          <td className="py-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${booking.statusColor}`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 font-medium text-slate-500">{booking.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Active Shipments Focus cards */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 tracking-tight mb-4">Active Shipments Focus</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Focus Card 1 */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between border-l-4 border-l-blue-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[9px] font-bold text-slate-450 uppercase tracking-widest text-slate-400">Shipment ID</p>
                        <p className="text-xs font-bold text-slate-900 mt-1">#TG-90122-TX</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-bold text-slate-450 uppercase tracking-widest text-slate-400">ETA</p>
                        <p className="text-xs font-bold text-blue-600 mt-1">Tomorrow, 4:00 PM</p>
                      </div>
                    </div>

                    {/* Driver info */}
                    <div className="mt-6 border-t border-b border-slate-50 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={teamRobert} 
                          alt="Driver" 
                          className="w-10 h-10 rounded-xl object-cover" 
                        />
                        <div>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none">Assigned Driver</p>
                          <p className="text-xs font-bold text-slate-900 mt-1">Robert Henderson</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition duration-150">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Timeline progress */}
                    <div className="mt-6">
                      <div className="relative flex justify-between text-[10px] font-bold text-slate-700">
                        <span>Austin Hub</span>
                        <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-[9px]">On the move</span>
                        <span>Dallas Terminal</span>
                      </div>
                      <div className="mt-3 relative h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-2/3 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Focus Card 2 */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between border-l-4 border-l-blue-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[9px] font-bold text-slate-450 uppercase tracking-widest text-slate-400">Shipment ID</p>
                        <p className="text-xs font-bold text-slate-900 mt-1">#TG-44310-CA</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-bold text-slate-450 uppercase tracking-widest text-slate-400">ETA</p>
                        <p className="text-xs font-bold text-blue-600 mt-1">Oct 26, 09:00 AM</p>
                      </div>
                    </div>

                    {/* Driver info */}
                    <div className="mt-6 border-t border-b border-slate-50 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={teamSarah} 
                          alt="Driver" 
                          className="w-10 h-10 rounded-xl object-cover" 
                        />
                        <div>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none">Assigned Driver</p>
                          <p className="text-xs font-bold text-slate-900 mt-1">Sarah Mitchell</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition duration-150">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Timeline progress */}
                    <div className="mt-6">
                      <div className="relative flex justify-between text-[10px] font-bold text-slate-700">
                        <span>LA Port</span>
                        <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-[9px]">Loading</span>
                        <span>Sacramento Depot</span>
                      </div>
                      <div className="mt-3 relative h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-1/4 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column Content */}
            <div className="space-y-8">
              
              {/* Notifications Panel */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      Notifications
                    </h2>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white tracking-wider">
                      3 NEW
                    </span>
                  </div>

                  {/* Notifications List */}
                  <div className="divide-y divide-slate-50">
                    {notifications.map((item, idx) => (
                      <div key={idx} className="py-4 flex gap-3.5 first:pt-0 last:pb-0">
                        <img 
                          src={item.icon} 
                          alt="User icon" 
                          className="w-8 h-8 rounded-lg object-cover shrink-0 mt-0.5" 
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">{item.title}</p>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                          <span className="text-[8px] font-bold text-slate-400 tracking-wide block mt-1.5 uppercase">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-50 pt-4 mt-6 text-center">
                  <a href="/notifications" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition">
                    Mark all as read
                  </a>
                </div>
              </div>

              {/* Route Analytics Panel */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    Route Analytics
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* East Coast Congestion */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-bold mb-2">
                      <span className="text-slate-500 tracking-wider">East Coast Congestion</span>
                      <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">High Risk</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mid-West Weather */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-bold mb-2">
                      <span className="text-slate-500 tracking-wider">Mid-West Weather</span>
                      <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Clear</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-1/5 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>

    </div>
  )
}

export default DashBoard
