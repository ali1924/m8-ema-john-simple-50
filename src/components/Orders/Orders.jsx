import React from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                <p>Order Page:{products.length}</p>
            </div>
            <div className="cart-container">
                <Cart cart={products}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;