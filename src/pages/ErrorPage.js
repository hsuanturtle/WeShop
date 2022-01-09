import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          Back home
        </Link>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background: #dee0df;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    font-size: 1.5rem;
    padding: 0.5rem 1.3rem;
    background-color: #6d96c2;
    border: none;
  }
`;

export default ErrorPage;
