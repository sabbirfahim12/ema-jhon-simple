import React from 'react';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
const cart=props.cart;
//const total=cart.reduce((total,prd)=>total+prd.price,0)
let total =0;
for(let i=0;i<cart.length;i++){
    const product=cart[i];
total=total+product.price;
}
let shipping =0;

if(total>35){
    shipping=0;
}else if(total>15){
shipping =4.99
}else if(total>0){
    shipping=12.99
}
const tax=Math.round(total /10);
    return (
        <div>
         <h4>card summary</h4> 
    <p>Items Ordered: {cart.length}</p> 
    <p>shipping: {shipping}</p>
    <p><small>tax+vat: {tax}</small></p>
    <p>total :{total+shipping+tax}</p> 
        </div>
    );
};

export default Card;