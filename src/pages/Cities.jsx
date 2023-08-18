import { Layout } from 'antd'
import React, { useEffect } from 'react'
import './cities.css'

const Cities = () => {

  const [places, setPlaces] = useEffect([])

  useEffect(() => {
     ('http://localhost:3001/api/events/')
  })

  return (
    <Layout>
      <div className='containerFlex bgTransp citiesContainer'>
        <h2> Page under construction </h2>
      </div>
    </Layout>
  )
}

export default Cities