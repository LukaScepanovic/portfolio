import React from 'react'
import Buttons from './Buttons'
import { Card } from 'antd';

const { Meta } = Card;

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h1 className="title2">Recent Projects</h1>
            <div className="btn__flex">
                <Buttons text={'live example'} />
                <Buttons text={'check code'} />
            </div>
            <div className="cards-grid">
                <Card
                    className="card"
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    className="card"
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    className="card"
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="img/reactCourse.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>


        </section>
    )
}
