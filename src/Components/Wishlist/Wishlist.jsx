import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../../Store/action'; 
import { useNavigate } from 'react-router-dom'; 
import "./Wishlist.css";

function Wishlist(props) {
  const { image, title, price, category, product } = props; 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [quantity, setQuantity] = useState(1);

  const handleRemove = () => {
    dispatch(removeFromWishlist({ title }));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ image, title, price, category, quantity }));
      handleRemove();
    }
  };

  const handleViewProduct = () => {
    navigate("/viewproduct", { state: { product } });
  };

  return (
    <div className="wishlist-sec">
      <div className="wishlist-img-sec">
        <img src={image} alt={title} className="wishlist-img" />
      </div>
      <div className="wishlist-content-sec">
        <div className="wishlist-text-sec">
          <p className="wishlist-title">{title}</p>
          <div className='wishlist-sub-sec'>
            <p>{category}</p>
            <p className="wishlist-price">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="wishlist-button-sec">
          <button className="wishlist-button" onClick={handleViewProduct}>
            View Product
          </button>
        </div>
        <div className="wishlist-button-sec">
          <button className="wishlist-remove-button" onClick={handleRemove}>Remove</button>
          <button className="wishlist-addtocart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
