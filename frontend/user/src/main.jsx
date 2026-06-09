import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import DataProvider from './context/DataProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Toaster position="top-right" />
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
)
