import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Wrapper >
     <div className="container">
    <div className="name">
    <Link to="/">  Godric Marto</Link>
     </div>
     <div className="">
      <NavLinks />
     </div>
     <button className="nav-toggle">
      <FaBars />
     </button>
     </div>   
    </Wrapper>
  )
}

const Wrapper = styled.nav `
  background: rgba(5, 56, 107, 0.9);
 position: fixed;
  top: 0;
  width: 100%;
  z-index: 199;
 .container {
  display: flex;
 justify-content: space-between; 
 height: 4rem;
 color: white;
 transition: var(--transition);
 }

 .name {
  color: white;
  font-size: 38px;
    font-weight: 700;
    font-family: 'lobster';
 }
 

 .nav-toggle {
  background: transparent;
 margin-top: -.5rem;

  color: white;
  border: none;
  font-size: 2rem;
  display: none;
 }

@media screen and (max-width: 992px) {
 .nav-toggle {
  display: block;
 }
 }

`

export default Navbar
