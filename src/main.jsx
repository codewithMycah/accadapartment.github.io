import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Location from './components/Location'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Location />
    <Footer />
  </StrictMode>,
)
