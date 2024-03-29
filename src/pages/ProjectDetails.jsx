import React, { useState } from 'react'
import styled from 'styled-components'
import {
  CategoryButton,
  Footer,
  MyWork,
  Navbar,
  PageTitle,
} from '../components'
import { items } from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import bg from '../assets/pf.png'

const ProjectDetails = () => {
  const { id } = useParams()

  const project = items.find((item) => item.id === Number(id))

  const { name, category, size, imgUrl, field, link, description, status } =
    project

  return (
    <Wrapper className='page-wrapper'>
      <Navbar />
      <div className='page-container container '>
        <div className='project-details text-dark container '>
          <div className='mt-5 pt-5'>
            <Link className='back-link' to='/projects'>
              Back To Projects
            </Link>
            <p className=' text-center  details-title'>Project information</p>{' '}
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5'>
                <img
                  className='project-image'
                  src={imgUrl}
                  alt={name}
                  width={200}
                />
              </div>
              <div className='col-md-7 text-details'>
                <p className='upper'>
                  Project Title: <span>{name}</span>
                </p>
                <p className='upper'>
                  Language/Framework: <span>{category}</span>
                </p>

                <p className='project-link'>
                  Project URL:{' '}
                  <span>
                    <Link to={link}>
                      <em>{link}</em>
                    </Link>{' '}
                  </span>
                </p>

                <p className='upper description'>
                  Project Description: <br /> <span>{description}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .project-details {
    margin-top: 3rem;
  }

  .back-link {
    background-color: var(--navy);
    color: white;
    padding: 0.3rem;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  .project-image {
    width: 100%;
  }

  .details-title {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-family: lobster;
    color: var(--navy);
  }

  .text-details p {
    color: var(--navy);
    font-weight: 500;
  }

  .project-link span a em {
    color: purple;
    font-weight: 400;
    text-transform: lowercase;
  }

  .upper {
    text-transform: capitalize;
  }

  .description span {
    color: black;
    font-weight: 400;
    font-size: 0.96rem;
    text-transform: none;
  }
`

export default ProjectDetails
