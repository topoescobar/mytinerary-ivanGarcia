import { Button, Col, Image, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import './carousel.css'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'

const CarouselComp = ({ images, title }) => {

  //current slide number (set of 4 photos) 
  const [currentIndex, setCurrentIndex] = useState(1)
  //number of the first and last picture of the slide
  const [itemsNumber, setItemsNum] = useState([0, 4])
  //array images divided in sub arrays of 4 objects for slides
  const [subArrays, setSubArrays] = useState([])
  //stop autoplay
  const [isClicked, setIsClicked] = useState(false)

  const [initialItem, finalItem] = itemsNumber
  const subArraySize = 4

  //creation of sub arrays
  useEffect(() => {
    for (let i = 0; i < images.length; i += subArraySize) {
      let subArray = images.slice(i, i + subArraySize)
      setSubArrays(...subArrays, subArray)
    }
  }, [])

  //autoplay
  useEffect(() => {
    if (!isClicked) {
      let intervalID = setInterval(() => {
        goNext()
      }, 2000)
      return () => {      
        clearInterval(intervalID)
      }
    }
  }, [currentIndex])

  //ARROW buttons: changes the slide index and the selection of the 4 corresponding pictures numbers
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
      setCurrentIndex(subArrays.length - 1)
    } else {
      setItemsNum([initialItem - subArraySize, finalItem - subArraySize])
      setCurrentIndex(currentIndex - 1)
    }
  }

  //BULLET buttons fn: changes slide index and picture numbers 
  const changeSlide = (indx) => {
    setItemsNum([subArraySize * indx - subArraySize, subArraySize * indx])
    setCurrentIndex(indx)
  }

  const handleClick = () => {
    setIsClicked(true)
  }


  return (
    <div className='carouselContent'>
      <h3 className='carouselTitle'>{title}</h3>
      <div className='containerFlex'>

        <LeftCircleFilled onClick={() => {goPrev(); handleClick()}} />
        <div className='gridContainer'>
          { // show slide (4 pictures)
            images.slice(initialItem, finalItem).map((img) => {
              return (
                <div className='carouselElement' key={img.id}>
                  <Image width={250} src={img.imgUrl} alt={img.alt} />
                  <p className='carouselText'> {img.id}- {img.title}, {img.description}</p>
                </div>
              )
            })
          }
        </div>
        <RightCircleFilled onClick={() => {goNext(); handleClick()}}/>

      </div>

      <Row justify="center">
        <Col xs={24} sm={12}>
          <div className='bulletContainer'>
            {
              Array(images.length / subArraySize).fill(0).map((item, index) => {
                if (index + 1 === currentIndex)
                  return (
                    <Button
                      key={index}
                      type='primary'
                      shape='circle'
                      size='middle'
                    >
                      {index + 1}
                    </Button>
                  )
                else return (
                  <Button
                    key={index}
                    type='primary'
                    shape='dashed'
                    size='middle'
                    onClick={() => {changeSlide(index + 1); handleClick()}}
                  >
                    {index + 1}
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
