import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Avatar, Button, Card, Col, Layout, Row, Skeleton, Spin } from 'antd'
import { EditOutlined, EllipsisOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons'
import './cities.css'
import { Content } from 'antd/es/layout/layout'

const { Meta } = Card

const Cities = () => {

  const params = useParams()
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)

  const columnSpacing = { xs: 0, sm: 5, md: 8 }
  const rowSpacing = { xs: 5, sm: 5, md: 6 }

  useEffect(() => {
    setTimeout(() => {
      axios('http://localhost:3001/api/events/')
        .then(res => setPlaces(res.data.res))
        .then(() => setLoading(false))
    }, 1000)
  }, [])

  return (
    <>
      <Layout>
        <Content className='bgTransp'>
          <div className='citiesContainer'>
            <h2 className='titleSecondary'>Choose your ideal destination </h2>
            <Skeleton loading={loading}>
              <Row justify={'space-evenly'} gutter={[columnSpacing, rowSpacing]}>
                {
                  places.map(city =>
                    <Col xs={24} sm={12} md={8}>
                      <Card
                        key={city._id}
                        loading={loading}
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

              </Row>
            </Skeleton>


            {/* <Button onClick={()=> console.log(places)}>Places</Button> */}

          </div>

        </Content>
      </Layout>
    </>
  )
}

export default Cities