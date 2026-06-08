import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
