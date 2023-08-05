import { Button, Col, Layout, Row } from "antd"
import React from "react"
import "./card.css"

const Card = () => {
  const columnSpacing = { xs: 0, sm: 4, md: 8 }
  const rowSpacing = { xs: 1, sm: 1, md: 6 }

  return (
    <Layout className="cardLayout">
      <div className="card">
        <Row gutter={[columnSpacing, rowSpacing]}>
          <Col xs={24} sm={12}>
            <h2>Find the perfect detination</h2>
            <p>
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <Button type="primary"> View more </Button>
          </Col>
          <Col xs={24} sm={12}>
            <div className="imgContainer">
              <img src="/mountains.png" alt="mountains" />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Card