import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import CompanyLogin from './auth/CompanyLogin'
import DashBoard from './pages/DashBoard'
import Bookings from './pages/Bookings'
import BookingDetails from './pages/BookingDetails'
import GenerateQuotation from './pages/GenerateQuotation'
import Drivers from './pages/Drivers'
import AddDriver from './pages/AddDriver'
import AssignDriver from './pages/AssignDriver'
import Tracking from './pages/Tracking'
import Payments from './pages/Payments'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<CompanyLogin />} />
      <Route element={<Layout />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:id" element={<BookingDetails />} />
        <Route path="/bookings/:id/generate-quote" element={<GenerateQuotation />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/drivers/add" element={<AddDriver />} />
        <Route path="/bookings/:id/assign-driver" element={<AssignDriver />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App