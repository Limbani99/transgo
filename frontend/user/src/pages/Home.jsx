import React from 'react'
import { Radar, Handshake, ShieldCheck, Zap, ArrowRight } from 'lucide-react'
import heroIsometric from '../assets/hero_isometric.png'
import dashboardPreview from '../assets/dashboard_preview.png'

const FeatureCard = ({ icon: Icon, title, desc, className = '' }) => (
  <div className={`rounded-3xl bg-white p-8 border border-slate-100 shadow-lg shadow-slate-100/60 transition duration-300 hover:shadow-xl ${className}`}>
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/80 text-blue-655 mb-6">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h4 className="text-lg font-bold text-slate-900">{title}</h4>
    <p className="mt-3 text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
)

function Home() {
  return (
    <main className="bg-slate-50/40 min-h-screen">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Next-Gen Logistics
            </span>

            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-[1.1] text-slate-950 tracking-tight">
              Move Your Goods
              <br />
              <span className="text-blue-600">Anywhere,</span>
              <br />
              <span className="text-blue-600">Anytime</span>
            </h1>

            <p className="mt-6 max-w-xl text-slate-500 text-sm sm:text-base leading-relaxed">
              Connect with trusted transportation companies and track your shipments in real-time. Our
              global network ensures your cargo reaches its destination with precision and speed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200/50 hover:bg-blue-700 transition duration-150"
              >
                Login
              </a>
              <a 
                href="/register" 
                className="inline-flex items-center justify-center rounded-xl border border-blue-600/30 px-6 py-3 text-sm font-semibold text-blue-600 bg-white hover:bg-slate-50 transition duration-150"
              >
                Create Account
              </a>
            </div>

            {/* Stats section with vertical divider */}
            <div className="mt-12 flex items-center gap-10 border-t border-slate-100/80 pt-8 max-w-sm">
              <div>
                <div className="text-2xl font-bold text-slate-950">15k+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Global Partners</div>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-950">99.9%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Isometric Hero Image Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="rounded-3xl bg-white p-2 shadow-2xl shadow-slate-200/80 border border-slate-100/50">
                <img 
                  src={heroIsometric} 
                  alt="Global Logistics Solutions Illustration" 
                  className="w-full h-auto rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / FEATURES */}
      <section className="bg-slate-50/50 py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Why Choose TransGo?</h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Empowering global trade through a seamless digital ecosystem designed for efficiency, security, and real-time visibility.
            </p>
          </div>

          {/* Staggered Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start md:pb-8">
            <FeatureCard 
              icon={Radar} 
              title="Real-Time Tracking" 
              desc="Precision location monitoring for every single shipment, updated every second globally." 
            />
            <FeatureCard 
              icon={Handshake} 
              title="Trusted Partners" 
              desc="Vetted logistics companies with verified safety records and premium service standards." 
              className="md:translate-y-6"
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Secure Payments" 
              desc="Enterprise-grade encryption for all transactions with automated escrow protection." 
            />
            <FeatureCard 
              icon={Zap} 
              title="Fast Deliveries" 
              desc="Optimized routing algorithms that reduce transit time by up to 35% across routes." 
              className="md:translate-y-6"
            />
          </div>
        </div>
      </section>

      {/* BLUE CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-blue-600 p-8 md:p-12 shadow-xl shadow-blue-100 relative overflow-hidden">
          <div className="grid items-center gap-8 lg:grid-cols-2 z-10 relative">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Experience Operational Calm</h3>
              <p className="mt-4 max-w-md text-sm text-blue-50/90 leading-relaxed">
                Manage global supply chains with a refined, spacious interface that prioritizes clarity and operational trust.
              </p>
              <a 
                href="/dashboard" 
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-md hover:bg-slate-50 transition duration-150"
              >
                Explore Dashboard
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* World Map Routes Dashboard Preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-blue-400/30 bg-blue-950/40 p-2 shadow-2xl backdrop-blur-sm max-w-md w-full">
                <img 
                  src={dashboardPreview} 
                  alt="Dashboard Map Route Preview" 
                  className="w-full h-auto rounded-xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home