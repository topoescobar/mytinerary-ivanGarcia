import React from "react"
import Card from "../components/Card"
import CarouselComp from "../components/Carousel"
import HeaderAndFooter from "../layouts/MainLayout"
import Layout from 'antd/es/layout/layout'
import SideMenu from '../components/SideMenu'
import { Col, Row } from 'antd'
import './home.css'

const places = [
  { id: 1,  title:'Roma', description:'Italia', alt: 'roma', imgUrl: '/places/roma.jpg' },
  { id: 2 ,  title:'Kyoto', description:'Japan', alt: 'kyoto', imgUrl: '/places/kioto.jpg' },
  { id: 3 ,  title:'Paris', description:'France', alt: 'paris', imgUrl: '/places/paris.jpg' },
  { id: 4 ,  title:'Prague', description:'Czech Republic', alt: 'Prague', imgUrl: '/places/prague.jpg' },
  { id: 5 ,  title:'Sevilla', description:'Spain', alt: 'sevilla', imgUrl: '/places/sevilla.jpg' },
  { id: 6 ,  title:'London', description:'England', alt: 'london', imgUrl: '/places/london.jpg' },
  { id: 7 ,  title:'Petra', description:'Jordan', alt: 'petra', imgUrl: '/places/petra.jpg' },
  { id: 8 ,  title:'Oia', description:'Greece', alt: 'oia', imgUrl: '/places/oia.jpg' },
  { id: 9 ,  title:'New York', description:'United States', alt: 'new-york', imgUrl: '/places/new_york.jpg' },
  { id: 10 ,  title:'Sydney', description:'Australia', alt: 'sydney', imgUrl: '/places/sydney.jpg' },
  { id: 11 ,  title:'Venice', description:'Italy', alt: 'venice', imgUrl: '/places/venice.jpg' },
  { id: 12 ,  title:'Barcelona', description:'Spain', alt: 'barcelona', imgUrl: '/places/barcelona.jpg' },
]

const carouselName = 'Popular Mytineraries'


const HomePage = () => {
  return (
    <>
        <Layout >
          <Card />
          <CarouselComp images={places} title={carouselName}/>
        </Layout>
    </>
  )
}

export default HomePage
