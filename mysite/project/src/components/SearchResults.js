import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function SearchResults() {
  const { searchText } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      await axios
        .get(`https://52.65.20.224:8000/api/products/?search=${searchText}`)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
    };
    loadProducts();
  }, [searchText]);

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


    console.log(CartList);
    localStorage.setItem("Cart", JSON.stringify(CartList));

    
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
                    <i><FontAwesomeIcon icon={faHeart}/></i>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}
