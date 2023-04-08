import React from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
const Orders = () => {
    const products = useLoaderData();
    console.log(products.length);
    return (
        <div className='shop-container'>
            <div className="product-container">
                <p>Order Page:</p>
            </div>
            <div className="cart-container">
                <Cart cart={[]}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;