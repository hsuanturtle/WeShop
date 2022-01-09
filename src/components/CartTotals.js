import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

const CartTotals = () => {
  const { total_amount } = useCartContext();
  return (
    <Wrapper>
      <div className="total">
        <h1>Total:</h1>
        <span>
          <h1>${Math.floor(total_amount)}</h1>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: 2rem;
  }
  .total {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export default CartTotals;
