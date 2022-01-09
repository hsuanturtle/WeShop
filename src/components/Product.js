import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, title, price, id }) => {
  return (
    <Wrapper>
      <div class="col-md">
        <img src={image} alt={title} />
        <Link to={`/products/${id}`} class="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{title.slice(0, 20)}</h5>
        <p>${price}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .col-md {
    margin-top: 3rem;
    border-radius: 10px;
    height: 20rem;
    text-align: center;
    width: 18rem;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;

    transition: all 0.3s linear;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s linear;
    opacity: 0;
    cursor: pointer;
  }
  .link svg {
    font-size: 2rem;
    color: #6d96c2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link p {
    color: #000;
  }
  .col-md img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 10px;
    transition: all 0.3s linear;
    height: 100%;
  }
  .col-md:hover img {
    opacity: 0.5;
  }
  .col-md:hover .link {
    opacity: 1;
    cursor: pointer;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 1rem;
  }

  footer p {
    color: #000;
    letter-spacing: 1.5;
  }
`;

export default Product;
