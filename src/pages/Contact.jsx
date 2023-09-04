import React from 'react';
import styled from 'styled-components';
import { ContactForm, Footer, Navbar, PageTitle, SideBar } from '../components';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShareAlt,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Contact = () => {
  const title = 'Contact me';
  const description = "Let's Chat";

  return (
    <Wrapper className='page-wrapper'>
      <Navbar />
      <div className='page-container container'>
        <PageTitle title={title} description={description} />

        <div className='contact container'>
          <div className='row'>
            {/* <div className='col-sm-6 col-md-6 card-item'>
              <div className='icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='details'>
                <h3>My Address</h3>
                <p>207 Johnson Street, Alaba, Lagos</p>{' '}
              </div>
            </div> */}
            {/*  */}
            <div className='col-sm-6 col-md-6 card-item '>
              <div className='icon'>
                <FaShareAlt />
              </div>
              <div className='details'>
                <h3>Social Profiles</h3>
                <div className='d-flex justify-content-between'>
                  <a href='https://www.facebook.com/Godrique'>
                    <FaFacebook />
                  </a>
                  <a href='https://twitter.com/bytenary'>
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
              </div>
            </div>
            {/*  */}
            <div className='col-sm-6 col-md-6 card-item '>
              <div className='icon'>
                <FaEnvelope />
              </div>
              <div className='details'>
                <h3>Email Me</h3>
                <p>gmarto@gmail.com</p>{' '}
              </div>
            </div>
            {/*  */}
            {/* <div className='col-sm-6 col-md-6 card-item '>
              <div className='icon'>
                <FaPhoneAlt />
              </div>
              <div className='details'>
                <h3>Call Me</h3>
                <p>+234 5350 422 343</p>{' '}
              </div>
            </div> */}
          </div>
          <ContactForm />
        </div>
        <SideBar />
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon {
    font-size: 24px;
    border-radius: 50%;
    padding: 14px;
    background-color: white;
    color: chocolate;
  }

  .card-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    line-height: 1;
    background: rgba(5, 56, 107, 0.4);
    border: 10px solid white;
  }

  .details {
    padding-left: 0.5rem;
    color: chocolate;
  }

  .details h3 {
    color: var(--navy);
  }

  .details p {
    font-weight: 500;
  }
`;

export default Contact;
