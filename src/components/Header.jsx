import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Anchor, Button, Layout, Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
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
      <Header style={{ display: 'flex', alignItems: 'center'}} >
      <h1>My Tinerary</h1>
      
      <div className='nav_menu'>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
        />
        
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