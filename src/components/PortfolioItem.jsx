import React from 'react'
import styled from 'styled-components'
import pf from '../assets/pf.png'
import { Link } from 'react-router-dom'
import { FaLink, FaTwitter } from 'react-icons/fa'

const PortfolioItem = ({ id, name, imgUrl, field }) => {
  return (
    <Wrapper className='col-sm-4 col-12 col-md-6 col-lg-4 container' key={id}>
      <div className='container project'>
        <img src={`${imgUrl}`} alt={name} className='project-image' />
        <Link to={`/projects/${id}`} className='project-link'>
          {name}
          <br />
          <FaLink />
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
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
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
  }

  .project-link:hover {
    opacity: 1;
    background: rgba(5, 56, 107, 0.7);
    width: 96%;
    height: 100%;
  }

  .project-field {
    position: absolute;
    color: white;
    top: 1px;
    left: 15px;
    background: rgba(5, 56, 107, 0.8);
    padding: 0.3rem;
    font-weight: bold;
    font-size: 14px;
  }

  .project-field:hover {
    left: 70px;
  }
`

export default PortfolioItem
