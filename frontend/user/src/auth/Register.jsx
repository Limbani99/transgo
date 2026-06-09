import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
  
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try{
      const {confirmPassword,...userData} = formData; // Exclude confirmPassword from the data sent to the backend
   const res = await axios.post('http://localhost:5000/api/users/register', userData);
   console.log(res.data);
   toast.success('Registration successful!');
   navigate('/login');
    // Handle form submission logic here (e.g., send data to backend)
  } catch (error) {
    console.error('Registration error:', error);
    toast.error('Registration failed!');
  }}

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.15)]">
        <div className="hidden md:flex w-1/2 flex-col justify-center gap-8 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 px-12 py-16 text-white">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-200">TransGo</p>
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Scale Your Logistics with Precision
            </h1>
            <p className="mt-6 text-base leading-7 text-blue-100/90 sm:text-lg">
              Join thousands of businesses managing global trade on TransGo. Our unified platform bridges the gap between fragmented supply chains.
            </p>
          </div>
          <div className="mt-8 h-1 w-28 rounded-full bg-white/30"></div>
        </div>

        <div className="w-full md:w-1/2 px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:px-10 sm:py-12">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-slate-900">Create Your Account</h2>
              <p className="mt-3 text-sm text-slate-500">Get started with your free logistics dashboard today.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">👤</span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="username"
                    onChange={onChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">✉️</span>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    onChange={onChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
<div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Address</label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">✉️</span>
                  <input
                    type="text"
                    placeholder="modasa,gujarat"
                    name="address"
                    onChange={onChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">📞</span>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    name="phone"
                    onChange={onChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">🔒</span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      name="password"
                      onChange={onChange} 
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">🔐</span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      name="confirmPassword"
                      onChange={onChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              <label className="flex items-center gap-3 text-sm text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span>
                  I agree to the <a href="#" className="font-semibold text-blue-600 hover:text-blue-700">Terms &amp; Conditions</a> and <a href="#" className="font-semibold text-blue-600 hover:text-blue-700">Privacy Policy</a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
              >
                Create Account
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="h-px flex-1 bg-slate-200"></span>
                <span>OR</span>
                <span className="h-px flex-1 bg-slate-200"></span>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="text-lg">🟨</span>
                Sign up with Google
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-blue-600 transition hover:text-blue-700">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;