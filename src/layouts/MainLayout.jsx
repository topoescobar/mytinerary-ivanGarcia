import React from 'react'
import HeaderComp from '../components/Header'
import FooterComp from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const siteTitle= 'MyTinerary'
  const slogan = 'Find your perfect trip'
  const logo = '/travel-black.svg'

  return (
    <>
      <HeaderComp />
      <Outlet />
      <FooterComp 
      title= {siteTitle}
      slogan= {slogan}
      logo={logo}
      />
    </>
  )
}

export default MainLayout