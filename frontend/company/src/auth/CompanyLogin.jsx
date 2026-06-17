import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Mail, Lock, EyeOff, Eye } from 'lucide-react';

const CompanyLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Login Form */}
      <div className="bg-slate-50 flex flex-col relative p-6 sm:p-12">
        <Link to="/" className="text-blue-700 font-medium flex items-center gap-2 absolute top-8 left-8 hover:underline">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center flex-1 mt-16 lg:mt-0">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
            <Truck className="text-white" size={36} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">TransGo</h1>
          <p className="text-slate-500 mb-10 text-center text-lg">Transportation Management Platform</p>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 sm:p-10 w-full border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500 mb-8 text-sm">Sign in to your enterprise account to manage shipments.</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 text-slate-400" size={20} />
                  <input
                    type="email"
                    placeholder="director@company.com"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-slate-700">Password</label>
                  <Link to="/forgot-password" className="text-sm font-semibold text-blue-700 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 text-slate-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-slate-600">
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-blue-700/20 active:scale-[0.98] mt-2"
              >
                Sign In
              </button>
            </form>
          </div>

          <p className="text-slate-500 mt-8 text-center">
            New to TransGo? <Link to="/request-access" className="text-blue-700 font-semibold hover:underline">Request access</Link>
          </p>
        </div>
      </div>

      {/* Right Column - Image & Branding */}
      <div className="hidden lg:flex flex-col justify-center p-16 relative overflow-hidden bg-[#0a192f]">
        {/* We will replace the src with the generated image path */}
        <div className="absolute inset-0 z-0">
          <img
            src="/logistics-bg.png"
            alt="Logistics"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-[#0a192f]/80 to-blue-950/95 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium tracking-wide">System Status: Online</span>
          </div>

          <h2 className="text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Optimizing Global <br /> Logistics.
          </h2>
          <p className="text-xl text-blue-100/80 leading-relaxed font-light">
            Real-time visibility, intelligent routing, and comprehensive fleet management in one powerful platform.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] z-0"></div>
      </div>
    </div>
  );
};

export default CompanyLogin;
