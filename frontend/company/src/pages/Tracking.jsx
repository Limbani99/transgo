import React, { useState, useEffect } from 'react'
import { 
  CheckCircle2, 
  MapPin, 
  Truck, 
  Phone, 
  Plus, 
  Minus, 
  Clock,
  Play,
  Navigation
} from 'lucide-react'
import toast from 'react-hot-toast'
import teamMarcus from '../assets/team_marcus.png'

function Tracking() {
  const [zoom, setZoom] = useState(12)
  const [updateTimer, setUpdateTimer] = useState(5)

  // Countdown timer for "Updating every Xs"
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateTimer((prev) => (prev === 1 ? 5 : prev - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCall = () => {
    toast.success('Dialing driver Marcus Johnson...')
  }

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Main Grid: Left Map area & Right Tracking Timeline cards */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-stretch">
        
        {/* Left Map Panel */}
        <div className="bg-white border border-slate-100 rounded-3xl p-3 shadow-sm flex flex-col min-h-[600px] lg:min-h-[700px] relative overflow-hidden">
          
          {/* Map Display */}
          <div className="flex-grow rounded-2xl overflow-hidden relative">
            <img 
              src="/tracking-map.png" 
              alt="Real-time Tracking Map" 
              className="w-full h-full object-cover"
            />

            {/* Floating Top Left Badge */}
            <div className="absolute top-6 left-6 bg-white/95 border border-slate-200/40 backdrop-blur-md rounded-2xl p-4.5 shadow-lg z-10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
              <div>
                <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Real-time Driver Location</p>
                <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-0.5">Updating in {updateTimer}s</p>
              </div>
            </div>

            {/* Floating Bottom Right Zoom Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10 shadow-lg shadow-slate-200/40">
              <button 
                onClick={() => setZoom((z) => Math.min(18, z + 1))}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200/50 hover:bg-slate-50 flex items-center justify-center font-extrabold text-slate-800 transition cursor-pointer"
              >
                <Plus size={18} />
              </button>
              <button 
                onClick={() => setZoom((z) => Math.max(1, z - 1))}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200/50 hover:bg-slate-50 flex items-center justify-center font-extrabold text-slate-800 transition cursor-pointer"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Info Panels */}
        <div className="space-y-6 flex flex-col">
          
          {/* Card 1: ETA & Tracking ID */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-start border-b border-slate-50 pb-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tracking ID</p>
                <h2 className="text-xl font-extrabold text-slate-900 mt-1">#TRK-8802</h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                In Transit
              </span>
            </div>

            <div className="pt-5 space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estimated Time of Arrival</p>
              <div className="flex items-baseline gap-1.5 mt-1.5">
                <span className="text-3xl font-extrabold text-blue-600 tracking-tight">2h 45m</span>
                <span className="text-sm font-bold text-slate-400">away</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold pt-1">
                Expected today by 4:30 PM EST
              </p>
            </div>
          </div>

          {/* Card 2: Shipment Timeline */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex-grow">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-6">Shipment Timeline</h3>

            {/* Timeline details */}
            <div className="relative pl-7 space-y-6">
              {/* Connecting line */}
              <div className="absolute left-[9.5px] top-2 bottom-2 w-0.5 border-l-2 border-slate-100"></div>

              {/* Node 1: Booking Confirmed */}
              <div className="relative">
                <CheckCircle2 size={20} className="absolute -left-[31px] top-0 text-emerald-500 fill-emerald-50 bg-white ring-4 ring-white" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">Booking Confirmed</p>
                  <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1.5">08:15 AM • HQ Office</p>
                </div>
              </div>

              {/* Node 2: Driver Assigned */}
              <div className="relative">
                <CheckCircle2 size={20} className="absolute -left-[31px] top-0 text-emerald-500 fill-emerald-50 bg-white ring-4 ring-white" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">Driver Assigned</p>
                  <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1.5">09:00 AM • System Auto-dispatch</p>
                </div>
              </div>

              {/* Node 3: Picked Up */}
              <div className="relative">
                <CheckCircle2 size={20} className="absolute -left-[31px] top-0 text-emerald-500 fill-emerald-50 bg-white ring-4 ring-white" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">Picked Up</p>
                  <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1.5">10:30 AM • Chicago, IL facility</p>
                </div>
              </div>

              {/* Node 4: In Transit */}
              <div className="relative">
                <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-blue-600 bg-white ring-4 ring-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                </span>
                <div>
                  <p className="text-xs font-bold text-blue-600 leading-none">In Transit</p>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1.5">Currently passing through Ohio</p>
                </div>
              </div>

              {/* Node 5: Delivered */}
              <div className="relative">
                <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border border-slate-200 bg-white ring-4 ring-white"></span>
                <div>
                  <p className="text-xs font-bold text-slate-400 leading-none">Delivered</p>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1.5">Pending arrival in New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Driver Info */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={teamMarcus} 
                  alt="Marcus Johnson" 
                  className="w-12 h-12 rounded-xl object-cover border border-slate-100 shadow-sm"
                />
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Driver</p>
                  <p className="text-xs font-extrabold text-slate-900 mt-0.5">Marcus Johnson</p>
                  <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    Volvo FH16
                  </p>
                </div>
              </div>

              <button 
                onClick={handleCall}
                className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition flex items-center justify-center cursor-pointer"
                title="Call Driver"
              >
                <Phone size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Tracking
