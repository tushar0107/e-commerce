import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/product.css';

const Cart = () => {
  let products = [];
  const [loading, setLoading] = useState(true);
  let CartList = {};
  useEffect(() => {
    if (localStorage.getItem("Cart") !== null) {
      CartList = JSON.parse(localStorage.getItem("Cart"));
      console.log(CartList);
      for (let id in CartList) {
        axios
          .get(`http://127.0.0.1:8000/api/product/${id}`)
          .then((res) => {
            console.log(res.data);
            products.push(res.data);
            console.log(products.length);
          })
          .catch((err) => {
            console.log(err);
          });
          setLoading(false);
      }
    }
  });

  function AddToCart(id) {
    let CartList = {};
    
    if (localStorage.getItem("Cart") === null) {
      localStorage.setItem("Cart", JSON.stringify(CartList));
    } else {
      CartList = JSON.parse(localStorage.getItem("Cart"));
    }
    if(isNaN(CartList[`${id}`])){
        CartList[`${id}`]=1;
    }else{
        CartList[`${id}`]+=1;
    }
  }

  return (
    <>
      <div id="products-container">
        {loading ? (
          <h3>Loading..</h3>
        ) : (
          products.map((product, index) => {
            return (
              <Link
                to={`/product/${product.id}`}
                className="product-card"
                key={index}
              >
                <img
                  src={product.image_url}
                  className="product-image"
                  alt=""
                ></img>
                <div className="product_details">
                  <p className="product-name">{product.name}</p>

                  <p className="product-brand">{product.brand}</p>
                  <span>₹ {product.price} /-</span>
                  <div className="btns">
                    <button onClick={() => AddToCart(product.id)}>
                      Add to Cart
                    </button>
                    <button>Buy</button>
                    {/* <i><FontAwesomeIcon icon={faHeart}/></i> */}
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Cart;
