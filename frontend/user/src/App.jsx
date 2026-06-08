import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './auth/Register'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<login />} />
      </Routes>
    </>
  )
}

export default App
