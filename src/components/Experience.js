import React from 'react'
import { Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;


export default function Experience() {
  return (
    <section id="workExperience">
    <Row align="center">
      <Col>
      <h1 className="experienceTitle">Work experience</h1>
      </Col>
    </Row>
    <Row gutter={[32, 32]} align="center">
    <Col span="10">
        <div className="experience">
          <Tabs defaultActiveKey="1" style={{'fontSize':'25px'}}>
            <TabPane tab="Current position" key="1" style={{'textAlign':'center'}}>
            <Row gutter={[32, 32]} align="center">
                <Col>
                Currently I am doing a remote frontend React internship for one Spanish company, called Akommo.
              Below please find the preview.
              <video  width="620" height="400" controls className="video">
                    <source src="img/Akommo.mov" type="video/mp4">
                    </source>
                </video>
                </Col>
              </Row>
        </TabPane>
            <TabPane tab="Finance" key="2">
            In November 2019, I went for a 3 months work in Malaysia to help out my friend with her startup. I was doing financial analyis and planning for the company, as well as helping out with setting up basic accounting. More info is in the CV.
        </TabPane>
            <TabPane tab="Marketing" key="3">
            Last summer I was working in email marketing, it was my first internship after finishing college. The details are in the CV, but as you can see I have spent some time really searching for a job I would be passionate about, and I have finally found it in coding!
        </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
    </section>
  )
}
