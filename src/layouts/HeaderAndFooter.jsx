import React from 'react'
import HeaderComp from '../components/Header'
import FooterComp from '../components/Footer'

const HeaderAndFooter = ({ children }) => {
  return (
    <>
      <HeaderComp />
        {
          children
        }
      <FooterComp />

    </>
  )
}

export default HeaderAndFooter