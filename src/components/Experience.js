import React from 'react'
import { Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;


export default function Experience() {
  return (
    <>
    <Row align="center">
      <Col>
      <h1>Work experience</h1>
      </Col>
    </Row>
    <Row align="center">
      <Col>
        <div className="experience">
          <Tabs defaultActiveKey="1" style={{'fontSize':'25px'}}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
        </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
        </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
        </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
    </>
  )
}
