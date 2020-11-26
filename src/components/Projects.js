import React, { useState } from 'react'
import Modal from './Modal'

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)

    // find a better way, so that the menuref is only outside the modal
    // let menuRef = useRef();
    // useEffect(() => {
    //     document.addEventListener("mousedown", (event) => {
    //         if(!menuRef.current.contains(event.target)) {
    //             setIsOpen(false);
    //             setIsOpen2(false);
    //             setIsOpen3(false);
    //         }
    //     })
    // })

    return (
        <section className="projects" id="projects">
            <div className="services" id="services">
                <h1 className="projectsTitle">My Projects</h1>
                <div className="diff_services">
                    <div className="diff_service_item">
                        <img src="img/reactCourse.png" alt="Service_image" />
                        {/* <div ref={menuRef} className="overlay"> */}
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
                        <h1>React Project</h1>
                    </div>
                    <div className="diff_service_item">
                        <img src="img/recipeApi.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">By doing this project I learned all the major concepts of vanilla Javascript. It included webpack, babel and configuring it with github in order to make the vanilla javascript files interact with each other.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen2(true)}>Demo</button>
                                <Modal open={isOpen2} onClose={() => setIsOpen2(false)}
                                    children={'This project uses vanila Javascript in combination with one recipe API, to generate list of cooking recipes for users. Users can then bookmark the recipes they like, and come back to them later in the right section.'}

                                    title={'Search for any recipe'}
                                    videoSrc={"img/jsRecipes.mov"}
                                    link={"https://github.com/LukaScepanovic/recipeAPI"}
                                >
                                </Modal>
                            </div>
                        </div>
                        <h1>Javascript Project</h1>
                    </div>

                    <div className="diff_service_item">
                        <img src="img/pigGame.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">After I became comfortable with HTML and CSS, I started learning Javascript by learning theory and then applying it with different projects. This is a simple dice throwing game.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen3(true)}>Demo</button>
                                <Modal open={isOpen3} onClose={() => setIsOpen3(false)}
                                    children={'The rules of the game are that you throw the dice, if you get a 0 on any dice, its next players turn and you lose all points gained that turn. Else, you throw until you want to hold, keeping all prev throws as your score. Once you reach a set score, or 100 default score, you win!'}

                                    title={'Set the winning score and throw the dice'}
                                    videoSrc={"img/pigGame.mov"}
                                    link={"https://github.com/LukaScepanovic/Pig-game"}
                                >
                                </Modal>
                            </div>
                        </div>
                        <h1>Pig Game</h1>
                    </div>

                    <div className="diff_service_item">
                        <img src="img/coinFlip.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">After learning HTML and CSS, I wanted to immediately apply my knowledge and do a simple quick project. This is my smallest project that I did in my first months of learning.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen4(true)}>Demo</button>
                                <Modal open={isOpen4} onClose={() => setIsOpen4(false)}
                                    children={'After I learned about CSS animations and how to hook them up with JS, I wanted to test it out and made this simple coin flip, that randomly flips the coin and counts users score based on what coin was called.'}

                                    title={'Project description, and link to github code'}
                                    videoSrc={"img/coinFlip.mov"}
                                    link={"https://github.com/LukaScepanovic/coinFlip"}
                                >
                                </Modal>
                            </div>
                        </div>
                        <h1>Coin Flip</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
