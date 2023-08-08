import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Results(props){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const loadProducts = async()=>{
            setLoading(true);
            const response = await axios.get(props.url);
            setProducts(response.data);
            setLoading(false);
        }
        loadProducts();
    },[]);

        return(
        <>
            <div id="products-container">
                {loading ? (<h3>Loading..</h3>) : (products.map((product, key)=>{
                    return (<div className="product-card">
                    <img src='./images/Lenovo_ideapad_slim_3.jpg' className="product-image" alt=""></img>
                    <div className="product_details">
                        <p className="product-name"><a href="?">{(product.prod_name).slice(0,70)}...</a></p>
                        <p className="product-brand">product.brand</p>
                        <span>₹ {product.prod_price} /-</span>
                    
                    <div className="btns">
                        <button>Add to Cart</button>
                        <button>Buy</button>
                    </div>
                    </div>
                </div>)
                })
                )
            }
            </div>
            
        </>
      )
}