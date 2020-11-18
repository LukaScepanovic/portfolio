import React from 'react'
import { Steps, Row } from 'antd';

const { Step } = Steps;

export default function Experience() {
    return (
            <Row align="center">
                <h1>Work experience</h1>
                <div className="numList">
                    <Steps direction="vertical" current={1}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>
                </div>
            </Row>
    )
}
