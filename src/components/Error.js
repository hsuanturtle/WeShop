import React from "react";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <h2>There was an error...</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    padding: 5rem 0;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }

  @media only screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  .text-center {
    text-align: center;
  }
`;

export default Error;
