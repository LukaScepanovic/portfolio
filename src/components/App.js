import React from 'react'
import '../css/app.css'
import Navigation from './Navigation'
import Home from './Home'
import ContactForm from './ContactForm'
import Projects from './Projects'
import Experience from './Experience'
import Footer from './Footer'
import "antd/dist/antd.css";
import { Divider } from 'antd';

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }
  return (

    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
        </div>
      </nav>
      <Navigation id='nav'/>
      <Home />
      <Divider style={{'backgroundColor':'grey'}}/>
      <Projects />
      <Divider style={{'backgroundColor':'grey'}}/>
      <Experience />
      <Divider style={{'backgroundColor':'grey'}}/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;
