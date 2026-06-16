import React from 'react'
import { useData } from '../context/DataProvider';
import { Truck } from 'lucide-react';
import teamMarcus from '../assets/team_marcus.png'
import { LayoutDashboard, PlusCircle, Package, MapPin, CreditCard, Bell, User, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Sidebar() {
  const { isLoginedIn } = useData();

  const menuItems = [
    { label: 'Dashboard', link: '/dashboard', icon: LayoutDashboard },
    { label: 'Create Shipment', link: '/shipments', icon: PlusCircle },
    { label: 'My Shipments', link: '/transporter', icon: Package },
    { label: 'Tracking', link: '/tracking', icon: MapPin },
    { label: 'Payments',link:'/payments', icon: CreditCard },
    { label: 'Notifications', link: '/notifications', icon: Bell },
    { label: 'Profile', link: '/profile', icon: User },
    { label: 'Support', link: '/support', icon: HelpCircle },
  ]

  return (
    <>
      {isLoginedIn ? (
        <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0 sticky top-[65px] h-[calc(100vh-65px)] z-30 overflow-y-auto">
          <div className="space-y-8">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                if (!item.link) {
                  return (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition duration-150 text-left text-slate-500 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  )
                }
                return (
                  <NavLink to={item.link}
                    key={item.label}
                    className={({ isActive }) => `w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition duration-150 text-left ${isActive
                      ? 'bg-blue-50/70 text-blue-600 border-l-4 border-blue-600 rounded-l-none pl-3'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </NavLink>
                )
              })}
            </nav>
          </div>

          {/* User Profile Footer in Sidebar */}
          <div className="border border-slate-100 bg-slate-50/50 p-3 rounded-2xl flex items-center gap-3 shadow-inner">
            <img
              src={teamMarcus}
              alt="Malhar Avatar"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Malhar</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                Enterprise Tier
              </p>
            </div>
          </div>
        </aside>
      ) : (
        null
      )}

    </>
  )
}

export default Sidebar