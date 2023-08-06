import { Button, Col, Collapse, Layout, Row } from 'antd'
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
      <Row justify="center">
        <h3 className='carouselTitle'>{title}</h3>
        <div className='groupImg'>
 {/*          {
            images.map((img) => {
              setImgIndex(imgIndex+1)
              ( imgIndex < 5 ? <img src={img.imgUrl} className='carouselImg' /> : null)
            })
          } */}
        </div>
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