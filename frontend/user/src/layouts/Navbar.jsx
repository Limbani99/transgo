import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { Bell, Settings, Search, ChevronDown } from "lucide-react";
import teamMarcus from "../assets/team_marcus.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Service", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const { userData, logout, isLoginedIn } = useData();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isLoginedIn) {
    return (
      <header className="flex items-center justify-between py-4 px-8 border-b border-slate-100 bg-white sticky top-0 z-20 shadow-sm">
        {/* Search bar */}
        <div className="relative w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search shipments, bookings, or documents..."
            className="w-full rounded-xl bg-slate-50/80 border border-slate-200/50 pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
          />
        </div>

        {/* Action icons & Profile dropdown */}
        <div className="flex items-center gap-5">
          <button className="relative p-1.5 text-slate-550 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150">
            <Bell className="w-4.5 h-4.5" />
            <span className="absolute top-1 right-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          </button>
          <button className="p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150">
            <Settings className="w-4.5 h-4.5" />
          </button>
          <div className="h-6 w-px bg-slate-200"></div>
          
          {/* Profile Dropdown with Logout button */}
          <div className="group relative flex items-center gap-2.5 cursor-pointer hover:bg-slate-50 py-1.5 px-3 rounded-xl transition duration-150">
            <img 
              src={teamMarcus} 
              alt="Malhar Profile" 
              className="w-8 h-8 rounded-lg object-cover" 
            />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-800 leading-tight">{userData?.username || 'Malhar'}</p>
              <p className="text-[9px] text-slate-400 font-semibold mt-0.5">Enterprise Tier</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition" />
            
            {/* Simple dropdown menu for logout */}
            <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-1">
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Public Navbar
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-200/80 group-hover:scale-105 transition duration-200">
            T
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 leading-tight">TransGo</p>
            <p className="text-xs text-slate-500 font-medium">Logistics Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-650 hover:text-blue-600 hover:bg-blue-50/10"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
