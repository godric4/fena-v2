import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const links = [
 {
  id:1,
  name: "home",
  path:"/"
 },
 {
  id:2,
  name: "about",
  path: '/about'
 },
  {
   id:3,
  name: "services",
  path:"/services"
 },
  {
   id:4,
  name: "portfolio",
  path:"/portfolio"
 },
  {
   id:5,
  name: "contact",
  path:"/contact"
 },
]

console.log(links);

const NavLinks = () => {
 return (
  <Wrapper>
  <ul className="nav-links">
     {
  links.map((link) => {
   const {id, name, path} = link
  return <li className="link" key={id}>
   <Link to={path}>{name} </Link>
  </li>
  })
 }
  </ul>
  </Wrapper>
 )
}

const Wrapper = styled.div `
 transition: var(--transition);

    a:hover {
    color: chocolate;
    font-weight: 400;
    transition: var(--transition);

   }   


 .nav-links {
  display: flex;
  margin-left: -3rem;



  li {
   list-style-type: none;
   margin: 1rem;
  }
 }


 @media screen and (max-width: 992px) {
 display: none;
 }

`

export default NavLinks
