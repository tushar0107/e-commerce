import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function ProductPage(props){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {

        return <div>{id}Loading...</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            {/* Display other product details */}
        </div>
    );
}