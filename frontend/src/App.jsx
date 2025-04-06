import { useContext, useEffect, useState } from 'react'

import './App.css'
import './index.css'


import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { Outlet, useNavigate } from 'react-router-dom'
import { FirebaseAuthContext } from './contexts/FirebaseAuthContext'


function App() {

  const { logedInUser } = useContext(FirebaseAuthContext);

  const navigate = useNavigate();

  useEffect(() => {

    if (!logedInUser) {
      navigate('/login')
    }
    
    console.log("logedInUser", logedInUser);

  }, [logedInUser]);

  return (
    <>

      <Navbar />

      <Outlet />
      <Toaster />
   
    </>
  )
}

export default App
