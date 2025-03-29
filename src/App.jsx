import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Bookdetails from './Bookdetails'
import Borrowhistory from './Borrowhistory'
import Enter from './Enter'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* making routes for different pages so they can be accessed with a path */}
          <Route path="/" element={<  Enter />} /> {/* Enter/Landing page */}
          <Route path='/home' element={<Home/>}/> {/* Home page */}
          <Route path='/book/:id' element={<Bookdetails/>}/> {/* Book details page */}
          <Route path='/borrowHistory'element={<Borrowhistory/>}/> {/* Borrow history page */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
