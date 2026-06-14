import React, { useState } from 'react'
import {
  Bell,
  Settings,
  Sliders,
  Truck,
  Navigation,
  CreditCard,
  HelpCircle,
  MessageSquare,
  Star,
  Check,
  Plane,
  Ship,
  X,
  ShieldAlert
} from 'lucide-react'
import teamMarcus from '../../assets/team_marcus.png'

// Partners details
const partnersData = [
  {
    name: 'Global Swift Freight',
    rating: '4.8',
    deliveries: '12.4k Deliveries',
    estDelivery: '2-3 Days',
    coverage: 'Global',
    fleet: [
      { type: 'Truck', icon: Truck },
      { type: 'Air', icon: Plane },
      { type: 'Sea', icon: Ship },
    ],
    estCost: '$1,200.00',
    insurance: '$40.00',
    totalCost: 1240,
    features: ['Real-Time Tracking', 'Insurance Coverage', 'Express Delivery'],
    logoBg: 'bg-blue-50 text-blue-600 border border-blue-100',
    logoType: 'swift'
  },
  {
    name: 'Oceania Logistics',
    rating: '4.9',
    deliveries: '8.1k Deliveries',
    estDelivery: '5-7 Days',
    coverage: 'Regional',
    fleet: [
      { type: 'Truck', icon: Truck },
      { type: 'Sea', icon: Ship },
    ],
    estCost: '$850.00',
    insurance: '$25.00',
    totalCost: 875,
    features: ['Satellite Tracking', 'Damage Guarantee', 'Bulk Discounts'],
    logoBg: 'bg-slate-900 text-cyan-400 border border-slate-800',
    logoType: 'oceania'
  },
  {
    name: 'Titan Priority Express',
    rating: '4.7',
    deliveries: '25.6k Deliveries',
    estDelivery: '1-2 Days',
    coverage: 'Global',
    fleet: [
      { type: 'Truck', icon: Truck },
      { type: 'Air', icon: Plane },
    ],
    estCost: '$2,100.00',
    insurance: '$80.00',
    totalCost: 2180,
    features: ['White Glove Service', 'Full Value Coverage', 'Priority Lane'],
    logoBg: 'bg-slate-950 text-amber-500 border border-slate-900',
    logoType: 'titan'
  }
]

// Custom Inline SVG Logos for visual fidelity
const PartnerLogo = ({ type }) => {
  if (type === 'swift') {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="1" />
        <path d="M2 12h20" />
        <path d="M7 7v10" />
        <path d="M12 7v10" />
        <path d="M17 7v10" />
      </svg>
    )
  }
  if (type === 'oceania') {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M19 12l-2 5H7l-2-5" />
        <path d="M12 3v9" />
        <path d="M10 5h4" />
      </svg>
    )
  }
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 9 9" />
      <path d="M3 12a9 9 0 0 1 9-9" />
      <path d="M12 21a9 9 0 0 1-9-9" />
      <path d="M21 12a9 9 0 0 1-9 9" />
    </svg>
  )
}

