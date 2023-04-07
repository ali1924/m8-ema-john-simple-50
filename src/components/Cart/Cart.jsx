import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart= props.cart;***Option-1
    // console.log(product);
    // const { cart } = props;***option-2
    // console.log(cart);

    // const { id, img, name, price, quantity, ratings } = cart;
    // const { ratingsCount, seller, shipping, stock } = cart;
    let totalPrice=0;
    for (const product of cart) {
        totalPrice += product.price;
    }
    return (
        <div className='cart'>
            <p>Selected Item:{cart.length}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Total Shipping:$</p>
            <p>Tax:$</p>
            <p>Grand Total:$</p>
            <p>This is Cart</p>
        </div>
    );
};

export default Cart;