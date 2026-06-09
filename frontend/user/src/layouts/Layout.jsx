import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useData } from '../context/DataProvider';

function Layout() {
  const { isLoginedIn } = useData();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isLoginedIn ? (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 min-w-0 bg-slate-50/50">
            <Outlet />
          </main>
        </div>
      ) : (
        <div className="flex-grow">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Layout