function Tranpoter() {
  const [selectedPartners, setSelectedPartners] = useState(['Global Swift Freight', 'Oceania Logistics'])

  const handleTogglePartner = (partnerName) => {
    setSelectedPartners((prev) =>
      prev.includes(partnerName)
        ? prev.filter(name => name !== partnerName)
        : [...prev, partnerName]
    )
  }

  const handleClearAll = () => {
    setSelectedPartners([])
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-700 flex flex-col">

      {/* Main split view container */}
      <div className="flex flex-1">


        {/* 3. CORE CONTENT AREA */}
        <main className="flex-grow p-8 max-w-[1400px] mx-auto w-full space-y-8 overflow-y-auto relative">

          {/* Header block */}
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Choose Transportation Partner</h1>
            <p className="text-slate-500 text-xs mt-1 font-medium">Showing 24 verified logistics partners available for your route</p>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pb-28">
            {partnersData.map((partner) => {
              const isSelected = selectedPartners.includes(partner.name)
              return (
                <div
                  key={partner.name}
                  className={`bg-white border rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition relative ${isSelected ? 'border-blue-200 shadow-md ring-1 ring-blue-150 ring-opacity-50' : 'border-slate-100'
                    }`}
                >

                  {/* Top Row: Info & Checkbox */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="flex gap-4">
                      {/* Logo container */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${partner.logoBg}`}>
                        <PartnerLogo type={partner.logoType} />
                      </div>

                      {/* Name & verification details */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900 leading-tight">{partner.name}</h3>
                          <span className="text-[7.5px] font-extrabold tracking-wider bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100 uppercase">
                            Verified
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-medium">
                          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-450 text-amber-500" />
                          <span className="text-slate-800 font-bold">{partner.rating}</span>
                          <span>•</span>
                          <span>{partner.deliveries}</span>
                        </div>
                      </div>
                    </div>

                    {/* Custom Checkbox */}
                    <div
                      onClick={() => handleTogglePartner(partner.name)}
                      className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition select-none ${isSelected
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-white border-slate-300 hover:border-slate-400'
                        }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                    </div>
                  </div>

                  {/* Mid Row: Capsules */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-50 border border-slate-100/50 p-2.5 rounded-xl text-center">
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wide">Est. Delivery</p>
                      <p className="text-xs font-bold text-blue-600 mt-1">{partner.estDelivery}</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100/50 p-2.5 rounded-xl text-center">
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wide">Coverage</p>
                      <p className="text-xs font-bold text-blue-600 mt-1">{partner.coverage}</p>
                    </div>
                  </div>

                  {/* Fleet Badges Row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {partner.fleet.map((item) => {
                      const FleetIcon = item.icon
                      return (
                        <span
                          key={item.type}
                          className="inline-flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg text-[9px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200/20"
                        >
                          <FleetIcon className="w-3 h-3 text-slate-400" />
                          {item.type}
                        </span>
                      )
                    })}
                  </div>

                  {/* Pricing block */}
                  <div className="border-t border-b border-slate-50 py-4 mb-6 space-y-2">
                    <div className="flex justify-between text-xs font-medium text-slate-450 text-slate-500">
                      <span>Est. Cost</span>
                      <span>{partner.estCost}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-450 text-slate-500">
                      <span>Insurance</span>
                      <span>{partner.insurance}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-900 border-t border-slate-100/50 pt-2 mt-2">
                      <span>Total Estimate</span>
                      <span className="text-blue-600 text-sm font-extrabold">${partner.totalCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    {partner.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                        <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-150">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Select Button */}
                  <button className="w-full text-center py-2.5 bg-blue-600 hover:bg-blue-700 transition text-xs font-bold text-white rounded-xl shadow shadow-blue-200">
                    Select Company
                  </button>

                </div>
              )
            })}
          </div>

          {/* 4. BOTTOM FLOATING COMPARE BAR */}
          {selectedPartners.length > 0 && (
            <div className="fixed bottom-6 left-1/2 lg:left-[calc(50%+128px)] -translate-x-1/2 bg-white/95 backdrop-blur border border-slate-200/80 shadow-2xl p-4 rounded-3xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 z-40 max-w-[90%] sm:max-w-none">

              {/* Selected stats info */}
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-blue-900">Compare Partners</p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">{selectedPartners.length} Selected</p>
              </div>

              {/* Thumbnails row */}
              <div className="flex items-center gap-3">
                {selectedPartners.map((name) => {
                  const data = partnersData.find(p => p.name === name)
                  if (!data) return null
                  return (
                    <div key={name} className="flex items-center gap-2 border border-slate-100 bg-slate-50 py-1.5 px-3 rounded-2xl shadow-inner">
                      {/* Mini circular logo */}
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${data.logoBg} scale-75 shrink-0`}>
                        <PartnerLogo type={data.logoType} />
                      </div>

                      {/* Cost Info */}
                      <div className="text-[10px]">
                        <p className="font-bold text-slate-900 leading-none">{name.split(' ')[0]}</p>
                        <p className="font-extrabold text-blue-600 mt-0.5 leading-none">${data.totalCost}</p>
                      </div>

                      {/* Remove tag */}
                      <button
                        onClick={() => handleTogglePartner(name)}
                        className="text-slate-400 hover:text-slate-600 transition"
                      >
                        <X className="w-3.5 h-3.5 stroke-[2]" />
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={handleClearAll}
                  className="text-xs font-bold text-slate-450 text-slate-400 hover:text-slate-600 transition"
                >
                  Clear All
                </button>

                <button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 shadow shadow-blue-200 transition">
                  Compare Partners Side-by-Side
                </button>
              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  )
}

export default Tranpoter
