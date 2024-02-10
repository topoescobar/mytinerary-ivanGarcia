import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Button, Card, Col, Input, Layout, Row, Skeleton, Spin } from 'antd'
import { EditOutlined, EllipsisOutlined, PlusCircleOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import './cities.css'
import { Content } from 'antd/es/layout/layout'
import Cards from '../components/Cards'
import { getAllPlaces } from '../services/getAllPlaces.js'
import {getByQuery} from '../services/getByQuery.js'
import ButtonGroup from 'antd/es/button/button-group.js'

const { Meta } = Card

const Cities = () => {

  const params = useParams()
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredPlaces, setfilteredPlaces] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const inputSearch = useRef(null)

  const columnSpacing = { xs: 0, sm: 5, md: 8 }
  const rowSpacing = { xs: 5, sm: 5, md: 6 }
  const { Search } = Input

  useEffect(() => {
    setTimeout(() => { // simulates 500ms async loading
      getAllPlaces() // funcion asincrona devuelve promesa sin resolver si no se usa el .then
        //.then(array => setPlaces(array)) // promesa resuelta
        .then(setPlaces) // forma alternativa simplificada
        .then(() => setLoading(false))
    }, 500)
  }, [])

  const searchFn = (event, array) => {
    let searchValue = event.target.value
    console.log(searchValue)
    console.log(array)
    let filteredArray = array.filter(place =>
      place.title.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    setfilteredPlaces(filteredArray)
  }

/*   const handleEnter = (ev) => {
    let search = ev.target.value
    console.log('search', search)
    //getByQuery(`?title=${search}`)
    getByQuery().then(res=> console.log(".then response",res))
  } */

  const handleClick = () => {
    let search = inputSearch.current.value
    console.log("search inpt",search )
    let query = "?title="
    getByQuery(query+search).then(setPlaces)
  }


  return (
    <>
      <Layout>
        <Content className='bgTransp'>
          <div className='containerFlex citiesContainer'>
            <h2 className='titleSecondary'>Choose your ideal destination </h2>

            <Input
              prefix={<SearchOutlined style={{ fontSize: '16px' }} />}
              className='inputSearch'
              placeholder='Search in frontend'
              onChange={(val) => searchFn(val, places)}
            />

            <input 
            className='inputSearch'
            ref={inputSearch} //evita re-renderizado mientras escribe
            placeholder='Search in backend'
            //onPressEnter={(val) => handleEnter(val)}
            />
            <button
            onClick={handleClick}
            >Buscar</button>
     
        
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