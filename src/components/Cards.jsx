import React from 'react'
import { EllipsisOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Card, Col } from 'antd'
import { Navigate, useNavigate } from 'react-router-dom'
const { Meta } = Card

const Cards = ({ city }) => {
  const navigate = useNavigate()
  const goDetails = () => {
    navigate('/city/' + city._id)
    console.log('id', city._id)
  }

  return (
    <Col xs={24} sm={12} md={8} >
      <Card
        cover={<img alt={city.alt} src={city.imgUrl} />}
        actions={[
          <EllipsisOutlined key='ellipsis' />,
          <PlusCircleOutlined key='plus' onClick={goDetails} />
        ]}
      >
        <Meta
          title={city.title}
        // description={city.description}
        />
      </Card>
    </Col>
  )
}

export default Cards