import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import AmountBtn from "./AmountBtn";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id } = product;
  console.log(product);
  const [amount, setAmount] = React.useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="btn-container">
        <AmountBtn amount={amount} increase={increase} decrease={decrease} />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, amount, product)}
        >
          ADD TO CART
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
    div {
      display: flex;
    }
  }
 
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
      padding:1rem 2rem;
    margin-top: 1rem;
    width:200px;
    color:#fff;
  }
`;

export default AddToCart;
