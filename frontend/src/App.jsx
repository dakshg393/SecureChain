import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import MainLayout from './layout/MainLayout'
import Features from './pages/Features'
import Security from './pages/Security'
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
