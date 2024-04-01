import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";

const Products = () => {
  const context = useContext(ProductsContext);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Shop With Me</span>
        <Link to="/cart">My Cart({totalCartCount})</Link>
      </h2>
      {context.state.booklist.map((product) => (
        <div key={product.id} className="book">
          <img src={product.images} alt={product.name} />
          <div><div className="card-group">
            <div className="card">
               <div className="card-body">
                <h4>{product.name}</h4>
                <p>Product: {product.title}</p>
                <p>Description: {product.description}</p>
                <p>Price: &#8378; {product.price}</p>
                <p>DiscountPercetage: &#8378; {product.discountPercentage}</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock}</p>
                <p>Brand: {product.brand}</p>
                <button onClick={() => context.addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
