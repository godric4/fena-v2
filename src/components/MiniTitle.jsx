import React from 'react'
import styled from 'styled-components'

const MiniTitle = ({name}) => {
  return (
    <Wrapper>
     <div className="title">
        <h4>{name}</h4>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
 
.title{
  padding-top: 1rem;
 }

 .title h4{
  text-transform: uppercase;
  font-size: 14px;
  line-height: 0.5;
  font-weight: 500;
   color: var(--navy);
 }

 

 .title h4::after {
     content: "";
    width: 100px;
    height: 3px;
    display: inline-block;
    background: chocolate;
    margin: 0px 10px;
 }


`

export default MiniTitle
