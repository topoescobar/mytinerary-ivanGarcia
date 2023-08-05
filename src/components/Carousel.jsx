import { Button, Col, Collapse, Layout, Row } from 'antd'
import React, { useState } from 'react'
import './carousel.css'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'


const places = [
  { id: 1, imgUrl: '/forest.jpg', alt: 'forest' },
  { id: 2, imgUrl: '/mountain.jpg', alt: 'mountain' },
  { id: 3, imgUrl: '/lake.jpg', alt: 'lake' }
]

const CarouselComp = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(places.length - 1)
    }
  }

  const next = () => {
    if (currentIndex < places.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='carouselContent'>
            <LeftCircleFilled onClick={prev} />
            <img src={places[currentIndex].imgUrl} alt={places[currentIndex].alt} />
            <RightCircleFilled onClick={next} />
          </div>
        </Col>
      </Row >
      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='bulletContainer'>
            {
              places.map((item) => {
                if ((item.id-1) === currentIndex)
                  return (
                    <Button
                      type='primary'
                      shape='circle'
                      size='small'>
                      {item.id}
                    </Button>
                  )
                else return (
                  <Button
                    type='dashed'
                    shape='circle'
                    size='small'
                    onClick={() => setCurrentIndex(item.id-1)}>
                    {item.id}
                  </Button>
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