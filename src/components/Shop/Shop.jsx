import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])
    console.log(products[3]);
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <p>Shop cart</p>
            </div>
            <div className='cart-container'>
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};
import './Shop.css';
export default Shop;