import React from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
function Section({title,description,LeftButtonText,RightButtonText,backgroundImage}) {
    return (

       <Wrap bgImage={`url("/images/${backgroundImage}")`}>

            <Fade bottom>
            <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
            </ItemText></Fade>
            <Fade bottom>
            <Buttons>
            <ButtonGroup>
            <LeftButton>{LeftButtonText}</LeftButton>
            {RightButtonText&&
                <RightButton>{RightButtonText}</RightButton>
            }

            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" /></Buttons></Fade>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props=>props.bgImage}


`

const ItemText=styled.div`
text-align:center;
padding:15vh
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
cursor:pointer;
@media (max-width:768px){
    flex-direction:column
}
`

const LeftButton=styled.div`

background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
margin:10px;
opacity:0.85;
text-transform:uppercase;
font-size:12px
`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65
`
const DownArrow=styled.img`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;

`

const Buttons=styled.div`
display:flex;
flex-direction:column;
jutify-content:center
`
