import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import aboutImg from "../assests/best-labradorite.jpg";
import PageHero from "../components/PageHero.js";
const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
    <PageHero title="about"/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="Jewlery" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
            doloribus veritatis dolorem unde ipsum, voluptatibus totam.
            Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  gap: 4rem;
  img {
    width: 95%;
    display: block;
    border-radius: 10px;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: #000;
  }
  .title {
    text-align: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
