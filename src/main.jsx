import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/responsive.css";
import App from './App.jsx'

import { BrowserRouter as Router } from "react-router-dom";

// Standard fix for scroll jumping on refresh in modern browsers
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
