import React from 'react'
import { Truck, Warehouse, MapPin, Snowflake, Check, Globe, Radar, Headphones, ShieldCheck } from 'lucide-react'
import heroBg from '../assets/hero_bg.png'
import cargoShipPlane from '../assets/cargo_ship_plane.png'
import specializedCargo from '../assets/specialized_cargo.png'

function Service() {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-slate-955/65 backdrop-blur-[1px] bg-black/55"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
          <span className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase mb-6">
            WORLD-CLASS LOGISTICS
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Global Logistics Solutions<br />
            Tailored for Your Business
          </h1>
          <p className="mt-6 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            TransGo provides end-to-end supply chain management for the modern enterprise. From sea freight to last-mile delivery, we leverage precision technology to move your world forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition duration-150">
              Start Shipping Now
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition duration-150">
              View Network Map
            </button>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="py-20 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Core Services</h2>
            <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed">
              Integrated solutions designed to streamline every phase of your cargo's journey, powered by real-time data and expert handling.
            </p>
          </div>

          {/* Core Services Alternating Checkerboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Freight Forwarding Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Freight Forwarding</h3>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  Comprehensive transit routes via Sea, Air, and Land. We handle all documentation and customs clearance to ensure seamless international movement.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>FCL/LCL Ocean Shipping</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Expedited Air Freight</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Cross-Border Road Transport</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Freight Forwarding Image Column */}
            <div className="h-full min-h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src={cargoShipPlane} alt="Cargo ship and airplane" className="w-full h-full object-cover" />
            </div>

            {/* 3. Warehousing Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center mb-6">
                  <Warehouse className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Warehousing</h3>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  Smart storage solutions with advanced inventory management. Scalable distribution hubs located at strategic transit points globally.
                </p>
              </div>
            </div>

            {/* 4. Last-Mile Delivery Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-655 flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Last-Mile Delivery</h3>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  Precision delivery to the end customer. Optimized routing for urban density and sustainable fleet options for reduced carbon footprint.
                </p>
              </div>
            </div>

            {/* 5. Specialized Cargo Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-655 flex items-center justify-center mb-6">
                  <Snowflake className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Specialized Cargo</h3>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  Expert handling for Cold Chain, fragile electronics, and oversized industrial machinery. Climate-controlled environments and white-glove service.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">TEMP CONTROLLED</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">HAZMAT CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* 6. Specialized Cargo Image Column */}
            <div className="h-full min-h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src={specializedCargo} alt="Specialized cargo handling" className="w-full h-full object-cover" />
            </div>

          </div>

          {/* Supply Chain Optimization Banner */}
          <div className="mt-16 bg-[#0038a8] rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
            <div className="md:w-2/3 z-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Supply Chain Optimization</h3>
              <p className="mt-3 text-blue-100/90 text-sm md:text-base leading-relaxed max-w-xl">
                Leverage our AI-driven analytics to identify bottlenecks and reduce operational costs by up to 15%. Our consultants design resilient networks that adapt to global market shifts.
              </p>
              <button className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-slate-100 transition duration-150">
                Request a Digital Audit
              </button>
            </div>
            
            {/* SVG Graph/Analytics decoration */}
            <div className="hidden md:flex items-center justify-center w-40 h-40 opacity-20 text-white z-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900 mb-16">
            Why Leading Enterprises Choose TransGo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Global Reach */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-blue-100 bg-white flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Reach</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Over 200+ partner hubs across 6 continents ensuring global coverage.
              </p>
            </div>

            {/* Real-time Tracking */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-blue-100 bg-white flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm">
                <Radar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Real-time Tracking</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                End-to-end visibility with GPS and IoT integration at every stage.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-blue-100 bg-white flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Dedicated account managers available around the clock for your peace of mind.
              </p>
            </div>

            {/* Cost-Efficiency */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-blue-100 bg-white flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cost-Efficiency</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Optimized routing and bulk rates that translate into direct savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY INDUSTRY LEADERS */}
      <section className="border-t border-b border-slate-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <span className="text-slate-400 font-bold text-base md:text-lg tracking-wider hover:text-slate-600 transition">TECHCORP</span>
            <span className="text-slate-400 font-bold text-base md:text-lg tracking-wider hover:text-slate-600 transition">GLOBALMART</span>
            <span className="text-slate-400 font-bold text-base md:text-lg tracking-wider hover:text-slate-600 transition">INDUS-GROUP</span>
            <span className="text-slate-400 font-bold text-base md:text-lg tracking-wider hover:text-slate-600 transition">PRIMEFLOW</span>
            <span className="text-slate-400 font-bold text-base md:text-lg tracking-wider hover:text-slate-600 transition">VELOCITY AI</span>
          </div>
        </div>
      </section>

      {/* READY TO MOVE CTA SECTION */}
      <section className="bg-slate-955 text-white py-20 text-center px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Move? Get a Quote Today
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Join thousands of businesses that trust TransGo for their mission-critical logistics operations. Fast, reliable, and transparent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition">
              Get Your Quote
            </button>
            <button className="rounded-full border border-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Service
