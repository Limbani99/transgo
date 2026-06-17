import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  MapPin, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Truck, 
  Star,
  AlertTriangle,
  Loader2,
  Calendar,
  Weight,
  Thermometer,
  Boxes
} from 'lucide-react'
import toast from 'react-hot-toast'

import teamMarcus from '../assets/team_marcus.png'
import teamSarah from '../assets/team_sarah.png'
import teamRobert from '../assets/team_robert.png'

const availableDrivers = [
  {
    id: '1',
    name: 'Robert Fox',
    rating: '4.9/5.0',
    vehicleType: 'Heavy Duty Trailer',
    distance: '8 miles away',
    location: '(Downtown LA)',
    badge: 'BEST MATCH',
    badgeType: 'primary',
    avatar: teamRobert,
    buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10'
  },
  {
    id: '2',
    name: 'Jane Cooper',
    rating: '4.8/5.0',
    vehicleType: 'Heavy Duty Trailer',
    distance: '15 miles away',
    location: '(Long Beach)',
    avatar: teamSarah,
    buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50/50'
  },
  {
    id: '3',
    name: 'Michael Chen',
    rating: '4.6/5.0',
    vehicleType: 'Flatbed Trailer',
    distance: '22 miles away',
    location: '(Anaheim)',
    badge: 'FINISHING JOB',
    badgeType: 'info',
    avatar: teamMarcus,
    buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50/50'
  },
  {
    id: '4',
    name: 'David Miller',
    rating: '4.7/5.0',
    vehicleType: 'Refrigerated Truck',
    vehicleAlert: true,
    distance: '5 miles away',
    location: '(Santa Monica)',
    avatar: teamRobert,
    buttonText: 'Assign Anyway',
    buttonStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-55'
  }
]

function AssignDriver() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleAssign = (driverName) => {
    toast.success(`Assigned ${driverName} successfully!`)
    navigate(`/bookings/${id}`)
  }

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Header with back navigation */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate(`/bookings/${id}`)}
          className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition cursor-pointer"
        >
          <ArrowLeft size={18} className="text-slate-600" />
        </button>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            Assign Driver
          </h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            <span className="text-blue-600 font-bold">{id || '#REQ-5021'}</span> • Pending Assignment
          </p>
        </div>
      </div>

      {/* Grid Layout: Left customer summary & Right Available Drivers list */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Panel: Customer Summary */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm border-l-4 border-l-blue-600 space-y-6">
          {/* Customer Company info */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</p>
              <h2 className="text-xl font-extrabold text-slate-900 mt-1.5">{ 'Global Traders Inc.' }</h2>
            </div>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold">
              B2B Freight
            </span>
          </div>

          {/* Route details */}
          <div className="relative pl-7 space-y-6">
            <div className="absolute left-[9.5px] top-2.5 bottom-2.5 w-0.5 border-l-2 border-dashed border-slate-200"></div>
            
            {/* Origin */}
            <div className="relative">
              <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-blue-600 bg-white ring-4 ring-white"></span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Origin</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Los Angeles, CA</p>
                <p className="text-[10px] font-semibold text-slate-400 mt-0.5">Pickup: Oct 24, 08:00 AM</p>
              </div>
            </div>

            {/* Destination */}
            <div className="relative">
              <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-emerald-500 bg-white ring-4 ring-white"></span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destination</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Chicago, IL</p>
                <p className="text-[10px] font-semibold text-slate-400 mt-0.5">Delivery: Oct 27, 04:00 PM</p>
              </div>
            </div>
          </div>

          {/* Specifications grid */}
          <div className="space-y-4 border-t border-slate-50 pt-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cargo Specifications</p>
            
            <div className="grid grid-cols-2 gap-3.5 text-slate-700">
              <div className="bg-slate-50 rounded-xl p-3 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><Boxes size={12} /> Commodity</span>
                <span className="text-xs font-bold text-slate-900 mt-2">Industrial HVAC Units</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><Weight size={12} /> Weight</span>
                <span className="text-xs font-bold text-slate-900 mt-2">2,400 lbs</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><Truck size={12} /> Req. Vehicle</span>
                <span className="text-xs font-bold text-slate-900 mt-2">Heavy Duty Trailer</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><Thermometer size={12} /> Conditions</span>
                <span className="text-xs font-bold text-slate-900 mt-2">Standard</span>
              </div>
            </div>
          </div>

          {/* Mini map container */}
          <div className="rounded-2xl overflow-hidden border border-slate-100 relative h-36 flex flex-col justify-between p-3.5 bg-slate-50">
            <img 
              src="/mini-route-map.png" 
              alt="Mini Route Map" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 flex justify-between w-full mt-auto bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/40 text-[10px] font-bold text-slate-750 shadow-sm">
              <span>~2,015 miles</span>
              <span>Est. 32 hours</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Available Drivers list */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Available Drivers (12)</h3>
            
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-650 bg-white hover:bg-slate-50 transition cursor-pointer">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                Filter
              </button>
              <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-650 bg-white hover:bg-slate-50 transition cursor-pointer">
                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                Sort: Distance
              </button>
            </div>
          </div>

          {/* Drivers List */}
          <div className="space-y-4">
            {availableDrivers.map((driver) => (
              <div 
                key={driver.id} 
                className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden group hover:border-blue-200 transition-colors"
              >
                {/* Driver Best Match Banner */}
                {driver.badge === 'BEST MATCH' && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-extrabold uppercase px-3.5 py-1 rounded-bl-xl tracking-wider">
                    {driver.badge}
                  </div>
                )}

                {/* Driver Identity */}
                <div className="flex items-center gap-4">
                  <img 
                    src={driver.avatar} 
                    alt={driver.name} 
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-100 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-base font-extrabold text-slate-900">{driver.name}</h4>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-550" />
                        {driver.rating}
                      </div>
                      {driver.badge === 'FINISHING JOB' && (
                        <span className="text-[9px] font-bold text-blue-600 bg-blue-50/70 border border-blue-100 px-2 py-0.5 rounded-md tracking-wide">
                          {driver.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-500 font-bold">
                      {driver.vehicleAlert ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-50 text-red-650">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                          {driver.vehicleType}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <Truck className="w-4 h-4 text-slate-400" />
                          {driver.vehicleType}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-900 font-extrabold">{driver.distance.split(' ')[0]}</span> {driver.distance.split(' ').slice(1).join(' ')}
                      </span>
                      <span className="text-slate-400 font-semibold">{driver.location}</span>
                    </div>
                  </div>
                </div>

                {/* Assign Action Button */}
                <button
                  onClick={() => handleAssign(driver.name)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold transition duration-150 cursor-pointer ${driver.buttonStyle}`}
                >
                  {driver.buttonText || 'Assign Driver'}
                </button>
              </div>
            ))}
          </div>

          {/* Loading status */}
          <div className="flex items-center justify-center gap-2 py-4 text-xs font-bold text-slate-400">
            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
            <span>Loading more drivers...</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AssignDriver
