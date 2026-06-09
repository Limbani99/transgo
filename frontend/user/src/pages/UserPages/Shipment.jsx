import React from 'react'
import { 
  Plus, 
  MapPin, 
  Compass, 
  ArrowDownCircle, 
  Package, 
  Info,
  Ship
} from 'lucide-react'
import shipmentMap from '../../assets/shipment_map.png'

function Shipment() {
  return (
    <div className="space-y-8">
      
      {/* Header block with stepper */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Create New Shipment</h1>
          <p className="text-slate-500 text-xs mt-1 font-medium">Configure your cargo details and choose shipping priority.</p>
        </div>
        
        {/* Stepper capsule */}
        <div className="flex items-center gap-4 bg-white border border-slate-100 p-1.5 rounded-full text-[10px] font-bold text-slate-400 shadow-sm">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full">1 Details</span>
          <span className="px-2">2 Company</span>
          <span className="px-2">3 Payment</span>
          <span className="px-2 pr-3">4 Done</span>
        </div>
      </div>

      {/* Form and Preview Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        
        {/* Form card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
          
          {/* Pickup Information */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-6">
              <Compass className="w-4.5 h-4.5 text-blue-600" />
              Pickup Information
            </h3>
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Address line 1" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Contact Person" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-6">
              <ArrowDownCircle className="w-4.5 h-4.5 text-blue-600" />
              Delivery Information
            </h3>
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Address line 1" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Receiver Name" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-6">
              <Package className="w-4.5 h-4.5 text-blue-600" />
              Product Information
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-[0.8fr_1.2fr] gap-4">
                <select 
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-white transition"
                >
                  <option value="" disabled>Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="industrial">Industrial Parts</option>
                  <option value="medical">Medical Supplies</option>
                  <option value="consumer">Consumer Goods</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Product Name" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Description" 
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 resize-none transition"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="number" 
                  placeholder="Weight (kg)" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
                <input 
                  type="number" 
                  placeholder="Quantity" 
                  className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-150/50 bg-slate-50/20 transition"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Route Preview Card */}
        <div className="bg-[#eef3ff]/60 border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">Route Preview</h2>
              <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-md bg-white text-blue-655 text-blue-600 border border-blue-100 tracking-wide">
                High Accuracy
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-semibold leading-none mb-4">Estimated Distance: 1,420 km</p>
            
            {/* Dotted map image with floating Ocean Freight overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-100/50">
              <img 
                src={shipmentMap} 
                alt="Shipment Route map preview" 
                className="w-full h-auto object-cover" 
              />
              
              {/* Floating map overlay */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/95 backdrop-blur shadow-lg border border-slate-100 p-4 rounded-2xl flex items-center gap-3 w-[85%] max-w-[260px]">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Ship className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 leading-none">Ocean Freight</p>
                  <p className="text-[8px] font-bold text-slate-400 mt-1 leading-none">Est. Transit Time:</p>
                  <p className="text-[10px] font-extrabold text-blue-600 mt-0.5 leading-none">3 Days 4 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price summary calculation */}
          <div className="border-t border-slate-200/50 pt-6 space-y-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shipment Summary</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[9px] font-bold text-slate-400 tracking-wide uppercase leading-none">Estimated Cost</p>
                <p className="text-xl font-extrabold text-blue-900 mt-1.5 leading-none">$1,240.00</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 tracking-wide uppercase leading-none">Tax & Fees</p>
                <p className="text-xl font-extrabold text-slate-800 mt-1.5 leading-none">$142.50</p>
              </div>
            </div>

            {/* Surcharges banner warning */}
            <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-4 flex gap-3 text-blue-700">
              <Info className="w-4.5 h-4.5 shrink-0 mt-0.5 text-blue-600" />
              <p className="text-[10px] font-medium leading-relaxed">
                Price includes Express Priority and Fragile Handling surcharges. Final price confirmed after company selection.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Shipment
