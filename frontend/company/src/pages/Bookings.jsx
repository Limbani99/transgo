import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Calendar, 
  Plus, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react'

const allBookingRequests = [
  { 
    id: '#REQ-5021', 
    customer: 'Global Traders Inc.', 
    origin: 'Los Angeles, CA',
    destination: 'Phoenix, AZ',
    weight: '2,400 lbs', 
    date: 'Oct 28, 2023',
    status: 'NEW', 
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  { 
    id: '#REQ-5019', 
    customer: 'Apex Manufacturing', 
    origin: 'Chicago, IL',
    destination: 'Detroit, MI',
    weight: '14,500 lbs', 
    date: 'Oct 27, 2023',
    status: 'PENDING QUOTE', 
    statusBg: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  { 
    id: '#REQ-5015', 
    customer: 'Nexus Retail Group', 
    origin: 'Dallas, TX',
    destination: 'Houston, TX',
    weight: '800 lbs', 
    date: 'Oct 26, 2023',
    status: 'REJECTED', 
    statusBg: 'bg-red-50 text-red-655 border-red-100'
  },
]

function Bookings() {
  const [activeTab, setActiveTab] = useState('All Requests')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = ['All Requests', 'Pending', 'Quoted', 'Rejected']

  const filteredRequests = allBookingRequests.filter(req => {
    // 1. Search Filter
    const matchesSearch = req.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          req.customer.toLowerCase().includes(searchQuery.toLowerCase())
    
    // 2. Tab Filter
    if (activeTab === 'All Requests') return matchesSearch
    if (activeTab === 'Pending') return matchesSearch && req.status === 'NEW'
    if (activeTab === 'Quoted') return matchesSearch && req.status === 'PENDING QUOTE'
    if (activeTab === 'Rejected') return matchesSearch && req.status === 'REJECTED'
    
    return matchesSearch
  })

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Booking Requests
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Manage and process new shipment requests.
          </p>
        </div>
        
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer">
          <Plus className="w-4 h-4" />
          New Request
        </button>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        
        {/* Left Filters: Search and Calendar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-grow max-w-2xl">
          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search ID or Customer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
            />
          </div>

          {/* Date Picker Button */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/60 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-650 hover:bg-slate-100 transition duration-150 cursor-pointer">
            <Calendar className="w-4 h-4 text-slate-400" />
            Oct 1 - Oct 31, 2023
          </button>
        </div>

        {/* Right Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-end gap-2 overflow-x-auto py-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4.5 py-1.5 rounded-full text-xs font-bold transition duration-150 cursor-pointer whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-blue-50 text-blue-600 border border-blue-200/50' 
                  : 'bg-white hover:bg-slate-50 text-slate-500 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/20">
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest w-32">Booking ID</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Customer</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest pl-12">Route</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Weight</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Date</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Status</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/30 transition">
                    {/* Booking ID */}
                    <td className="py-6 px-6 font-bold text-blue-600 hover:underline">
                      <Link to={`/bookings/${req.id.replace('#', '')}`}>
                        {req.id}
                      </Link>
                    </td>
                    
                    {/* Customer */}
                    <td className="py-6 px-6 font-bold text-slate-800">
                      {req.customer}
                    </td>
                    
                    {/* Route Timeline */}
                    <td className="py-6 px-6 pl-12">
                      <div className="flex flex-col relative pl-6">
                        {/* Connecting Line */}
                        <div className="absolute left-1.5 top-1.5 bottom-1.5 w-0.5 border-l-2 border-dashed border-slate-200"></div>
                        
                        {/* Origin */}
                        <div className="flex items-center gap-2 relative">
                          <span className="absolute -left-[22.5px] w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-white"></span>
                          <span className="font-bold text-slate-800">{req.origin}</span>
                        </div>
                        
                        {/* Destination */}
                        <div className="flex items-center gap-2 relative mt-4">
                          <span className="absolute -left-[22.5px] w-2 h-2 rounded-full bg-red-500 ring-4 ring-white"></span>
                          <span className="font-bold text-slate-800">{req.destination}</span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Weight */}
                    <td className="py-6 px-6 font-bold text-slate-650">
                      {req.weight}
                    </td>
                    
                    {/* Date */}
                    <td className="py-6 px-6 font-medium text-slate-500">
                      {req.date}
                    </td>
                    
                    {/* Status Badge */}
                    <td className="py-6 px-6">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider ${req.statusBg}`}>
                        {req.status}
                      </span>
                    </td>
                    
                    {/* Actions Menu */}
                    <td className="py-6 px-6 text-right">
                      <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer">
                        <MoreVertical className="w-4.5 h-4.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-450 font-semibold text-sm">
                    No requests found matching filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/10">
          <span>
            Showing 1 to {filteredRequests.length} of {allBookingRequests.length} results
          </span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
