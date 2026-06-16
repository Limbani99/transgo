import React, { useState } from 'react'
import {
  Bell,
  Trash2,
  SlidersHorizontal,
  Truck,
  CreditCard,
  AlertCircle,
  TrendingUp,
  Search,
  CheckCheck,
  Check,
  X,
  Volume2,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

import hubBerlin from '../../assets/hub_berlin.png'

const initialNotifications = [
  {
    id: 1,
    category: 'shipment',
    title: 'Shipment Out for Delivery',
    message: 'Your shipment #TG-94201 is out for delivery in New York. The estimated arrival is between 2:00 PM and 4:00 PM today.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    category: 'payment',
    title: 'Payment Successful',
    message: 'Invoice #INV-2024-882 has been paid in full. A confirmation receipt has been sent to your primary email address.',
    time: '4 hours ago',
    unread: true,
  },
  {
    id: 3,
    category: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance will occur on Saturday from 2:00 AM to 4:00 AM UTC. Some services may be temporarily unavailable.',
    time: '12 hours ago',
    unread: false,
  },
  {
    id: 4,
    category: 'promotion',
    title: 'Referral Program Bonus',
    message: 'Invite a logistics partner to TransGo and earn $100 credit for your next fleet upgrade. Limited time offer!',
    time: 'Yesterday',
    unread: false,
  },
]

function Notification() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Mark all as read
  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  // Clear all notifications
  const handleClearAll = () => {
    setNotifications([])
  }

  // Toggle read status
  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    )
  }

  // Dismiss a notification
  const handleDismiss = (id, e) => {
    e.stopPropagation() // prevent toggling read status
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  // Filtering and searching logic
  const filteredNotifications = notifications.filter((notification) => {
    const matchesTab = activeTab === 'all' || notification.category === activeTab
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // Count of unread notifications
  const unreadCount = notifications.filter((n) => n.unread).length

  // Category Icon helper
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'shipment':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
        )
      case 'payment':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
        )
      case 'system':
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center shrink-0">
            <Bell className="w-5 h-5" />
          </div>
        )
      case 'promotion':
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center shrink-0">
            <Volume2 className="w-5 h-5" />
          </div>
        )
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
        )
    }
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-700 flex flex-col">
      <main className="flex-grow p-8 max-w-[1400px] mx-auto w-full space-y-8 overflow-y-auto relative">
        
        {/* Top Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              Notifications
              {unreadCount > 0 && (
                <span className="text-[10px] font-extrabold bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {unreadCount} New
                </span>
              )}
            </h1>
            <p className="text-slate-500 text-xs mt-1 font-medium">Manage your shipment alerts and system updates</p>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleMarkAllAsRead}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition duration-150 shadow-sm cursor-pointer"
            >
              <CheckCheck className="w-4 h-4 text-blue-600" />
              Mark all as read
            </button>
            
            <button
              onClick={handleClearAll}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-xs font-bold text-red-650 text-red-650 bg-white hover:bg-red-50/50 transition duration-150 shadow-sm cursor-pointer"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
              Clear All
            </button>
          </div>
        </div>

        {/* Filter and Search Bar row */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 border-b border-slate-200/60 pb-3">
          
          {/* Navigation Filter Tabs */}
          <div className="flex overflow-x-auto gap-6 scrollbar-none">
            {[
              { id: 'all', label: 'All' },
              { id: 'shipment', label: 'Shipment Updates' },
              { id: 'payment', label: 'Payments' },
              { id: 'promotion', label: 'Promotions' },
              { id: 'system', label: 'System Alerts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-xs font-bold tracking-wide border-b-2 transition duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 font-extrabold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right aligned Search Box & Filter slider */}
          <div className="flex items-center gap-3">
            {/* Search inputs */}
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-150 shadow-sm"
              />
            </div>
            
            {/* Slider settings */}
            <button className="flex items-center justify-center p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition shadow-sm cursor-pointer" title="Filters Settings">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Split screen content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 items-start pb-20">
          
          {/* LEFT SIDE: LIST OF NOTIFICATIONS */}
          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => toggleReadStatus(notification.id)}
                  className={`bg-white border rounded-3xl p-5 shadow-sm transition hover:shadow-md cursor-pointer flex gap-4 relative group ${
                    notification.unread
                      ? 'border-l-4 border-l-blue-600 border-slate-100'
                      : 'border-slate-100/70 border-l-4 border-l-slate-200'
                  }`}
                >
                  
                  {/* Category Bullet Icon */}
                  {getCategoryIcon(notification.category)}

                  {/* Body Text Context */}
                  <div className="flex-grow pr-6">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className={`text-xs font-bold ${notification.unread ? 'text-slate-900 font-extrabold' : 'text-slate-700'}`}>
                        {notification.title}
                      </h4>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide shrink-0">
                        {notification.time}
                      </span>
                    </div>
                    
                    <p className={`text-[11px] mt-1.5 leading-relaxed ${notification.unread ? 'text-slate-700 font-semibold' : 'text-slate-500'}`}>
                      {notification.message}
                    </p>
                  </div>

                  {/* Hover Dismiss/Action button */}
                  <button
                    onClick={(e) => handleDismiss(notification.id, e)}
                    title="Dismiss alert"
                    className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition duration-150 p-1 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  {/* Small Unread Blue Dot indicator (top-right side) */}
                  {notification.unread && (
                    <div className="absolute top-5 right-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}

                </div>
              ))
            ) : (
              // Empty State
              <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 border border-slate-100">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">All caught up!</h3>
                  <p className="text-[10px] text-slate-400 font-medium mt-1 leading-normal">You don't have any notifications at the moment.</p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: UTILITY PANELS */}
          <div className="space-y-6">
            
            {/* PANEL 1: OPTIMIZATION TIP */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold text-slate-900 tracking-tight">Optimization Tip</h3>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                Real-time alerts can reduce terminal dwell time by up to 15%. Keep your SMS notifications active for best results.
              </p>

              <button
                onClick={() => alert('Opening SMS settings configuration...')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 transition flex items-center gap-1 cursor-pointer w-fit"
              >
                Configure SMS
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* PANEL 2: PERFORMANCE BADGE */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              
              {/* Warehouse Graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <img
                  src={hubBerlin}
                  alt="Automated Robotics Hub"
                  className="w-full h-32 object-cover brightness-[0.9] saturate-[0.8]"
                />
              </div>

              {/* Statistics Label */}
              <div>
                <p className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest">Performance Badge</p>
                <h4 className="text-sm font-extrabold text-slate-900 mt-2 leading-snug">
                  99% Delivery Accuracy this month
                </h4>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  )
}

export default Notification
