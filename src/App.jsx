import React from 'react'
import { About, Contact, Error, Home, Portfolio } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
