import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Calculator, 
  Route, 
  Fuel, 
  Coins, 
  Truck, 
  Shield, 
  Percent, 
  Receipt, 
  Send, 
  Save, 
  Eye,
  ChevronLeft
} from 'lucide-react'
import toast from 'react-hot-toast'

function GenerateQuotation() {
  const { id } = useParams()
  const navigate = useNavigate()

  // State for interactive inputs
  const [distanceCost, setDistanceCost] = useState(1250.00)
  const [fuelCharges, setFuelCharges] = useState(340.50)
  const [tollCharges, setTollCharges] = useState(85.00)
  const [vehicleCharges, setVehicleCharges] = useState(500.00)
  const [insuranceCharges, setInsuranceCharges] = useState(120.00)
  const [gstPercent, setGstPercent] = useState(18)

  // Calculations
  const subtotal = distanceCost + fuelCharges + tollCharges + vehicleCharges + insuranceCharges
  const tax = subtotal * (gstPercent / 100)
  const total = subtotal + tax

  const handleSend = () => {
    toast.success('Quotation sent successfully!')
    navigate(`/bookings/${id}`)
  }

  const handleSaveDraft = () => {
    toast.success('Quotation draft saved!')
  }

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Header with back navigation */}
      <div className="space-y-2">
        <button 
          onClick={() => navigate(`/bookings/${id}`)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer"
        >
          <ChevronLeft size={16} />
          Back to Details
        </button>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Generate Quotation
            </h1>
            <p className="text-slate-500 text-sm mt-1 font-medium">
              Calculate and review shipment costs
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs (Left) and Summary (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
        
        {/* Left Card: Cost Breakdown Inputs */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
            <Calculator className="w-4.5 h-4.5 text-slate-400" />
            Cost Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Distance Cost */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Distance Cost ($)</label>
              <div className="relative">
                <Route className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                <input 
                  type="number" 
                  value={distanceCost}
                  onChange={(e) => setDistanceCost(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                />
              </div>
            </div>

            {/* Fuel Charges */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Fuel Charges ($)</label>
              <div className="relative">
                <Fuel className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                <input 
                  type="number" 
                  value={fuelCharges}
                  onChange={(e) => setFuelCharges(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                />
              </div>
            </div>

            {/* Toll Charges */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Toll Charges ($)</label>
              <div className="relative">
                <Coins className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                <input 
                  type="number" 
                  value={tollCharges}
                  onChange={(e) => setTollCharges(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                />
              </div>
            </div>

            {/* Vehicle Charges */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Vehicle Charges ($)</label>
              <div className="relative">
                <Truck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                <input 
                  type="number" 
                  value={vehicleCharges}
                  onChange={(e) => setVehicleCharges(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                />
              </div>
            </div>

            {/* Insurance Charges */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Insurance Charges ($)</label>
              <div className="relative">
                <Shield className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-455" />
                <input 
                  type="number" 
                  value={insuranceCharges}
                  onChange={(e) => setInsuranceCharges(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                />
              </div>
            </div>

            {/* GST */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">GST (%)</label>
              <div className="relative">
                <Percent className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-455" />
                <input 
                  type="number" 
                  value={gstPercent}
                  onChange={(e) => setGstPercent(parseFloat(e.target.value) || 0)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Quotation Summary */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
            <Receipt className="w-4.5 h-4.5 text-slate-400" />
            Quotation Summary
          </h2>

          <div className="space-y-4 text-xs font-bold">
            <div className="flex justify-between items-center text-slate-500">
              <span>Subtotal</span>
              <span className="text-slate-800">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            
            <div className="flex justify-between items-center text-slate-500">
              <span>Tax (GST {gstPercent}%)</span>
              <span className="text-slate-800">${tax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
              <span className="text-sm text-slate-900">Total Amount</span>
              <span className="text-xl font-extrabold text-blue-650">
                ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button 
              onClick={handleSend}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send Quotation
            </button>
            <button 
              onClick={handleSaveDraft}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-650 font-bold text-xs py-3 px-4 transition duration-150 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Save Draft
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Card: Document Preview */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b border-slate-50 pb-4">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Eye className="w-4.5 h-4.5 text-slate-400" />
            Document Preview
          </h2>
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold">
            Draft #QT-2023-089
          </span>
        </div>

        {/* Invoice Layout Mockup */}
        <div className="border border-slate-150 rounded-2xl p-8 max-w-4xl mx-auto space-y-8 bg-white shadow-inner font-sans text-xs">
          {/* Mockup Invoice Header */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-900">TransGo Logistics</h3>
              <p className="text-slate-450 font-medium">123 Freight Way, Suite 400</p>
              <p className="text-slate-450 font-medium">Chicago, IL 60601</p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quotation For</p>
              <p className="text-sm font-extrabold text-slate-900">Acme Corp Manufacturing</p>
              <p className="text-slate-450 font-semibold mt-1">Date: Oct 24, 2023</p>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="border border-slate-100 rounded-xl overflow-hidden mt-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-5 font-semibold text-[9px] tracking-widest">Description</th>
                  <th className="py-3 px-5 font-semibold text-[9px] tracking-widest text-right w-40">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
                {distanceCost > 0 && (
                  <tr>
                    <td className="py-4 px-5">Base Distance Freight Charge</td>
                    <td className="py-4 px-5 text-right font-bold text-slate-900">${distanceCost.toFixed(2)}</td>
                  </tr>
                )}
                {vehicleCharges > 0 && (
                  <tr>
                    <td className="py-4 px-5">Vehicle Assignment (Refrigerated)</td>
                    <td className="py-4 px-5 text-right font-bold text-slate-900">${vehicleCharges.toFixed(2)}</td>
                  </tr>
                )}
                {fuelCharges > 0 && (
                  <tr>
                    <td className="py-4 px-5">Fuel Surcharge</td>
                    <td className="py-4 px-5 text-right font-bold text-slate-900">${fuelCharges.toFixed(2)}</td>
                  </tr>
                )}
                {insuranceCharges > 0 && (
                  <tr>
                    <td className="py-4 px-5">Comprehensive Cargo Insurance</td>
                    <td className="py-4 px-5 text-right font-bold text-slate-900">${insuranceCharges.toFixed(2)}</td>
                  </tr>
                )}
                {tollCharges > 0 && (
                  <tr>
                    <td className="py-4 px-5">Route Toll Estimation</td>
                    <td className="py-4 px-5 text-right font-bold text-slate-900">${tollCharges.toFixed(2)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Invoice Totals */}
          <div className="flex justify-end pt-4">
            <div className="w-72 space-y-3 font-bold text-xs">
              <div className="flex justify-between items-center text-slate-500">
                <span>Subtotal</span>
                <span className="text-slate-800">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span>GST ({gstPercent}%)</span>
                <span className="text-slate-800">${tax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="border-t border-blue-500/30 pt-3 flex justify-between items-center">
                <span className="text-sm text-slate-900">Total</span>
                <span className="text-base font-extrabold text-slate-900">
                  ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GenerateQuotation
