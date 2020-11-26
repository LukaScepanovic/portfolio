import React, { useState } from 'react';
import { Drawer } from 'antd';

export default function Navigation() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };


    return (
        <header className="navbar">
            <div className="signature">
                <h1>&#60;Luka Scepanovic/&#62;</h1>
            </div>
            <div className="btn-primary" id="btnNav">
                <button type="primary" onClick={showDrawer}>Open</button>
              </div>

            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <div className="navbar_items">
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#workExperience">work experience</a></li>
                        <li><a href="#contactme">contact me</a></li>
                    </ul>
                </div>
            </Drawer>

        </header >
    )

}

//  const toggleButton = document.getElementsByClassName('toggle-button')[0]
//  const navbarLinks = document.getElementsByClassName('navbar_items')[0]

//  if(toggleButton) {
//     toggleButton.addEventListener('click', () => {
//         navbarLinks.classList.toggle('active')
//       })
//  }

