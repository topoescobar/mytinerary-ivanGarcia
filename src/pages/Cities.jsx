import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Avatar, Button, Card, Col, Layout, Row } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import './cities.css'
import { Content } from 'antd/es/layout/layout'

const { Meta } = Card

const Cities = () => {

  const params = useParams()
  const [places, setPlaces] = useState([])

  const columnSpacing = { xs: 0, sm: 4, md: 8 }
  const rowSpacing = { xs: 1, sm: 3, md: 6 }

  useEffect(() => {
    axios('http://localhost:3001/api/events/')
      .then(res => setPlaces(res.data.res))
  }, [])

  return (
    <>
      <Layout>
        <Content className='bgTransp'>
          <div className='citiesContainer'>
            <h2 className='titleSecondary'>Choose your ideal destination </h2>
            <Row justify={'space-evenly'} gutter={[columnSpacing, rowSpacing]}>
              {
                places.map(city =>
                  <Col xs={24} sm={12} md={8}>
                    <Card
                      key={city._id}
                      style={{ height: 350 }}
                      cover={<img alt={city.alt} src={city.imgUrl} />}
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
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

            </Row>

            {/* <Button onClick={()=> console.log(places)}>Places</Button> */}

          </div>

        </Content>
      </Layout>
    </>
  )
}

export default Cities