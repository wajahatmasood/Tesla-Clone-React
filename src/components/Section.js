import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
//import { Bounce, bounce } from "react-awesome-reveal";


function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom >
  <ItemText>
    <h1>{title}</h1>
    <p>{description}</p>
  </ItemText>
<Button>
  <ButtonGroup>
        
          <LeftButton>
             {leftBtnText}
          </LeftButton>

        {/*This say if Right button has content than this will button will dsiplay othewise other button will appear */}
        {rightBtnText &&  
            <RightButton>
            {rightBtnText}
     </RightButton>

        }
        
  </ButtonGroup>
  <DownArrow src="/images/down-arrow.svg"></DownArrow>
  </Button>
  </Fade>

        </Wrap>
  )
}

export default Section
const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: url('/images/model-s.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display:flex;
flex-direction: column;
flex-wrap: wrap;
justify-content:space-between;
align-items:center;
background-image:${props=>`url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
padding-top: 16vh;
text-align: center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom : 16px;
gap:1rem;
@media(max-width:768px){
    flex-direction:column;
}
`
const LeftButton = styled.div   
`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size: 12px;
cursor: pointer;

`
const RightButton = styled(LeftButton)   
`
background-color:white;
color: black;

`
const DownArrow = styled.img 
`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;

`
const Button = styled.div
`
`