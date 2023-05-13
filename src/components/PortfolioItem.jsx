import React from 'react'
import styled from 'styled-components'

// import bg from '../assets/bg.jpg'
import pf from '../assets/pf.png'
import { Link } from 'react-router-dom'
import { FaLink, FaTwitter } from 'react-icons/fa'


const PortfolioItem = ({ id, name, imgUrl, field }) => {
  return (
    <Wrapper className="col-sm-4 col-12 col-md-6 col-lg-4" key={id}>
         <div className="container project">
          <img src={`${pf}`} alt="" className='project-image' />
          <Link className="project-link">
           {name}
           <br />
           <FaLink />
          </Link>
          <p className="project-field">{field}</p>
         </div>
        </Wrapper>
  )
}

const Wrapper = styled.div `
 img{
 width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
      height: 200px;
      margin: 1rem 0;
}


.project {
 position: relative;
}

.project-link {
 position: absolute;
 color: white;
 top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 700;
    font-size: 1.2rem;
    opacity: 0;
    width: 100%;
  height: 100%;
  transition: var(--transition);
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
}

/* .project-link::before {
    display: block;
    content: "";
    width: 48px;
    height: 48px;
    position: absolute;
    top: 35px;
    left: 35px;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    transition: all 0.5s ease 0s;
    z-index: 9994;
} */

.project-link:hover {
 opacity: 1;
  background: rgba(5, 56, 107, 0.7);
  width: 92%;
  height: 100%;
}

.project-field {
 position: absolute;
 color: white;
 top:3px;
 left: 20px;
 background: rgba(5, 56, 107, 0.8);
 padding: .3rem;
 font-weight: bold;
 font-size: 14px;
}

`

export default PortfolioItem

// const { id, name, imgUrl, field } = item
//         return <div className="col-sm-4 col-12 col-md-6 col-lg-4" key={id}>
//          <div className="container project">
//           <img src={`${pf}`} alt="" className='project-image' />
//           <Link className="project-link">
//            {name}
//            <br />
//            <FaLink />
//           </Link>
//           <p className="project-field">{field}</p>
//          </div>
//         </div>
