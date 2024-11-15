// import React from "react";
// import { useState } from "react";

// function Product(){
//     var [count,setValue]=useState(0);
//     function increament(){
//         count++;
//         setValue(count)
//     }
//     return(
//         <>
//           <main className="main">
//             <nav className="navbar">
//                 <div className="navbar-logo-sec">
//                     <h1 className="logo"><span style={{color:'red'}}>Ecom</span>Application</h1>
//                 </div>
//                 <div className="navbar-button-sec">
//                     <div className="cart">
//                         <p className="counter">{count}</p>
//                         <img src="src/assets/cart.png" alt=""  className="navbar-img" />
//                     </div>
//                     <button className="button1">Request a Demo</button>
//                 </div>
//             </nav>
//             <section className="products-main">
//                 <div className="products">

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product1.webp" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button" onClick={increament}>Add To Cart</button>
//                                <button className="button2" >View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product2.jpeg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product3.jpeg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product4.jpeg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>


//                 <div className="products">

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product5.jpg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product6.jpg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product7.jpeg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="product-sec">
//                         <div className="product-img-sec">
//                             <img src="src/assets/product8.jpeg" alt="" className="product-img"/>
//                         </div>
//                         <div className="product-content-sec">
//                             <div className="product-text-sec">
//                                <p>
//                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                  Ut, aliquid velit in blanditiis at inventore perferendi. 
//                                </p>
//                             </div>
//                             <div className="product-button-sec">
//                                <button className="button2 add-button"onClick={increament}>Add to Cart</button>
//                                <button className="button2">View Product</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//           </main>
//         </>
//     )
// }

// export default Product;

import React, { Component } from 'react'

export default class Product extends Component {
    constructor(){
        super();

        this.state={
            cart:[],
            wishlist:[],
            products:[]
        };
    }

    getProducts(){
        console.log('Get Products');
         fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>this.setState({products:json}));
    }

    addToCart(productIndex){
        const cart=this.state.cart;
        cart.push(productIndex);
        this.setState({cart:cart});
    }

    addToWishlist(productIndex){
        const wishlist=this.state.wishlist;
        wishlist.push(productIndex)
        this.setState({wishlist:wishlist})
    }
    componentDidMount(){
        console.log("Mount");
        this.getProducts();
    }


  render() {
    console.log(this.state)
   
    return (
      <>

        <nav className="navbar">
           <div className="navbar-logo-sec">
               <h1 className="logo"><span style={{color:'red'}}>Ecom</span>Application</h1>
           </div>
           <div className="navbar-button-sec">
               <div className="cart">
                   <p className="counter">{this.state.cart.length}</p>
                   <img src="src/assets/cart.png" alt=""  className="navbar-img" />
               </div>
               <button className="button1" style={{margin:"0px 20px 0px 0px"}}>Wishlist:{this.state.wishlist.length}</button>
               <button className="button1">Request a Demo</button>
           </div>
        </nav>



        <div className='products'>  
          {this.state.products.map((products,index)=>{
            return(
            <div className="product-sec" key={index}>
                <div className="product-img-sec">
                   <img src={products.image} alt="" className="product-img"/>
                </div>
                <div className="product-content-sec">
                   <div className="product-text-sec">
                      <p>{products.title}</p>
                      <p>{products.category}</p>
                      <p>{products.price}</p>
                   </div>
                   <div className="product-button-sec">
                      <button className="button2 add-button" onClick={()=>this.addToCart(index)}>Add to Cart</button>
                      <button className="button2">View Product</button>
                      <div className='wishlist' onClick={()=>this.addToWishlist(index)}>
                      <i className="fa-solid fa-heart"></i>
                      </div>
                   </div>
                </div>
            </div>
            )
          })}
        </div>
      </>
    )
  }
}
