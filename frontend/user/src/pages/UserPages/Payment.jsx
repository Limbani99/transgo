import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CreditCard,
  Building2,
  Lock,
  CheckCircle2,
  ChevronDown,
  Info,
  MapPin,
  Calendar,
  Package,
  Briefcase,
  Shield,
  ShieldCheck,
  Check,
  QrCode,
  ArrowRight
} from 'lucide-react'
import shipmentMap from '../../assets/shipment_map.png'

function Payment() {
  const navigate = useNavigate()
  
  // Interactive payment method state
  const [paymentMethod, setPaymentMethod] = useState('card') // 'card', 'upi', 'banking'
  
  // Credit card details state
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  
  // UPI details state
  const [selectedWallet, setSelectedWallet] = useState('gpay') // 'gpay', 'phonepe', 'paytm'
  const [upiId, setUpiId] = useState('')
  const [isUpiVerified, setIsUpiVerified] = useState(false)
  const [isVerifyingUpi, setIsVerifyingUpi] = useState(false)
  
  // Net banking details state
  const [selectedBank, setSelectedBank] = useState('')

  // Checkout submission states
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Verify UPI handler
  const handleVerifyUpi = (e) => {
    e.preventDefault()
    if (!upiId) return
    setIsVerifyingUpi(true)
    setTimeout(() => {
      setIsVerifyingUpi(false)
      setIsUpiVerified(true)
    }, 1200)
  }

  // Pay Now submit handler
  const handlePayNow = (e) => {
    e.preventDefault()
    
    // Simple verification check
    if (paymentMethod === 'card' && (!cardNumber || !cardName || !cardExpiry || !cardCvv)) {
      alert('Please fill out all card details.')
      return
    }
    if (paymentMethod === 'upi' && !isUpiVerified) {
      alert('Please verify your UPI ID first.')
      return
    }
    if (paymentMethod === 'banking' && !selectedBank) {
      alert('Please select a bank.')
      return
    }

    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccessModal(true)
    }, 2000)
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-700 flex flex-col relative">
      
      {/* 1. MAIN SCROLLABLE CONTENT */}
      <main className="flex-grow p-8 max-w-[1400px] mx-auto w-full space-y-8 relative">
        
        {/* Page Header Titles */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Order Summary</h1>
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight hidden md:block">Secure Payment</h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-bold shadow-sm">
              <Lock className="w-3.5 h-3.5" />
              Encrypted Checkout
            </span>
          </div>
        </div>

        {/* Core Checkout Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start pb-20">
          
          {/* LEFT COLUMN: ORDER SUMMARY */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-6">
              
              {/* Card Header Booking ID */}
              <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Booking ID</p>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">#TG-94201</h3>
                </div>
                <span className="px-3.5 py-1 text-[10px] font-extrabold bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-wide">
                  Awaiting Payment
                </span>
              </div>

              {/* Order Detail Checklist */}
              <div className="space-y-5">
                
                {/* 1. Transporter Company */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-none">Selected Company</p>
                    <p className="text-xs font-bold text-slate-800 mt-1.5 leading-none">Global Swift Freight</p>
                  </div>
                </div>

                {/* 2. Cargo details */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <Package className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-none">Shipment Details</p>
                    <p className="text-xs font-bold text-slate-800 mt-1.5 leading-none">Electronics - 450kg</p>
                  </div>
                </div>

                {/* 3. Address details */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-none">Delivery Address</p>
                    <p className="text-xs font-bold text-slate-800 mt-1.5 leading-normal">450 Main St, New York, NY 10001</p>
                  </div>
                </div>

                {/* 4. Estimated Date */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-none">Estimated Delivery</p>
                    <p className="text-xs font-bold text-slate-800 mt-1.5 leading-none font-sans">Oct 28, 2024</p>
                  </div>
                </div>
              </div>

              {/* Embedded route visual map */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm group">
                <img
                  src={shipmentMap}
                  alt="Route Preview Map"
                  className="w-full h-32 object-cover brightness-[0.8] contrast-[1.15] saturate-[0.8] group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur shadow-lg px-4 py-2 rounded-xl text-[10px] font-extrabold text-blue-600 border border-blue-100 uppercase tracking-wider">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                    Optimized Route
                  </span>
                </div>
              </div>

            </div>

            {/* Safety Badges Container */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white border border-slate-100 px-4 py-3 rounded-2xl shadow-sm flex items-center justify-center gap-2 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                SSL Encrypted
              </div>
              <div className="flex-1 bg-white border border-slate-100 px-4 py-3 rounded-2xl shadow-sm flex items-center justify-center gap-2 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                <Shield className="w-4.5 h-4.5 text-blue-500" />
                PCI-DSS Compliant
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PAYMENTS FORMS */}
          <form onSubmit={handlePayNow} className="space-y-6">
            
            {/* 1. CREDIT CARD METHOD PORT */}
            <div
              onClick={() => setPaymentMethod('card')}
              className={`bg-white border rounded-3xl p-6 shadow-sm transition duration-200 cursor-pointer flex flex-col gap-5 ${
                paymentMethod === 'card'
                  ? 'border-2 border-blue-600 shadow-md ring-1 ring-blue-100/50'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* Option Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${paymentMethod === 'card' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                    <CreditCard className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Credit / Debit Card</h3>
                </div>
                
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                  paymentMethod === 'card' ? 'border-blue-650 bg-blue-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>

              {/* Card input forms (only active when card mode is selected) */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-2 border-t border-slate-50" onClick={(e) => e.stopPropagation()}>
                  {/* Card Number Field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        maxLength="19"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                      />
                      {/* Grey cards display branding */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5 items-center select-none opacity-40">
                        <span className="w-7 h-4 bg-slate-200 rounded text-[6px] font-black tracking-tight text-center text-slate-500 flex items-center justify-center">VISA</span>
                        <span className="w-7 h-4 bg-slate-200 rounded text-[6px] font-black tracking-tight text-center text-slate-500 flex items-center justify-center">MC</span>
                      </div>
                    </div>
                  </div>

                  {/* Cardholder Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Name as on card"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                    />
                  </div>

                  {/* Grid fields */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Expiry Date */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength="5"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                      />
                    </div>
                    {/* CVV */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">CVV</label>
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="***"
                          maxLength="3"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                        />
                        <Info className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" title="3-digit card verification code on back of card" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. UPI / WALLET PORT */}
            <div
              onClick={() => setPaymentMethod('upi')}
              className={`bg-white border rounded-3xl p-6 shadow-sm transition duration-200 cursor-pointer flex flex-col gap-5 ${
                paymentMethod === 'upi'
                  ? 'border-2 border-blue-600 shadow-md ring-1 ring-blue-100/50'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* Option Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${paymentMethod === 'upi' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                    <QrCode className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">UPI / Mobile Wallet</h3>
                </div>
                
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                  paymentMethod === 'upi' ? 'border-blue-650 bg-blue-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'upi' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>

              {/* UPI fields */}
              {paymentMethod === 'upi' && (
                <div className="space-y-5 pt-2 border-t border-slate-50" onClick={(e) => e.stopPropagation()}>
                  
                  {/* Digital Wallet Options Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    
                    {/* GPay */}
                    <button
                      type="button"
                      onClick={() => { setSelectedWallet('gpay'); setIsUpiVerified(false); }}
                      className={`py-3.5 border rounded-2xl flex flex-col items-center justify-center gap-2 transition cursor-pointer ${
                        selectedWallet === 'gpay'
                          ? 'border-blue-600 bg-blue-50/40 font-bold text-blue-900'
                          : 'border-slate-100 hover:border-slate-200 text-slate-500 bg-white'
                      }`}
                    >
                      <span className="text-xs font-extrabold leading-none tracking-tight">G</span>
                      <span className="text-[9px] font-bold mt-0.5 leading-none">GPay</span>
                    </button>

                    {/* PhonePe */}
                    <button
                      type="button"
                      onClick={() => { setSelectedWallet('phonepe'); setIsUpiVerified(false); }}
                      className={`py-3.5 border rounded-2xl flex flex-col items-center justify-center gap-2 transition cursor-pointer ${
                        selectedWallet === 'phonepe'
                          ? 'border-blue-600 bg-blue-50/40 font-bold text-blue-900'
                          : 'border-slate-100 hover:border-slate-200 text-slate-500 bg-white'
                      }`}
                    >
                      <span className="text-xs font-black italic text-violet-750 text-violet-600 leading-none">P</span>
                      <span className="text-[9px] font-bold mt-0.5 leading-none">PhonePe</span>
                    </button>

                    {/* Paytm */}
                    <button
                      type="button"
                      onClick={() => { setSelectedWallet('paytm'); setIsUpiVerified(false); }}
                      className={`py-3.5 border rounded-2xl flex flex-col items-center justify-center gap-2 transition cursor-pointer ${
                        selectedWallet === 'paytm'
                          ? 'border-blue-600 bg-blue-50/40 font-bold text-blue-900'
                          : 'border-slate-100 hover:border-slate-200 text-slate-500 bg-white'
                      }`}
                    >
                      <span className="text-xs font-extrabold text-cyan-600 leading-none">P</span>
                      <span className="text-[9px] font-bold mt-0.5 leading-none">Paytm</span>
                    </button>
                  </div>

                  {/* Input UPI ID */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Enter UPI ID</label>
                    <div className="flex gap-2.5">
                      <input
                        type="text"
                        placeholder="example@upi"
                        value={upiId}
                        onChange={(e) => { setUpiId(e.target.value); setIsUpiVerified(false); }}
                        className="flex-1 rounded-2xl border border-slate-200/80 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white transition"
                      />
                      
                      <button
                        type="button"
                        onClick={handleVerifyUpi}
                        className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition duration-150 shrink-0 cursor-pointer ${
                          isUpiVerified
                            ? 'bg-emerald-500 text-white shadow-md shadow-emerald-100'
                            : upiId
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-150'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                        disabled={!upiId || isVerifyingUpi}
                      >
                        {isVerifyingUpi ? 'Verifying...' : isUpiVerified ? 'Verified ✓' : 'Verify'}
                      </button>
                    </div>
                    {isUpiVerified && (
                      <p className="text-[10px] text-emerald-600 font-bold tracking-wide mt-1">✓ Active account holder verified successfully.</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 3. NET BANKING PORT */}
            <div
              onClick={() => setPaymentMethod('banking')}
              className={`bg-white border rounded-3xl p-6 shadow-sm transition duration-200 cursor-pointer flex flex-col gap-5 ${
                paymentMethod === 'banking'
                  ? 'border-2 border-blue-600 shadow-md ring-1 ring-blue-100/50'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* Option Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${paymentMethod === 'banking' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                    <Building2 className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Net Banking</h3>
                </div>
                
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                  paymentMethod === 'banking' ? 'border-blue-650 bg-blue-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'banking' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>

              {/* Net banking selectors */}
              {paymentMethod === 'banking' && (
                <div className="pt-2 border-t border-slate-50" onClick={(e) => e.stopPropagation()}>
                  <div className="relative">
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200/80 px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 bg-slate-50/50 focus:bg-white appearance-none cursor-pointer font-semibold"
                    >
                      <option value="" disabled>Select your bank</option>
                      <option value="chase">Chase Bank</option>
                      <option value="bofa">Bank of America</option>
                      <option value="wellsfargo">Wells Fargo</option>
                      <option value="citi">Citigroup</option>
                      <option value="hsbc">HSBC Logistics Bank</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            {/* BILL BREAKDOWN DETAILS CARD */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              
              {/* Row 1 */}
              <div className="flex justify-between text-xs font-semibold text-slate-500">
                <span>Base Logistics Cost</span>
                <span className="text-slate-850 font-bold">$1,240.00</span>
              </div>
              
              {/* Row 2 */}
              <div className="flex justify-between text-xs font-semibold text-slate-500">
                <span>GST (18%)</span>
                <span className="text-slate-850 font-bold">$223.20</span>
              </div>
              
              {/* Row 3 */}
              <div className="flex justify-between text-xs font-semibold text-slate-500">
                <span>Transit Insurance</span>
                <span className="text-slate-850 font-bold">$40.00</span>
              </div>

              {/* Total amount bold row */}
              <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between items-center">
                <div>
                  <p className="text-base font-extrabold text-blue-900">Total Amount</p>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">All Inclusive</p>
                </div>
                <p className="text-3xl font-black text-blue-600 leading-none">$1,503.20</p>
              </div>
            </div>

            {/* CHECKOUT SUBMIT ACTION BUTTON */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-200/80 flex items-center justify-center gap-2 font-bold text-sm tracking-wide transition duration-150 active:scale-[0.99] cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                Pay Now • $1,503.20
              </button>

              <p className="text-[10px] text-slate-400 font-medium text-center leading-relaxed">
                By clicking 'Pay Now', you agree to our{' '}
                <a href="#terms" className="underline hover:text-slate-600 transition">Terms of Service</a>{' '}
                and{' '}
                <a href="#policy" className="underline hover:text-slate-600 transition">Logistics Policy</a>.
              </p>
            </div>

          </form>
        </div>

      </main>

      {/* 2. LOADER OVERLAY WHILE PAYMENT IS PROCESSING */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 flex flex-col items-center gap-5">
            {/* Spinning Loader */}
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-650 border-r-blue-500 animate-spin"></div>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm font-extrabold text-slate-900">Processing Payment</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">Securing payment gateway connection. Do not close or refresh this tab.</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. PAYMENT COMPLETED CONFIRMATION MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 flex flex-col gap-6 text-center animate-fade-in">
            
            {/* Success icon */}
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center text-emerald-600">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            {/* Modal Heading */}
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Payment Successful!</h2>
              <p className="text-xs text-slate-500 font-semibold mt-1">Transaction ID: #TXN-90241-GD</p>
            </div>

            {/* Transaction Receipt Details */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs font-semibold text-slate-600 text-left space-y-3.5">
              <div className="flex justify-between leading-none">
                <span className="text-slate-400">Merchant</span>
                <span className="text-slate-800 font-bold">TransGo Logistics</span>
              </div>
              <div className="flex justify-between leading-none">
                <span className="text-slate-400">Total Spent</span>
                <span className="text-blue-600 font-extrabold">$1,503.20</span>
              </div>
              <div className="flex justify-between leading-none">
                <span className="text-slate-400">Shipment Type</span>
                <span className="text-slate-800 font-bold">Electronics Cargo</span>
              </div>
              <div className="flex justify-between leading-none">
                <span className="text-slate-400">Transporter</span>
                <span className="text-slate-800 font-bold">Global Swift Freight</span>
              </div>
            </div>

            {/* Action buttons redirects */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  navigate('/dashboard')
                }}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-150 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition duration-150 cursor-pointer"
              >
                Go to Dashboard
              </button>
              
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  navigate('/tracking')
                }}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow shadow-blue-150 flex items-center justify-center gap-1.5 transition duration-150 cursor-pointer"
              >
                Track Shipment
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Payment
