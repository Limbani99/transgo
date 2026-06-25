import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Calendar,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Package,
  MapPin,
  User,
  Phone,
  Clock,
  AlertCircle,
  Clipboard
} from 'lucide-react'
import { useData } from '../context/DataProvider'

// Status Badge Config Mapping
const getStatusConfig = (status) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return { label: 'PENDING', bg: 'bg-amber-50 text-amber-600 border border-amber-200/50' };
    case 'accepted':
      return { label: 'ACCEPTED', bg: 'bg-blue-50 text-blue-600 border border-blue-200/50' };
    case 'picked_up':
      return { label: 'PICKED UP', bg: 'bg-teal-50 text-teal-600 border border-teal-200/50' };
    case 'in_transit':
      return { label: 'IN TRANSIT', bg: 'bg-purple-50 text-purple-600 border border-purple-200/50' };
    case 'delivered':
      return { label: 'DELIVERED', bg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/50' };
    case 'cancelled':
      return { label: 'CANCELLED', bg: 'bg-rose-50 text-rose-600 border border-rose-200/50' };
    default:
      return { label: status?.toUpperCase() || 'UNKNOWN', bg: 'bg-slate-50 text-slate-500 border border-slate-200/50' };
  }
};

// Date Formatter Helper
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (error) {
    return 'N/A';
  }
};

