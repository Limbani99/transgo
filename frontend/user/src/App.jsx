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
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Service/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/shipments" element={<Shipment />} />
        <Route path="/marketplace" element={<Tranpoter />} />
      </Routes>
    </>
  )
}

export default App
