import { useState } from 'react'

import './App.css'


import MainLayout from './layout/MainLayout.jsx'
import Features from './pages/Features.jsx'
import Security from './pages/Security.jsx'
import { Route, Routes } from 'react-router-dom'
import Upload from './pages/Upload.jsx'
import Home from './pages/Home.page.jsx'
import Verify from './pages/Verify.jsx'
import Contact from './pages/Contact.jsx'
import Technology from './pages/Technology.jsx'
import Faq from './pages/FAQ.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="features" element={<Features />} />
          <Route path="upload" element={<Upload />} />
          <Route path="verify" element={<Verify />} />
          <Route path="security" element={<Security />} />
          <Route path="technology" element={<Technology />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
         
        </Route>
      </Routes>




    </>
  )
}

export default App
