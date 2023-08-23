import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Avatar, Button, Card, Col, Input, Layout, Row, Skeleton, Spin } from 'antd'
import { EditOutlined, EllipsisOutlined, PlusCircleOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import './cities.css'
import { Content } from 'antd/es/layout/layout'
import Cards from '../components/Cards'

const { Meta } = Card

const Cities = () => {

  const params = useParams()
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredPlaces, setfilteredPlaces] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const columnSpacing = { xs: 0, sm: 5, md: 8 }
  const rowSpacing = { xs: 5, sm: 5, md: 6 }
  const { Search } = Input

  const searchFn = (event, array) => {
    let searchValue = event.target.value
    console.log(searchValue)
    console.log(array)
    let filteredArray = array.filter(place =>
      place.title.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    setfilteredPlaces(filteredArray)
  }

  useEffect(() => {
    setTimeout(() => { // simulates 500ms async loading
      axios('http://localhost:3001/api/events/')
        .then(response => setPlaces(response.data.res))
        .then(() => setLoading(false))
    }, 500)
  }, [])

  return (
    <>
      <Layout>
        <Content className='bgTransp'>
          <div className='containerFlex citiesContainer'>
            <h2 className='titleSecondary'>Choose your ideal destination </h2>

            <Input
              prefix={<SearchOutlined style={{ fontSize: '16px' }} />}
              className='inputSearch'
              placeholder='City name'
              onChange={(val) => searchFn(val, places)}
            />

            <Skeleton loading={loading}>
              <Row justify={'space-evenly'} gutter={[columnSpacing, rowSpacing]}>
                {
                  filteredPlaces.length > 0 ?
                    filteredPlaces.map(city =>
                      <Cards key={city._id} city={city} />
                    ) : places.map(city =>
                      <Cards key={city._id} city={city} />
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