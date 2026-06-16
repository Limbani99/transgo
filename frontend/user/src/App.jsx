import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
import DashBoard from './pages/UserPages/DashBoard'
import Shipment from './pages/UserPages/Shipment'
import Tranpoter from './pages/UserPages/Tranpoter'
import TrackingPage from './pages/UserPages/TrackingPage'
import Payment from './pages/UserPages/Payment'
import Notification from './pages/UserPages/Notification'
import Profile from './pages/UserPages/Profile'
import Support from './pages/UserPages/Support'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Service />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/shipments" element={<Shipment />} />
          <Route path="/transporter" element={<Tranpoter />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </>
  )
}

export default App
