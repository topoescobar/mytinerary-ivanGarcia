import React from "react"
import Card from "../components/Card"
import CarouselComp from "../components/Carousel"
import HeaderAndFooter from "../layouts/HeaderAndFooter"
import Layout from 'antd/es/layout/layout'
import SideMenu from '../components/SideMenu'
import { Col, Row } from 'antd'
import './home.css'

const HomePage = () => {
  return (
    <>
      <HeaderAndFooter>
        <Layout >

          <SideMenu />
          <Card />
          <CarouselComp />
          <CarouselComp />
          <CarouselComp />
          <CarouselComp />

        </Layout>
      </HeaderAndFooter>
    </>
  )
}

export default HomePage
