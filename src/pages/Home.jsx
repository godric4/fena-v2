import React from 'react'
import styled from 'styled-components'
import { NavLinks, SideBar } from '../components'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import bg from '../assets/bg.jpg'

const Home = () => {
  return (
    <>
      <div className='home-header container'>
        <div className=''></div>
        <SideBar />
      </div>

      <Wrapper>
        <div className='container hero'>
          <h2 className='name'>
            <Link to='/'>Godric Marto</Link>
          </h2>
          <p className='text-intro'>
            Creative <span> Frontend Web Developer</span>
          </p>

          <NavLinks />
          <div className='social-icons'>
            <a href='https://www.facebook.com/Godrique'>
              <FaFacebook />
            </a>
            <a href='https://twitter.com/Fenalito'>
              {' '}
              <FaTwitter />
            </a>
            <a href="https://wa.me/2348188534279?text=Hello %20Godric,%20i%20got%20something%20important%20to%20share%20with%20you'">
              {' '}
              <FaWhatsapp />
            </a>
            <a href='https://www.instagram.com/fena_400/'>
              {' '}
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/godric-ikeji-519b03119/'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/godric4'>
              <FaGithub />
            </a>
          </div>
          <Link to='/projects' className='portfolio btn'>
            My Works
          </Link>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  transition: var(--transition);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 199;
  color: black;

  .hero {
    line-height: 1;
    transition: var(--transition);

    h2 {
      text-shadow: 3px 3px chocolate;
    }
  }

  .social-icons {
    display: flex;
    transition: var(--transition);
  }

  .social-icons a {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(5, 56, 107, 0.9);

    color: var(--white);
    line-height: 1;
    margin-right: 18px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .social-icons a:hover {
    background-color: chocolate;
  }

  .text-intro {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .text-intro span {
    font-style: italic;
  }

  .portfolio {
    background-color: var(--navy);
    color: white;
    font-weight: 500;
    margin-top: 1rem;
    display: none;

    :hover {
      background-color: chocolate;
      color: var(--navy);
    }
  }

  /* Media Queries */
  @media screen and (max-width: 992px) {
    background-size: cover;
    background-position: center;
    position: relative;
    max-height: 100vh;

    .portfolio {
      display: block;
    }

    .name,
    .social-icons,
    .text-intro {
      text-align: center;
    }

    .name {
      margin-top: 7rem;
    }

    .social-icons {
      justify-content: center;
      align-items: center;
    }
    .hero {
      position: absolute;
      height: 100vh;
      width: 100vw;
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        color: chocolate;
        text-shadow: 3px 1px black;
      }

      h2 {
        a:hover {
          color: inherit;
        }
      }
    }
  }
`

export default Home
