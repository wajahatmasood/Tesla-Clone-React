// we use use 
import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const[burgerStatus,setBurgerStatus]= useState(false);


  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
        <Menu>
        <p> <a href="#"> Model S</a> </p>
        <p><a href="#"> Model3</a></p>
        <p><a href="#"> Model X</a></p>
        <p><a href="#"> Model Y</a></p>

        </Menu>
        <RightMenu>
          <a href="#">Shop Now</a>
          <a href="#">Tesla Account</a>
          <CustomeMenu onClick= {()=> setBurgerStatus(true)}/>
        </RightMenu>
        
        <BurgerNav show = {burgerStatus}>
          <CloseWraper>
          <CustomClose onClick= {()=> setBurgerStatus(false)} />
          </CloseWraper>
    <li><a href="#"> Existing Inventory </a></li>
    <li><a href="#"> ExistingItem 1 </a></li>
    <li><a href="#"> Existing item 2 </a></li>
    <li><a href="#"> Existing item 3 </a></li>
    <li><a href="#"> Existing item 4 </a></li>
    <li><a href="#"> Existing item 4 </a></li>
    <li><a href="#"> Existing item 6 </a></li>
    <li><a href="#"> Existing item 7 </a></li>
        </BurgerNav>
    </Container>
  )
}
export default Header
const Container = styled.div
`
z-index :1;


min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content: space-between;
padding:0 20px;
top:0;
left:0;
right: 0;
`
const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    
   a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
   }
   @media(max-width: 768px){
    display:none;
}
   
        `
        const RightMenu = styled.div
        `
        display: flex; 
        align-item: center;
    
        a{
          font-weight:600;
          text-transform:uppercase;
          margin-right:10px;
          
          
     }
        `
        const CustomeMenu = styled(MenuIcon)
        `
            cursor: pointer;

        `
        const CustomClose = styled(CloseIcon)`
        cursor : pointer;
        `
        const CloseWraper = styled.div`
        display:flex;
        justify-content:flex-end;
        `
        const BurgerNav = styled.div
        `
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      background:white;
      width:300px;
      z-index:16;
      list-style:none;
      padding:20px;
      display:flex;
      flex-direction:column;
      text-align:start;

      li{
      
         padding:15px;
         border-bottom:1px solid rgba(0,0,0,.2);
      }
      a{
      
         font-weight:600; 
        }
        // this statement says that if props.show is true
        transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
        transition:transform 0.2s ;
        `
