import { Button, Col, Collapse, Image, Layout, Row } from 'antd'
import React, { useState } from 'react'
import './carousel.css'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'

const CarouselComp = ({ images, title }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(images.length - 1)
    }
  }

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  return (
    <div className='carouselContent'>
      <h3 className='carouselTitle'>{title}</h3>
      <Row justify="center">
        <Col xs={0} sm={2} md={4} lg={6}> </Col>
        <Col sm={20}>
          <Row justify='space-around'>
          {
            images.slice(0, 4).map((img) => {
              return (

                <Col xs={24} sm={12} md={10} lg={10}>
                  <Image width={250} src={img.imgUrl} alt={img.alt} />
                  <p>{img.title} - {img.description}</p>
                </Col>

              )
            })
          }
          </Row>
        </Col>
        <Col xs={0} sm={2} md={4} lg={6}> </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={12}>
          <LeftCircleFilled onClick={prev} />

          <img src={images[currentIndex].imgUrl} alt={images[currentIndex].alt} className='carouselImg' />
          <RightCircleFilled onClick={next} />
        </Col>
      </Row >
      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='bulletContainer'>
            {
              images.map((item) => {
                if ((item.id - 1) === currentIndex)
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
                    onClick={() => setCurrentIndex(item.id - 1)}>
                    {item.id}
                  </Button>
                )
              })
            }
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default CarouselComp