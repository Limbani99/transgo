import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ChevronRight, 
  Info, 
  X, 
  FileText, 
  Building2, 
  User, 
  Mail, 
  Package, 
  Scale, 
  Layers, 
  Navigation,
  Clock
} from 'lucide-react'

function BookingDetails() {
  const { id } = useParams()

  // In a real application, you would fetch details based on the id
  // Here we hardcode details for REQ-5021 to match the mockup
  const bookingData = {
    id: id || '#REQ-5021',
    status: 'PENDING QUOTE',
    customer: {
      name: 'Global Traders Inc.',
      contact: 'Michael Chen',
      email: 'm.chen@globaltraders.com'
    },
    shipment: {
      productName: 'Industrial HVAC Units',
      category: 'Machinery',
      weight: '2,400 lbs',
      quantity: '4 Units'
    },
    route: {
      origin: {
        address: '123 Harbor Way',
        cityStateZip: 'Los Angeles, CA 90210'
      },
      destination: {
        address: '456 Desert Highway',
        cityStateZip: 'Phoenix, AZ 85001'
      },
      distance: '372 Miles',
      duration: '~5h 45m drive'
    }
  }

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
        <Link to="/bookings" className="hover:text-slate-600 transition">Bookings</Link>
        <ChevronRight size={14} className="text-slate-350" />
        <span className="text-slate-500">{bookingData.id}</span>
      </div>

      {/* Header Block */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Booking Details
        </h1>
        
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/50">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-550"></span>
          {bookingData.status}
        </span>
      </div>

      {/* Action Required Banner */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4.5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Info className="text-slate-500 shrink-0" size={20} />
          <p className="text-xs font-bold text-slate-700">
            Action required to proceed with logistics planning.
          </p>
        </div>
        
        <div className="flex items-center gap-2.5">
          <button className="inline-flex items-center justify-center gap-1.5 border border-red-200 bg-white hover:bg-red-50 text-red-655 font-bold text-xs py-2 px-4 rounded-xl transition duration-150 cursor-pointer">
            <X size={14} />
            Reject Request
          </button>
          <Link 
            to={`/bookings/${id}/generate-quote`}
            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-xl transition duration-150 cursor-pointer shadow-md shadow-blue-500/10"
          >
            <FileText size={14} />
            Generate Quote
          </Link>
          <Link 
            to={`/bookings/${id}/assign-driver`}
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-xl transition duration-150 cursor-pointer shadow-md shadow-emerald-500/10"
          >
            <User size={14} />
            Assign Driver
          </Link>
        </div>
      </div>

      {/* Main Grid: Left Details & Right Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column Cards */}
        <div className="space-y-6">
          
          {/* Card 1: Customer Info */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Building2 className="w-4.5 h-4.5 text-slate-400" />
              Customer Info
            </h2>
            
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company Name</p>
                <p className="text-sm font-extrabold text-slate-900 mt-1">{bookingData.customer.name}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Person</p>
                  <p className="text-xs font-bold text-slate-750 mt-1.5 flex items-center gap-2">
                    <User size={15} className="text-slate-400" />
                    {bookingData.customer.contact}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-xs font-bold text-blue-600 mt-1.5 flex items-center gap-2 hover:underline cursor-pointer">
                    <Mail size={15} className="text-slate-400" />
                    {bookingData.customer.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Shipment Details */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Package className="w-4.5 h-4.5 text-slate-400" />
              Shipment Details
            </h2>
            
            <div className="space-y-5">
              <div className="bg-blue-50/40 border border-blue-100/50 rounded-2xl p-4.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product Name</p>
                <p className="text-sm font-extrabold text-slate-900 mt-1">{bookingData.shipment.productName}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</p>
                  <div className="mt-2">
                    <span className="bg-blue-100/55 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">
                      {bookingData.shipment.category}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Weight</p>
                  <p className="text-xs font-bold text-slate-750 mt-2 flex items-center gap-2">
                    <Scale size={16} className="text-slate-400" />
                    {bookingData.shipment.weight}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-50 pt-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quantity</p>
                <p className="text-xs font-bold text-slate-750 mt-2 flex items-center gap-2">
                  <Layers size={16} className="text-slate-400" />
                  {bookingData.shipment.quantity}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Route Plan */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Navigation className="w-4.5 h-4.5 text-slate-400" />
              Route Plan
            </h2>
            
            <div className="relative pl-7 space-y-6">
              {/* Vertical dotted line */}
              <div className="absolute left-[9.5px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-slate-200"></div>
              
              {/* Origin */}
              <div className="relative">
                <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-blue-600 bg-white ring-4 ring-white"></span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Origin</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{bookingData.route.origin.address}</p>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">{bookingData.route.origin.cityStateZip}</p>
                </div>
              </div>

              {/* Destination */}
              <div className="relative">
                <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-emerald-500 bg-white ring-4 ring-white"></span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destination</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{bookingData.route.destination.address}</p>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">{bookingData.route.destination.cityStateZip}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column Map Card */}
        <div className="bg-slate-100 border border-slate-200/60 rounded-3xl overflow-hidden relative shadow-sm h-[600px] flex">
          {/* Generated map background */}
          <img 
            src="/route-map.png" 
            alt="Route Map" 
            className="w-full h-full object-cover"
          />

          {/* Floating Distance Est. Card */}
          <div className="absolute top-6 left-6 bg-white/95 border border-slate-200/40 backdrop-blur-md rounded-2xl p-4.5 shadow-lg z-10 w-full max-w-[200px]">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider">Distance Est.</p>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              {bookingData.route.distance}
            </p>
            <p className="text-[10px] font-bold text-slate-500 mt-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {bookingData.route.duration}
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default BookingDetails
