import React, { Component, Suspense } from "react";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Loader from "../../Components/Loader/Loader";
import CategoryNavbar from "../../Components/CategoryNavbar/CategoryNavbar";
import "./Home.css";

// Lazy load the HomeContainer component
const HomeContainer = React.lazy(() => import("../../Container/HomeContainer/HomeContainer"));

export default class Home extends Component {
  render() {
    return (
      <>
        <ImageSlider />
        <Suspense fallback={<Loader/>}>
          <div className="Display-products-sec">
            <CategoryNavbar/>
            <div className="HomeContainer">
              <HomeContainer 
                addToCart={this.props.addToCart}
                addToWishlist={this.props.addToWishlist}
              />
            </div>
          </div>
        </Suspense>
      </>
    );
  }
}
