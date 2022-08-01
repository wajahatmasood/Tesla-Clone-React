import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (

   
    <Container>
      <Section 
      title="Model-S"
      description="Order Online Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section 
      title="Model-X"
      description="Order Online Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"/>
      <Section
      title="Model-3"
      description="Order Online Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
        <Section
      title="Model-Y"
      description="Order Online Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section 
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarante"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      
      />

      <Section 
      title="Solar for New Roofs"
     description="Solar Roof Costs Less ThanaNewR"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      />
  <Section 
      title="Accessories"
      backgroundImg="accessories.jpg"
      leftBtnText="Buy now"
      /> 
    </Container>
  )
}

export default Home
const Container = styled.div`
height: 100vh;
`