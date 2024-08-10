import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet } from 'react-router-dom'
import { ContextProvider } from './contextporvider/ContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Outlet />
    </ContextProvider>

  </React.StrictMode>,
)
