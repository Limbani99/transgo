import React from 'react';
import { Truck, MapPin, Navigation, Compass, ShieldAlert } from 'lucide-react';

export default function ActiveDeliveries() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Active Deliveries</h1>
        <p className="text-slate-500">Track and update the status of your current shipments.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center space-x-3.5">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Currently in progress</span>
              <h3 className="text-xl font-bold text-slate-800 mt-0.5">Booking ID: #TG-88291</h3>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping"></span>
            <span className="text-sm font-semibold text-slate-700">In Transit • 25 mins remaining</span>
          </div>
        </div>

        {/* Route Details and Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:border-l-2 before:border-dashed before:border-slate-200">
              {/* Pickup Stop */}
              <div className="relative">
                <span className="absolute -left-[21px] top-1 w-3.5 h-3.5 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                </span>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Pickup Point</span>
                  <strong className="text-slate-800 text-base font-semibold block mt-0.5">Downtown Hub, NY</strong>
                  <span className="text-slate-500 text-sm font-medium mt-1 block">Completed: 12:30 PM • Dock 4B</span>
                </div>
              </div>

              {/* Delivery Stop */}
              <div className="relative">
                <span className="absolute -left-[22px] top-1 flex items-center justify-center text-amber-600">
                  <MapPin className="w-4 h-4 fill-amber-50" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Delivery Point</span>
                  <strong className="text-slate-800 text-base font-semibold block mt-0.5">Westside Logistics, NJ</strong>
                  <span className="text-slate-500 text-sm font-medium mt-1 block">Scheduled: 02:45 PM • Dock 12</span>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
              <button className="flex items-center space-x-2 bg-[#1b365d] hover:bg-[#152a4a] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all">
                <Navigation className="w-4 h-4" />
                <span>Open Navigation Map</span>
              </button>
              <button className="flex items-center space-x-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-3 rounded-xl text-sm font-semibold transition-all">
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Update GPS Coordinate</span>
              </button>
              <button className="flex items-center space-x-2 border border-red-200 hover:bg-red-50 text-red-700 px-5 py-3 rounded-xl text-sm font-semibold transition-all">
                <ShieldAlert className="w-4 h-4" />
                <span>Report Delay / Incident</span>
              </button>
            </div>
          </div>

          {/* Quick status progress info */}
          <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
            <h4 className="font-bold text-slate-800 text-sm">Delivery Status Checklist</h4>
            <div className="space-y-3.5">
              <label className="flex items-center space-x-3 text-sm text-slate-700">
                <input type="checkbox" defaultChecked disabled className="rounded border-slate-300 text-[#1b365d] focus:ring-[#1b365d]" />
                <span className="line-through text-slate-400">Arrived at pickup location</span>
              </label>
              <label className="flex items-center space-x-3 text-sm text-slate-700">
                <input type="checkbox" defaultChecked disabled className="rounded border-slate-300 text-[#1b365d] focus:ring-[#1b365d]" />
                <span className="line-through text-slate-400">Cargo loaded and verified</span>
              </label>
              <label className="flex items-center space-x-3 text-sm text-slate-700">
                <input type="checkbox" defaultChecked disabled className="rounded border-slate-300 text-[#1b365d] focus:ring-[#1b365d]" />
                <span className="line-through text-slate-400">Departed pickup location</span>
              </label>
              <label className="flex items-center space-x-3 text-sm text-slate-700">
                <input type="checkbox" className="rounded border-slate-300 text-[#1b365d] focus:ring-[#1b365d] w-4 h-4 cursor-pointer" />
                <span className="font-medium">Arrived at destination</span>
              </label>
              <label className="flex items-center space-x-3 text-sm text-slate-700">
                <input type="checkbox" className="rounded border-slate-300 text-[#1b365d] focus:ring-[#1b365d] w-4 h-4 cursor-pointer" />
                <span className="font-medium">Cargo unloaded & Signed POD</span>
              </label>
            </div>
            <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md">
              Complete Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
