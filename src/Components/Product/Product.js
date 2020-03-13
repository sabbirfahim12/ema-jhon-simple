import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
console.log(props)
    const { img, name, seller, price, stock } = props.ProductName;
    return (
        <div className="allProduct">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="ProductName">{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p><small>${price}</small></p>
        <p><small>only{stock}left in stock -order soon</small></p>
         <button 
         onClick={()=> props.buttonAddproduct(props.ProductName)}
         className="mainBTn"> <FontAwesomeIcon icon={faShoppingCart} /> 
         add to cart</button>   
            </div>

        </div>
    );
};

export default Product;