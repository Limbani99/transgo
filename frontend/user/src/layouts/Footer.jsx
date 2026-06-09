import React from 'react'
import { useData } from '../context/DataProvider';
function Footer() {
  const { isLoginedIn } = useData();
  return (
    <>
{
    isLoginedIn ? (null):(
      <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="/" className="inline-flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                T
              </div>
              <div>
                <p className="text-lg font-semibold">TransGo</p>
                <p className="text-sm text-slate-400">Global logistics reimagined for the modern enterprise.</p>
              </div>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
              Secure, fast, and transparent supply chain solutions designed to move your goods anywhere, anytime.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300">F</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300">T</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300">I</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Company</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="/about" className="transition hover:text-white">About Us</a></li>
              <li><a href="/careers" className="transition hover:text-white">Careers</a></li>
              <li><a href="/press" className="transition hover:text-white">Press Kit</a></li>
              <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Services</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="/freight" className="transition hover:text-white">Freight Shipping</a></li>
              <li><a href="/last-mile" className="transition hover:text-white">Last-Mile Delivery</a></li>
              <li><a href="/customs" className="transition hover:text-white">Customs Clearance</a></li>
              <li><a href="/warehousing" className="transition hover:text-white">Warehousing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Support</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><a href="/help" className="transition hover:text-white">Help Center</a></li>
              <li><a href="/api-docs" className="transition hover:text-white">API Docs</a></li>
              <li><a href="/status" className="transition hover:text-white">Status Page</a></li>
              <li><a href="/safety" className="transition hover:text-white">Safety</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 TransGo Logistics. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms of Service</a>
            <a href="/cookie" className="transition hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
    )
}

    </>
   
  )
}

export default Footer