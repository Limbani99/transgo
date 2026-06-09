import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigation = useNavigate();
  const { userData, logout, isLoginedIn } = useData();
  console.log(userData);

  const handleLogout = () => {
    logout();
    navigation("/login");
  };
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-200/80">
            T
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">TransGo</p>
            <p className="text-sm text-slate-500">Logistics</p>
          </div>
        </Link>

        {isLoginedIn ?(
         
          <p className="text-sm font-medium text-slate-700">
            Welcome, {userData?.username}
          </p>
          
        ):(
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
        </nav>)}

        {isLoginedIn ? (
          <header className="flex items-center justify-between py-4 px-8 border-b border-slate-100 bg-white sticky top-0 z-20">
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
            <button className="relative p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1 right-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            </button>
            <button className="p-1.5 text-slate-500 hover:bg-slate-50 rounded-lg transition duration-150">
              <Settings className="w-4.5 h-4.5" />
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2.5 cursor-pointer hover:bg-slate-50 py-1.5 px-3 rounded-xl transition duration-150">
              <img 
                src={teamMarcus} 
                alt="Malhar Profile" 
                className="w-8 h-8 rounded-lg object-cover" 
              />
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        </header>
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
