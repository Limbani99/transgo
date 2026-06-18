import React, { useState } from 'react';
import { 
  Clipboard, 
  Truck, 
  CheckCircle, 
  Clock, 
  MoreVertical, 
  MapPin, 
  Navigation,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Dashboard() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const handleCheckInToggle = () => {
    if (!isCheckedIn) {
      setIsCheckedIn(true);
      setCheckInTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } else {
      setIsCheckedIn(false);
      setCheckInTime(null);
    }
  };

  const metrics = [
    {
      title: 'Total Assigned',
      value: '12',
      change: '+2 Today',
      changeType: 'positive',
      icon: Clipboard,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Active',
      value: '01',
      icon: Truck,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      activeBorder: true,
    },
    {
      title: 'Completed',
      value: '158',
      change: '92% Rate',
      changeType: 'positive',
      icon: CheckCircle,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Pending',
      value: '03',
      icon: Clock,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  const activities = [
    { date: 'Oct 24, 2023', bookingId: '#TG-88285', destination: 'Brooklyn Yards, NY', status: 'Delivered' },
    { date: 'Oct 23, 2023', bookingId: '#TG-88270', destination: 'Newark Port, NJ', status: 'Delivered' },
    { date: 'Oct 23, 2023', bookingId: '#TG-88264', destination: 'Staten Island Hub, NY', status: 'Cancelled' },
    { date: 'Oct 22, 2023', bookingId: '#TG-88251', destination: 'Jersey City Express', status: 'Delivered' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Good Morning, Marcus</h1>
          <p className="text-slate-500 font-medium mt-1">
            You have 4 deliveries assigned for today. {isCheckedIn && <span className="text-emerald-600 font-semibold">(Checked in at {checkInTime})</span>}
          </p>
        </div>
        <button
          onClick={handleCheckInToggle}
          className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md ${
            isCheckedIn 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10' 
              : 'bg-[#92400e] hover:bg-[#854d0e] text-white shadow-[#92400e]/10'
          }`}
        >
          <Clock className="w-4.5 h-4.5" />
          <span>{isCheckedIn ? 'Checked In' : 'Check In'}</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md ${
                card.activeBorder 
                  ? 'border-amber-500/80 ring-1 ring-amber-500/20' 
                  : 'border-slate-100'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${card.iconBg} ${card.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                {card.change && (
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    card.changeType === 'positive' 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'bg-rose-50 text-rose-700'
                  }`}>
                    {card.change}
                  </span>
                )}
                {card.activeBorder && (
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping mt-1"></span>
                )}
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{card.title}</p>
                <h3 className="text-3xl font-extrabold text-slate-800 mt-1">{card.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active In-Transit shipping route card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative">
        {/* Subtle Map SVG Background Mockup */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" widthHeight="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path 
              d="M 100,150 Q 300,50 600,200 T 900,100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeDasharray="8,8" 
            />
          </svg>
        </div>

        <div className="p-6 md:p-8 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left / Center Info */}
          <div className="flex-1 space-y-6 w-full">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#92400e] text-white text-xs font-extrabold px-3 py-1 rounded-full tracking-wider uppercase">
                In Transit
              </span>
              <span className="text-slate-500 text-sm font-medium">
                Booking ID: <strong className="text-slate-800">#TG-88291</strong>
              </span>
            </div>

            {/* Timelines / Stops */}
            <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:border-l-2 before:border-dashed before:border-slate-200">
              {/* Pickup Stop */}
              <div className="relative">
                <span className="absolute -left-[21px] top-1 w-3.5 h-3.5 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                </span>
                <div className="text-sm">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Pickup</span>
                  <strong className="text-slate-800 text-base font-semibold">Downtown Hub, NY</strong>
                  <span className="text-slate-500 text-xs font-medium block mt-0.5">12:30 PM • Dock 4B</span>
                </div>
              </div>

              {/* Delivery Stop */}
              <div className="relative">
                <span className="absolute -left-[22px] top-1 flex items-center justify-center text-amber-600">
                  <MapPin className="w-4 h-4 fill-amber-50" />
                </span>
                <div className="text-sm">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Delivery</span>
                  <strong className="text-slate-800 text-base font-semibold">Westside Logistics, NJ</strong>
                  <span className="text-slate-500 text-xs font-medium block mt-0.5">Scheduled: 02:45 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Estimated Info and Navigation Button */}
          <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right shrink-0 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 space-y-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estimated Arrival</p>
              <h2 className="text-3xl font-extrabold text-[#92400e] mt-1">25 <span className="text-lg font-bold">mins</span></h2>
            </div>
            <button className="w-full lg:w-auto flex items-center justify-center space-x-2 bg-[#1b365d] hover:bg-[#152a4a] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md shadow-[#1b365d]/10">
              <Navigation className="w-4 h-4" />
              <span>View Navigation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Recent Activities</h2>
          <a href="/delivery-history" className="text-sm font-semibold text-[#1b365d] hover:text-[#152a4a] transition-all">
            View All History
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Booking ID</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Destination</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs text-center w-20">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activities.map((act, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-600">{act.date}</td>
                  <td className="px-6 py-4 font-semibold text-slate-800">{act.bookingId}</td>
                  <td className="px-6 py-4 text-slate-600">{act.destination}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      act.status === 'Delivered'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}>
                      {act.status === 'Delivered' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      )}
                      {act.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all inline-flex items-center justify-center">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
