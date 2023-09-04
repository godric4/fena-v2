import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p className=''>Godric "FENA" Marto</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--navy);
  color: white;
  height: 4rem;
  text-align: center;
  padding: 1rem;

  p {
    line-height: 1;
    padding: 0.2rem;
  }
`;
export default Footer;
