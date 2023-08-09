import { Button, Col, Collapse, Image, Layout, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import './carousel.css'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { set } from 'lodash'

const CarouselComp = ({ images, title }) => {

  const [currentIndex, setCurrentIndex] = useState(1)
  const [itemsNumber, setItemsNum] = useState([0, 4])
  const [initialItem, finalItem] = itemsNumber

  const [subArrays, setSubArrays] = useState([])

  const subArraySize = 4
  // const subArrays = []

  useEffect(() => {
    for (let i = 0; i < images.length; i += subArraySize) {
      let subArray = images.slice(i, i + subArraySize)
      // subArrays.push(subArray)
      setSubArrays(...subArrays, subArray)
    }
  }, [])
  console.log(subArrays);
 

  const goNext = () => {
    if (finalItem + subArraySize > images.length) {
      setItemsNum([0, 4])
      setCurrentIndex(1)
    } else {
      setItemsNum([initialItem + subArraySize, finalItem + subArraySize])
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goPrev = () => {
    if (initialItem < 1) {
      setItemsNum([images.length - subArraySize, images.length])
      setCurrentIndex(subArrays.length)
    } else {
      setItemsNum([initialItem - subArraySize, finalItem - subArraySize])
      setCurrentIndex(currentIndex - 1)
    }
  }

  console.log('currentIndex', currentIndex)

  const changeSlide = (indx) => {
      setItemsNum([subArraySize * indx - subArraySize, subArraySize * indx])
      setCurrentIndex(indx)
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
                Array(images.length/subArraySize).fill(0).map((item, index) => {
                  if (index + 1 === currentIndex)
                    return (
                      <Button
                        key={index}
                        type='primary'
                        shape='circle'
                        size='small'
                      >
                        {index + 1}
                      </Button>
                    )
                  else return (
                    <Button
                      key={index}
                      type='primary'
                      shape='dashed'
                      size='small'
                      onClick={() => changeSlide(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  )
                })
              }
            </div>

          </Col>
        </Row>


        {/* 
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

   */}


      </div>
    )
  }

  export default CarouselComp

  const arrayOriginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const arrayModificado = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9]]