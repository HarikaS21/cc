import React from 'react'; // add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Tailwind imports
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
