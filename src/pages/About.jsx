import React from 'react';
import styled from 'styled-components';
import { interests } from '../utils/data';
import { Footer, MiniTitle, Navbar, PageTitle } from '../components';
import { FaGlobeAfrica, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const title = 'About';
  const description = 'Know me Better ';

  return (
    <Wrapper className='page-wrapper'>
      <Navbar />
      <div className='page-container container'>
        <PageTitle title={title} description={description} />
        <div className='about container'>
          <p>
            I am an innovative and deadline-driven frontend web developer with
            years of experience designing and developing user-ce web apps from
            initial concept to final, polished delivery. I turn dreams and
            visions in to responsive realities.
          </p>

          <MiniTitle name='Skills' />
          <div className='interests container'>
            <div className='row'>
              {interests.map((interest) => {
                const { name, id, Icon, color } = interest;
                return (
                  <div className='col-sm-3 col-md-4 col-lg-3 card' key={id}>
                    <div>
                      <Icon style={{ color: `${color}` }} />
                    </div>
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <MiniTitle name={'Services'} />
        <div className='services mt-3 text-center'>
          <div className='container'>
            <div className='row'>
              {/*  */}
              <div className='col-sm-4 service '>
                <p className='service-name'>Web Development</p>
                <FaGlobeAfrica />
                <p className='service-desc'>
                  I bring ideas to life in a web browser using HTML, CSS &
                  Javascript
                </p>
              </div>
              {/*  */}
              <div className='col-sm-4 service'>
                <p className='service-name'>Web Design</p>
                <FaLaptopCode />
                <p className='service-desc'>
                  I leverage frontend tools to give users best experience
                </p>
              </div>
              {/*  */}
              <div className='col-sm-4 service'>
                <p className='service-name'>App Development</p>
                <FaMobileAlt />
                <p className='service-desc'>
                  I build standalone web application using PWA technology
                </p>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1rem solid white;
    background: rgba(5, 56, 107, 0.4);
    height: 8rem;
    padding: 1rem 0rem 0 1rem;

    svg {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
      padding-left: 0.5rem;
      font-weight: 500;
    }
  }

  .about {
    color: var(--navy);
  }

  .service-name {
    font-weight: 500;
  }

  .service {
    border: 2rem solid white;
    background-color: rgba(5, 56, 107, 0.4);
    color: var(--navy);
    padding: 1rem;
    svg {
      font-size: 3rem;
      color: chocolate;
    }
  }
`;

export default About;
