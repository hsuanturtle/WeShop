import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({title,product}) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/{title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #a8aa8b;
  width: 100%;
  margin-top:4.5rem;
  padding:2rem 0;
  min-height: 10vh;
  display: flex;
  align-items: center;
  color: #000;
  a {
    color: #555;
    padding: 0.5rem;
    transition: all linear 0.3s;
  }
  a:hover {
    color:#000;
  }
  h3{
    font-size:1.3rem;
  }
`;

export default PageHero;
