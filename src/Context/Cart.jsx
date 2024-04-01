import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";

const Cart = () => {
  const context = useContext(ProductsContext);

  const totalCartAmount = context.state.cart
    .reduce((total, product) => (total = total + product.price * product.count), 0)
    .toFixed(2);

  const totalCartCount = context.state.cart.reduce(
    (total, product) => (total = total + product.count),
    0
  );
  return (
    <div>
      <h2>
        <Link to="/">Products</Link> <span>My Cart({totalCartCount})</span>
      </h2>

      <h3>Total Cart Amount: &#8378;{totalCartAmount}</h3>

      {context.state.cart.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.images} alt={product.name} />
          <div>
            <h4>{product.name}</h4>
            <p>Product: {product.title}</p>
            <p>Price: &#8378;{product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Total: &#8378;{(product.price * product.count).toFixed(2)}</p>
            <p>You have a total of {product.count} in your cart.</p>
            <button onClick={() => context.decrease(product.id)}>-</button>
            <button onClick={() => context.removeFromCart(product.id)}>
              Remove
            </button>
            <button onClick={() => context.increase(product.id)}>+</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Cart;
