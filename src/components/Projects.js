import React, { useState } from 'react'
import Modal from './Modal'

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section className="projects" id="projects">
            <div className="services" id="services">
                <h1 className="projectsTitle">My Projects</h1>
                <div className="diff_services">
                    <div className="diff_service_item">
                        <img src="img/reactCourse.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">My first React project where I tested all the cool features React has to offer. Feel free to checkout the code on github, or just watch this short video demonstrating all the features of the app.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen(true)}>Demo</button>
                                <Modal open={isOpen} onClose={() => setIsOpen(false)}
                                    children={'This project uses React useState, useEffect, and Context in combination with Components, so that the recipes are fully customizable and saved on the browser, even without any backend assistance.'}

                                    title={'Edit and add any recipe'}
                                    videoSrc={"img/reactRecipe.mov"}
                                    link={"https://github.com/LukaScepanovic/React-practice"}
                                >
                                </Modal>
                            </div>
                        </div>
                        <h3>React Project</h3>
                    </div>
                    <div className="diff_service_item">
                        <img src="img/recipeApi.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">By doing this project I learned all the major concepts of vanilla Javascript. It included webpack, babel and configuring it with github in order to make the vanilla javascript files interact with each other.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen(true)}>Demo</button>
                                <Modal open={isOpen} onClose={() => setIsOpen(false)}
                                    children={'This project uses vanila Javascript in combination with one recipe API, to generate list of cooking recipes for users. Users can then bookmark the recipes they like, and come back to them later in the right section.'}

                                    title={'Search for any recipe'}
                                    videoSrc={"img/jsRecipe.mov"}
                                    link={"https://github.com/LukaScepanovic/recipeAPI"}
                                >
                                </Modal>
                            </div>
                        </div>
                        <h3>Javascript Project</h3>
                    </div>
                    <div className="diff_service_item">
                        <img src="img/coinFlip.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">After learning HTML and CSS, I wanted to immediately apply my knowledge and do a simple quick project. This is my smallest project that I did in my first months of learning.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen(true)}>Demo</button>
                                <Modal open={isOpen} onClose={() => setIsOpen(false)}
                                    children={'After I learned about CSS animations and how to hook them up with JS, I wanted to test it out and made this simple coin flip, that randomly flips the coin and counts users score based on what coin was called.'}

                                    title={'Project description, and link to github code'}
                                    videoSrc={"img/coinFlip.mov"}
                                    link={"https://github.com/LukaScepanovic/coinFlip"}
                                >
                                </Modal>
                            </div>
                        </div>
                        <h3>Coin Flip</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
