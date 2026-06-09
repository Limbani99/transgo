import React from 'react'
import { useData } from '../context/DataProvider';
import { Truck } from 'lucide-react';
import teamMarcus from '../assets/team_marcus.png'
import { LayoutDashboard, PlusCircle, Package, MapPin, CreditCard, Bell, User, HelpCircle } from 'lucide-react';
function Sidebar() {
  const { isLoginedIn } = useData();
  const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Create Shipment', icon: PlusCircle },
  { label: 'My Shipments', icon: Package },
  { label: 'Tracking', icon: MapPin },
  { label: 'Payments', icon: CreditCard },
  { label: 'Notifications', icon: Bell },
  { label: 'Profile', icon: User },
  { label: 'Support', icon: HelpCircle },
]
  return (
    <>
    {isLoginedIn ? (
        <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0 sticky top-0 h-screen z-30">
        <div className="space-y-8">
          {/* Logo Branding */}
         

          {/* Navigation Menu Links */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition duration-150 text-left ${
                    item.active 
                      ? 'bg-blue-50/70 text-blue-600 border-l-4 border-blue-600 rounded-l-none pl-3' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
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
    ):(
      null
    )}
   
    </>
  )
}

export default Sidebar