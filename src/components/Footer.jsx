import { Footer } from 'antd/es/layout/layout'
import React from 'react'

const FooterComp = ({ title, slogan, logo }) => {
  return (
    <>
      <Footer>
        <span className='appName' > {title} </span> <p> {slogan} </p>
      </Footer>
    </>
  )
}

export default FooterComp