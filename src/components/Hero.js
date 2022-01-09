import React from "react";
import styled from "styled-components";
import bcg1 from "../assests/bcg1.jpg";
import bcg2 from "../assests/bcg2.png";
import bcg3 from "../assests/bcg3.png";

const Hero = () => {
  return (
    <Wrapper>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={bcg1} class="d-block w-100 h-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bcg2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bcg3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .carousel {
    height: 100vh;
    background-color: #fff;
    text-align: justify;
  }

  .carousel-inner {
    padding: 11rem;
    width: 100%;
    height: 100%;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: #888;
    padding: 2rem;
  }

  @media only screen and (max-width: 600px) {
    .carousel-inner {
      padding: 0;
      width: 100%;
      height: 100%;
    }
    .carousel-item {
      margin-top: 22rem;
      width: 80%;
      transform: translateX(45px);
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      background-color: #999;
      padding: 0.5rem;
    }
  }
`;
export default Hero;
