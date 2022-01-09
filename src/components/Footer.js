import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> WeShop</span>
        </h5>
        <h5>All rights reserved</h5>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a8aa8b;
    color: #dee0df;
    font-weight: 700;

    width:100%;
  }
`;

export default Footer;
