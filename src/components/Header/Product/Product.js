import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = (props) => {
    // console.log(props)
    const {name,img,seller,price,stock} = props.product
    
    return (
        <div className="product">
            <div>
                 <img src={img} alt="" />
            </div>
            <div>
                <h4 className="productName">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>{price}</p>
                <p><small>Only {stock} remaining at stock</small></p>
                <button 
                onClick={()=> props.handleAddToCart(props.product)}
                className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;