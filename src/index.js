import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-yuab35h3zoy7ypzh.us.auth0.com
// ueVegqJRxsVKzR8AwaFUfPpoJ3nVEAa1

root.render(
  <Auth0Provider
    domain="dev-yuab35h3zoy7ypzh.us.auth0.com"
    clientId="ueVegqJRxsVKzR8AwaFUfPpoJ3nVEAa1"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
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
  </Auth0Provider>
);
