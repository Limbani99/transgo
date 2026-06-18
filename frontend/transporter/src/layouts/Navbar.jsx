import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Title */}
      <div>
        <h2 className="font-semibold text-lg text-slate-800">Driver Portal</h2>
      </div>

      {/* Center Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search shipments..."
            className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b365d]/20 focus:border-[#1b365d] transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5">
        {/* Notifications */}
        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full relative transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Settings */}
        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all">
          <Settings className="w-5 h-5" />
        </button>

        {/* User Profile Info */}
        <div className="flex items-center space-x-3 border-l border-slate-200 pl-5">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 leading-none">Marcus Chen</p>
            <p className="text-xs text-slate-500 mt-1 font-medium">Fleet ID: #4492</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
            {/* Marcus Chen Profile Image Mockup */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Marcus Chen"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback icon/avatar if image fails to load
                e.target.style.display = 'none';
              }}
            />
            <span className="text-sm font-semibold text-slate-700">MC</span>
          </div>
        </div>
      </div>
    </header>
  );
}
