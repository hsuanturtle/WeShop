import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import CartColumn from "./CartColumn";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { Link } from "react-router-dom";
const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumn />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <CartTotals />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={() => clearCart()}
        >
          clear shopping cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .link-btn {
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
  .clear-btn {
    color: #000;
    text-decoration: underline;
    background-color: transparent;
  }
`;

export default CartContent;
