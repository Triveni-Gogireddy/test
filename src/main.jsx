import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './stores/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Cartprovider>
    <App />
    </Cartprovider>
  </React.StrictMode>,
  </BrowserRouter>
)
