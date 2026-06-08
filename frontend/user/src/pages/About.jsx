import React from 'react'
import { ArrowRight, Rocket, Eye, Shield, Zap, Check, Leaf, Battery } from 'lucide-react'
import aboutHero from '../assets/about_hero.png'
import aboutFleetVan from '../assets/about_fleet_van.png'
import aboutFleetTrain from '../assets/about_fleet_train.png'
import teamMarcus from '../assets/team_marcus.png'
import teamSarah from '../assets/team_sarah.png'
import teamRobert from '../assets/team_robert.png'
import aboutNetZero from '../assets/about_net_zero.png'

function About() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-6">
              OUR COMPANY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 leading-[1.1] tracking-tight">
              The Future of Logistics<br />is Here
            </h1>
            <p className="mt-6 text-slate-650 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              At TransGo, we are more than just a carrier. We are architects of efficient supply chains, leveraging cutting-edge technology and human expertise to move the world forward, one shipment at a time.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200/50 hover:bg-blue-700 transition duration-150">
                Learn Our Method
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sunset warehouse fleet image with floating stats card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutHero} 
                  alt="TransGo Warehouse Fleet at Sunset" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              {/* Floating glassmorphic card */}
              <div className="absolute left-4 -bottom-10 md:-left-8 md:bottom-8 bg-white/90 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl max-w-[280px]">
                <div className="text-3xl font-extrabold text-blue-600">99.9%</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  On-time delivery rate across our global enterprise network since 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS BAR SECTION */}
      <section className="bg-slate-950 text-white py-12 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold">50+</div>
              <div className="text-xs text-slate-450 mt-2 font-medium tracking-wide uppercase">Countries Served</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold">10M+</div>
              <div className="text-xs text-slate-455 mt-2 font-medium tracking-wide uppercase">Deliveries Completed</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold">5k+</div>
              <div className="text-xs text-slate-455 mt-2 font-medium tracking-wide uppercase">Global Partners</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold">24/7</div>
              <div className="text-xs text-slate-455 mt-2 font-medium tracking-wide uppercase">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORY SECTION */}
      <section className="py-24 bg-slate-50/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* History copy */}
            <div className="border-l-4 border-blue-600 pl-6 md:pl-8">
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
                From a Local Fleet to a<br />Global Powerhouse
              </h2>
              <div className="space-y-6 text-slate-550 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 1994 with just three trucks in a small depot, TransGo was built on a simple promise: "If it can be moved, it can be moved better." We spent decades obsessing over route optimization and driver safety, before AI even had a name.
                </p>
                <p>
                  Today, our cloud-native orchestration platform manages complex multi-modal shipments across oceans and continents, but our core mission remains unchanged—providing the physical backbone for the global digital economy.
                </p>
              </div>
            </div>

            {/* Twin sunset images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg h-80">
                <img 
                  src={aboutFleetVan} 
                  alt="Delivery van at sunset" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-80">
                <img 
                  src={aboutFleetTrain} 
                  alt="Cargo train transporting containers" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DRIVEN BY PURPOSE */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Driven by Purpose</h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Our core pillars of operation and innovation.
            </p>
          </div>

          {/* Pillars Layout Grid */}
          <div className="space-y-6">
            {/* Top row: Mission and Vision */}
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              {/* Mission (White card) */}
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 mb-6">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
                  <p className="mt-4 text-sm text-slate-505 leading-relaxed">
                    To revolutionize global commerce through an interconnected, transparent, and resilient logistics ecosystem that empowers businesses of all sizes to reach their full potential.
                  </p>
                </div>
                {/* Decorative dots */}
                <div className="mt-8 flex gap-2">
                  <span className="h-2 w-8 rounded-full bg-blue-600/30"></span>
                  <span className="h-2 w-2 rounded-full bg-blue-600/30"></span>
                  <span className="h-2 w-2 rounded-full bg-blue-600/30"></span>
                </div>
              </div>

              {/* Vision (Dark blue card) */}
              <div className="bg-blue-650 p-8 rounded-3xl shadow-lg flex flex-col justify-between text-white bg-blue-800">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white mb-6">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="mt-4 text-sm text-blue-100/90 leading-relaxed">
                    A world where the barriers of distance and complexity are eliminated by a seamless digital freight network.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom row: Reliability, Speed, Integrity (Light grey cards) */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Reliability */}
              <div className="bg-slate-100/60 p-8 rounded-3xl hover:shadow-sm transition duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600 mb-6">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-950">Reliability</h4>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  Unwavering commitment to cargo safety and schedule precision.
                </p>
              </div>

              {/* Speed */}
              <div className="bg-slate-100/60 p-8 rounded-3xl hover:shadow-sm transition duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600 mb-6">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-950">Speed</h4>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  Accelerating the flow of goods through algorithmic route planning.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-slate-100/60 p-8 rounded-3xl hover:shadow-sm transition duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600 mb-6">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-950">Integrity</h4>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  Operating with total transparency and ethical business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">The Minds Behind the Fleet</h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xl">
                Led by industry veterans with over a century of combined experience in global logistics and technology.
              </p>
            </div>
            <div>
              <a href="/careers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
                Join our leadership team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Leaders Profile Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Marcus Vance */}
            <div className="group">
              <div className="rounded-3xl overflow-hidden shadow-md mb-6 aspect-[4/3] sm:aspect-square">
                <img 
                  src={teamMarcus} 
                  alt="Marcus Vance - CEO" 
                  className="w-full h-full object-cover grayscale transition duration-300 group-hover:grayscale-0" 
                />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Marcus Vance</h3>
              <p className="text-xs font-semibold text-blue-600 mt-1">Chief Executive Officer</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Former Head of Global Operations at world-leading shipping lines with a focus on digital transformation.
              </p>
            </div>

            {/* Sarah Chen */}
            <div className="group">
              <div className="rounded-3xl overflow-hidden shadow-md mb-6 aspect-[4/3] sm:aspect-square">
                <img 
                  src={teamSarah} 
                  alt="Sarah Chen - COO" 
                  className="w-full h-full object-cover grayscale transition duration-300 group-hover:grayscale-0" 
                />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Sarah Chen</h3>
              <p className="text-xs font-semibold text-blue-600 mt-1">Chief Operations Officer</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Logistics strategy expert specialized in lean supply chain management and international customs law.
              </p>
            </div>

            {/* Robert 'Bob' Miller */}
            <div className="group">
              <div className="rounded-3xl overflow-hidden shadow-md mb-6 aspect-[4/3] sm:aspect-square">
                <img 
                  src={teamRobert} 
                  alt="Robert 'Bob' Miller - Head of Fleet Operations" 
                  className="w-full h-full object-cover grayscale transition duration-300 group-hover:grayscale-0" 
                />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Robert 'Bob' Miller</h3>
              <p className="text-xs font-semibold text-blue-600 mt-1">Head of Fleet Operations</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                20 years of experience managing large-scale trucking fleets across North America and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT TO NET-ZERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-slate-950 p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Electric truck forest image */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
              <img 
                src={aboutNetZero} 
                alt="Electric Truck driving in Misty Forest" 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* Commitment details */}
            <div>
              <span className="inline-flex items-center rounded bg-slate-800 px-2.5 py-1 text-xs font-bold tracking-wider text-slate-350 uppercase mb-6 text-slate-300">
                ENVIRONMENT FIRST
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Our Commitment to Net-Zero
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl">
                Logistics is energy-intensive, but we are committed to being part of the solution. TransGo is investing $500M in fleet electrification and carbon-offset reforestation programs to reach net-zero by 2035.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-blue-500 shadow-inner">
                    <Leaf className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Eco-Routing AI</h4>
                    <p className="text-xs text-slate-450 mt-1 leading-relaxed text-slate-400">
                      Algorithms that prioritize fuel efficiency and lower emissions paths.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-blue-500 shadow-inner">
                    <Battery className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Electric Last-Mile</h4>
                    <p className="text-xs text-slate-455 mt-1 leading-relaxed text-slate-400">
                      Transitioning 100% of urban delivery vans to electricity by 2028.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
