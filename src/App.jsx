import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navabar'
import Footer from './components/Footer'
import Servic from './Pages/Servic'
import ResidentialFortD from './Pages/ResidentialFordD'
import ServicesPage from './Pages/ServicePage'
import WhyRwandaPage from './Pages/whyRwandaPage'
import Plan from './Pages/Plan'
import About from './Pages/About'
import Home from './Pages/Home'
import Portofolio from './Pages/Portofolio'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />

      <div className="relative z-0">
        <Routes>
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Servic />} />
          <Route path="/whyrwanda" element={<WhyRwandaPage />} />
          <Route path="/meeting" element={<Plan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
