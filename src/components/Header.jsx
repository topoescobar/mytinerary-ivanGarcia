import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Anchor, Button, Col, Layout, Menu, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Link from 'antd/es/typography/Link'
import React from 'react'

const HeaderComp = () => {
  const menuItems = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: (<a href="" target="_blank" rel="noopener noreferrer">
        Cities </a>),
      key: 'cities',
      icon: <GlobalOutlined />
    }
  ]

  return (
    <>
      < >
        <Header>
          <Row >
            <Col xs={24} sm={24} md={10} lg={10}>
              <Link>
                <div className='containerFlex'>
                  <img src="/travel-white.svg" className='navIcon' />
                  <h1 className='appName'>My Tinerary</h1>
                </div>
              </Link>
            </Col>
            <Col xs={0} sm={0} md={14} lg={14}>
              <div className='containerFlex'>
                <Menu mode="horizontal" items={menuItems} />

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