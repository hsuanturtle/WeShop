import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartButtons = () => {
  return (
    <>
      <Link to="/cart" class="nav-item">
        <AiOutlineShoppingCart />
        <span className="cart-value">0</span>
      </Link>
      <button type="button">
        <AiOutlineUser />
      </button>
    </>
  );
};

export default CartButtons;
