import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Card from '../Cart/Card';


const Shop = () => {
const first10=fakeData.slice(0,10);
const [products,setProducts] =useState(first10);
const [cart,setCart]=useState([])
const buttonAddproduct=(ProductName)=>{
    console.log('clciked',ProductName);
    const newCart=[...cart,ProductName];
    setCart(newCart)

}

    return (
        <div className="shop-container">
    <div class="product-container">
        {
    products.map(pdN=><Product
        buttonAddproduct={buttonAddproduct}
         ProductName={pdN}></Product>)      
        }
  
    </div>
    <div className="cart-container">
    <Card cart={cart}></Card>
    </div>
        </div>
    );
};

export default Shop;