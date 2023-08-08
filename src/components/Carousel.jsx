import { Button, Col, Collapse, Image, Layout, Row } from 'antd'
import React, { useState } from 'react'
import './carousel.css'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { set } from 'lodash'

const CarouselComp = ({ images, title }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsNumber, setItemsNum] = useState([0, 4])
  const [initialItem, finalItem] = itemsNumber


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

  const goNext = () => {
    if (finalItem + 4 > images.length) {
      setItemsNum([0, 4])
    } else {
      setItemsNum([initialItem + 4, finalItem + 4])
    }
    console.log(itemsNumber)
  }

  const goPrev = () => {
    if (initialItem < 1) {
      setItemsNum([images.length - 4, images.length])
    } else {
      setItemsNum([initialItem - 4, finalItem - 4])
    }
    console.log(itemsNumber)

  }

  const changeSlide = (id) => {
    if(id === 2 || id === 10 ){
      setItemsNum([4,8])
    } else if ( id === 3 || id === 7)  {
      setItemsNum([8,12])
    } else if (id === 5 || id === 9) {
      setItemsNum([0,4])
    }
  }

  return (
    <div className='carouselContent'>
      <h3 className='carouselTitle'>{title}</h3>
      <div className='containerFlex'>
        <LeftCircleFilled onClick={goPrev} />
        <div className='gridContainer'>
          {
            images.slice(initialItem, finalItem).map((img) => {
              return (
                <div className='carouselElement' key={img.id}>
                  <Image width={250} src={img.imgUrl} alt={img.alt} />
                  <p className='carouselText'>{img.title} - {img.description}</p>
                </div>
              )
            })
          }
        </div>
        <RightCircleFilled onClick={goNext} />
      </div>


      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='bulletContainer'>
            {
              images.slice(initialItem, finalItem-1).map((item) => {
              return (
                  <Button
                    onClick={() => changeSlide(item.id)}
                    key={item.id}
                    type='primary'
                    shape='circle'
                    size='small'
                    >
                    
                  </Button>
                )
              })
            }
          </div>

        </Col>
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
                if (item.id - 1 === currentIndex)
                  return (
                    <Button
                      key={item.id}
                      type='primary'
                      shape='circle'
                      size='small'>
                      {item.id}
                    </Button>
                  )
                else return (
                  <Button
                    key={item.id}
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

const arrayOriginal = [0, 1, 2, 3, 4, 5, 6, 7,8,9]
const arrayModificado = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9]]