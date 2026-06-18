import React from 'react';
import { Bell, Info, ShieldAlert, Award } from 'lucide-react';

export default function Notifications() {
  const list = [
    { id: 1, type: 'alert', title: 'Route delay notice (#TG-88291)', text: 'Congestion detected on I-95 South bound. Consider taking the bypass route.', time: '10 mins ago', icon: ShieldAlert, color: 'text-amber-600 bg-amber-50' },
    { id: 2, type: 'info', title: 'New route assigned', text: 'You have been assigned 2 new cargo shipments for Friday morning departure.', time: '2 hours ago', icon: Info, color: 'text-blue-600 bg-blue-50' },
    { id: 3, type: 'achievement', title: 'Safety Milestone Achieved', text: 'Congratulations Marcus! You completed 100 safe runs this month without delay.', time: '1 day ago', icon: Award, color: 'text-emerald-600 bg-emerald-50' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Notifications</h1>
        <p className="text-slate-500">Keep up to date with logistics alerts and coordinator notes.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100 overflow-hidden">
        {list.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="p-6 flex items-start space-x-4 hover:bg-slate-50/30 transition-colors">
              <div className={`p-3 rounded-xl shrink-0 ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
                  <span className="text-xs text-slate-400 font-medium shrink-0 ml-4">{item.time}</span>
                </div>
                <p className="text-sm text-slate-600 mt-1 font-medium leading-relaxed">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
