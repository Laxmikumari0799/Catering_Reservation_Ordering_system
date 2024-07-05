import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend
  }, []);

  return (
    <div className="cart">
      <h2>My Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <h3>{item.productName}</h3>
              <p>Quantity: {item.quantity}</p>
              <button>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
