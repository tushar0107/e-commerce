import axios from "axios";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/product.css';

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const products = useMemo(() => {
    let CartList = JSON.parse(localStorage.getItem("Cart")) || {};
    let productList = [];
    if (localStorage.getItem("Cart") !== null) {
      console.log(CartList);
      for (let id in CartList) {
        axios
          .get(`https://172.31.20.2:8000/api/product/${id}`)
          .then((res) => {
            // console.log(res.data);
            productList.push(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        }
      }
      setLoading(false);
    return productList;
  },[]);
  console.log(products);

  // function AddToCart(id) {
  //   let CartList = {};
    
  //   if (localStorage.getItem("Cart") === null) {
  //     localStorage.setItem("Cart", JSON.stringify(CartList));
  //   } else {
  //     CartList = JSON.parse(localStorage.getItem("Cart"));
  //   }
  //   if(isNaN(CartList[`${id}`])){
  //       CartList[`${id}`]=1;
  //   }else{
  //       CartList[`${id}`]+=1;
  //   }
  // }

  return (
    <>
      <div id="products-container">
        {
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
                    <button>Buy</button>
                    {/* <i><FontAwesomeIcon icon={faHeart}/></i> */}
                  </div>
                </div>
              </Link>
            );
          })
        
        }
      </div>
    </>
  );
};

export default Cart;
