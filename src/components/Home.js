import React from 'react'
import { FaGithub, FaLinkedin, FaFolderOpen, FaReact, FaLess } from "react-icons/fa"
import { AiOutlineAntDesign, AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiGitMerge, DiJavascript1 } from "react-icons/di"
import { Popover } from 'antd';

const content = (
    <div>
      <h4>Hover / Tap us</h4>
      <p>HTML</p>
    </div>
  );

export default function Home() {
    return (
        <section className="home" id="home">
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
            <h1 className="skillsTitle">Skills</h1>
            <div className="biggerIconsGrid">
                <Popover content={content} visible="true">
                    <div className="icons2">
                        <AiFillHtml5 />
                    </div>
                </Popover>

                <Popover content={'CSS'}>
                    <div className="icons2">
                        <DiCss3 />
                    </div>
                </Popover>
                <Popover content={'JavaScript'}>
                    <div className="icons2">
                        <DiJavascript1 />
                    </div>
                </Popover>
                <Popover content={'React'}>
                    <div className="icons2">
                        <FaReact />
                    </div>
                </Popover>
                <Popover content={'Ant Design'}>
                    <div className="icons2">
                        <AiOutlineAntDesign />
                    </div>
                </Popover>
                <Popover content={'CSS Compiler: Less'}>
                    <div className="icons2">
                        <FaLess />
                    </div>
                </Popover>
                <Popover content={'Version Control'}>
                    <div className="icons2">
                        <DiGitMerge />
                    </div>
                </Popover>
            </div>
        </section>
    )
}


