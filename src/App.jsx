import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import ProductList from './pages/ProductList'
import { Routes, Route } from 'react-router-dom'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App
