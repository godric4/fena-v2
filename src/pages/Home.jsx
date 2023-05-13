import React from 'react'
import styled from 'styled-components'
import { NavLinks } from '../components'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import bg from '../assets/bg.jpg'

const Home = () => {
  return (
    <Wrapper>
     <div className="container hero">
      <h2 className='name'>
       <Link to="/">
       Godric Marto
       </Link>
      </h2>
      <p className='text-intro'>I'm a <span>
       Web Developer
       </span> based in Lagos</p>
      <NavLinks />
      <div className="social-icons">
       <Link to="/" className='icon'>
        <FaTwitter />
       </Link>
        <Link to="/" className='icon'>
        <FaWhatsapp />
       </Link>
        <Link to="/" className='icon'>
        <FaLinkedin />
       </Link>
        <Link to="/" className='icon'>
        <FaInstagram />
       </Link>
        <Link to="/" className='icon'>
        <FaFacebook />
       </Link>
      </div>
     </div>
    </Wrapper>
  )
}


const Wrapper = styled.main `
height: 100vh;
 background-image: url(${bg}) ;
 background-repeat: no-repeat;
 background-position: right bottom;
 background-size: contain;
 transition: var(--transition);
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 199;
 color: black;

 .hero {
  
  line-height: 1;
   transition: var(--transition);
 }

 
 .social-icons {
  display: flex;
  transition: var(--transition);
 }

 .social-icons a {
 font-size: 16px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    background: rgba(5, 56, 107, 0.9);
   
    color: var(--white);
    line-height: 1;
    margin-right: 18px;
    border-radius: 50%;
    width: 40px;
    height:40px;
 }

 .social-icons a:hover {
  background-color: chocolate;
 }

 .text-intro {
  font-size: 1.4rem;
 }

 .text-intro span {
  border-bottom: 4px solid var(--navy);
  font-style: italic;
 }

 /* Media Queries */
 @media screen and (max-width: 992px) {  
background-size: cover;
background-position: center;
position: relative;


  .name, .social-icons, .text-intro{
   text-align: center;
  }


  .social-icons{
   justify-content: center;
   align-items: center;
  }
  .hero {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 }

 

`

export default Home
