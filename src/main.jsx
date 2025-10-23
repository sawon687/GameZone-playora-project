import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import router from './Routes/Routes.jsx'
import AuthProvider from './PrivateRoutes/AuthProvider.jsx'
import { RouterProvider } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider> 
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
