import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg";
import { useCartContext } from "../Context/CartContext";
// import {useAuth0, Auth0Provider} from 'react-native-auth0';

const Navv = styled.nav`
.navbar-lists {
  display: flex;
  gap: 4.8rem;
  align-items: center;

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 2.3rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
}
.mobile-navbar--btn {
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: ${({ theme }) => theme.colors.black};
}
.mobile-nav--icon[name="close-outline"] {
  display: none;
}
.close-outline {
  display: none;
}
.cart-trolley--link {
  position: relative;

  .cart-trolley {
    position: relative;
    font-size: 2.2rem;
  }
  .cart-total--item {
    width: 2.9rem;
    height: 2.3rem;
    position: absolute;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: -20%;
    left: 80%;
    background-color: ${({ theme }) => theme.colors.helper};
  }
}
.user-login--name {
  text-transform: capitalize;
}
.user-logout,
.user-login {
  font-size: 1.4rem;
  padding: 0.8rem 1.4rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .mobile-navbar--btn {
    display: inline-block;
    z-index: 9999;
    border: ${({ theme }) => theme.colors.black};

    .mobile-nav--icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .active .mobile-nav--icon {
    display: none;
    font-size: 4.2rem;
    position: absolute;
    ${'' /*  below 30,10  earlier*/}
    top: 1%;   
    right: 0%;
    color: ${({ theme }) => theme.colors.black};
    z-index: 9999;
  }
  .active .close-outline {
    display: inline-block;
    

  }
  .navbar-lists {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s linear;
  }
  .active .navbar-lists {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    transition: all 0.3s linear;

    .navbar-link {
      font-size: 4.2rem;
    }
  }
  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 5.2rem;
    }

    .cart-total--item {
      width: 4.2rem;
      height: 4.2rem;
      font-size: 2rem;
    }
  }

  .user-logout,
  .user-login {
    font-size: 2rem;
    padding: 0.8rem 1.4rem;
  }
}
`;


const Nav = () => {

  const [menuIcon,setMenuIcon]=useState();
  const { total_item } = useCartContext();

  

  return (
    <Navv>
        <div className={menuIcon? 'navbar active' : 'navbar'}>
            <ul className='navbar-lists'>
                <li>
                    <NavLink to={'/'} className='navbar-link home-link' onClick={()=>setMenuIcon(false)}   >Home</NavLink>
                </li>

                <li>
                    <NavLink to={'/about'} className='navbar-link ' onClick={()=>setMenuIcon(false)}  >About</NavLink>
                </li>

                <li>
                    <NavLink to={'/products'} className='navbar-link ' onClick={()=>setMenuIcon(false)}  >Products</NavLink>
                </li>

                <li>
                    <NavLink to={'/contact'} className='navbar-link ' onClick={()=>setMenuIcon(false)}  >Contact</NavLink>
                </li>

                <li>
                    <NavLink to={'/cart'} className='navbar-link  cart-trolley--link' onClick={()=>setMenuIcon(false)} >
                        <FiShoppingCart className='cart-trolley'  />
                        <span className='cart-total--item' >{total_item}</span>
                    </NavLink>
                </li>

                <li></li>

            </ul>

            {/* two buttons for opening and closing the menu for mobile resposinsiveness */}

            <div className='mobile-navbar--btn'>
                <CgMenu name='menu-outline' className='mobile-nav--icon' onClick={()=>setMenuIcon(true)}  />
                <CgClose name='close-outline' className='mobile-nav--icon close-outline' onClick={()=>setMenuIcon(false)} />
            </div>


        </div>
    </Navv>
  )
}

export default Nav