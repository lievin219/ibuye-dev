import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navabar from './components/Navabar'
import Footer from './components/Footer'
import ServicesPage from './Pages/ServicePage'
import WhyRwandaPage from './Pages/whyRwandaPage'
import Plan from './Pages/Plan'
import About from './Pages/About'
import Home from './Pages/Home'
import Portofolio from './Pages/Portofolio'

function App() {
 

  return (
    <>
    <Router>
      <Navabar />
   <Routes>
   <Route path='/service' element={<ServicesPage/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/service' element={<Portofolio/>}/>
   <Route path='/whyrwanda' element={<WhyRwandaPage/>}/>
   <Route path='/meeting' element={<Plan/>}/>

   </Routes>


     
   
    </Router>
    <Footer/>
    </>
  )
}

export default App
