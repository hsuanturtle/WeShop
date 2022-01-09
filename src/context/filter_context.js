import React, { useEffect, useContext, useReducer } from "react";
import { useProductsContext } from "./products_context";
import reducer from "../reducer/filter_reducer";

const initialState = {
  all_products: [],
  filtered_products: [],
  filters: {
    text: "",
    category: "all",
    price: 1000,
  },
};

const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "price") {
      value = Number(value);
    }
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
