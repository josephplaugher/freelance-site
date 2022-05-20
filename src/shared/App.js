import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Portfolio from './Portfolio'
import NoMatch from './NoMatch'
import './styles.css'

export default function App() {
  return (
    <div className="main" id="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Navbar />
    </div>
  )
}