import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Anchor, Button, Layout, Menu } from 'antd'
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
      <Layout>
        <Header>
          <Link>
            <div className='containerFlex'>
              <img src="/travel-color.svg" className='navIcon' />
              <h1>My Tinerary</h1>
            </div>
          </Link>

          <div className='containerFlex'>
            <Menu mode="horizontal" items={menuItems} />

            <Button className='loginBtn' type='primary' icon={<UserOutlined />} >
              Login
            </Button>
          </div>

        </Header>
      </Layout>
    </>
  )
}

export default HeaderComp