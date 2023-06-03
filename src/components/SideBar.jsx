import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { links } from '../utils/data'

const Sidebar = () => {

 const [isSidebarOpen, setIsSidebarOpen] = useState(false)

 const openSidebar = () => {
  setIsSidebarOpen(true)
 }

 const closeSidebar = () => {
  setIsSidebarOpen(false)
 }

 return (
  <Wrapper>
   <div className="sidebar">
     {!isSidebarOpen ? (
      <button  onClick={openSidebar}>
         <FaBars />
      </button>
     ) :  (
      <>
       <button onClick={closeSidebar}>
         <FaTimes />
      </button>
      {/*  */}
      <ul className='sidebar-link'>
     {links.map((link) => {
      const { id, name, path } = link

      return (
       <li key={id}>
        <Link to={path} className='nav-link' onClick={closeSidebar}>
         {name}
        </Link>
       </li>
      )
     })}
    </ul>
      </>
     )}
   </div>
    </Wrapper>
 )
}

const Wrapper = styled.aside`

  .sidebar {
   position: fixed;
   top: 0rem;
<<<<<<< HEAD
   right: 2rem;
=======
  
>>>>>>> 0c418201dee32f38109338f2707d13f6eac0ed5b
   width: -100%;
   transform: translateZ(0);
   -webkit-transform: translateZ(0);
   transition: var(--transition);
    z-index: 1000;


    button {
     background: transparent;
  color: chocolate;
  border: none;
  font-size: 2rem;
    }
  
  }
  ul {
   text-align: left;
   background: rgba(5, 56, 107, 0.9);
   position: absolute;
   right: 0rem;
   height: 90vh;
   width: 90vw;
   border-radius: 25px;
   border: 2px double chocolate;
   transition: var(--transition);
  }

   li {
    padding: 0.7rem 0;
    font-weight: 500;
    text-transform: capitalize;
    list-style-type: none;
    color: white;    
  }

  li:nth-child(1) {
     margin-top: 2rem;
  }

  li:hover {
   color: chocolate;
   transition: var(--transition);
  }

  .close-sidebar {
    height: 40px;
    width: 40px;
    font-size: 1.3rem;
    background: blue;
    border: none;
    color: white;
    transition: var(--transition);
  }


  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

`

export default Sidebar
