import React from 'react';
import { Calendar, MapPin, Eye, CheckCircle2 } from 'lucide-react';

export default function AssignedDeliveries() {
  const deliveries = [
    { id: '#TG-88291', date: 'Today, Oct 25', time: '12:30 PM', from: 'Downtown Hub, NY', to: 'Westside Logistics, NJ', wt: '2.4 Tons', status: 'In Transit' },
    { id: '#TG-88302', date: 'Tomorrow, Oct 26', time: '09:00 AM', from: 'JFK Airport Cargo, NY', to: 'Staten Island Hub, NY', wt: '1.8 Tons', status: 'Pending' },
    { id: '#TG-88315', date: 'Oct 27, 2023', time: '02:15 PM', from: 'Brooklyn Yards, NY', to: 'Newark Port, NJ', wt: '4.2 Tons', status: 'Pending' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Assigned Deliveries</h1>
        <p className="text-slate-500">View and manage deliveries assigned to your vehicle.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deliveries.map((del, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Booking ID</span>
                <h3 className="text-lg font-bold text-slate-800 mt-0.5">{del.id}</h3>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                del.status === 'In Transit' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {del.status}
              </span>
            </div>

            <div className="flex items-center space-x-3 text-sm text-slate-600">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{del.date} at {del.time}</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-slate-700">{del.wt}</span>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-50">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-indigo-500 mt-0.5" />
                <div>
                  <span className="text-slate-400 text-xs block uppercase font-medium">Pickup</span>
                  <span className="text-slate-700 font-medium">{del.from}</span>
                </div>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
                <div>
                  <span className="text-slate-400 text-xs block uppercase font-medium">Delivery</span>
                  <span className="text-slate-700 font-medium">{del.to}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-slate-50">
              <button className="flex-1 flex items-center justify-center space-x-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
                <Eye className="w-4 h-4" />
                <span>Details</span>
              </button>
              {del.status !== 'In Transit' && (
                <button className="flex-1 flex items-center justify-center space-x-2 bg-[#1b365d] hover:bg-[#152a4a] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Accept Route</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
