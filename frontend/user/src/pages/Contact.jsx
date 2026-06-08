import React from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, Globe, Shield, MessageSquare } from 'lucide-react'
import hubSiliconValley from '../assets/hub_silicon_valley.png'
import hubBerlin from '../assets/hub_berlin.png'
import hubSingapore from '../assets/hub_singapore.png'

function Contact() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO HEADER AREA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center py-20 pb-36 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-blue-50/90 leading-relaxed font-light">
          Our team of logistics experts is here to help you optimize your supply chain, streamline fleet operations, and scale your global reach.
        </p>
      </section>

      {/* 2. FORM & INFO CARDS BLOCK (Overlapping Overlay) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          
          {/* Left Column: Form Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-150"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Work Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-150"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Company
                    </label>
                    <input 
                      type="text" 
                      placeholder="Global Logistics Inc." 
                      className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-150"
                    />
                  </div>

                  {/* Reason for Inquiry */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Reason for Inquiry
                    </label>
                    <select 
                      className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 bg-white transition duration-150"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a reason...</option>
                      <option value="enterprise">Enterprise Logistics Solutions</option>
                      <option value="carrier">Carrier Partnerships</option>
                      <option value="general">General Questions</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none transition duration-150"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200/50 hover:bg-blue-700 transition duration-150"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info Details & FAQ Cards */}
          <div className="flex flex-col justify-between gap-6">
            
            {/* Info Details Card */}
            <div className="bg-slate-50/80 border border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col gap-8 flex-grow">
              
              {/* General Inquiries */}
              <div>
                <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-blue-600" />
                  General Inquiries
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  For non-urgent matters and general questions about our services.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>hello@transgo.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>+1 (800) TRANS-GO</span>
                  </div>
                </div>
              </div>

              {/* Sales Department */}
              <div className="border-t border-slate-200/50 pt-6">
                <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2.5">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Sales Department
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Speak with our enterprise solutions team for custom logistics planning.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>sales@transgo.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>+1 (888) 555-LOGI</span>
                  </div>
                </div>
              </div>

              {/* Media & Press */}
              <div className="border-t border-slate-200/50 pt-6">
                <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Media & Press
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Press kits and media inquiries regarding global operations.
                </p>
                <div className="mt-4">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>press@transgo.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <a 
              href="/faqs" 
              className="bg-slate-700 hover:bg-slate-800 transition duration-150 rounded-3xl p-8 text-white flex justify-between items-center shadow-md group"
            >
              <div>
                <h3 className="text-lg font-bold">Looking for FAQs?</h3>
                <p className="text-slate-350 text-xs mt-1 text-slate-300">
                  Find answers in our Knowledge Base.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition duration-150 text-white">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL PRESENCE SECTION */}
      <section className="border-t border-slate-100 pt-16 pb-24 bg-slate-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Global Presence</h2>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              Strategically located hubs to serve your global supply chain 24/7.
            </p>
          </div>

          {/* Hubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Silicon Valley */}
            <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition duration-300">
              <div className="rounded-2xl overflow-hidden shadow-sm h-52 mb-6">
                <img 
                  src={hubSiliconValley} 
                  alt="Silicon Valley Headquarters" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-950">Silicon Valley (HQ)</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  500 TransGo Plaza, Suite 100<br />
                  Palo Alto, CA 94304, USA
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition mt-4"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  View on Map
                </a>
              </div>
            </div>

            {/* Berlin Hub */}
            <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition duration-300">
              <div className="rounded-2xl overflow-hidden shadow-sm h-52 mb-6">
                <img 
                  src={hubBerlin} 
                  alt="Berlin Hub Office" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-950">Berlin Hub</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Friedrichstraße 100, 3. Stock<br />
                  10117 Berlin, Germany
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition mt-4"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  View on Map
                </a>
              </div>
            </div>

            {/* Singapore Logistics */}
            <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition duration-300">
              <div className="rounded-2xl overflow-hidden shadow-sm h-52 mb-6">
                <img 
                  src={hubSingapore} 
                  alt="Singapore Logistics Office" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-950">Singapore Logistics</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  12 Marina Boulevard, Level 45<br />
                  Singapore 018982
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition mt-4"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  View on Map
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
