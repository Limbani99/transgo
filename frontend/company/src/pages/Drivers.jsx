import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  SlidersHorizontal, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from 'lucide-react'
import teamMarcus from '../assets/team_marcus.png'
import teamSarah from '../assets/team_sarah.png'
import teamRobert from '../assets/team_robert.png'

const allDrivers = [
  {
    name: 'Marcus Johnson',
    id: 'DRV-8492',
    phone: '+1 (555) 123-4567',
    vehicle: 'Volvo FH16 - TR-402',
    status: 'Available',
    statusBg: 'bg-green-50 text-green-600 border-green-100',
    avatar: teamMarcus
  },
  {
    name: 'Sarah Connor',
    id: 'DRV-7311',
    phone: '+1 (555) 987-6543',
    vehicle: 'Scania R500 - TR-118',
    status: 'Busy',
    statusBg: 'bg-amber-50 text-amber-600 border-amber-100',
    avatar: teamSarah
  },
  {
    name: 'David Chen',
    id: 'DRV-5092',
    phone: '+1 (555) 234-5678',
    vehicle: 'Unassigned',
    status: 'Offline',
    statusBg: 'bg-slate-100 text-slate-500',
    avatar: teamRobert
  },
  {
    name: 'Elena Rodriguez',
    id: 'DRV-9921',
    phone: '+1 (555) 876-5432',
    vehicle: 'Mercedes Actros - TR-055',
    status: 'On Leave',
    statusBg: 'bg-red-50 text-red-650 border-red-100',
    avatar: teamSarah // Reuse sarah avatar or initials, let's use initials for diversity
  }
]

function Drivers() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredDrivers = allDrivers.filter(driver => 
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Driver Management
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-semibold">
            Total Drivers: <span className="text-slate-900 font-extrabold">124</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search bar inside the component page header */}
          <div className="relative flex-grow sm:w-64">
            <input 
              type="text" 
              placeholder="Search drivers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-white border border-slate-200 pl-4 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-150 shadow-sm"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-650 transition duration-150 shadow-sm cursor-pointer whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            Filter
          </button>
          
          <Link 
            to="/drivers/add" 
            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-750 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition duration-150 shadow-md shadow-blue-500/10 cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Add Driver
          </Link>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/20">
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest w-20">Driver</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Name & ID</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Contact Number</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Vehicle Assigned</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Status</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver, index) => (
                  <tr key={driver.id} className="hover:bg-slate-50/30 transition">
                    {/* Driver Avatar */}
                    <td className="py-5 px-6">
                      {driver.name === 'Elena Rodriguez' ? (
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 font-extrabold flex items-center justify-center text-xs border border-slate-100 shadow-sm">
                          ER
                        </div>
                      ) : (
                        <img 
                          src={driver.avatar} 
                          alt={driver.name} 
                          className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm"
                        />
                      )}
                    </td>
                    
                    {/* Name & ID */}
                    <td className="py-5 px-6">
                      <p className="font-extrabold text-slate-900 text-sm leading-snug">{driver.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold tracking-wider mt-0.5">{driver.id}</p>
                    </td>
                    
                    {/* Contact Number */}
                    <td className="py-5 px-6 font-bold text-slate-750">
                      {driver.phone}
                    </td>
                    
                    {/* Vehicle Assigned */}
                    <td className="py-5 px-6 font-bold text-slate-650">
                      {driver.vehicle === 'Unassigned' ? (
                        <span className="text-slate-400 font-semibold italic">{driver.vehicle}</span>
                      ) : (
                        driver.vehicle
                      )}
                    </td>
                    
                    {/* Status Badge */}
                    <td className="py-5 px-6">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider ${driver.statusBg}`}>
                        {driver.status}
                      </span>
                    </td>
                    
                    {/* Actions Menu */}
                    <td className="py-5 px-6 text-right">
                      <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer">
                        <MoreVertical className="w-4.5 h-4.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-slate-450 font-semibold text-sm">
                    No drivers found matching search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/10">
          <span>
            Showing 1 to {filteredDrivers.length} of 124 drivers
          </span>
          
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold transition cursor-pointer">
              1
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 hover:bg-slate-50 transition font-bold cursor-pointer">
              2
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 hover:bg-slate-50 transition font-bold cursor-pointer">
              3
            </button>
            <span className="px-1.5 text-slate-400 font-bold">...</span>
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Drivers
