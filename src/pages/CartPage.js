import React,{useLayoutEffect} from "react";
import CartContent from "../components/CartContent";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const CartPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your Cart is Empty</h2>
          <Link to="/products" className="btn">
            Go shopping
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
    <PageHero title="Cart"/>
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  padding: 1rem 0;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .btn {
    font-size: 1.3rem;
    padding: 0.5rem 1.3rem;
    background-color: #6d96c2;
    border: none;
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    letter-spacing: 2;
    font-weight: 400;
    cursor: pointer;
    align-text: center;
  }
`;

export default CartPage;
