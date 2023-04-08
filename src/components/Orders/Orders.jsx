import React from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='shop-container'>
            <div className="review-container">
                {/* <p>Order Page:{products.length}</p> */}
                {
                    products.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={products}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;