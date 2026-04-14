import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './context/DataContext.jsx'
import favicon from './assets/LandingPage/Leaves.png'

const faviconLink = document.querySelector('link[rel="icon"]') || document.createElement('link')
faviconLink.rel = 'icon'
faviconLink.type = 'image/png'
faviconLink.href = favicon

if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
      </BrowserRouter>
    </DataProvider>
  </StrictMode>,
)
