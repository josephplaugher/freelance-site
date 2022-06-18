import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Portfolio from './Portfolio'
import NoMatch from './NoMatch'
import './styles.css'

export default function App() {
  return (
    <>
      <div id="container">
        <div id="scroll-container">
          <Header />
          <div id="main" >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </div>
        </div >
        <Navbar />
      </div >
    </>
  )
}