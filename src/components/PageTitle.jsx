import React from 'react'
import styled from 'styled-components'

const PageTitle = ({title, description}) => {
  return (
    <Wrapper>
     <div className="title">
        <h4>{title}</h4>
        <h2>{description}</h2>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
 margin-top: 4rem;

.title{
  padding-top: 1rem;
 padding-left: 1rem;
 }

 .title h4{
  text-transform: uppercase;
  font-size: 14px;
  line-height: 0.5;
  font-weight: 500;
   color: chocolate;
 }

 .title h2 {
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 36px;
   text-transform: uppercase;
   color: var(--navy);
  }

 .title h4::after {
     content: "";
    width: 100px;
    height: 3px;
    display: inline-block;
    background: chocolate;
    margin: 4px 10px;
 }


`

export default PageTitle
