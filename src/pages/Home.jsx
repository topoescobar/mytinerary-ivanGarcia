import React from "react"
import Card from "../components/Card"
import CarouselComp from "../components/Carousel"
import MainLayout from "../layouts/MainLayout"

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Card />
        <CarouselComp />
      </MainLayout>
    </>
  )
}

export default HomePage
