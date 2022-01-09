const products_reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: action.payload,
    };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return {
      ...state,
      single_product_error: false,
      single_product_loading: true,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  }
  
  throw new Error(`No Matching "${action.type}" -action type`);
};

export default products_reducer;
