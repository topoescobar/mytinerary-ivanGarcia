import React from 'react'
import HeaderComp from '../components/Header'
import FooterComp from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <FooterComp />
    </>
  )
}

export default MainLayout