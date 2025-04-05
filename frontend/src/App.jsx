import { useContext, useEffect, useState } from 'react'

import './App.css'
import './index.css'

import HeroSection from './components/HeroSection'
import { Homepage } from './pages/Homepage'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import { FirebaseAuthContext } from './contexts/FirebaseAuthContext'


function App() {

  const { logedInUser } = useContext(FirebaseAuthContext);

  const navigate = useNavigate();

  useEffect(() => {

    if (!logedInUser) {
      navigate('/login')
    }

  }, [logedInUser]);

  return (
    <>

      <Navbar />

      <Outlet />
      <Toaster />
      {/* <Footer/> */}
    </>
  )
}

export default App
