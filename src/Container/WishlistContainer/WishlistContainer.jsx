import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import Wishlist from '../../Components/Wishlist/Wishlist';
import "./WishlistContainer.css"; // Add relevant styles

const WishlistContainer = () => {
  // Get wishlist products from Redux state
  const wishlistProducts = useSelector((state) => state.wishlist);

  console.log("WishlistContainer component", wishlistProducts);

  // Retrieve user data from local storage
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const userName = storedUserData && storedUserData.isLoggedIn ? storedUserData.name : 'Guest'; // Default to 'Guest' if not found

  return (
    <div className='container'>
      <div className='wishlist-container'>
        {wishlistProducts.length > 0 ? (
          wishlistProducts.map((product, index) => (
            <Wishlist
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              product={product}
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p> // Message when wishlist is empty
        )}
      </div>
      <div className='wishlist-content-section'>
        <div className='wishlist-greeting-section'>
          <h4 className='wishlist-greeting'>Welcome, {userName}!</h4>
          <p>"Would you like to purchase the following items? Please proceed by adding them to your cart."</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistContainer;
