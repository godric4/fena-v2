import React from 'react'
import { About, Contact, Error, Home, Portfolio, ProjectDetails } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Portfolio/>} />
         <Route path='projects/:id' element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
