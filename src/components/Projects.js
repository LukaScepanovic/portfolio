import React from 'react'
import Buttons from './Buttons'

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h1 className="title2">Recent Projects</h1>
            <div className="btn__flex">
                <Buttons text={'live example'} />
                <Buttons text={'check code'} />
            </div>
        </section>
    )
}
