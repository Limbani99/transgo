import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Truck, 
  History, 
  Bell, 
  User, 
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Assigned Deliveries', path: '/assigned-deliveries', icon: ClipboardList },
    { name: 'Active Deliveries', path: '/active-deliveries', icon: Truck },
    { name: 'Delivery History', path: '/delivery-history', icon: History },
    { name: 'Notifications', path: '/notifications', icon: Bell },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-screen sticky top-0">
      {/* Sidebar Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">TransGo</h1>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Logistics Portal</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1b365d] text-white shadow-md shadow-[#1b365d]/10'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3 shrink-0" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-slate-200 space-y-1">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-[#1b365d] text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`
          }
        >
          <User className="w-5 h-5 mr-3 shrink-0" />
          Profile
        </NavLink>
        <button
          onClick={() => alert('Logging out...')}
          className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 text-left"
        >
          <LogOut className="w-5 h-5 mr-3 shrink-0" />
          Logout
        </button>
      </div>
    </aside>
  );
}
