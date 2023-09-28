import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function SearchResults() {
  const { searchText } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products/?search=${searchText}`
      );
      setProducts(response.data);
      setLoading(false);
    };
    loadProducts();
  }, [searchText]);

  return (
    <>
      <div id="products-container">
        {loading ? (
          <h3>Loading..</h3>
        ) : (
          products.map((product, key) => {
            return (
              <div className="product-card">
                <img
                  src={product.image_url}
                  className="product-image"
                  alt=""
                ></img>
                <div className="product_details">
                  <Link to={`/product/${product.id}`}>
                    <p className="product-name">{product.name}</p>
                  </Link>
                  <p className="product-brand">{product.brand}</p>
                  <span>₹ {product.price} /-</span>
                  <div className="btns">
                    <button>Add to Cart</button>
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
