import React from 'react'
import styled from 'styled-components'

const Footer = () => {
 return (
  <Wrapper>
   <p>
    devgodric @fena_ webworks Copyright &copy;
    {new Date().getFullYear()}{' '} <br /> <span>Inspired by Personal@BootstrapMade</span>
   </p>
  </Wrapper>
 )
}

const Wrapper = styled.footer`
  background-color: var(--navy);
  color: white;
  height: 4rem; 
  text-align: center;
padding: 1rem;
`
export default Footer
