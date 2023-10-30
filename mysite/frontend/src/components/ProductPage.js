import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProductPage(){
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        axios.get(`https://172.31.20.2:8000/api/product/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

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

    if (product===undefined) {

        return <div id="item-page-container">Loading...</div>;
    }else{

        
        return (
        <div id="item-page-container">
            <div id="item-content">
                <h3>{product.name}</h3>
                <div id="item-image-container">
                    <img src={product.image_url} alt=""></img>
                </div>
                <div id="item-price">
                    <p>{product.price}/-</p>
                </div>
                <div id="item-name">
                    <h3>{product.name}</h3>
                </div>
                <div id="item-action-btns">
                    <button onClick={()=>AddToCart(product.id)}>Add To Cart</button>
                    <button>Buy</button>
                    <button className="like-btn"><FontAwesomeIcon icon={faHeart}/></button>
                </div>

            </div>

        </div>
    );
}
}
