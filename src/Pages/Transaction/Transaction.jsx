import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Transaction.css";

const Transaction = () => {
  const cartProducts = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalPrice = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <>
      <div className='transaction-background'>
        <div className='transaction-container'>
          <div className='transaction-head-sec'>
            <h1>Transaction Receipt</h1>
          </div>
          <div className='bill-details'>
            <h2 className='bill-details-heading'>Bill Details</h2>
            <div className='bill-all-items'>
              {cartProducts.length > 0 ? (
                cartProducts.map((product, index) => (
                  <div key={index} className='bill-item'>
                    <p className='tp-details'>{product.title} (x{product.quantity})</p>
                    <p className='tp-price'>${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>
          <div className='transacti-content-sec'>
            <div className='total-price'>
              <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
            <button className='continue-button' onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className='purchase-button'>
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
