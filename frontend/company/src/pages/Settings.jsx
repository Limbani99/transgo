import React, { useState } from 'react'
import { 
  Upload, 
  Building2, 
  Percent, 
  MapPin, 
  Plus, 
  X,
  Save
} from 'lucide-react'
import toast from 'react-hot-toast'

function Settings() {
  // Service Areas state
  const [regions, setRegions] = useState(['North America', 'Western Europe', 'APAC Region'])
  const [newRegion, setNewRegion] = useState('')

  // Form states
  const [companyName, setCompanyName] = useState('TransGo Logistics Inc.')
  const [industry, setIndustry] = useState('Logistics & Supply Chain')
  const [description, setDescription] = useState('Premium global fleet management and supply chain solutions provider.')
  const [gstNumber, setGstNumber] = useState('GSTIN-1234567890')
  const [tinNumber, setTinNumber] = useState('TIN-987654321')
  const [contactName, setContactName] = useState('Sarah Jenkins')
  const [contactRole, setContactRole] = useState('Operations Director')
  const [email, setEmail] = useState('s.jenkins@transgo.com')
  const [phone, setPhone] = useState('+1 (555) 123-4567')
  const [street, setStreet] = useState('100 Logistics Blvd, Suite 400')
  const [city, setCity] = useState('Chicago')
  const [state, setState] = useState('IL')
  const [zip, setZip] = useState('60601')

  const handleAddRegion = (e) => {
    e.preventDefault()
    if (!newRegion.trim()) return
    if (regions.includes(newRegion.trim())) {
      toast.error('Region already added!')
      return
    }
    setRegions([...regions, newRegion.trim()])
    setNewRegion('')
    toast.success('Service area added!')
  }

  const handleRemoveRegion = (regionToRemove) => {
    setRegions(regions.filter(r => r !== regionToRemove))
    toast.success('Service area removed!')
  }

  const handleSave = (e) => {
    e.preventDefault()
    toast.success('Profile settings updated successfully!')
  }

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Title Header with Save Changes Action Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Company Profile
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Manage your corporate details, tax information, and operational footprint.
          </p>
        </div>
        
        <button 
          onClick={handleSave}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer whitespace-nowrap"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
          
          {/* Left Column (Identity, Service Areas) */}
          <div className="space-y-6">
            
            {/* Card 1: Brand Identity */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center space-y-5">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest self-start">Brand Identity</span>
              
              {/* Upload Logo Circle */}
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-blue-600 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-blue-50/30 transition p-2 relative group">
                <Upload className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-bold text-blue-600">Upload Logo</span>
              </div>

              <div className="text-[10px] text-slate-400 font-semibold leading-normal">
                <p>Recommended size: 400×400px.</p>
                <p className="mt-0.5">Max file size: 5MB (JPG, PNG).</p>
              </div>
            </div>

            {/* Card 2: Service Areas */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Areas</h3>
                <Plus size={14} className="text-slate-400" />
              </div>

              {/* Added Regions List */}
              <div className="flex flex-wrap gap-2 py-1">
                {regions.map((region) => (
                  <span 
                    key={region} 
                    className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full text-[10px] font-bold"
                  >
                    {region}
                    <button 
                      type="button"
                      onClick={() => handleRemoveRegion(region)}
                      className="hover:text-blue-800 focus:outline-none transition cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>

              {/* Add Region Input Block */}
              <div className="space-y-1.5 pt-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Add Region</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="e.g. South America"
                    value={newRegion}
                    onChange={(e) => setNewRegion(e.target.value)}
                    className="flex-grow rounded-xl bg-slate-50 border border-slate-200/60 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                  <button 
                    type="button"
                    onClick={handleAddRegion}
                    className="bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100 font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Company Information, Tax Info, Contact Details) */}
          <div className="space-y-6">
            
            {/* Card 3: Company Information */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
                <Building2 className="w-4.5 h-4.5 text-slate-400" />
                Company Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Legal Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Legal Company Name</label>
                  <input 
                    type="text" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* Industry */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Industry</label>
                  <select 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 cursor-pointer"
                  >
                    <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Warehousing">Warehousing</option>
                    <option value="Freight Cargo">Freight Cargo</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500">Company Description</label>
                <textarea 
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 resize-none"
                />
              </div>
            </div>

            {/* Card 4: Tax & Registration Information */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
                <Percent className="w-4.5 h-4.5 text-slate-400" />
                Tax & Registration Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* GST / VAT */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">GST / VAT Number</label>
                  <input 
                    type="text" 
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-blue-650 font-bold focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* TIN */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Tax Identification Number (TIN)</label>
                  <input 
                    type="text" 
                    value={tinNumber}
                    onChange={(e) => setTinNumber(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>
              </div>
            </div>

            {/* Card 5: Contact & Address */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 border-b border-slate-50 pb-4">
                <MapPin className="w-4.5 h-4.5 text-slate-400" />
                Contact & Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contact Person */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Primary Contact Person</label>
                  <input 
                    type="text" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* Contact Role */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Contact Role</label>
                  <input 
                    type="text" 
                    value={contactRole}
                    onChange={(e) => setContactRole(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Phone Number</label>
                  <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>
              </div>

              {/* Headquarters Address Section */}
              <div className="border-t border-slate-50 pt-5 space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Headquarters Address</p>

                {/* Street Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500">Street Address</label>
                  <input 
                    type="text" 
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                  />
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500">City</label>
                    <input 
                      type="text" 
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500">State/Province</label>
                    <input 
                      type="text" 
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500">ZIP / Postal</label>
                    <input 
                      type="text" 
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200/60 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </form>
      
    </div>
  )
}

export default Settings
