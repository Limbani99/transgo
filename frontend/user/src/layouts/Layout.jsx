import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useData } from '../context/DataProvider'

function Layout() {
  const { isLoginedIn } = useData()
  const location = useLocation()
  const navigate = useNavigate()

  const protectedPaths = ['/dashboard', '/shipments', '/marketplace']
  const isProtectedPath = protectedPaths.includes(location.pathname)

  // Redirect to login if trying to access a protected route while not logged in
  useEffect(() => {
    if (isProtectedPath && !isLoginedIn) {
      navigate('/login')
    }
  }, [isLoginedIn, isProtectedPath, location.pathname, navigate])

  // If it's a protected path and they are not logged in, render nothing while redirecting
  if (isProtectedPath && !isLoginedIn) {
    return null
  }

  // If the user is logged in and is on a dashboard/protected page
  if (isLoginedIn && isProtectedPath) {
    return (
      <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
        {/* Sidebar on the Left */}
        <Sidebar />
        
        {/* Main Content Area on the Right */}
        <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
          {/* Header/Navbar */}
          <Navbar />
          
          {/* Active Page (Dashboard, Shipment, etc.) */}
          <main className="flex-1 p-6 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    )
  }

  // Otherwise, standard public layout
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout