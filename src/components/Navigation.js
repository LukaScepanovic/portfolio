import React from 'react'

export default function Navigation() {
    return (
        <header className="navbar">
            <div class="signature">
                <a href="home">&#60;Luka Scepanovic/&#62;</a>
            </div>
            <div className="navbar_items">
                <ul>
                    <li><a href="home">home</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#work experience">work experience</a></li>
                    <li><a href="#contactme">contact me</a></li>
                </ul>
            </div>
        </header>
    )
}
