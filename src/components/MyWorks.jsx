import React from 'react';
import PortfolioItem from './PortfolioItem';

const MyWork = ({ items }) => {
  return (
    <div className='row mt-4'>
      {items.map((portfolioItem) => {
       return <PortfolioItem  key={portfolioItem.id}  {...portfolioItem}/>
      })}
    </div>
  );
};

export default MyWork;
