import React from 'react'
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa"

export default function Home() {
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
            <section className="home">
                <h1 className="title">React Frontend Developer</h1>
                <div className="iconsGrid">
                    <div className="icons">
                        <FaGithub />
                        <a href="https://github.com/LukaScepanovic" className="links" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <div className="icons">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/luka-scepanovic-a83599167/" className="links" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <div className="icons">
                        <FaFolderOpen />
                        <a href="cv.pdf" className="links" target="_blank" rel="noreferrer">Download CV</a>
                    </div>
                </div>
            </section>
        </div>

    )
}


