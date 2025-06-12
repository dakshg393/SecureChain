import { useState } from 'react'

import './App.css'

import MainLayout from './layout/MainLayout.jsx'
import Features from './pages/Features.jsx'
import Security from './pages/Security.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="features" element={<Features />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>




    </>
  )
}

export default App
