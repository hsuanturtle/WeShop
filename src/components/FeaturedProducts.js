import React from "react";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <div className="container">
        <h1>Featured Products</h1>
        <div className="underline"></div>
        <div class="row row-cols-auto">
          {featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <Link to="/products" class="btn btn-primary">
          ALL PRODUCTS
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    height: 100vh;
    text-align: center;
  }
  .container h1 {
    margin-top: 3rem;
    text-align: center;
  }
  .row {
    gap: 5rem;
    height: 20rem;
    margin-bottom: 3rem;
  }
  .btn {
    margin-top: 7rem;
    font-size: 1.5rem;
    padding: 0.5rem 1.3rem;
    background-color: #6d96c2;
    border: none;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: #a8aa8b;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 600px) {
    .container {
      height: 200vh;
    }
    .btn {
      margin-top: 70rem;
    }
  }
`;

export default FeaturedProducts;
