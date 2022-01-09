import React, { useEffect, useLayoutEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styled from "styled-components";
import AddToCart from "../components/AddToCart";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";

const SingleProductPage = () => {
  const { id } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    //eslint-disable-next-line
  }, [id]);

  const { title, price, description, id: sku, image } = product;
  

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
    <PageHero title={title} product/>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to Products
        </Link>
        <div className="product-center">
          <img src={image} alt={title} className="image" />
          <section className="content">
            <h2 className="title">{title}</h2>
            <h5 className="price">${Math.round(price)}</h5>
            <p className="des">{description}</p>
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  min-height: 100vh;
  
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top:2rem;
    justify-items: center;
  }
  img {
    height: 30rem;
    width: 25rem;
    border-radius: 10px;
  }
  .btn {
    margin: 1rem;
    font-size: 1rem;
    padding: 0.5rem 1.3rem;
    background-color: #6d96c2;
    border: none;
  }
  .price {
    color: #000;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 576px) {
    img {
      height: 10rem;
      width: 10rem;
    }
  }
  @media only screen and (max-width: 575px) {
    .section {
      width: 100%;
    }
    img {
      height: 10rem;
      width: 10rem;
    }
    .desc {
      font-size: 0.3rem;
    }
    .title {
      font-size: 1.2rem;
    }
  }
`;
export default SingleProductPage;
