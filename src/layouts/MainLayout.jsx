import React, { useState } from 'react'
import HeaderComp from '../components/Header'
import FooterComp from '../components/Footer'
import SideMenu from '../components/SideMenu'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const siteTitle= 'MyTinerary'
  const slogan = 'Find your perfect trip'
  const logo = '/travel-black.svg'

  const [navKey, setNavKey] = useState('home')
  const selectNavKey = (e) => {
    setNavKey(e.key)
  }

  return (
    <>
      <HeaderComp navKey={navKey} selectKey={selectNavKey}/>
      <SideMenu />
      <Outlet context={[navKey, setNavKey]} />
      <FooterComp 
      title= {siteTitle}
      slogan= {slogan}
      logo={logo}
      />
    </>
  )
}

export default MainLayout