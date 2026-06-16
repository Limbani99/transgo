import React, { useState } from 'react'
import {
  Search,
  Truck,
  CreditCard,
  Calendar,
  Shield,
  Settings,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  Upload,
  CheckCircle2,
  FileText,
  AlertCircle
} from 'lucide-react'
import shipmentMap from '../../assets/shipment_map.png'

const initialFaqs = [
  {
    id: 1,
    question: 'How do I track my shipment?',
    answer: 'Simply enter your Tracking ID in the dashboard search bar. For enterprise clients, real-time GPS telemetry is available in the "Fleet" tab for active shipments.',
    expanded: true,
  },
  {
    id: 2,
    question: 'How can I cancel a booking?',
    answer: 'You can cancel any shipment booking from your transporter/bookings panel within 24 hours of creation. Navigate to "My Shipments", select the booking, and click "Cancel Booking".',
    expanded: false,
  },
  {
    id: 3,
    question: 'How do refunds work?',
    answer: 'Refunds for cancelled bookings are credited back to your payment card or wallet within 3-5 business days. Receipts will be sent to your billing email.',
    expanded: false,
  },
  {
    id: 4,
    question: 'How can I contact my driver?',
    answer: 'Navigate to the "Tracking" page for your active shipment. Under the driver details section, click "Message Driver" to chat live or "Call" to trigger a phone dialer link.',
    expanded: false,
  },
  {
    id: 5,
    question: 'How do I download invoices?',
    answer: 'Invoice PDFs are automatically emailed to you upon successful payment. You can also view and download invoices from the payments log on your payments panel.',
    expanded: false,
  },
]

const initialTickets = [
  {
    id: 'TK-2094',
    subject: 'Invoice mismatch for Booking TR-5512',
    date: 'Oct 24, 2023',
    status: 'In Progress',
    statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
    type: 'open',
  },
  {
    id: 'TK-2088',
    subject: "API Webhook not firing on 'Delivered'",
    date: 'Oct 22, 2023',
    status: 'Action Required',
    statusColor: 'bg-rose-50 text-rose-600 border-rose-100',
    type: 'open',
  },
  {
    id: 'TK-1942',
    subject: 'Damage report for fragile cargo',
    date: 'Oct 15, 2023',
    status: 'Resolved',
    statusColor: 'bg-slate-50 text-slate-500 border-slate-100',
    type: 'resolved',
  },
]

