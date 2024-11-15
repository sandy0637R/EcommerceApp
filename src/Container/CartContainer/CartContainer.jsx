import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../Components/Cart/Cart';
import { Link } from 'react-router-dom';
import "./CartContainer.css";

const CartContainer = () => {
  const cartProducts = useSelector((state) => state.cart);

  console.log("CartContainer component", cartProducts);

  const calculateTotalPrice = () => {
    if (cartProducts.length === 0) {
      return 0.00;
    }
    return cartProducts.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  // Retrieve user data from local storage
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const userName = storedUserData && storedUserData.isLoggedIn ? storedUserData.name : 'Guest'; // Default to 'Guest' if not found

  return (
    <div className='cart-background'>
      <div className='container'>
        <div className='cart-container'>
          {cartProducts.length > 0 ? (
            cartProducts.map((product, index) => (
              <Cart
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                product={product}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className='cart-purchase-section'>
          <h4 className='cart-greeting'>Welcome, {userName}!</h4>
          <h3 className='cart-total-price'>Total Price: ${calculateTotalPrice()}</h3>
          {cartProducts.length > 0 && (
            <Link to="/transaction">
              <button className='cart-purchase-button'>Proceed to Checkout</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
