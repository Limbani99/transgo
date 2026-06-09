import React from 'react'
import { useData } from '../context/DataProvider';
import { NavLink } from 'react-router-dom';
import teamMarcus from '../assets/team_marcus.png'
import { LayoutDashboard, PlusCircle, Truck } from 'lucide-react';

function Sidebar() {
  const { isLoginedIn, userData } = useData();
  
  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { label: 'Create Shipment', icon: PlusCircle, to: '/shipments' },
    { label: 'Marketplace', icon: Truck, to: '/marketplace' },
  ];

  if (!isLoginedIn) return null;

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0 h-screen sticky top-0 z-30 shadow-sm">
      <div className="space-y-8">
        {/* Brand/Logo in Sidebar */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-200">
            T
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight">TransGo</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Logistics</p>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => 
                  `flex items-center gap-3 py-3 px-4 rounded-xl text-xs font-bold tracking-wide transition duration-150 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 rounded-l-none pl-3' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* User Profile Footer in Sidebar */}
      <div className="border border-slate-100 bg-slate-50/50 p-3 rounded-2xl flex items-center gap-3 shadow-inner">
        <img 
          src={teamMarcus} 
          alt="User Profile" 
          className="w-9 h-9 rounded-xl object-cover" 
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-slate-900 leading-tight truncate">
            {userData?.username || 'Malhar'}
          </p>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
            Enterprise Tier
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;