import { useState } from 'react'

import './App.css'
import './index.css'

import HeroSection from './components/HeroSection'
import {Homepage} from './pages/Homepage'
import Navbar from './components/Navbar'


function App() {


  return (
    <>

      <Navbar/>
      <HeroSection/>
   <Homepage/>

    </>
  )
}

export default App
