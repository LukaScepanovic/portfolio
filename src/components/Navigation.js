import React from 'react'

export default function Navigation() {

    return (
        <header className="navbar">
            <div className="signature">
                <h1>&#60;Luka Scepanovic/&#62;</h1>
            </div>
            <a href="#home" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar_items">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#workExperience">work experience</a></li>
                    <li><a href="#contactme">contact me</a></li>
                </ul>
            </div>
        </header>
    )

}

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar_items')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })
