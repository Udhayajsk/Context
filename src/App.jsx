import { createContext, useState } from "react";
import "./styles.css";
// import { Route,Routes} from "react-router-dom";

import Products from "./Context/Product";
import Cart from "./Context/Cart";

import { data } from "./data";

export const ProductsContext = createContext();

export default function App() {
  const [state, setState] = useState({
    booklist: data,
    cart: []
  });

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
          cartItem.id === book.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
        : [...state.cart, { ...book, count: 1 }]
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };

  return (
    <ProductsContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}
    >
      <div className="App">
        <h1>Shopping Cart App</h1>

        <Products />
        <Cart />
      </div>
    </ProductsContext.Provider>
  );
}
