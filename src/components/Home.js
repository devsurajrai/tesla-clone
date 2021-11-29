import React from 'react';
import styled from "styled-components"
import Section from "./Section"


let propsData=[
    {
        title:"Model S",
          description:"Order Online For Touchless Delivery",
          LeftButtonText:"Custom Order",
          RightButtonText:"Custom Inventory",
          backgroundImage:"model-s.jpg",
    },{
        title:"Model Y",
          description:"Order Online For Touchless Delivery",
          LeftButtonText:"Custom Order",
          RightButtonText:"Custom Inventory",
          backgroundImage:"model-y.jpg",
    },{
        title:"Model 3",
          description:"Order Online For Touchless Delivery",
          LeftButtonText:"Custom Order",
          RightButtonText:"Custom Inventory",
          backgroundImage:"model-3.jpg",
    },{
        title:"Model X",
          description:"Order Online For Touchless Delivery",
          LeftButtonText:"Custom Order",
          RightButtonText:"Custom Inventory",
          backgroundImage:"model-x.jpg",
    },{
        title:"Solar Panels",
          description:"Lowest Cost Solar Panels in America",
          LeftButtonText:"Order Now",
          RightButtonText:"Learn More",
          backgroundImage:"solar-panel.jpg",
    },
    {
        title:"Solar Roof",
          description:"Produce Clean Energy From Your Roof",
          LeftButtonText:"Order Now",
          RightButtonText:"Learn More",
          backgroundImage:"solar-roof.jpg",
    },
    {
        title:"Accessories",
          description:"",
          LeftButtonText:"Order Now",
          RightButtonText:"",
          backgroundImage:"accessories.jpg",
    }
]

function Home() {
    return (
        <Container>
         {propsData.map((data)=>{
             return <Section {...data}/>
         })}
        </Container>
    )
}

export default Home

const Container=styled.div`
height:100vh
`