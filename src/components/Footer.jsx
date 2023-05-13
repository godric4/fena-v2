import React from 'react'
import styled from 'styled-components'

const Footer = () => {
 return (
  <Wrapper>
   <p className=''>
    Godric "FENA" Marto <br /> <span>Inspired by Personal@BootstrapMade</span>
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

p {
 line-height: 1;
}
`
export default Footer
