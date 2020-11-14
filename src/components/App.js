import React from 'react'
import '../css/app.css'
import Navigation from './Navigation'
import Home from './Home'
import ContactForm from './ContactForm'
import Projects from './Projects'
import Experience from './Experience'
import Footer from './Footer'
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Projects />
      <Experience />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App;
