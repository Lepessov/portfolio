import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Projects from './components/Projects'
import Services from './components/Services'
import Action from './components/Action'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reviews />
      <Services />
      <Projects />
      <Action />
      <Form />
      <Footer />
    </div>
  )
}

export default App
