import React from "react"
import { Button, Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content } from "antd/es/layout/layout"
import Card from "../components/Card"
import HeaderComp from "../components/Header"
import FooterComp from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <HeaderComp />

      <Layout>
        <Content>
          <Card></Card>
        </Content>
      </Layout>

      <FooterComp />
    </>
  )
}

export default HomePage
