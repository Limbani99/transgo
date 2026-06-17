import React, { useState } from 'react'
import { 
  Truck, 
  Wrench, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Navigation,
  Calendar
} from 'lucide-react'
import toast from 'react-hot-toast'

const allVehicles = [
  {
    id: 'TR-402',
    model: 'Volvo FH16 (Semi)',
    type: 'Semi Truck',
    capacity: '24 Tons',
    driver: 'Marcus Johnson',
    lastService: 'Oct 10, 2023',
    status: 'Active',
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    id: 'TR-118',
    model: 'Scania R500 (Flatbed)',
    type: 'Flatbed Truck',
    capacity: '18 Tons',
    driver: 'Sarah Connor',
    lastService: 'Sep 28, 2023',
    status: 'Active',
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    id: 'TR-055',
    model: 'Mercedes Actros (Refrig.)',
    type: 'Refrigerated Truck',
    capacity: '20 Tons',
    driver: 'Elena Rodriguez',
    lastService: 'Oct 12, 2023',
    status: 'In Maintenance',
    statusBg: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    id: 'TR-205',
    model: 'Freightliner Cascadia',
    type: 'Semi Truck',
    capacity: '22 Tons',
    driver: 'Unassigned',
    lastService: 'Oct 01, 2023',
    status: 'Available',
    statusBg: 'bg-blue-50 text-blue-600 border-blue-100'
  }
]

function Vehicles() {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('All Types')

  const handleAddVehicle = () => {
    toast.success('Onboarding vehicle form coming soon!')
  }

  const handleAction = (vehicleId) => {
    toast.success(`Action options for vehicle ${vehicleId}`)
  }

  const filteredVehicles = allVehicles.filter(vehicle => {
    const matchesSearch = vehicle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (typeFilter === 'All Types') return matchesSearch
    return matchesSearch && vehicle.type === typeFilter
  })

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Fleet Management
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Overview and tracking of active company vehicles and logistics equipment.
          </p>
        </div>
        
        <button 
          onClick={handleAddVehicle}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Vehicle
        </button>
      </div>

      {/* Grid of 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Fleet */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <Truck className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Total Fleet Size</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">120</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Registered cargo assets</p>
          </div>
        </div>

        {/* Card 2: Active Vehicles */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <Navigation className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Active Vehicles</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">94</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Currently in transit</p>
          </div>
        </div>

        {/* Card 3: Maintenance */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-amber-50 text-amber-600">
              <Wrench className="w-4.5 h-4.5" />
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-600">
              Alert
            </span>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">In Maintenance</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">8</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Scheduled service queue</p>
          </div>
        </div>

        {/* Card 4: Available */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-50 text-green-600">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Available</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">18</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Ready for dispatcher assignment</p>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
        
        {/* Left Filter Option dropdown */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-48">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-655 font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 cursor-pointer"
            >
              <option value="All Types">All Vehicle Types</option>
              <option value="Semi Truck">Semi Truck</option>
              <option value="Flatbed Truck">Flatbed Truck</option>
              <option value="Refrigerated Truck">Refrigerated Truck</option>
            </select>
          </div>
        </div>

        {/* Right Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search vehicle ID or model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
          />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/20">
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest w-40">Vehicle ID</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Model & Type</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Cargo Capacity</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Assigned Driver</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Last Service</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Status</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-slate-50/30 transition text-slate-700">
                    {/* Vehicle ID */}
                    <td className="py-5 px-6 font-bold text-slate-900 text-sm">
                      {vehicle.id}
                    </td>
                    
                    {/* Model & Type */}
                    <td className="py-5 px-6">
                      <p className="font-bold text-slate-850">{vehicle.model}</p>
                      <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-0.5">{vehicle.type}</p>
                    </td>
                    
                    {/* Cargo Capacity */}
                    <td className="py-5 px-6 font-bold text-slate-750">
                      {vehicle.capacity}
                    </td>
                    
                    {/* Assigned Driver */}
                    <td className="py-5 px-6">
                      {vehicle.driver === 'Unassigned' ? (
                        <span className="text-slate-400 font-semibold italic">{vehicle.driver}</span>
                      ) : (
                        <span className="font-bold text-blue-600 cursor-pointer hover:underline">
                          {vehicle.driver}
                        </span>
                      )}
                    </td>

                    {/* Last Service */}
                    <td className="py-5 px-6 text-slate-500 font-semibold">
                      <span className="flex items-center gap-1.5"><Calendar size={13} className="text-slate-400" /> {vehicle.lastService}</span>
                    </td>
                    
                    {/* Status Badge */}
                    <td className="py-5 px-6">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider ${vehicle.statusBg}`}>
                        {vehicle.status}
                      </span>
                    </td>
                    
                    {/* Actions */}
                    <td className="py-5 px-6 text-right">
                      <button 
                        onClick={() => handleAction(vehicle.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer"
                      >
                        <MoreVertical className="w-4.5 h-4.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-450 font-semibold text-sm">
                    No vehicles found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/10">
          <span>
            Showing 1 to {filteredVehicles.length} of {allVehicles.length} entries
          </span>
          
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold transition cursor-pointer">
              1
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Vehicles
