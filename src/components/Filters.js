import React from "react";
import styled from "styled-components";
import { getUniqueValues } from "../utils/helpers";
import { useFilterContext } from "../context/filter_context";
const Filters = () => {
  const {
    filters: { text, category, price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  return (
    <Wrapper>
      <div class="container">
        {/* search form */}
        {/* Filters-input */}
        <input
          class="form-control"
          type="text"
          name="text"
          placeholder="Search..."
          aria-label="Search your products"
          value={text}
          onChange={updateFilters}
        />
        {/* end of text filters */}
        {/* categories */}
        <div className="form-control">
          <h5>Category</h5>
          <div>
            {categories.map((c, id) => {
              return (
                <button
                  key={id}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? "active" : null
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        {/* end of categories */}
        {/* Price */}
        <div className="form-control">
          <h4>Price</h4>
          <p>{price}</p>
          <input
            type="range"
            name="price"
            min={0}
            max={1000}
            onChange={updateFilters}
            value={price}
          />
        </div>
        {/* end of Price filters */}
        <button
          type="button"
          className="button clear-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #777;
  }
  input:focus {
    background-color: transparent;
  }
  .container {
    height: 100vh;
    margin-top: 5rem;
  }
  .form-control {
    background-color: transparent;
    border: none;
  }
  h4 {
    margin-top: 0.5rem;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: #000;
    cursor: pointer;
  }
  .active {
    border-color: #6d96c2;
  }
  .clear-btn {
    background-color: #6d96c2;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    margin-top: 0.5rem;
  }
`;

export default Filters;
