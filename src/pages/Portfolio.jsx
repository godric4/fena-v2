import React, { useState } from 'react'
import styled from 'styled-components'
import { CategoryButton, Footer, MyWork, Navbar, PageTitle } from '../components'
import { items } from '../utils/data'

const Portfolio = () => {

 const title = 'portfolio'
 const description = 'my works'

 // Set all categories
 const allCategories = ['all', ...new Set(items.map((item) => item.category))]

 const [portfolioItems, setPortfolioItems] = useState(items);
 const [categories, setCategories] = useState(allCategories);

 const filterItems = (category) => {
  if(category === 'all') {
   setPortfolioItems(items)
   return;
  }
  const newItems = items.filter((item) => item.category === category)
  setPortfolioItems(newItems)
 }



 return (
  <Wrapper className='page-wrapper'>
   <Navbar />
   <div className="page-container container">
    <PageTitle title={title} description={description} />
 
    <div className="project-card">
    <div className="text-center">
      <CategoryButton  categories={categories} filterItems={filterItems} />
    </div>
      <MyWork  items={portfolioItems} />
    </div>
   </div>
   <Footer />
  </Wrapper>
 )
}

const Wrapper = styled.section`

 



`

export default Portfolio
