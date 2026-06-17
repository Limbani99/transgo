import React, { useState } from 'react'
import { 
  Users, 
  FileCheck2, 
  UserPlus, 
  DollarSign, 
  Search, 
  SlidersHorizontal, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Mail,
  Phone
} from 'lucide-react'
import toast from 'react-hot-toast'

const allCustomers = [
  {
    id: '1',
    company: 'Global Traders Inc.',
    type: 'B2B Enterprise',
    industry: 'Retail & Manufacturing',
    contact: 'Michael Chen',
    email: 'm.chen@globaltraders.com',
    phone: '+1 (555) 123-4567',
    activeShipments: 12,
    billing: '$150,240.00',
    status: 'Active',
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    id: '2',
    company: 'Apex Manufacturing',
    type: 'Industrial B2B',
    industry: 'Heavy Machinery',
    contact: 'Jane Doe',
    email: 'j.doe@apex.com',
    phone: '+1 (555) 987-6543',
    activeShipments: 8,
    billing: '$95,120.50',
    status: 'Active',
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    id: '3',
    company: 'Nexus Retail Group',
    type: 'Retail Supply',
    industry: 'Consumer Goods',
    contact: 'Sarah Smith',
    email: 's.smith@nexus.com',
    phone: '+1 (555) 234-5678',
    activeShipments: 15,
    billing: '$112,450.00',
    status: 'Active',
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    id: '4',
    company: 'Zenith Logistical',
    type: 'Carrier Partner',
    industry: 'Freight Forwarding',
    contact: 'Robert Fox',
    email: 'r.fox@zenith.com',
    phone: '+1 (555) 876-5432',
    activeShipments: 0,
    billing: '$55,000.00',
    status: 'Inactive',
    statusBg: 'bg-slate-100 text-slate-500 border-slate-200'
  }
]

function Customers() {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('All Types')

  const handleAddCustomer = () => {
    toast.success('Onboarding customer form coming soon!')
  }

  const handleAction = (companyName) => {
    toast.success(`Action options for ${companyName}`)
  }

  const filteredCustomers = allCustomers.filter(customer => {
    const matchesSearch = customer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          customer.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (typeFilter === 'All Types') return matchesSearch
    return matchesSearch && customer.type === typeFilter
  })

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Customer Directory
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Manage your client database and track enterprise partner relationships.
          </p>
        </div>
        
        <button 
          onClick={handleAddCustomer}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Customer
        </button>
      </div>

      {/* Grid of 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Customers */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <Users className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Total Customers</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">142</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Active enterprise partners</p>
          </div>
        </div>

        {/* Card 2: Active Contracts */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <FileCheck2 className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Active Contracts</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">84</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">SLA fulfilled accounts</p>
          </div>
        </div>

        {/* Card 3: New This Month */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-50 text-green-600">
              <UserPlus className="w-4.5 h-4.5" />
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-green-50 text-green-600">
              +15%
            </span>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">New This Month</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">18</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Onboarded since Jun 1</p>
          </div>
        </div>

        {/* Card 4: Total Billing */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <DollarSign className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">YTD Billing</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">$412.5k</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Cleared invoice revenue</p>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
        
        {/* Left Filter Option dropdown */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-48">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-655 font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 cursor-pointer"
            >
              <option value="All Types">All Account Types</option>
              <option value="B2B Enterprise">B2B Enterprise</option>
              <option value="Industrial B2B">Industrial B2B</option>
              <option value="Retail Supply">Retail Supply</option>
              <option value="Carrier Partner">Carrier Partner</option>
            </select>
          </div>
        </div>

        {/* Right Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150"
          />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/20">
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest w-64">Customer</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Type / Industry</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Contact Details</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Active Shipments</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Total Billing</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-50/30 transition text-slate-700">
                    {/* Customer */}
                    <td className="py-5 px-6 font-bold text-slate-900 text-sm">
                      {customer.company}
                    </td>
                    
                    {/* Type / Industry */}
                    <td className="py-5 px-6">
                      <p className="font-bold text-slate-800">{customer.type}</p>
                      <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-0.5">{customer.industry}</p>
                    </td>
                    
                    {/* Contact Details */}
                    <td className="py-5 px-6">
                      <p className="font-bold text-slate-800">{customer.contact}</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-1 flex flex-col gap-0.5">
                        <span className="flex items-center gap-1"><Mail size={12} /> {customer.email}</span>
                        <span className="flex items-center gap-1 mt-0.5"><Phone size={12} /> {customer.phone}</span>
                      </p>
                    </td>
                    
                    {/* Active Shipments */}
                    <td className="py-5 px-6 font-bold text-slate-800">
                      {customer.activeShipments > 0 ? (
                        <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-bold">
                          {customer.activeShipments} Active
                        </span>
                      ) : (
                        <span className="text-slate-400 font-semibold italic">None</span>
                      )}
                    </td>

                    {/* Total Billing */}
                    <td className="py-5 px-6 font-extrabold text-slate-900">
                      {customer.billing}
                    </td>
                    
                    {/* Actions */}
                    <td className="py-5 px-6 text-right">
                      <button 
                        onClick={() => handleAction(customer.company)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition cursor-pointer"
                      >
                        <MoreVertical className="w-4.5 h-4.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-slate-450 font-semibold text-sm">
                    No customers found matching search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/10">
          <span>
            Showing 1 to {filteredCustomers.length} of {allCustomers.length} entries
          </span>
          
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold transition cursor-pointer">
              1
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Customers
