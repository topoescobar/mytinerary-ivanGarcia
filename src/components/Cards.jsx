import React from 'react'
import { EllipsisOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Card, Col } from 'antd'
const { Meta } = Card

const Cards = ({ city }) => {
  return (
    <Col xs={24} sm={12} md={8} >
      <Card
        cover={<img alt={city.alt} src={city.imgUrl} />}
        actions={[
          <EllipsisOutlined key='ellipsis' />,
          <PlusCircleOutlined key='plus' />
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