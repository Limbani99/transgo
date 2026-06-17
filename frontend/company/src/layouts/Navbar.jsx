import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { Bell, HelpCircle, Search, LogOut } from "lucide-react";
import teamMarcus from "../assets/team_marcus.png";



function Navbar() {
  const navigation = useNavigate();
  const { userData, logout, isLoginedIn } = useData();

  const handleLogout = () => {
    logout();
    navigation("/login");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-100 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        
        {/* Left: Logo (Only visible when logged out, since logged-in uses sidebar logo) */}
        {!isLoginedIn ? (
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-200/80">
              T
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 leading-none">TransGo</p>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Logistics</p>
            </div>
          </Link>
        ) : (
          /* Search Bar (Logged In) */
          <div className="flex items-center gap-4 flex-grow max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search shipments, drivers, or IDs..."
                className="w-full rounded-xl bg-slate-50/80 border border-slate-200/50 pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
              />
            </div>
          </div>
        )}

        {/* Middle: Nav Links (Only when logged out) */}

        {/* Right: Actions & Profile (Logged In) OR Login/Register (Logged Out) */}
        {isLoginedIn ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3.5">
              {/* Notification Button */}
              <button className="relative p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150" title="Notifications">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
              </button>
              
              {/* Help Button */}
              <button className="p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150" title="Help/Support">
                <HelpCircle className="w-5 h-5" />
              </button>

              <div className="h-6 w-px bg-slate-200 mx-1"></div>

              {/* Logout & Profile Avatar */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2.5 p-1 text-slate-500 hover:bg-red-50 hover:text-red-650 rounded-lg transition duration-150"
                title="Logout"
              >
                <img 
                  src={teamMarcus} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover border border-slate-150 shadow-sm" 
                />
                <LogOut className="w-4 h-4 ml-1 text-slate-450 hover:text-red-500" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigation("/login")}
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 md:inline-flex"
            >
              Login
            </button>
            <button
              onClick={() => navigation("/register")}
              className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;