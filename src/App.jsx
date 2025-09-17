import React from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import { Contact } from 'lucide-react'
import Footer from './component/Footer'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Products/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App