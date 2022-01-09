const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters },
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, category, price } = state.filters;

    let tempProducts = [...all_products];
    //Filters- Category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    //Filters- Text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.title.toLowerCase().startsWith(text);
      });
    }
    //Filters- Price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    return { ...state, filtered_products: tempProducts };
  }

  //ClearFilters
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        price: 1000,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
