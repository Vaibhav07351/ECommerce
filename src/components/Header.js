import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav"


const MainHeader = styled.header` 
 height: 5.3rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;
const Header = () => {
  return (
    <MainHeader>

        <NavLink to={'/'}>
            <img className='logo' src='./images/logo5.png' alt='Logo Image'  />
        </NavLink>

        <Nav/>
    </MainHeader>
  )
}

export default Header