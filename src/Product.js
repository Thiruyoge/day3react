// Product.js
import { useCart} from './createContext';
import React, { useState } from "react";

const Product = () => {
  const { addToCart, removeFromCart, cartQuantity } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addCart = () => {
    setIsAddedToCart(true);
  };

  const removeCart = () => {
    setIsAddedToCart(false);
  };
  return (
    <div>
     
    
     <p>Cart Quantity: {cartQuantity}</p>

{isAddedToCart ? (
                    <button 
                    onClick={() => { removeCart(); removeFromCart();}}
                    class="btn btn-danger">
                      Remove from Cart
                    </button>
                  ) : (
                    <button 
                    onClick={() => { addCart(); addToCart();}}
                    class="btn btn-primary">
                      Add to Cart
                    </button>
                  )}{" "}
    </div>
  );
};

export default Product;
