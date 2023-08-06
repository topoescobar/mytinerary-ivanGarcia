import React, { useState } from 'react'
import { Button, Menu } from 'antd'
import { ContainerOutlined, DesktopOutlined, MailOutlined,
   MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7')
  ]),
]

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='sideMenu'>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={[]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        
      />
    </div>
  )
}
export default SideMenu