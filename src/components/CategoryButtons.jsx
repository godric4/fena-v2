import React from 'react';
import styled from 'styled-components';

const CategoryButton = ({ categories, filterItems }) => {
  return (
    <Wrapper className=''>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn my-btn'
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div `
 
 background-color: transparent;
 border: none;

 .my-btn {
  background-color: var(--navy);
  color: white;
  margin: .21rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
 }
`

export default CategoryButton;
