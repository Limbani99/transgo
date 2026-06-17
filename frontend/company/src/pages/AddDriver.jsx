import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  ChevronRight, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Truck, 
  Upload, 
  FileText, 
  Calendar,
  Save,
  X,
  Plus,
  ChevronLeft
} from 'lucide-react'
import toast from 'react-hot-toast'

function AddDriver() {
  const navigate = useNavigate()

  // State variables for the form
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [cdlNumber, setCdlNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [photo, setPhoto] = useState(null)
  const [licenseDoc, setLicenseDoc] = useState(null)

  const handleSave = (e) => {
    e.preventDefault()
    if (!fullName) {
      toast.error('Please enter a full name.')
      return
    }
    toast.success('Driver added successfully!')
    navigate('/drivers')
  }

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
        <Link to="/drivers" className="hover:text-slate-600 transition">Drivers</Link>
        <ChevronRight size={14} className="text-slate-350" />
        <span className="text-slate-500">Add New Driver</span>
      </div>

      {/* Header Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Add New Driver
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Enter driver details, licensing, and vehicle assignment to add them to the active fleet.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Main Grid: Left inputs and Right photos/licenses */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          
          {/* Left Column forms */}
          <div className="space-y-6">
            
            {/* Card 1: Personal Information */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
                <User className="w-4.5 h-4.5 text-slate-400" />
                Personal Information
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john.doe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                    />
                  </div>
                </div>

                {/* Residential Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Residential Address</label>
                  <textarea 
                    rows="3"
                    placeholder="Enter full address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Vehicle Assignment */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
                <Truck className="w-4.5 h-4.5 text-slate-400" />
                Vehicle Assignment
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Vehicle Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Vehicle Type</label>
                  <select 
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-550 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 cursor-pointer"
                  >
                    <option value="">Select type</option>
                    <option value="Semi Truck">Semi Truck</option>
                    <option value="Flatbed Truck">Flatbed Truck</option>
                    <option value="Box Truck">Box Truck</option>
                    <option value="Cargo Van">Cargo Van</option>
                  </select>
                </div>

                {/* Vehicle Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Vehicle Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. TRK-4092"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column uploads/licensing */}
          <div className="space-y-6">
            
            {/* Card 3: Driver Photo */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest self-start">Driver Photo</span>
              
              <div className="w-24 h-24 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center relative cursor-pointer group hover:bg-blue-100/50 transition">
                <User size={36} className="text-blue-500" />
                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Upload className="text-white w-5 h-5" />
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-700 hover:text-blue-600 cursor-pointer transition">Click to upload photo</p>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold">JPG or PNG, max 2MB</p>
              </div>
            </div>

            {/* Card 4: Licensing */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
                <FileText className="w-4.5 h-4.5 text-slate-400" />
                Licensing
              </h2>

              <div className="space-y-4">
                {/* CDL Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">CDL Number</label>
                  <input 
                    type="text" 
                    placeholder="Enter license number"
                    value={cdlNumber}
                    onChange={(e) => setCdlNumber(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* Expiry Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Expiry Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 cursor-pointer"
                    />
                  </div>
                </div>

                {/* License Document Upload */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">License Document</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-5 text-center cursor-pointer hover:bg-slate-50/50 transition">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Upload className="w-4 h-4" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal">
                        <span className="font-bold text-blue-600 hover:underline">Upload PDF or Image</span> Drag and drop or click to browse
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Action Buttons Footer panel */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex items-center justify-end gap-3 shadow-sm mt-6">
          <button 
            type="button"
            onClick={() => navigate('/drivers')}
            className="inline-flex items-center justify-center gap-1.5 border border-slate-250 bg-white hover:bg-slate-50 text-slate-650 font-bold text-xs py-2.5 px-5 rounded-xl transition duration-150 cursor-pointer"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-750 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition duration-150 cursor-pointer shadow-md shadow-blue-500/10"
          >
            <Save className="w-4 h-4" />
            Save Driver
          </button>
        </div>

      </form>

    </div>
  )
}

export default AddDriver
