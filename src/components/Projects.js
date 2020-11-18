import React, { useState } from 'react'
import Buttons from './Buttons'
import Modal from './Modal'

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section className="projects" id="projects">
            <div className="services" id="services">
                <h1>Recent Projects</h1>
                <div className="diff_services">
                    <div className="diff_service_item">
                        <img src="img/reactCourse.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">CHANGE</div>
                            <div className="img-btn">
                                <Buttons text={'Demo'} />
                            </div>
                        </div>
                        <h3>Financial analysis</h3>
                    </div>
                    <div className="diff_service_item">
                        <img src="img/coinFlip.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">AAAAA.</div>
                            <div className="img-btn">
                                <button className="modalBtn" onClick={() => setIsOpen(true)}>Demo</button>
                                <Modal open={isOpen} onClose={() => setIsOpen(false)}
                                    children={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!'}
                                    
                                    title={'Title'}
                                    >
                                </Modal>
                            </div>
                        </div>
                        
                        <h3>Web Development</h3>
                    </div>
                    <div className="diff_service_item">
                        <img src="img/recipeApi.png" alt="Service_image" />
                        <div className="overlay">
                            <div className="content">XDD more.</div>
                            <div className="img-btn">
                                <Buttons text={'Demo'} />
                            </div>
                        </div>
                        <h3>Game development</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}
