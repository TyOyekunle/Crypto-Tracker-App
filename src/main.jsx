import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* using browser router for routing */}
    <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
      {/* we can access any context data from any component within the app component */}

    </BrowserRouter>
  </React.StrictMode>,
)
