import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for styles

// Initialize AOS with custom settings
AOS.init({
  easing: 'ease-in-out', // Easing function
  once: true, // Animation happens only once per element
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
