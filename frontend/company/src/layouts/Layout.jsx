import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useData } from '../context/DataProvider';

function Layout() {
  const { isLoginedIn } = useData();

  return (
    <div className="flex min-h-screen bg-slate-50/30">
       <Sidebar />
      <div className="flex-grow flex flex-col min-w-0">
        <Navbar />
        <main className="flex-grow bg-slate-50/50">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout