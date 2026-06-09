import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { Bell, Settings, Search, LogOut } from "lucide-react";
import teamMarcus from "../assets/team_marcus.png";
  
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Service", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const navigation = useNavigate();
  const { userData, logout, isLoginedIn } = useData();

  const handleLogout = () => {
    logout();
    navigation("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-100 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-200/80">
            T
          </div>
          <div>
            <p className="text-base font-bold text-slate-900 leading-none">TransGo</p>
            <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Logistics</p>
          </div>
        </Link>

        {/* Middle: Search (Logged In) OR Nav Links (Logged Out) */}
        {isLoginedIn ? (
          <div className="hidden md:flex items-center gap-4 flex-grow max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search shipments, bookings, or documents..."
                className="w-full rounded-xl bg-slate-50/80 border border-slate-200/50 pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
              />
            </div>
          </div>
        ) : (
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right: Actions & Profile (Logged In) OR Login/Register (Logged Out) */}
        {isLoginedIn ? (
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
              Welcome, {userData?.username || "User"}
            </span>
            <div className="flex items-center gap-3">
              <button className="relative p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150" title="Notifications">
                <Bell className="w-4.5 h-4.5" />
                <span className="absolute top-1 right-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              </button>
              <button className="p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150" title="Settings">
                <Settings className="w-4.5 h-4.5" />
              </button>
              <div className="h-6 w-px bg-slate-200"></div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 p-1.5 text-slate-500 hover:bg-red-50 hover:text-red-650 rounded-lg transition duration-150"
                title="Logout"
              >
                <img 
                  src={teamMarcus} 
                  alt="Profile" 
                  className="w-7 h-7 rounded-lg object-cover border border-slate-150" 
                />
                <LogOut className="w-4 h-4 ml-1 text-slate-400 hover:text-red-500" />
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

