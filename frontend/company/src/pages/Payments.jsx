import React, { useState } from 'react'
import { 
  FileText, 
  Wallet, 
  Hourglass, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Search, 
  Eye, 
  Download,
  ChevronDown
} from 'lucide-react'
import toast from 'react-hot-toast'

const allPayments = [
  {
    id: '#INV-8821',
    customer: 'Global Traders Inc.',
    amount: '$2,450.00',
    amountRaw: 2450.00,
    date: 'Oct 24, 2023',
    status: 'Paid',
    statusBg: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    id: '#INV-8822',
    customer: 'Acme Corp.',
    amount: '$1,200.00',
    amountRaw: 1200.00,
    date: 'Oct 25, 2023',
    status: 'Pending',
    statusBg: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    id: '#INV-8823',
    customer: 'Logistics Solutions',
    amount: '$4,500.00',
    amountRaw: 4500.00,
    date: 'Oct 26, 2023',
    status: 'Failed',
    statusBg: 'bg-red-50 text-red-650 border-red-100'
  }
]

function Payments() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Statuses')

  const handleDownload = (invoiceId) => {
    toast.success(`Downloading invoice ${invoiceId}...`)
  }

  const handleView = (invoiceId) => {
    toast.success(`Opening preview for invoice ${invoiceId}...`)
  }

  const filteredPayments = allPayments.filter(payment => {
    const matchesSearch = payment.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          payment.customer.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (statusFilter === 'All Statuses') return matchesSearch
    return matchesSearch && payment.status === statusFilter
  })

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Payment Management
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Overview of your financial transactions and invoices.
          </p>
        </div>
        
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-750 transition duration-150 cursor-pointer">
          <FileText className="w-4 h-4" />
          Generate Invoice
        </button>
      </div>

      {/* Grid of 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Revenue */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
              <Wallet className="w-4.5 h-4.5" />
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-green-50 text-green-600">
              +12%
            </span>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Total Revenue</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">$128,450.00</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">vs last month</p>
          </div>
        </div>

        {/* Card 2: Pending Payments */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-amber-50 text-amber-600">
              <Hourglass className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Pending Payments</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">$12,320.50</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">15 invoices awaiting payment</p>
          </div>
        </div>

        {/* Card 3: Successful Payments */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-50 text-green-600">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Successful Payments</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">$115,129.50</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Cleared this month</p>
          </div>
        </div>

        {/* Card 4: Failed Transactions */}
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-red-50 text-red-650">
              <AlertCircle className="w-4.5 h-4.5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Failed Transactions</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">4</p>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Totaling $1,000.00</p>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
        
        {/* Left Inputs: Calendar and Status Select */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Calendar Picker */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-655 hover:bg-slate-100 transition duration-150 cursor-pointer">
            <Calendar className="w-4 h-4 text-slate-400" />
            Oct 01 - Oct 31, 2023
          </button>

          {/* Status Dropdown */}
          <div className="relative w-full sm:w-44">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs text-slate-655 font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition duration-150 cursor-pointer appearance-none"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Right Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search ID or Customer..."
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
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest w-36">Invoice ID</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Customer</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Amount</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Date</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest">Status</th>
                <th className="py-4 px-6 font-bold text-[10px] tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-slate-50/30 transition font-medium text-slate-700">
                    {/* Invoice ID */}
                    <td className="py-5 px-6 font-bold text-blue-600 hover:underline cursor-pointer">
                      {payment.id}
                    </td>
                    
                    {/* Customer */}
                    <td className="py-5 px-6 font-bold text-slate-800">
                      {payment.customer}
                    </td>
                    
                    {/* Amount */}
                    <td className="py-5 px-6 font-bold text-slate-900">
                      {payment.amount}
                    </td>
                    
                    {/* Date */}
                    <td className="py-5 px-6 text-slate-500">
                      {payment.date}
                    </td>
                    
                    {/* Status Badge */}
                    <td className="py-5 px-6">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider ${payment.statusBg}`}>
                        ● {payment.status}
                      </span>
                    </td>
                    
                    {/* Actions */}
                    <td className="py-5 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleView(payment.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-800 transition cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="w-4.5 h-4.5" />
                        </button>
                        <button 
                          onClick={() => handleDownload(payment.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-800 transition cursor-pointer"
                          title="Download Invoice"
                        >
                          <Download className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-slate-450 font-semibold text-sm">
                    No transactions found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/10">
          <span>
            Showing 1 to {filteredPayments.length} of 15 entries
          </span>
          
          <div className="flex items-center gap-1">
            <button className="px-3.5 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" disabled>
              Prev
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold transition cursor-pointer">
              1
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 hover:bg-slate-50 transition font-bold cursor-pointer">
              2
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-slate-700 font-bold cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Payments
