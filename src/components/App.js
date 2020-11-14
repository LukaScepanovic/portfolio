import React from 'react'
import '../css/app.css'
import Navigation from './Navigation'
import Home from './Home'
import ContactForm from './ContactForm'
import Projects from './Projects'

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Projects />
      <ContactForm />
    </>
  )
}

export default App;
