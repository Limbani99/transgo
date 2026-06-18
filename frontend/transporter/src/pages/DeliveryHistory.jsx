import React, { useState } from 'react';
import { Search, Calendar, ChevronDown, CheckCircle, XCircle } from 'lucide-react';

export default function DeliveryHistory() {
  const [searchTerm, setSearchTerm] = useState('');

  const history = [
    { date: 'Oct 24, 2023', bookingId: '#TG-88285', destination: 'Brooklyn Yards, NY', status: 'Delivered', duration: '2h 15m', miles: '45 mi' },
    { date: 'Oct 23, 2023', bookingId: '#TG-88270', destination: 'Newark Port, NJ', status: 'Delivered', duration: '1h 45m', miles: '32 mi' },
    { date: 'Oct 23, 2023', bookingId: '#TG-88264', destination: 'Staten Island Hub, NY', status: 'Cancelled', duration: '-', miles: '-' },
    { date: 'Oct 22, 2023', bookingId: '#TG-88251', destination: 'Jersey City Express', status: 'Delivered', duration: '3h 10m', miles: '68 mi' },
    { date: 'Oct 20, 2023', bookingId: '#TG-88240', destination: 'JFK Airport Cargo, NY', status: 'Delivered', duration: '2h 40m', miles: '55 mi' },
    { date: 'Oct 18, 2023', bookingId: '#TG-88229', destination: 'Downtown Hub, NY', status: 'Delivered', duration: '1h 10m', miles: '12 mi' },
  ];

  const filteredHistory = history.filter(item => 
    item.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Delivery History</h1>
          <p className="text-slate-500">Review all previously handled or completed deliveries.</p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Select Date</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Table search container */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center">
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by ID or destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b365d]/20 focus:border-[#1b365d] transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Booking ID</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Destination</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Miles</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Duration</th>
                <th className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-xs">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredHistory.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-slate-600 font-medium">{item.date}</td>
                  <td className="px-6 py-4 font-semibold text-slate-800">{item.bookingId}</td>
                  <td className="px-6 py-4 text-slate-700">{item.destination}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{item.miles}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{item.duration}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Delivered'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}>
                      {item.status === 'Delivered' ? (
                        <CheckCircle className="w-3.5 h-3.5 mr-1" />
                      ) : (
                        <XCircle className="w-3.5 h-3.5 mr-1" />
                      )}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredHistory.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-slate-400 font-medium">
                    No matching delivery records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
