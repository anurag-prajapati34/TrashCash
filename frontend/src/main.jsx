import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'

import { routes } from './routers/routes.jsx'
import { FirebaseAuthContext, FirebaseAuthContextProvider } from './contexts/FirebaseAuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FirebaseAuthContextProvider>
   <RouterProvider router={routes} >
      <App />
    </RouterProvider>
   </FirebaseAuthContextProvider>
  </StrictMode>,
)
