import React,{useState} from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header() {
    const [burgerOpenCloseValue,setburgerOpenCloseValue]=useState(false)
    return (

       <Container>
        <a>
            <img src="/images/logo.svg" />
       </a>

       <LeftMenu>
    <a href="#">Model S</a>
    <a href="#">Model Y</a>
    <a href="#">Model 3</a>
    <a href="#">Model X</a>
    <a href="#">Solar Panels</a>
    <a href="#">Solar Roof</a>

       </LeftMenu>
       <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setburgerOpenCloseValue(true)}/>

       </RightMenu>
       <Burgernav burgerMenuOpenClose={burgerOpenCloseValue}>
       <SideMenuBarCloseWrapper>
       <SideMenuBarClose onClick={()=>setburgerOpenCloseValue(false)}/>
       </SideMenuBarCloseWrapper>

           <li><a href="#">Model S</a></li>
           <li><a href="#">Model 3</a></li>
           <li><a href="#">Model X</a></li>
           <li><a href="#">Model Y</a></li>
           <li><a href="#">Model Solar Roof</a></li>
           <li><a href="#">Model Solar Panels</a></li>
           <li><a href="#">Existing Inventory</a></li>
           <li><a href="#">Used Inventory</a></li>
           <li><a href="#">Trade In</a></li>
           <li><a href="#">Test Drive</a></li>
           <li><a href="#">Power Wall</a></li>
           <li><a href="#">Commercial Energy</a></li>
           <li><a href="#">Utilities</a></li>
           <li><a href="#">Charging</a></li>

           <More>
           <li>More</li>
           <MoreArrow />
           </More>

       </Burgernav>
       </Container>

    )
}

export default Header

const Container=styled.div`
min-height:60px;
display:flex;
align-items:center;
position:fixed;
padding-left:20px;
justify-content:space-between;
top:0;
left:0;
right:0;
z-index:100;
`

const LeftMenu=styled.div`
list-style-type:none;
display:flex;
align-items:center;
margin-left:10px;
font-weight:600;
justify-content:center;
flex:1;
a{
    padding:10px;
text-transform:uppercase;
@media (max-width:965px){
    display:none
}

}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
padding-right:20px;

a{
    align-items:center;
    font-weight:600;
    padding:3px;
    text-transform:uppercase;
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer`

const Burgernav=styled.ul`
position:fixed;
top:0;
bottom:0;
right:0;
list-style:none;
width:300px;
background:white;
font-weight:400;
z-indedx:10;
transform:${props=>props.burgerMenuOpenClose?'translateX(0%)':'translateX(100%)'};
transition: transform .2s ;

li{
    padding:10px 40px;
}


`

const SideMenuBarClose=styled(CloseIcon)`
cursor:pointer

`

const SideMenuBarCloseWrapper=styled.div`
display:flex;
justify-content:right;
padding:20px

`

const More=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding-right:40px
`

const MoreArrow=styled(ArrowForwardIosIcon)`
display:inline-block;
width:.5em

`