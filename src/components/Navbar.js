import React from "react";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            WeShop
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <div class="nav-user">
                <li class="nav-item ">
                  <Link to="/cart" class="nav-link" href="#">
                    <AiOutlineShoppingCart />
                  </Link>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    <AiOutlineUser />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .navbar {
    font-size: 1.8rem;
  }
  .navbar-brand {
    font-size: 2rem;
    font-weight: 900;
    margin-right: 3rem;
  }
  .navbar-nav li {
    padding-right: 2rem;
  }
  .nav-user {
    position: absolute;
    right: 0;
    display: flex;
  }
`;
export default Navbar;
