import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, ADD_TO_WISHLIST } from "../../Store/action"; // Import your action types
import './ViewProduct.css'; // Import CSS for styling

const ViewProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = location.state?.product; // Get the product from the location state

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: ADD_TO_CART, payload: product });
      alert(`${product.title} added to cart!`);
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      dispatch({ type: ADD_TO_WISHLIST, payload: product });
      alert(`${product.title} added to wishlist!`);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
    <div className='viewproduct-background'>
    <div className="view-product">
      <div className='image-section'>
      <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className='content-section'>
      <h2 className="viewproduct-title">{product.title}</h2>
      <p className="viewproduct-description">{product.description}</p>
      <p className="viewproduct-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className="add-to-wishlist-button" onClick={handleAddToWishlist}>
        Add to Wishlist
      </button>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default ViewProduct;
