import React from 'react'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <routes>
        <Route path='/' element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        </Route>
      </routes>
    </>
  )
}

export default App
