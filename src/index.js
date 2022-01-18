import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
//dev-5la21ahl.us.auth0.com
//q4GftxL7rB0CqYhWqIQCJXCRFGTTCD5w
ReactDOM.render(
  <Auth0Provider
    domain="dev-5la21ahl.us.auth0.com"
    clientID="q4GftxL7rB0CqYhWqIQCJXCRFGTTCD5w"
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
