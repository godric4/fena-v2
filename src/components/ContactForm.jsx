import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContactForm = () => {
 const [status, setStatus] = useState({
  submitted: false,
  submitting: false,
  info: { error: false, msg: null }
 })
 const [inputs, setInputs] = useState({
  email: '',
  message: '',
   subject: ''
 })
 const handleServerResponse = (ok, msg) => {
  if (ok) {
   setStatus({
    submitted: true,
    submitting: false,
    info: { error: false, msg: msg }
   })
   setInputs({
    email: '',
    message: '',
    subject: ''
   })
  } else {
   setStatus({
    info: { error: true, msg: msg }
   })
  }
 }
 const handleOnChange = e => {
  e.persist()
  setInputs(prev => ({
   ...prev,
   [e.target.id]: e.target.value
  }))
  setStatus({
   submitted: false,
   submitting: false,
   info: { error: false, msg: null }
  })
 }
 const handleOnSubmit = e => {
  e.preventDefault()
  setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
  axios({
   method: 'POST',
   url: 'https://formspree.io/mnqyjejz',
   data: inputs
  })
   .then(response => {
    handleServerResponse(
     true,
     'Thank you, your message has been submitted.'
    )
   })
   .catch(error => {
    handleServerResponse(false, error.response.data.error)
   })
 }
 return (
  <Wrapper>


   <div className='container pt-3 mt-2  mb-5'>
    <div className='contact-form'>
     <form onSubmit={handleOnSubmit}>
      <div className="row">
       <div className="col-md-6">
<div className='mb-3'>
       <label className="form-label " htmlFor="name">Your Name</label>
       <input
        id="name"
        type="text"
        name="_name"
        onChange={handleOnChange}
        required
        className="form-control"
        value={inputs.name}
       />
      </div>
       </div>
        <div className="col-md-6">
        <div className='mb-3'>
       <label className="form-label " htmlFor="email">Your Email</label>
       <input
        id="email"
        type="email"
        name="_replyto"
        onChange={handleOnChange}
        required
        className="form-control"
        value={inputs.email}
       />
      </div>
       </div>
        <div className="col-12">
        <div className='mb-3'>
       <label className="form-label " htmlFor="subject">Subject</label>
       <input
        id="subject"
        type="text"
        name="_subject"
        onChange={handleOnChange}
        required
        className="form-control"
        value={inputs.subject}
       />
      </div>
       </div>
      </div>
      
     <div className="col-12">
       <div className='mb-3'>
       <label className="form-label" htmlFor="message">Message</label>
       <textarea
        id="message"
        name="message"
        onChange={handleOnChange}
        required
        className="form-control"
        value={inputs.message}
       />
      </div>
     </div>
      <button type="submit " disabled={status.submitting} className='btn my-btn  w-100 mt-3 '>
       {!status.submitting
        ? !status.submitted
         ? 'Submit'
         : 'Submitted'
        : 'Submitting...'}
      </button>
     </form>
     {status.info.error && (
      <div className="error">Error: {status.info.msg}</div>
     )}
     {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 background: rgba(5, 56, 107, 0.4);

  
  .my-btn {
   background-color: var(--navy);
    color: var(--white);
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .contact-form {
    padding-right: 15px;
    padding-left: 15px;
    input :focus {
    border-radius: 10px;
  }
  }

  .form-label {
   color: var(--navy);
   font-weight: bold;
  }

`


export default ContactForm


