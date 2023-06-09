import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart } from '../../utilities/fakedb';
const Orders = () => {
    // const products = useLoaderData();
    const savedCart = useLoaderData();
    // console.log(savedCart);
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {/* <p>Order Page:{products.length}</p> */}
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Orders;