function Bookings() {
  const { getAllshipment, allshipment } = useData()
  
  useEffect(() => {
    getAllshipment();
  }, []);

  const [activeTab, setActiveTab] = useState('All Requests')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedRows, setExpandedRows] = useState({})

  const tabs = ['All Requests', 'Pending', 'Accepted', 'Picked Up', 'In Transit', 'Delivered', 'Cancelled']

  // Safely resolve shipments list from context state
  const shipments = Array.isArray(allshipment)
    ? allshipment
    : (allshipment && Array.isArray(allshipment.data) ? allshipment.data : []);

  // Filter requests by search query and active tab status
  const filteredRequests = shipments.filter(req => {
    // 1. Search Query check
    const idString = req._id ? String(req._id).toLowerCase() : '';
    const productName = req.productInformation?.productName ? String(req.productInformation.productName).toLowerCase() : '';
    const category = req.productInformation?.productCategory ? String(req.productInformation.productCategory).toLowerCase() : '';
    const pickupPerson = req.pickupInformation?.personName ? String(req.pickupInformation.personName).toLowerCase() : '';
    const deliveryPerson = req.deliveryInformation?.personName ? String(req.deliveryInformation.personName).toLowerCase() : '';
    const pickupAddress = req.pickupInformation?.address ? String(req.pickupInformation.address).toLowerCase() : '';
    const deliveryAddress = req.deliveryInformation?.address ? String(req.deliveryInformation.address).toLowerCase() : '';
    
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      idString.includes(query) ||
      productName.includes(query) ||
      category.includes(query) ||
      pickupPerson.includes(query) ||
      deliveryPerson.includes(query) ||
      pickupAddress.includes(query) ||
      deliveryAddress.includes(query);

    // 2. Tab Filter check
    if (activeTab === 'All Requests') return matchesSearch;

    const statusMap = {
      'Pending': 'pending',
      'Accepted': 'accepted',
      'Picked Up': 'picked_up',
      'In Transit': 'in_transit',
      'Delivered': 'delivered',
      'Cancelled': 'cancelled'
    };

    const targetStatus = statusMap[activeTab];
    return matchesSearch && req.status?.toLowerCase() === targetStatus;
  });

  // Toggle expansion of a row
  const toggleRow = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Copy ID helper
  const copyToClipboard = (text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    alert('Copied Shipment ID to clipboard!');
  };

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Shipment Bookings
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Manage and track all shipments, customer requests, and route details.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer">
          <Plus className="w-4 h-4" />
          New Booking
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Shipments</span>
            <div className="text-2xl font-black text-slate-800">{shipments.length}</div>
          </div>
          <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
            <Package className="w-6 h-6" />
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Bookings</span>
            <div className="text-2xl font-black text-amber-600">
              {shipments.filter(s => s.status?.toLowerCase() === 'pending').length}
            </div>
          </div>
          <div className="p-3 bg-amber-50 text-amber-500 rounded-2xl">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        {/* In Transit */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">In Transit</span>
            <div className="text-2xl font-black text-purple-600">
              {shipments.filter(s => ['picked_up', 'in_transit'].includes(s.status?.toLowerCase())).length}
            </div>
          </div>
          <div className="p-3 bg-purple-50 text-purple-500 rounded-2xl">
            <MapPin className="w-6 h-6" />
          </div>
        </div>

        {/* Delivered */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Delivered</span>
            <div className="text-2xl font-black text-emerald-600">
              {shipments.filter(s => s.status?.toLowerCase() === 'delivered').length}
            </div>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl">
            <Package className="w-6 h-6 text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search */}
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-grow max-w-2xl">
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search ID, Product, Contact, Address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200/60 pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
            />
          </div>

          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/60 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-650 hover:bg-slate-100 transition duration-150 cursor-pointer">
            <Calendar className="w-4 h-4 text-slate-400" />
            Live Shipment Feed
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-start lg:justify-end gap-2 overflow-x-auto py-1 max-w-full">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition duration-150 cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-blue-50 text-blue-600 border border-blue-200/50'
                  : 'bg-white hover:bg-slate-50 text-slate-500 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/20">
                <th className="py-4 px-4 w-12 text-center"></th>
                <th className="py-4 px-4 font-bold text-[10px] tracking-widest w-32">Shipment ID</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Product</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest pl-12">Route (Pickup & Delivery)</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Weight & Qty</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Date</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Status</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => {
                  const statusConfig = getStatusConfig(req.status);
                  const isExpanded = !!expandedRows[req._id];
                  const displayId = req._id ? `#${req._id.substring(req._id.length - 8).toUpperCase()}` : '#UNKNOWN';
                  
                  return (
                    <React.Fragment key={req._id}>
                      <tr 
                        className={`hover:bg-slate-50/30 transition cursor-pointer ${isExpanded ? 'bg-slate-50/20' : ''}`}
                        onClick={() => toggleRow(req._id)}
                      >
                        {/* Toggle Expand Arrow */}
                        <td className="py-6 px-4 text-center">
                          <button className="text-slate-400 hover:text-slate-650 transition">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>

                        {/* Shipment ID */}
                        <td className="py-6 px-4 font-bold text-blue-600 hover:underline" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-1.5 group">
                            <Link to={`/bookings/${req._id}`}>{displayId}</Link>
                            <button 
                              onClick={(e) => copyToClipboard(req._id, e)}
                              title="Copy Full ID"
                              className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 transition"
                            >
                              <Clipboard className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>

                        {/* Product */}
                        <td className="py-6 px-6 font-bold text-slate-800">
                          <div className="flex flex-col">
                            <span className="text-slate-800 font-bold">{req.productInformation?.productName || 'N/A'}</span>
                            <span className="text-[10px] uppercase text-slate-400 font-semibold mt-0.5">
                              {req.productInformation?.productCategory || 'N/A'}
                            </span>
                          </div>
                        </td>

                        {/* Route (Pickup to Delivery) */}
                        <td className="py-6 px-6 pl-12">
                          <div className="flex flex-col relative pl-6">
                            {/* Connecting dashed line */}
                            <div className="absolute left-1.5 top-1.5 bottom-1.5 w-0.5 border-l-2 border-dashed border-slate-200"></div>

                            {/* Pickup Address */}
                            <div className="flex items-center gap-2 relative">
                              <span className="absolute -left-[22.5px] w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-white"></span>
                              <span className="font-semibold text-slate-700 truncate max-w-[220px]" title={req.pickupInformation?.address}>
                                {req.pickupInformation?.address || 'N/A'}
                              </span>
                            </div>

                            {/* Delivery Address */}
                            <div className="flex items-center gap-2 relative mt-3">
                              <span className="absolute -left-[22.5px] w-2 h-2 rounded-full bg-red-500 ring-4 ring-white"></span>
                              <span className="font-semibold text-slate-700 truncate max-w-[220px]" title={req.deliveryInformation?.address}>
                                {req.deliveryInformation?.address || 'N/A'}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Weight & Qty */}
                        <td className="py-6 px-6 font-bold text-slate-650">
                          <div className="flex flex-col">
                            <span>{req.productInformation?.productWeight} kg</span>
                            <span className="text-[10px] text-slate-400 font-normal">Qty: {req.productInformation?.quantity}</span>
                          </div>
                        </td>

                        {/* Date */}
                        <td className="py-6 px-6 font-medium text-slate-500">
                          {formatDate(req.createdAt)}
                        </td>

                        {/* Status Badge */}
                        <td className="py-6 px-6">
                          <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider ${statusConfig.bg}`}>
                            {statusConfig.label}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-6 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex justify-end items-center gap-2">
                            <Link 
                              to={`/bookings/${req._id}`} 
                              className="inline-flex items-center justify-center rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 border border-blue-100 hover:bg-blue-100 transition duration-150 cursor-pointer"
                            >
                              View Details
                            </Link>
                            <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer">
                              <MoreVertical className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Expandable Details Container */}
                      {isExpanded && (
                        <tr className="bg-slate-50/40">
                          <td colSpan="8" className="px-8 py-6 border-b border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-650">
                              {/* Card 1: Product Specifications */}
                              <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-sm flex flex-col space-y-3">
                                <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-2">
                                  <Package className="w-4 h-4 text-blue-500" />
                                  <span>Product Specifications</span>
                                </div>
                                <div className="grid grid-cols-2 gap-y-2">
                                  <div className="font-semibold text-slate-400">Name</div>
                                  <div className="font-bold text-slate-700">{req.productInformation?.productName}</div>
                                  
                                  <div className="font-semibold text-slate-400">Category</div>
                                  <div>
                                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold uppercase text-[9px]">
                                      {req.productInformation?.productCategory}
                                    </span>
                                  </div>
                                  
                                  <div className="font-semibold text-slate-400">Weight</div>
                                  <div className="font-bold text-slate-700">{req.productInformation?.productWeight} kg</div>
                                  
                                  <div className="font-semibold text-slate-400">Quantity</div>
                                  <div className="font-bold text-slate-700">{req.productInformation?.quantity} unit(s)</div>
                                </div>
                                {req.productInformation?.productDescription && (
                                  <div className="mt-2 pt-2 border-t border-slate-100">
                                    <div className="font-semibold text-slate-400 mb-1">Description:</div>
                                    <p className="text-slate-600 italic bg-slate-50 p-2 rounded-lg border border-slate-100/50">
                                      "{req.productInformation.productDescription}"
                                    </p>
                                  </div>
                                )}
                              </div>

                              {/* Card 2: Pickup Information */}
                              <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-sm flex flex-col space-y-3">
                                <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-2">
                                  <MapPin className="w-4 h-4 text-emerald-500" />
                                  <span>Pickup Details</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                  <div className="flex items-center gap-2">
                                    <User className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="font-bold text-slate-700">{req.pickupInformation?.personName}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="font-semibold text-slate-600">{req.pickupInformation?.phone}</span>
                                  </div>
                                  <div className="mt-2 pt-2 border-t border-slate-100">
                                    <div className="font-semibold text-slate-400 mb-1">Pickup Address:</div>
                                    <p className="text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100/50 leading-relaxed">
                                      {req.pickupInformation?.address}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Card 3: Delivery Information */}
                              <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-sm flex flex-col space-y-3">
                                <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-2">
                                  <MapPin className="w-4 h-4 text-red-500" />
                                  <span>Delivery Details</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                  <div className="flex items-center gap-2">
                                    <User className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="font-bold text-slate-700">{req.deliveryInformation?.personName}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="font-semibold text-slate-600">{req.deliveryInformation?.phone}</span>
                                  </div>
                                  <div className="mt-2 pt-2 border-t border-slate-100">
                                    <div className="font-semibold text-slate-400 mb-1">Delivery Address:</div>
                                    <p className="text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100/50 leading-relaxed">
                                      {req.deliveryInformation?.address}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="py-12 text-center text-slate-450 font-semibold text-sm">
                    <div className="flex flex-col items-center justify-center space-y-2 text-slate-400">
                      <AlertCircle className="w-8 h-8 text-slate-350" />
                      <span>No requests found matching active filters.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/10">
          <span>
            Showing 1 to {filteredRequests.length} of {shipments.length} results
          </span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
