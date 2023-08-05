import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Anchor, Button, Layout, Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Link from 'antd/es/typography/Link'
import React from 'react'

const HeaderComp = () => {
  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: 'Cities',
      key: 'cities',
      icon: <GlobalOutlined />
    }
  ]

  return (
    <>
      <Layout>
        <Header>
          <Link>
            <h1>My Tinerary</h1>
          </Link>

          <div className='nav_menu'>
            <Menu mode="horizontal" items={items} />

            <Button type="primary" icon={<UserOutlined />} >
              Login
            </Button>
          </div>

        </Header>
      </Layout>
    </>
  )
}

export default HeaderComp