import { useState } from 'react'

import './App.css'
import './index.css'

import HeroSection from './components/HeroSection'
import {Homepage} from './pages/Homepage'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'


function App() {


  return (
    <>

      <Navbar/>
      
   <Outlet/>
   <Toaster/>
{/* <Footer/> */}
    </>
  )
}

export default App
