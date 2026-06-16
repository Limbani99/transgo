import React, { useState } from 'react'
import {
  Truck,
  Terminal,
  Locate,
  Plus,
  Minus,
  Check,
  Phone,
  MessageSquare
} from 'lucide-react'
import shipmentMap from '../../assets/shipment_map.png'
import teamRobert from '../../assets/team_robert.png'

const timelineSteps = [
  {
    title: 'Booking Confirmed',
    time: 'Aug 24, 09:15 AM',
    status: 'completed',
  },
  {
    title: 'Pickup Completed',
    time: 'Aug 24, 02:30 PM • Warehouse A',
    status: 'completed',
  },
  {
    title: 'In Transit',
    time: 'Currently near Brandenburg, DE',
    status: 'active',
  },
  {
    title: 'Out for Delivery',
    time: 'Expected: Aug 25, 10:00 AM',
    status: 'pending',
  },
]

function TrackingPage() {
  const [zoom, setZoom] = useState(1.15)
  const [isLocating, setIsLocating] = useState(false)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.15, 1.8))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.15, 0.95))
  }

  const handleLocate = () => {
    setIsLocating(true)
    setZoom(1.4)
    setTimeout(() => {
      setIsLocating(false)
    }, 1500)
  }

  return (
    <div className="w-full h-[calc(100vh-65px)] flex flex-col lg:block overflow-y-auto lg:overflow-hidden bg-slate-950 font-sans relative">
      
      {/* 1. MAP BACKGROUND & MARKERS WRAPPER */}
      <div className="relative w-full h-[360px] lg:h-full lg:absolute lg:inset-0 lg:w-full lg:h-full overflow-hidden shrink-0 z-0">
        
        {/* Dynamic Zooming/Panning Container */}
        <div
          className="w-full h-full transition-transform duration-500 ease-out relative"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: '57% 44%',
          }}
        >
          {/* Night Map Base Graphic */}
          <img
            src={shipmentMap}
            alt="Logistics Map Grid"
            className="w-full h-full object-cover opacity-60 brightness-[0.22] contrast-[1.3] saturate-[0.5] select-none pointer-events-none"
          />

          {/* Glowing Curved Route Path */}
          <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              <filter id="glow-route" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing neon background line */}
            <path
              d="M 350 700 Q 560 400 820 270"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="9"
              strokeLinecap="round"
              opacity="0.35"
              filter="url(#glow-route)"
            />

            {/* Dotted primary route line */}
            <path
              d="M 350 700 Q 560 400 820 270"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Active Truck Marker */}
          <div
            style={{ left: '57%', top: '44%' }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
          >
            {/* Tooltip Label */}
            <div className="mb-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg border border-blue-100 text-[10px] font-extrabold text-blue-600 whitespace-nowrap tracking-wide flex items-center gap-1.5 animate-bounce">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              TX-4402 (Active)
            </div>

            {/* Pulsing Icon Circle */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 border-2 border-white shadow-2xl text-white">
              <Truck className="w-5.5 h-5.5" />
              
              {/* Permanent pulse wave */}
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25"></div>
              
              {/* Extra radar search ring when "Locate" is triggered */}
              {isLocating && (
                <div className="absolute -inset-6 rounded-full bg-blue-400/30 animate-pulse border border-blue-400/80 z-0"></div>
              )}
            </div>
          </div>

          {/* Destination Endpoint Marker */}
          <div
            style={{ left: '82%', top: '27%' }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
          >
            {/* Label */}
            <div className="mb-2 bg-slate-900/90 text-white border border-slate-700/60 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-lg text-[9px] font-bold whitespace-nowrap tracking-wide">
              Brandenburg Terminal
            </div>
            
            {/* Icon */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xl text-slate-800">
              <Terminal className="w-4 h-4 text-blue-600" />
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Map Vignette Edge Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none" />

        {/* 2. FLOATING MAP NAVIGATION CONTROLS */}
        <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-3">
          {/* Center/Locate on truck */}
          <button
            onClick={handleLocate}
            title="Center on truck"
            className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-xl text-slate-700 hover:bg-slate-50 transition active:scale-95 cursor-pointer"
          >
            <Locate className={`w-5 h-5 ${isLocating ? 'text-blue-600 animate-spin' : ''}`} />
          </button>
          
          {/* Zoom Buttons Stack */}
          <div className="flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-xl overflow-hidden">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="flex items-center justify-center w-11 h-11 text-slate-700 hover:bg-slate-50 border-b border-slate-100 transition active:scale-95 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="flex items-center justify-center w-11 h-11 text-slate-700 hover:bg-slate-50 transition active:scale-95 cursor-pointer"
            >
              <Minus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. OVERLAY SIDE DETAIL PANELS */}
      <div className="w-full lg:absolute lg:left-8 lg:top-8 lg:bottom-8 lg:w-[385px] lg:z-10 lg:overflow-y-auto flex flex-col gap-5 p-5 lg:p-0 scrollbar-none">
        
        {/* PANEL CARD 1: TRACKING CORE SUMMARY */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[2rem] p-6 shadow-xl flex flex-col gap-5">
          {/* Header ID Row */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase leading-none">TRACKING ID</p>
              <p className="text-lg font-extrabold text-slate-900 mt-1.5 tracking-tight">#TRK-8829-XQ</p>
            </div>
            
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-600 border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              In Transit
            </span>
          </div>

          {/* Estimated / Remaining Arrival Capsules */}
          <div className="grid grid-cols-2 gap-4">
            {/* Arrival Box */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-none">Est. Arrival</p>
              <p className="text-sm font-extrabold text-slate-800 mt-2">4:30 PM</p>
            </div>
            
            {/* Time Remaining Box */}
            <div className="bg-blue-50/70 border border-blue-100/50 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-bold text-blue-500/80 uppercase tracking-wide leading-none">ETA Remaining</p>
              <p className="text-sm font-extrabold text-blue-600 mt-2">2h 45m</p>
            </div>
          </div>

          {/* Stats Segment Row */}
          <div className="grid grid-cols-3 gap-2 border-t border-slate-200/50 pt-4 text-center">
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Distance</p>
              <p className="text-xs font-extrabold text-slate-800 mt-1">340 km</p>
            </div>
            <div className="border-x border-slate-200/50">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Speed</p>
              <p className="text-xs font-extrabold text-slate-800 mt-1">78 km/h</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Fuel</p>
              <p className="text-xs font-extrabold text-slate-800 mt-1">82%</p>
            </div>
          </div>
        </div>

        {/* PANEL CARD 2: DRIVER ASSIGNMENT */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[2rem] p-5 shadow-xl flex flex-col gap-4">
          
          {/* Avatar and name */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <img
                src={teamRobert}
                alt="Michael Chen - Driver"
                className="w-12 h-12 rounded-2xl object-cover border border-slate-200"
              />
              <div>
                <p className="text-xs font-extrabold text-slate-900 leading-none">Michael Chen</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-2 leading-none">
                  Vehicle: <span className="text-slate-800 font-bold">TX-4402</span>
                </p>
              </div>
            </div>
            
            {/* Phone Button */}
            <button
              onClick={() => alert('Initiating call with driver Michael Chen...')}
              title="Call driver"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 hover:bg-blue-850 text-white transition active:scale-95 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white" />
            </button>
          </div>

          {/* Action Button */}
          <button
            onClick={() => alert('Opening chat workspace with driver...')}
            className="w-full py-3 rounded-xl border border-blue-900 text-blue-900 hover:bg-blue-50/40 text-xs font-bold tracking-wide transition duration-150 active:scale-[0.98] cursor-pointer"
          >
            Message Driver
          </button>
        </div>

        {/* PANEL CARD 3: TIMELINE SHIPMENT PROGRESS */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[2rem] p-6 shadow-xl flex flex-col gap-5">
          <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase leading-none">SHIPMENT PROGRESS</p>

          <div className="relative flex flex-col gap-6 pl-2 mt-1">
            {/* Vertical Line */}
            <div className="absolute left-[10px] top-1.5 bottom-1.5 w-[2px] bg-slate-200">
              {/* Completed/Active part of the progress line */}
              <div className="absolute top-0 left-0 w-full h-[66%] bg-blue-600"></div>
            </div>

            {/* Timeline Loop */}
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-start min-h-[50px] last:min-h-0">
                
                {/* Timeline Step Icon */}
                <div className="absolute left-[10px] top-0.5 flex items-center justify-center w-5 h-5 -translate-x-1/2 bg-white rounded-full z-10">
                  {step.status === 'completed' && (
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white shadow-sm shadow-blue-300">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                  {step.status === 'active' && (
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-blue-600 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    </div>
                  )}
                  {step.status === 'pending' && (
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-200 border-[2px] border-white shadow-sm"></div>
                  )}
                </div>

                {/* Timeline Step Content */}
                <div className="pl-7">
                  <p
                    className={`text-xs font-bold leading-none ${
                      step.status === 'pending'
                        ? 'text-slate-400'
                        : step.status === 'active'
                        ? 'text-blue-600 font-extrabold'
                        : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-[10px] font-semibold mt-1.5 leading-tight ${
                      step.status === 'pending'
                        ? 'text-slate-400/80'
                        : 'text-slate-500'
                    }`}
                  >
                    {step.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackingPage
