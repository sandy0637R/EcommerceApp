// HomeContainer.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchProducts, addToCart, addToWishlist } from "../../Store/action";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { filteredProducts, addToCart, addToWishlist } = this.props;

    return (
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category_name={product.category}
              price={product.price}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))
        ) : (
          <p>No products available in this category</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredProducts: state.filteredProducts,
});

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
  addToWishlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
