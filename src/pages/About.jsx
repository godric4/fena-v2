import React from 'react'
import styled from 'styled-components'
import {Footer, Navbar, PageTitle } from '../components'

const About = () => {
 const title = 'About'
 const description = 'Know me '
 
  return (
   <Wrapper className='page-wrapper'>
   <Navbar />
   <div className="page-container container">
    <PageTitle title={title} description={description} />
    <div className="about-container">
     
    </div>
   
    
   </div>
   <Footer />
  </Wrapper>
  )
}


const Wrapper = styled.section `
 
`

export default About
