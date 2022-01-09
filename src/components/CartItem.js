import React from "react";
import styled from "styled-components";
import AmountBtn from "./AmountBtn";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, amount, name, price, image }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "increase");
  };
  const decrease = () => {
    toggleAmount(id, "decrease");
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h4 className="name">{name}</h4>
          <h5 className="price-small">${Math.round(price)}</h5>
        </div>
      </div>
      <h5 className="price">${Math.round(price)}</h5>
      <AmountBtn amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">${Math.round(price) * amount}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 4rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 90%;
    height: 100%;
    display: block;
    border-radius: 10px;
    object-fit: cover;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .price-small {
    color: #000;
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: #000;
    background: transparent;
    border: transparent;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: #000;
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: #000;
      font-weight: 400;
    }
    .name {
      font-size: 1.2rem;
    }
    .color {
      font-size: 1rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h5 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
