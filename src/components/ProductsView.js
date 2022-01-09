import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";

const ProductsView = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, title, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <h5 className="price">${price}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  margin-top: 3rem;

  img {
    width: 100%;
    display: block;
    width: 250px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: #000;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    background-color: #a8aa8b;
    color: #fff;
  }
  .btn:hover {
    text-decoration: underline;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ProductsView;
