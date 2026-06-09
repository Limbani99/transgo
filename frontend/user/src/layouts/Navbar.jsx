import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
const navLinks = [
<<<<<<< HEAD
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
=======
  { label: "Home", to: "/" },
  { label: "Service", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
>>>>>>> f39cfaab32cb4a0bbad09755f7fd7975592acd3e

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
          <button
            onClick={handleLogout}
            className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 md:inline-flex"
          >
            Logout
          </button>
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
