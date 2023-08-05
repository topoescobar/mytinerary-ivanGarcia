import { Col, Collapse, Layout, Row } from 'antd'
import React, { useState } from 'react'
import './carousel.css'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'


const places = [
  { id: 0, imgUrl: '/forest.jpg', alt: 'forest' },
  { id: 1, imgUrl: '/mountain.jpg', alt: 'mountain' },
  { id: 2, imgUrl: '/lake.jpg', alt: 'lake' }
]

const CarouselComp = () => {

  const [position, setPosition] = useState(0)

  const prev = () => {
    if (position > 0) {
      setPosition(position - 1)
    } else {
      setPosition(places.length - 1)
    }
  }

  const next = () => {
    if (position < places.length - 1) {
      setPosition(position + 1)
    } else {
      setPosition(0)
    }
  }

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='carouselContent'>
            {position}
            <LeftCircleFilled onClick={prev} />
            <img src={places[position].imgUrl} alt={places[position].alt} />
            <RightCircleFilled onClick={next} />
          </div>
        </Col>
      </Row >
      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='bulletContainer'>
            {
              places.map((item) => {
                if (item.id === position)
                  return (<span>🟣</span>)
                else return (
                  <span onClick={() => setPosition(item.id)} >⚫</span>
                )
              })
            }
          </div>

        </Col>
      </Row>
    </>
  )
}

export default CarouselComp