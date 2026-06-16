import React, { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Crown,
  Calendar,
  CheckCircle2,
  Package,
  RefreshCw,
  Edit3,
  Lock,
  ShieldAlert,
  Check,
  Star,
  Download,
  Building,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import teamMarcus from '../../assets/team_marcus.png'
import hubBerlin from '../../assets/hub_berlin.png'

const initialActivityItems = [
  {
    id: 1,
    type: 'shipment',
    title: 'Shipment Delivered: #TRX-99420',
    description: 'Global Express delivery to Amsterdam was completed and signed by J. Doe.',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Successful',
    description: 'Payment of $12,450.00 processed successfully for Invoice #INV-8874.',
    time: 'Yesterday, 4:32 PM',
  },
  {
    id: 3,
    type: 'shipment',
    title: 'Review Submitted',
    description: 'You left a 5-star review for "Trans-Atlantic Express" shipping route.',
    time: 'Oct 24, 2023',
  },
]

function Profile() {
  // Personal Details Edit State
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('Alex Sterling')
  const [email, setEmail] = useState('alex.sterling@enterprise.logistics')
  const [phone, setPhone] = useState('+1 (555) 012-3456')
  const [headquarters, setHeadquarters] = useState('742 Logistic Way, Silicon Valley, CA 94025')

  // Password Update Modal State
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Activity Filter State
  const [activityTab, setActivityTab] = useState('all')

  // Handle saving details
  const handleSaveDetails = (e) => {
    e.preventDefault()
    setIsEditing(false)
    alert('Personal details updated successfully!')
  }

  // Handle password update
  const handlePasswordUpdate = (e) => {
    e.preventDefault()
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill out all password fields.')
      return
    }
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match.')
      return
    }
    setShowPasswordModal(false)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    alert('Password updated successfully!')
  }

  // Filter activities based on tab
  const filteredActivities = initialActivityItems.filter((item) => {
    if (activityTab === 'all') return true
    return item.type === activityTab
  })

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-700 flex flex-col relative">
      <main className="flex-grow p-8 max-w-[1400px] mx-auto w-full space-y-8 overflow-y-auto relative">
        
        {/* TOP TITLE HEADER ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">My Profile</h1>
            <p className="text-slate-500 text-xs mt-1 font-medium">Manage your personal preferences and shipment statistics</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => alert('Generating full statistics report...')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition duration-150 shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Export Report
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-650 bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-200 hover:bg-blue-700 transition duration-150 cursor-pointer"
            >
              {isEditing ? 'Cancel Edit' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* 1. PROFILE INFORMATION CARD */}
        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
          {/* Avatar Container */}
          <div className="relative">
            <img
              src={teamMarcus}
              alt="Alex Sterling"
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md"
            />
            <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white border-2 border-white shadow-sm" title="Verified Account">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          </div>

          {/* User Meta info */}
          <div className="text-center md:text-left flex-grow space-y-2.5">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 justify-center md:justify-start">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">{name}</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wide">
                Verified
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                ID: #TG-C-88421
              </span>
              <span className="hidden sm:inline-block text-slate-200">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Member Since Oct 2023
              </span>
              <span className="hidden sm:inline-block text-slate-200">•</span>
              <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                <Crown className="w-3.5 h-3.5 text-blue-600" />
                Elite Tier Customer
              </span>
            </div>
          </div>
        </div>

        {/* 2. STATS KEY METRICS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat 1: Total Shipments */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Package className="w-4.5 h-4.5" />
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-55 bg-emerald-50 text-emerald-600 font-sans tracking-wide">
                +12% ↗
              </span>
            </div>
            <div className="mt-4">
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">Total Shipments</p>
              <p className="text-2xl font-black text-slate-900 mt-1">154</p>
            </div>
          </div>

          {/* Stat 2: Active Shipments */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <RefreshCw className="w-4.5 h-4.5" />
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-600 tracking-wide uppercase">
                In Transit
              </span>
            </div>
            <div className="mt-4">
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">Active Shipments</p>
              <p className="text-2xl font-black text-slate-900 mt-1">12</p>
            </div>
          </div>

          {/* Stat 3: Completed Deliveries */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 tracking-wide font-sans">
                92% Rate
              </span>
            </div>
            <div className="mt-4">
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">Completed Deliveries</p>
              <p className="text-2xl font-black text-slate-900 mt-1">142</p>
            </div>
          </div>

          {/* Stat 4: Total Spend */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <CreditCard className="w-4.5 h-4.5" />
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-600 tracking-wide uppercase">
                Annual Spend
              </span>
            </div>
            <div className="mt-4">
              <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">Total Spending</p>
              <p className="text-2xl font-black text-slate-900 mt-1 font-sans">$128,450</p>
            </div>
          </div>

        </div>

        {/* 3. SPLIT INFORMATION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          
          {/* LEFT COLUMN: PERSONAL DETAILS */}
          <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-slate-50 pb-4">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Personal Information</h3>
              
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                {isEditing ? 'Cancel' : 'Edit Details'}
              </button>
            </div>

            {/* Editable Form container */}
            <form onSubmit={handleSaveDetails} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-800 transition ${
                      isEditing
                        ? 'border-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100/50'
                        : 'border-slate-100 bg-[#eef3ff]/60 border-slate-200/40 font-semibold cursor-not-allowed'
                    }`}
                  />
                </div>

                {/* Email input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    disabled={!isEditing}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-800 transition ${
                      isEditing
                        ? 'border-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100/50'
                        : 'border-slate-100 bg-[#eef3ff]/60 border-slate-200/40 font-semibold cursor-not-allowed'
                    }`}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-800 transition ${
                      isEditing
                        ? 'border-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100/50'
                        : 'border-slate-100 bg-[#eef3ff]/60 border-slate-200/40 font-semibold cursor-not-allowed'
                    }`}
                  />
                </div>

                {/* Global Headquarters */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Global Headquarters</label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={headquarters}
                    onChange={(e) => setHeadquarters(e.target.value)}
                    className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-800 transition ${
                      isEditing
                        ? 'border-blue-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100/50'
                        : 'border-slate-100 bg-[#eef3ff]/60 border-slate-200/40 font-semibold cursor-not-allowed'
                    }`}
                  />
                </div>
              </div>

              {/* Editable CTA button */}
              {isEditing && (
                <div className="pt-2 border-t border-slate-50 flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-650 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow shadow-blue-200 cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT COLUMN: ACCOUNT OVERVIEW & QUICK ACTIONS */}
          <div className="space-y-6">
            
            {/* CARD 1: ACCOUNT OVERVIEW */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col gap-5">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight border-b border-slate-50 pb-3">Account Overview</h3>
              
              <div className="space-y-4">
                {/* saved addresses */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:bg-slate-50/50 p-2 rounded-xl transition duration-150 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-slate-450 text-slate-500" />
                    </div>
                    <span>Saved Addresses</span>
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">3</span>
                </div>

                {/* payment methods */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:bg-slate-50/50 p-2 rounded-xl transition duration-150 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-slate-450 text-slate-500" />
                    </div>
                    <span>Payment Methods</span>
                  </div>
                  <span className="bg-blue-50 text-blue-650 border border-blue-100 px-2 py-0.5 rounded text-[9px] font-extrabold uppercase">2 Cards</span>
                </div>

                {/* preferences settings */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:bg-slate-50/50 p-2 rounded-xl transition duration-150 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-slate-450 text-slate-500" />
                    </div>
                    <span>Preferences</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* CARD 2: QUICK ACTIONS */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col gap-4">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight border-b border-slate-50 pb-3">Quick Actions</h3>
              
              <div className="space-y-2.5">
                
                {/* 1. saved addresses */}
                <button
                  onClick={() => alert('Redirecting to saved addresses manager...')}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/20 text-slate-700 text-xs font-bold transition flex items-center justify-between cursor-pointer"
                >
                  Manage Addresses
                  <MapPin className="w-4 h-4 text-slate-400" />
                </button>

                {/* 2. change password */}
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/20 text-slate-700 text-xs font-bold transition flex items-center justify-between cursor-pointer"
                >
                  Change Password
                  <Lock className="w-4 h-4 text-slate-400" />
                </button>

                {/* 3. deactivate */}
                <button
                  onClick={() => alert('Warning: Deactivating account will disable dashboard access. Please contact support.')}
                  className="w-full py-2.5 px-4 rounded-xl border border-red-50 hover:bg-red-50/20 text-red-500 text-xs font-bold transition flex items-center justify-between cursor-pointer"
                >
                  Deactivate Account
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4. BOTTOM RECENT ACTIVITY LOG SECTION */}
        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-50 pb-4">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Recent Activity</h3>
            
            {/* Filter pills */}
            <div className="flex bg-slate-100 p-1 rounded-xl gap-1.5 text-[10px] font-bold text-slate-500">
              {[
                { id: 'all', label: 'All' },
                { id: 'shipment', label: 'Shipments' },
                { id: 'payment', label: 'Payments' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivityTab(tab.id)}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    activityTab === tab.id
                      ? 'bg-white text-slate-800 font-extrabold shadow-sm'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Activities Feed loop */}
          <div className="divide-y divide-slate-100">
            {filteredActivities.map((act) => (
              <div key={act.id} className="py-4.5 py-4 first:pt-0 last:pb-0 flex gap-4 items-start">
                
                {/* Bullet circle icon indicator */}
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  act.type === 'payment'
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    : 'bg-blue-50 text-blue-600 border border-blue-100'
                }`}>
                  {act.type === 'payment' ? <CreditCard className="w-4 h-4" /> : <Package className="w-4 h-4" />}
                </div>

                {/* Details context */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start gap-4">
                    <h5 className="text-xs font-bold text-slate-800 leading-tight">{act.title}</h5>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide font-sans leading-none">
                      {act.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{act.description}</p>
                </div>

              </div>
            ))}
          </div>

          {/* View All center link */}
          <div className="border-t border-slate-50 pt-4 text-center">
            <button
              onClick={() => alert('Loading full activity log feed...')}
              className="text-xs font-extrabold text-blue-600 hover:text-blue-755 hover:text-blue-700 transition cursor-pointer"
            >
              View All Activity
            </button>
          </div>
        </div>

      </main>

      {/* 5. CHANGE PASSWORD DIALOG MODAL */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
          <form
            onSubmit={handlePasswordUpdate}
            className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 flex flex-col gap-4 animate-fade-in"
          >
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">Change Password</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-semibold">Update account credentials safely.</p>
            </div>

            {/* Current password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-450 text-slate-400 uppercase tracking-wide">Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-300 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
              />
            </div>

            {/* New password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-450 text-slate-400 uppercase tracking-wide">New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-300 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
              />
            </div>

            {/* Confirm password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-450 text-slate-400 uppercase tracking-wide">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-300 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow shadow-blue-150 transition cursor-pointer"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  )
}

export default Profile
