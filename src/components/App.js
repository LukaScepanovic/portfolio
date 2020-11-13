import React from 'react'
import '../css/app.css'
import Navigation from './Navigation'
import Home from './Home'
import Buttons from './Buttons'
import ContactForm from './ContactForm'

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <div className="btn__flex">
        <Buttons text={'live example'} />
        <Buttons text={'check code'} />
      </div>
      <ContactForm />
    </>
  )
}

export default App;
