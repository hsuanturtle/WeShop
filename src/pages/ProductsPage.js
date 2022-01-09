import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import Filters from "../components/Filters";
import ProductsView from "../components/ProductsView";
import PageHero from "../components/PageHero";

const ProductsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
    <PageHero title="products"/>
      <div className="section-center products">
        <Filters />
        <div>
          <ProductsView />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
