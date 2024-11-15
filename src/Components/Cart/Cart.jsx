import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Store/action'; 
import { useNavigate } from 'react-router-dom'; 
import "./Cart.css"; 

function Cart(props) {
  const { image, title, price, category, product } = props; 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const cart = useSelector(state => state.cart);
  const cartItem = cart.find(item => item.title === title);
  
  const count = cartItem ? cartItem.quantity : 0;

  const increment = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { title } });
  };

  const decrement = () => {
    if (count > 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { title } });
    } else if (count === 1) {
      handleRemove();
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ title }));
  };

  const handleViewProduct = () => {
    navigate("/viewproduct", { state: { product } }); // Pass the product correctly
  };

  return (
    <div className="cart-sec"> 
      <div className="cart-img-sec"> 
        <img src={image} alt={title} className="cart-img" /> 
      </div>
      <div className="cart-content-sec"> 
        <div className="cart-text-sec"> 
          <p className='cart-title'>{title}</p>
          <p>{category}</p>
          <p className='cart-price'>${price.toFixed(2)}</p>
        </div>
        <div className="cart-button-sec"> 
          <button 
            className="cart-viewproduct-button" 
            onClick={handleViewProduct}
          >
            View Product
          </button>

          <div className='cart-button-count-sec'>
            <button className="cart-small-buttons" onClick={increment}>+</button>
            <p className='cart-counter'>{count}</p> 
            <button className="cart-small-buttons" onClick={decrement}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
