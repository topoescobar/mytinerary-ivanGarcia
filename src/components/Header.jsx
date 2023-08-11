import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Menu, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderComp = ({navKey, selectKey}) => {

  const menuItems = [
    {
      label: (<Link to={'/'} > Home </Link>),
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: (<Link to={'/cities'} > Cities </Link>),
      key: 'cities',
      icon: <GlobalOutlined />
    }
  ]

  return (
    <>
      < >
        <Header className='header'>
          <Row >
            <Col xs={24} sm={24} md={10} lg={10}>
              <Link to={'/'}>
                <div className='containerFlex'>
                  <img src="/travel-white.svg" className='navIcon' />
                  <h1 className='appName'>My Tinerary</h1>
                </div>
              </Link>
            </Col>
            <Col xs={0} sm={0} md={14} lg={14}>
              <div className='containerFlex'>
                <Menu mode="horizontal" onClick={selectKey} selectedKeys={[navKey]} items={menuItems} className='navMenu' />

                <Button className='loginBtn' type='primary' icon={<UserOutlined />} >
                  Login
                </Button>
              </div>
            </Col>
          </Row>

        </Header>
      </>
    </>
  )
}

export default HeaderComp