import React from 'react';
import { User, Shield, Phone, FileText, Truck } from 'lucide-react';

export default function Profile() {
  const driverInfo = {
    name: 'Marcus Chen',
    fleetId: '#4492',
    phone: '+1 (555) 489-3221',
    license: 'CDL Class A - #NY88722',
    status: 'Checked In',
    vehicle: {
      model: 'Freightliner Cascadia 2022',
      plate: 'TX-77Y-998',
      type: 'Dry Van Trailer 53ft',
      capacity: '45,000 lbs'
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Driver Profile</h1>
        <p className="text-slate-500">Your profile, fleet license, and active vehicle assignment info.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Details Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6 lg:col-span-2">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center shrink-0 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
                alt="Marcus Chen"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold text-slate-500">MC</span>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-800">{driverInfo.name}</h2>
              <p className="text-sm font-semibold text-slate-500">Fleet ID: {driverInfo.fleetId}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-50">
            <div className="flex items-start space-x-3.5">
              <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                <span className="text-slate-700 font-semibold text-sm mt-0.5 block">{driverInfo.phone}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <Shield className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">License credentials</span>
                <span className="text-slate-700 font-semibold text-sm mt-0.5 block">{driverInfo.license}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <FileText className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Coordinator Center</span>
                <span className="text-slate-700 font-semibold text-sm mt-0.5 block">East Coast Operations Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Details Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800">Assigned Truck</h3>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Model / Year</span>
              <span className="text-slate-700 font-semibold text-sm mt-0.5 block">{driverInfo.vehicle.model}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">License Plate</span>
              <span className="text-slate-700 font-semibold text-sm mt-0.5 block">{driverInfo.vehicle.plate}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Trailer type</span>
              <span className="text-slate-700 font-semibold text-sm mt-0.5 block">{driverInfo.vehicle.type}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Max Payload Capacity</span>
              <span className="text-slate-700 font-semibold text-sm mt-0.5 block">{driverInfo.vehicle.capacity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
