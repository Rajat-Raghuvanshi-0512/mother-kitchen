import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
