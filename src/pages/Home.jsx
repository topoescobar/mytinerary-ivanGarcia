import React from "react"
import Card from "../components/Card"
import CarouselComp from "../components/Carousel"
import HeaderAndFooter from "../layouts/HeaderAndFooter"
import Layout from 'antd/es/layout/layout'
import SideMenu from '../components/SideMenu'
import { Col, Row } from 'antd'
import './home.css'

const places = [
  { id: 1,  title:'Roma', description:'Italia', alt: 'roma', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Roma_.jpg' },
  { id: 2 ,  title:'Kioto', description:'Japan', alt: 'kioto', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Kioto_.jpg' },
  { id: 3 ,  title:'Paris', description:'France', alt: 'paris', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Par%C3%ADs.jpg' },
  { id: 4 ,  title:'Prague', description:'Czech Republic', alt: 'Prague', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Praga_.jpg' },
  { id: 5 ,  title:'Sevilla', description:'Spain', alt: 'sevilla', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Sevilla.jpg' },
  { id: 6 ,  title:'London', description:'England', alt: 'london', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Londres.jpg' },
  { id: 7 ,  title:'Petra', description:'Jordan', alt: 'petra', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Petra_.jpg' },
  { id: 8 ,  title:'Oia', description:'Greece', alt: 'oia', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Oia_.jpg' },
  { id: 9 ,  title:'New York', description:'United States', alt: 'new-york', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Nueva-York.jpg' },
  { id: 10 ,  title:'Sidney', description:'Australia', alt: 'sidney', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/08/Ciudades-m%C3%A1s-bonitas-del-mundo.Sydney.jpg' },
  { id: 11 ,  title:'Venice', description:'Italy', alt: 'venice', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/09/ciudades-bonitas-6.jpg' },
  { id: 12 ,  title:'Barcelona', description:'Spain', alt: 'barcelona', imgUrl: 'https://elviajerofeliz.com/wp-content/uploads/2019/09/ciudades-bonitas-2.jpg' },
]

const carouselName = 'Popular Mytineraries'


const HomePage = () => {
  return (
    <>
      <HeaderAndFooter>
        <Layout >

          <SideMenu />
          <Card />
          <CarouselComp images={places} title={carouselName}/>

        </Layout>
      </HeaderAndFooter>
    </>
  )
}

export default HomePage