function Support() {
  const [faqs, setFaqs] = useState(initialFaqs)
  const [tickets, setTickets] = useState(initialTickets)
  const [ticketFilter, setTicketFilter] = useState('open') // 'open' or 'resolved'
  
  // Complaint Form State
  const [complaintCategory, setComplaintCategory] = useState('')
  const [bookingId, setBookingId] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [uploadName, setUploadName] = useState('')

  // Search input state
  const [searchQuery, setSearchQuery] = useState('')

  // Toggle FAQ Accordion
  const toggleFaq = (id) => {
    setFaqs((prev) =>
      prev.map((faq) => (faq.id === id ? { ...faq, expanded: !faq.expanded } : faq))
    )
  }

  // Pre-select category from Browse Category cards
  const selectCategory = (category) => {
    setComplaintCategory(category)
    // Scroll smoothly to form
    const formElement = document.getElementById('complaint-form-card')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!complaintCategory || !subject || !description) {
      alert('Please fill out all required fields.')
      return
    }

    const newTicket = {
      id: `TK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: subject,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'In Progress',
      statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
      type: 'open',
    }

    setTickets((prev) => [newTicket, ...prev])
    setComplaintCategory('')
    setBookingId('')
    setSubject('')
    setDescription('')
    setUploadName('')
    alert('Support ticket logged successfully! You can track it in the Ticket History section.')
  }

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadName(e.target.files[0].name)
    }
  }

  // Dynamic counts
  const openCount = tickets.filter((t) => t.type === 'open').length
  const resolvedCount = tickets.filter((t) => t.type === 'resolved').length

  // Filtered tickets
  const filteredTickets = tickets.filter((t) => t.type === ticketFilter)

  // Filtered FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-700 flex flex-col">
      <main className="flex-grow p-8 max-w-[1400px] mx-auto w-full space-y-8 overflow-y-auto relative">
        
        {/* 1. TOP HELP BANNER */}
        <div className="relative rounded-[2rem] overflow-hidden py-14 px-8 text-center bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white border border-blue-950/20 shadow-md">
          {/* Overlay Map background */}
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none select-none"
            style={{ backgroundImage: `url(${shipmentMap})` }}
          ></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl text-white">How can we help you today?</h2>
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, FAQs, and support topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-slate-800 placeholder-slate-400 text-xs focus:outline-none shadow-xl focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>
        </div>

        {/* 2. CATEGORIES AND CONTACT EXPERT SEGMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          
          {/* BROWSE CATEGORIES */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 tracking-tight">
              <span className="w-1.5 h-3 bg-blue-600 rounded"></span>
              Browse Categories
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Category 1 */}
              <div
                onClick={() => selectCategory('tracking')}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm transition duration-150 cursor-pointer flex flex-col gap-4 text-left hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">Shipment Tracking</h4>
                  <p className="text-[10px] text-slate-405 text-slate-400 mt-1.5 leading-normal">
                    Real-time status updates and transit delay inquiries.
                  </p>
                </div>
              </div>

              {/* Category 2 */}
              <div
                onClick={() => selectCategory('billing')}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm transition duration-150 cursor-pointer flex flex-col gap-4 text-left hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">Payment & Billing</h4>
                  <p className="text-[10px] text-slate-405 text-slate-400 mt-1.5 leading-normal">
                    Invoice history, payment methods, and refund status.
                  </p>
                </div>
              </div>

              {/* Category 3 */}
              <div
                onClick={() => selectCategory('booking')}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm transition duration-150 cursor-pointer flex flex-col gap-4 text-left hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">Booking Management</h4>
                  <p className="text-[10px] text-slate-405 text-slate-400 mt-1.5 leading-normal">
                    Modify schedules, cancellations, and route changes.
                  </p>
                </div>
              </div>

              {/* Category 4 */}
              <div
                onClick={() => selectCategory('account')}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm transition duration-150 cursor-pointer flex flex-col gap-4 text-left hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">Account & Security</h4>
                  <p className="text-[10px] text-slate-405 text-slate-400 mt-1.5 leading-normal">
                    Login issues, MFA setup, and permission settings.
                  </p>
                </div>
              </div>

              {/* Category 5 */}
              <div
                onClick={() => selectCategory('technical')}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm transition duration-150 cursor-pointer flex flex-col gap-4 text-left hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">Technical Support</h4>
                  <p className="text-[10px] text-slate-405 text-slate-400 mt-1.5 leading-normal">
                    API integrations, platform errors, and SDK help.
                  </p>
                </div>
              </div>

              {/* Category 6 */}
              <div
                onClick={() => selectCategory('feedback')}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm transition duration-150 cursor-pointer flex flex-col gap-4 text-left hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">Complaints & Feedback</h4>
                  <p className="text-[10px] text-slate-405 text-slate-400 mt-1.5 leading-normal">
                    Submit service reviews or formal disputes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT EXPERT PANEL */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 tracking-tight">
              <span className="w-1.5 h-3 bg-blue-600 rounded"></span>
              Contact Expert
            </h3>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-5">
              <div className="space-y-4 border-b border-slate-50 pb-4">
                {/* Email Support */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-slate-450" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Email Support</p>
                    <p className="text-xs font-semibold text-slate-800 mt-1">support@transgo-logistics.com</p>
                  </div>
                </div>

                {/* Phone Support */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-slate-450" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Phone Support</p>
                    <p className="text-xs font-semibold text-slate-800 mt-1">+1 (800) TRANS-GO</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-slate-450" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Business Hours</p>
                    <p className="text-xs font-semibold text-slate-800 mt-1 leading-relaxed">
                      Mon-Fri: 08:00 - 20:00 EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact actions buttons */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => alert('Launching Live Chat frame...')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow shadow-blue-200 transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Start Live Chat
                </button>
                <button
                  onClick={() => selectCategory('general')}
                  className="w-full py-3 bg-white border border-blue-900 text-blue-900 hover:bg-blue-50/40 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Create Support Ticket
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3. ACCORDION FAQS & RAISE A COMPLAINT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* ACCORDION POPULAR QUESTIONS */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 tracking-tight">
              <span className="w-1.5 h-3 bg-blue-600 rounded"></span>
              Popular Questions
            </h3>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm divide-y divide-slate-100">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <div key={faq.id} className="py-4.5 py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center text-xs font-bold text-slate-900 text-left hover:text-blue-600 transition cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {faq.expanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {faq.expanded && (
                      <p className="text-[11px] text-slate-500 mt-2.5 leading-relaxed font-semibold">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div className="py-6 text-center text-slate-400 text-xs">No matching FAQs found.</div>
              )}
            </div>
          </div>

          {/* RAISE A COMPLAINT FORM */}
          <div className="space-y-4" id="complaint-form-card">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 tracking-tight">
              <span className="w-1.5 h-3 bg-blue-600 rounded"></span>
              Raise a Complaint
            </h3>

            <form
              onSubmit={handleFormSubmit}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4.5 gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Category</label>
                  <div className="relative">
                    <select
                      value={complaintCategory}
                      onChange={(e) => setComplaintCategory(e.target.value)}
                      required
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white appearance-none cursor-pointer font-semibold"
                    >
                      <option value="" disabled>Select Category</option>
                      <option value="tracking">Shipment Tracking</option>
                      <option value="billing">Payment & Billing</option>
                      <option value="booking">Booking Management</option>
                      <option value="account">Account & Security</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Complaints & Feedback</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Booking ID */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Booking ID</label>
                  <input
                    type="text"
                    placeholder="e.g. TR-98442"
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Brief summary of the issue"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Description</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detailed explanation..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              {/* Upload input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Attachments</label>
                <label className="border border-dashed border-slate-200 rounded-2xl py-5 px-4 flex flex-col items-center justify-center gap-2 cursor-pointer bg-slate-50/30 hover:bg-slate-50 hover:border-slate-300 transition duration-150">
                  <input type="file" className="hidden" onChange={handleFileUpload} />
                  <Upload className="w-5 h-5 text-blue-600" />
                  <span className="text-[10px] font-bold text-slate-800 text-center">
                    {uploadName ? `Uploaded: ${uploadName}` : 'Upload Attachments'}
                  </span>
                  <span className="text-[8.5px] text-slate-400 font-semibold text-center">
                    Max file size 10MB. Formats: JPG, PNG, PDF
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-200 font-bold text-xs tracking-wide transition duration-150 active:scale-[0.98] cursor-pointer"
              >
                Submit Support Case
              </button>
            </form>
          </div>

        </div>

        {/* 4. BOTTOM TICKET HISTORY LOG TABLE */}
        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-50 pb-4">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-3 bg-blue-600 rounded"></span>
              Ticket History
            </h3>

            {/* Filter buttons */}
            <div className="flex bg-slate-100 p-1 rounded-xl gap-1 text-[9px] font-bold text-slate-500">
              <button
                onClick={() => setTicketFilter('open')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  ticketFilter === 'open'
                    ? 'bg-blue-600 text-white font-extrabold shadow-sm'
                    : 'hover:text-slate-800'
                }`}
              >
                Open Tickets ({openCount})
              </button>
              <button
                onClick={() => setTicketFilter('resolved')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  ticketFilter === 'resolved'
                    ? 'bg-blue-600 text-white font-extrabold shadow-sm'
                    : 'hover:text-slate-800'
                }`}
              >
                Resolved ({resolvedCount})
              </button>
            </div>
          </div>

          {/* Ticket Table */}
          <div className="overflow-x-auto">
            {filteredTickets.length > 0 ? (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 font-semibold text-[9px] tracking-widest w-[12%]">Ticket ID</th>
                    <th className="pb-3 font-semibold text-[9px] tracking-widest w-[45%]">Subject</th>
                    <th className="pb-3 font-semibold text-[9px] tracking-widest w-[15%]">Date</th>
                    <th className="pb-3 font-semibold text-[9px] tracking-widest w-[15%]">Status</th>
                    <th className="pb-3 font-semibold text-[9px] tracking-widest w-[13%]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredTickets.map((t) => (
                    <tr key={t.id} className="hover:bg-slate-50/20 transition">
                      <td className="py-4 font-bold text-slate-900">{t.id}</td>
                      <td className="py-4 font-bold text-slate-800">{t.subject}</td>
                      <td className="py-4 font-semibold text-slate-400 font-sans">{t.date}</td>
                      <td className="py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border ${
                          t.status === 'Resolved'
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : t.status === 'Action Required'
                            ? 'bg-rose-50 text-rose-600 border-rose-100'
                            : 'bg-blue-50 text-blue-600 border-blue-100'
                        }`}>
                          {t.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => {
                            if (t.status === 'Resolved') {
                              alert(`Reopening ticket ${t.id}...`)
                              setTickets(prev => prev.map(item => item.id === t.id ? { ...item, status: 'In Progress', type: 'open' } : item))
                            } else {
                              alert(`Displaying details modal for ticket ${t.id}...`)
                            }
                          }}
                          className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                          {t.status === 'Resolved' ? 'Reopen' : 'View Details'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-8 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                <AlertCircle className="w-8 h-8 text-slate-300" />
                <p className="text-[10px] font-bold">No tickets found in this section.</p>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  )
}

export default Support
