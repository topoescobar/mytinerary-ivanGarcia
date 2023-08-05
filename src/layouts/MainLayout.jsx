import React from 'react'
import { Content } from 'antd/es/layout/layout'
import HeaderComp from '../components/Header'
import FooterComp from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderComp />
      <Content>
        {
          children
        }
      </Content>
      <FooterComp />

    </>
  )
}

export default MainLayout