import React from 'react'
import { useData } from '../context/DataProvider';
import {
  LayoutDashboard,
  Calendar,
  SquareUser,
  Truck,
  Users,
  Compass,
  CreditCard,
  BarChart3,
  Settings
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const { isLoginedIn } = useData();

  const menuItems = [
    { label: 'Dashboard', link: '/', icon: LayoutDashboard },
    { label: 'Bookings', link: '/bookings', icon: Calendar },
    { label: 'Drivers', link: '/drivers', icon: SquareUser },
    { label: 'Vehicles', link: '/vehicles', icon: Truck },
    { label: 'Customers', link: '/customers', icon: Users },
    { label: 'Tracking', link: '/tracking', icon: Compass },
    { label: 'Payments', link: '/payments', icon: CreditCard },
    { label: 'Analytics', link: '/analytics', icon: BarChart3 },
    { label: 'Settings', link: '/settings', icon: Settings },
  ]

  return (
    <>
      <aside className="w-64 bg-[#111c2d] flex flex-col p-6 shrink-0 sticky top-0 h-screen z-30 overflow-y-auto border-r border-slate-800">
        {/* Logo Brand Header */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-none">TransGo</p>
            <p className="text-[10px] text-slate-400 mt-1 font-medium tracking-wide">Logistics Management</p>
          </div>
        </div>

        <div className="space-y-8 flex-grow">
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  to={item.link}
                  key={item.label}
                  className={({ isActive }) => `w-full flex items-center gap-3.5 py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition duration-150 text-left ${isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                    }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </aside>

    </>
  )
}

export default Sidebar