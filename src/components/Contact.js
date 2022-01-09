import React from 'react'
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
      <h1>Contact Us</h1>
      <div className='underline'></div>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
          <form
            className='contact-form'
            action='your form spree id'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 3rem;
  background-color:#fff;
  .section-center {
  width: 80vw;
  margin: 0 auto;
  
}
h1 {
    text-align: center;
  }
h3 {
    text-transform: none;
  }
 
p {
    line-height: 2;
    max-width: 45em;
    color: #000;
  }
.contact-form {
    width: 80vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #000;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .submit-btn {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .form-input::placeholder {
    color: #000;
    text-transform: capitalize;
  }
  .submit-btn {
    background: #6d96c2;
    text-transform: capitalize;
    letter-spacing: 1.5;
    cursor: pointer;
    transition: all 0.3s linear;
    color: #fff;
  }
  .submit-btn:hover {
    color: #fff;
  }
  .underline{
    width: 6rem;
    height: 0.25rem;
    background: #a8aa8b;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:4rem;
  }
   .content{
      margin-top:3rem;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
  
`

export default Contact