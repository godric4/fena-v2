import React from 'react'
import styled from 'styled-components'
import { ContactForm, Footer, Navbar, PageTitle, SideBar } from '../components'
import { Link } from 'react-router-dom'
import { FaEnvelope, 
        FaFacebook,
        FaInstagram, 
        FaLinkedin,
        FaMapMarkerAlt,
        FaPhoneAlt,
        FaShareAlt,
        FaTwitter,
        FaWhatsapp 
     } from 'react-icons/fa'

const Contact = () => {

 const title = 'Contact me'
 const description = "Let's Chat"

 return (
  <Wrapper className='page-wrapper'>
   <Navbar />
   <div className="page-container container">
    <PageTitle title={title} description={description} />

    <div className="contact container">
     <div className="row">
      <div className="col-sm-6 col-md-6 card-item">
       <div className="icon">        
         <FaMapMarkerAlt/> 
            </div> 
        <div className="details">
         <h3>My Address</h3>
        <p>207 Johnson Street, Alaba, Lagos</p>   </div>    
      </div>
      {/*  */}
       <div className="col-sm-6 col-md-6 card-item ">
       <div className="icon">        
         <FaShareAlt/> 
            </div> 
        <div className="details">
         <h3>Social Profiles</h3>
       <div className="d-flex justify-content-between">
        <FaFacebook />
        <FaTwitter />
        <FaWhatsapp />
        <FaInstagram />
        <FaLinkedin />
       </div>
         </div>    
      </div>
      {/*  */}
       <div className="col-sm-6 col-md-6 card-item ">
       <div className="icon">        
         <FaEnvelope/> 
            </div> 
        <div className="details">
         <h3>Email Me</h3>
        <p>devgodric@planetmail.com</p>   </div>    
      </div>
     {/*  */}
       <div className="col-sm-6 col-md-6 card-item ">
       <div className="icon">        
         <FaPhoneAlt/> 
            </div> 
        <div className="details">
         <h3>Call Me</h3>
        <p>+234 5350 422 343</p>   </div>    
      </div>
     </div>
     <ContactForm />     
    </div>
    <SideBar />
   
   </div>
    <Footer />
  </Wrapper>
 )
}

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
 padding: .5rem 1.5rem;
line-height: 1;
background: rgba(5, 56, 107, 0.4);
border: 10px solid white;
}



.details {
 padding-left: .5rem;
 color: chocolate;
}

.details h3 {
 color: var(--navy);
}

.details p {
 font-weight: 500;
}


`

export default Contact
